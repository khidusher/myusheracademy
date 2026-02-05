
declare global {
  interface Window {
    loadPyodide: any;
  }
}

let pyodideInstance: any = null;
let initializingPromise: Promise<any> | null = null;

export const initPyodide = async () => {
  if (pyodideInstance) return pyodideInstance;
  if (initializingPromise) return initializingPromise;
  
  if (typeof window.loadPyodide === 'undefined') {
    throw new Error('Pyodide script not loaded yet. Please wait, Chale!');
  }

  // Load pyodide with explicit indexURL for deployment reliability
  initializingPromise = window.loadPyodide({
    indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/"
  }).then((instance: any) => {
    pyodideInstance = instance;
    
    // Set up interactive input using browser prompt
    pyodideInstance.setStdin({
      stdin: () => {
        const result = window.prompt("Python input required:");
        return result !== null ? result : "";
      }
    });

    return pyodideInstance;
  });

  return initializingPromise;
};

export const runPythonCode = async (code: string): Promise<{ output: string; error?: string }> => {
  try {
    const pyodide = await initPyodide();
    
    // Redirect stdout and stderr to a string buffer
    // We do this inside the execution to ensure we start with a fresh buffer
    pyodide.runPython(`
import sys
import io
sys.stdout = io.StringIO()
sys.stderr = io.StringIO()
    `);
    
    // Execute the user's code
    await pyodide.runPythonAsync(code);
    
    // Retrieve the contents of the buffers
    const stdout = pyodide.runPython('sys.stdout.getvalue()');
    const stderr = pyodide.runPython('sys.stderr.getvalue()');
    
    return { 
      output: stdout.trim(), 
      error: stderr.trim() || undefined 
    };
  } catch (err: any) {
    let errMsg = err.message;
    // Clean up traceback for beginner friendliness
    if (errMsg.includes('Traceback')) {
      const lines = errMsg.split('\n');
      // Usually the last few lines are the most helpful (the error type and message)
      errMsg = lines.slice(-3).join('\n');
    }
    return { output: '', error: errMsg };
  }
};
