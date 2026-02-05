
import { Lesson, Badge, LevelQuiz } from './types';

export const LESSONS: Lesson[] = [
  // LEVEL 1: VILLAGE ENTRANCE (THE FOUNDATION)
  {
    id: 'l1-t1',
    title: 'The Legend of Python',
    region: 'Level 1: Village Entrance',
    description: 'Where did it all begin?',
    concept: "Akwaaba! Did you know Python wasn't named after a snake? In 1991, a man named Guido van Rossum created it. He loved a funny show called 'Monty Python’s Flying Circus'. He wanted a language that was as easy to read as a storybook. Today, it's the most popular language in the world!",
    example: '# Use the print function to show text\nprint("Python is legendary!")',
    challenge: 'Show the world your first code! Use the print() function to display the message: "Python is legendary!"',
    initialCode: '# Print the message below:\n',
    solution: 'print("Python is legendary!")',
    testCases: [{ expected: 'Python is legendary!', hint: 'Type print("Python is legendary!")' }],
    xp: 30
  },
  {
    id: 'l1-t2',
    title: 'The Golden Tool',
    region: 'Level 1: Village Entrance',
    description: 'Why Python matters in Ghana.',
    concept: "Why are we learning this? Python is the 'Golden Tool' of the Digital Coast. It powers everything from Mobile Money (MoMo) apps to AI that helps farmers in the Northern Region. Learning Python is like getting a key to every Innovation Hub in Accra!",
    example: 'print("Python is my key")',
    challenge: 'Print the message "I am a future Champion" to show your intent!',
    initialCode: '# Declare your goal:\n',
    solution: 'print("I am a future Champion")',
    testCases: [{ expected: 'I am a future Champion', hint: 'Use print("I am a future Champion")' }],
    xp: 30
  },
  {
    id: 'l1-t3',
    title: 'Code Manners (Syntax)',
    region: 'Level 1: Village Entrance',
    description: 'Following the rules of the road.',
    concept: "Just like we have manners when greeting elders, Python has 'Syntax' — rules for how code must be written. If you miss a bracket or a quote, Python will get confused (SyntaxError). It's not a mistake, it's just Python asking for better manners!",
    example: 'print("Correct Manners") # Works!\n# print "Wrong Manners" # Fails!',
    challenge: 'Fix this code! It is missing parentheses. Print the word "Syntax".',
    initialCode: '# Fix me:\nprint "Syntax"',
    solution: 'print("Syntax")',
    testCases: [{ expected: 'Syntax', hint: 'Add ( and ) around the text.' }],
    xp: 30
  },
  {
    id: 'l1-t4',
    title: 'Talking in Strings (Quotes)',
    region: 'Level 1: Village Entrance',
    description: 'Wrapping your text.',
    concept: "When we want Python to handle text, we call it a 'String'. You must wrap Strings in quotation marks \" \" or ' '. Without them, Python thinks you are talking about a variable (which we learn later).",
    example: 'print("Waakye is life")\nprint(\'Jollof is also life\')',
    challenge: 'Print your favorite Ghanaian dish using single quotes \' \'.',
    initialCode: '# Use single quotes:\n',
    solution: "print('Banku')",
    testCases: [{ expected: '', hint: "Use print('YourFood')" }],
    xp: 30
  },
  {
    id: 'l1-t5',
    title: 'Magic Words (Functions)',
    region: 'Level 1: Village Entrance',
    description: 'Intro to reusable commands.',
    concept: "A 'Function' is a magic word that tells Python to perform a specific task. 'print()' is our first function! The parentheses () are like the mouth of the function, where you feed it information to process.",
    example: 'print("This is a function call")',
    challenge: 'Call the print function to display the word "Function".',
    initialCode: '# Call the print function:\n',
    solution: 'print("Function")',
    testCases: [{ expected: 'Function', hint: 'Type print("Function")' }],
    xp: 40
  },

  // LEVEL 2: CORE BASICS
  {
    id: 'l2-t1',
    title: 'The Storage Bowl',
    region: 'Level 2: Core Basics',
    description: 'Naming variables.',
    concept: "A variable is like a storage bowl. You give it a name (a label) and put something inside. We use '=' to assign a value. For example: food = 'Kelewele'.",
    example: 'food = "Yam"\nprint(food)',
    challenge: 'Create a variable named "city" and set it to "Kumasi". Then print it.',
    initialCode: '# Create city variable:\n',
    solution: 'city = "Kumasi"\nprint(city)',
    testCases: [{ expected: 'Kumasi', hint: 'city = "Kumasi" then print(city)' }],
    xp: 50
  },
  {
    id: 'l2-t2',
    title: 'MoMo Math',
    region: 'Level 2: Core Basics',
    description: 'Basic arithmetic.',
    concept: "Python can do math instantly. Use + (add), - (subtract), * (multiply), and / (divide). Let's calculate a wallet balance!",
    example: 'wallet = 100\nspent = 20\nprint(wallet - spent)',
    challenge: 'Start with "balance" of 500. Subtract "fee" of 5. Print the result.',
    initialCode: 'balance = 500\nfee = 5\n# Print new balance:\n',
    solution: 'balance = 500\nfee = 5\nprint(balance - fee)',
    testCases: [{ expected: '495', hint: 'Use balance - fee' }],
    xp: 50
  },
  {
    id: 'l2-t3',
    title: 'Listening (Input)',
    region: 'Level 2: Core Basics',
    description: 'Asking the user questions.',
    concept: "Sometimes we need to ask the user for information. We use the 'input()' function. It pauses the code and waits for the user to type something. We usually store the answer in a variable!",
    example: 'name = input("Enter your name: ")\nprint("Welcome " + name)',
    challenge: 'Ask the user "What is your location?" using input(), store it in a variable called "place", then print "place".',
    initialCode: '# Ask for location and print it:\n',
    solution: 'place = input("What is your location? ")\nprint(place)',
    testCases: [{ expected: '', hint: 'Use place = input("...") then print(place)' }],
    xp: 60
  },
  {
    id: 'l2-t4',
    title: 'The Type Mixer',
    region: 'Level 2: Core Basics',
    description: 'Numbers vs Strings.',
    concept: "Python treats text and numbers differently. You can't add a number to a string directly. Use 'int()' to turn text into a whole number, or 'str()' to turn a number into text!",
    example: 'age = "25"\nnumber_age = int(age)\nprint(number_age + 5)',
    challenge: 'Turn the string "100" into an integer using int(), add 50 to it, and print the result.',
    initialCode: 'score_text = "100"\n# Convert and add 50:\n',
    solution: 'score_text = "100"\nscore = int(score_text)\nprint(score + 50)',
    testCases: [{ expected: '150', hint: 'Use int(score_text) + 50' }],
    xp: 60
  },
  {
    id: 'l2-t5',
    title: 'Smart Labels (f-strings)',
    region: 'Level 2: Core Basics',
    description: 'Embedding variables in text.',
    concept: "In Level 1 we used '+' to join strings. But there's a cooler way: f-strings! Put an 'f' before the quotes, and use curly braces { } to put variables inside.",
    example: 'name = "Ama"\nprint(f"Hello {name}, how are you?")',
    challenge: 'Create a variable "item" set to "Shoes" and "price" set to 50. Use an f-string to print: "The Shoes cost 50 GHS".',
    initialCode: 'item = "Shoes"\nprice = 50\n# Use f-string:\n',
    solution: 'item = "Shoes"\nprice = 50\nprint(f"The {item} cost {price} GHS")',
    testCases: [{ expected: 'The Shoes cost 50 GHS', hint: 'Use f"The {item} cost {price} GHS"' }],
    xp: 65
  },

  // LEVEL 3: THE DECISION GATES
  {
    id: 'l3-t1',
    title: 'The If Gate',
    region: 'Level 3: The Decision Gates',
    description: 'Basic conditions.',
    concept: "Conditionals let Python make choices. The 'if' statement checks if something is True. If it is, the indented code below it runs. Use '==' to check if two things are equal.",
    example: 'balance = 10\nif balance > 0:\n    print("You have cash!")',
    challenge: 'Create a variable "momo" set to 20. If momo is equal to 20, print "Correct Amount".',
    initialCode: 'momo = 20\n# Check if momo is 20:\n',
    solution: 'momo = 20\nif momo == 20:\n    print("Correct Amount")',
    testCases: [{ expected: 'Correct Amount', hint: 'Use if momo == 20: (remember the colon and indentation!)' }],
    xp: 70
  },
  {
    id: 'l3-t2',
    title: 'The Else Path',
    region: 'Level 3: The Decision Gates',
    description: 'Providing an alternative.',
    concept: "If the 'if' condition is False, you can use 'else' to run a different block of code. It's the 'otherwise' of programming.",
    example: 'age = 15\nif age >= 18:\n    print("Can Vote")\nelse:\n    print("Too young")',
    challenge: 'If "temp" is greater than 30, print "Hot Day". Else, print "Cool Day".',
    initialCode: 'temp = 25\n# Add if/else logic:\n',
    solution: 'temp = 25\nif temp > 30:\n    print("Hot Day")\nelse:\n    print("Cool Day")',
    testCases: [{ expected: 'Cool Day', hint: 'Add an else: block after the if.' }],
    xp: 70
  },
  {
    id: 'l3-t3',
    title: 'The Multi-Choice (Elif)',
    region: 'Level 3: The Decision Gates',
    description: 'Checking many things.',
    concept: "What if you have more than two options? Use 'elif' (short for else if). It lets you check another condition if the first one was False.",
    example: 'grade = 85\nif grade > 90:\n    print("A")\nelif grade > 80:\n    print("B")\nelse:\n    print("C")',
    challenge: 'Set "score" to 75. If score > 80 print "Pro", elif score > 50 print "Regular", else print "Newbie".',
    initialCode: 'score = 75\n# Use if, elif, else:\n',
    solution: 'score = 75\nif score > 80:\n    print("Pro")\nelif score > 50:\n    print("Regular")\nelse:\n    print("Newbie")',
    testCases: [{ expected: 'Regular', hint: 'Order matters! Check 80 first, then 50.' }],
    xp: 80
  },
  {
    id: 'l3-t4',
    title: 'Logical Gates (And/Or)',
    region: 'Level 3: The Decision Gates',
    description: 'Combining conditions.',
    concept: "Sometimes you need two things to be true. Use 'and'. If you only need one of them to be true, use 'or'.",
    example: 'cash = 10\nhas_momo = True\nif cash > 0 and has_momo:\n    print("Can buy food")',
    challenge: 'If "age" is 20 AND "id_card" is True, print "Entry Allowed".',
    initialCode: 'age = 20\nid_card = True\n# Check both:\n',
    solution: 'age = 20\nid_card = True\nif age == 20 and id_card == True:\n    print("Entry Allowed")',
    testCases: [{ expected: 'Entry Allowed', hint: 'Use: if age == 20 and id_card:' }],
    xp: 85
  },

  // LEVEL 4: THE LOOP KINGDOM
  {
    id: 'l4-t1',
    title: 'The Shopping List',
    region: 'Level 4: The Loop Kingdom',
    description: 'Introduction to Lists.',
    concept: "A List is a collection of items kept in square brackets []. You can store many things in one variable! Items are separated by commas.",
    example: 'items = ["Yam", "Oil", "Salt"]\nprint(items)',
    challenge: 'Create a list called "fruits" containing "Mango" and "Orange". Print the list.',
    initialCode: '# Create fruits list:\n',
    solution: 'fruits = ["Mango", "Orange"]\nprint(fruits)',
    testCases: [{ expected: "['Mango', 'Orange']", hint: 'Use fruits = ["Mango", "Orange"]' }],
    xp: 90
  },
  {
    id: 'l4-t2',
    title: 'The Repeater (For Loop)',
    region: 'Level 4: The Loop Kingdom',
    description: 'Doing things many times.',
    concept: "A 'for loop' lets you repeat an action for every item in a list. It saves you from writing the same code over and over!",
    example: 'friends = ["Ama", "Kofi"]\nfor friend in friends:\n    print("Hello " + friend)',
    challenge: 'Loop through the list [1, 2, 3] and print each number.',
    initialCode: 'numbers = [1, 2, 3]\n# Print each one:\n',
    solution: 'numbers = [1, 2, 3]\nfor n in numbers:\n    print(n)',
    testCases: [{ expected: '1\n2\n3', hint: 'Use for n in numbers: then print(n)' }],
    xp: 100
  },
  {
    id: 'l4-t3',
    title: 'Filling the Sack (Append)',
    region: 'Level 4: The Loop Kingdom',
    description: 'Adding items to lists.',
    concept: "Lists aren't fixed! You can add new items to the end using the '.append()' method.",
    example: 'sack = ["Rice"]\nsack.append("Beans")\nprint(sack)',
    challenge: 'Start with list "momo_history" as [10, 20]. Append 50 to it and print the list.',
    initialCode: 'momo_history = [10, 20]\n# Append 50:\n',
    solution: 'momo_history = [10, 20]\nmomo_history.append(50)\nprint(momo_history)',
    testCases: [{ expected: '[10, 20, 50]', hint: 'Use momo_history.append(50)' }],
    xp: 105
  },
  {
    id: 'l4-t4',
    title: 'The Infinite Drum (While)',
    region: 'Level 4: The Loop Kingdom',
    description: 'Loops based on conditions.',
    concept: "A 'while loop' keeps running as long as a condition is True. Be careful! If the condition never becomes False, the loop runs forever (an infinite loop).",
    example: 'count = 3\nwhile count > 0:\n    print(count)\n    count = count - 1',
    challenge: 'Create a variable "x" set to 1. While x is less than 4, print x and then add 1 to x.',
    initialCode: 'x = 1\n# Write while loop:\n',
    solution: 'x = 1\nwhile x < 4:\n    print(x)\n    x = x + 1',
    testCases: [{ expected: '1\n2\n3', hint: 'Use: while x < 4: print(x) x = x + 1' }],
    xp: 110
  },

  // LEVEL 5: THE MASTER'S WORKSHOP
  {
    id: 'l5-t1',
    title: 'Custom Magic (Def)',
    region: "Level 5: The Master's Workshop",
    description: 'Creating your own functions.',
    concept: "Now you are the master! You can create your own functions using the 'def' keyword. This lets you package code and reuse it whenever you want.",
    example: 'def greet():\n    print("Akwaaba!")\n\ngreet() # Calls your function',
    challenge: 'Define a function called "cheer" that prints "Go Champion!". Then call the function.',
    initialCode: '# Define and call cheer():\n',
    solution: 'def cheer():\n    print("Go Champion!")\n\ncheer()',
    testCases: [{ expected: 'Go Champion!', hint: 'Use: def cheer(): then print inside, then call cheer()' }],
    xp: 150
  },
  {
    id: 'l5-t2',
    title: 'The Result Gift (Return)',
    region: "Level 5: The Master's Workshop",
    description: 'Getting values back.',
    concept: "Functions can do more than just print. They can 'return' a value back to you. This is like a gift you can store in a variable.",
    example: 'def add_five(num):\n    return num + 5\n\nresult = add_five(10)\nprint(result)',
    challenge: 'Create a function "get_fare" that returns 10. Store its result in a variable "price" and print "price".',
    initialCode: '# Use return 10:\n',
    solution: 'def get_fare():\n    return 10\n\nprice = get_fare()\nprint(price)',
    testCases: [{ expected: '10', hint: 'Use return 10 inside the function.' }],
    xp: 160
  }
];

export const QUIZZES: LevelQuiz[] = [
  {
    levelId: 'Level 1: Village Entrance',
    levelName: 'Village Entrance Exam',
    questions: [
      {
        id: 'q1-1',
        question: "Who is the creator of Python?",
        options: ["Bill Gates", "Guido van Rossum", "Mark Zuckerberg", "Kofi Annan"],
        correctIndex: 1,
        explanation: "Guido van Rossum created Python in 1991!"
      },
      {
        id: 'q1-2',
        question: "Why was the language named 'Python'?",
        options: ["After a snake", "After a comedy show", "After a mountain", "It's a secret"],
        correctIndex: 1,
        explanation: "It was named after 'Monty Python’s Flying Circus'!"
      },
      {
        id: 'q1-3',
        question: "What is 'Syntax' in programming?",
        options: ["The cost of code", "The rules of the language", "A type of error", "A keyboard key"],
        correctIndex: 1,
        explanation: "Syntax is the set of rules defining how code must be written."
      },
      {
        id: 'q1-4',
        question: "Which function makes Python 'speak'?",
        options: ["talk()", "say()", "print()", "echo()"],
        correctIndex: 2,
        explanation: "The print() function displays output to the console."
      },
      {
        id: 'q1-5',
        question: "How do you wrap a 'String'?",
        options: ["With brackets []", "With quotes \" \"", "With hashes #", "With stars *"],
        correctIndex: 1,
        explanation: "Strings must be wrapped in single or double quotation marks."
      },
      {
        id: 'q1-6',
        question: "What year was Python born?",
        options: ["1980", "1991", "2000", "2010"],
        correctIndex: 1,
        explanation: "Python was first released in 1991."
      },
      {
        id: 'q1-7',
        question: "What does Python use to group code together?",
        options: ["Parentheses ()", "Colons :", "Indentation (Spaces)", "Semicolons ;"],
        correctIndex: 2,
        explanation: "Python uses indentation (spaces at the start of lines) to group code blocks."
      },
      {
        id: 'q1-8',
        question: "Is Python difficult to learn?",
        options: ["Yes, very", "Only for geniuses", "No, it's designed to be readable", "Only on Mondays"],
        correctIndex: 2,
        explanation: "Python was designed to be clear and easy to read, making it great for beginners."
      },
      {
        id: 'q1-9',
        question: "What is a 'Function'?",
        options: ["A party", "A reusable command", "A computer virus", "A type of snake"],
        correctIndex: 1,
        explanation: "A function is a block of code that performs a specific task when called."
      },
      {
        id: 'q1-10',
        question: "What is a SyntaxError?",
        options: ["A computer virus", "Breaking a language rule", "A hardware failure", "A power cut"],
        correctIndex: 1,
        explanation: "A SyntaxError happens when you don't follow Python's writing rules."
      }
    ]
  },
  {
    levelId: 'Level 2: Core Basics',
    levelName: 'Makola Market Math',
    questions: [
      {
        id: 'q2-1',
        question: "What is a Variable?",
        options: ["A type of math", "A storage container for data", "A computer error", "A keyboard key"],
        correctIndex: 1,
        explanation: "Variables store information that we can use and change later."
      },
      {
        id: 'q2-2',
        question: "Which symbol do we use to 'assign' a value to a variable?",
        options: ["==", "=>", "=", ":="],
        correctIndex: 2,
        explanation: "The single equals sign (=) is used for assignment."
      },
      {
        id: 'q2-3',
        question: "How do you get text from a user?",
        options: ["get_text()", "input()", "ask()", "listen()"],
        correctIndex: 1,
        explanation: "The input() function stops the code and waits for user typing."
      },
      {
        id: 'q2-4',
        question: "What is an 'Integer'?",
        options: ["A decimal number", "A whole number", "A piece of text", "A true/false value"],
        correctIndex: 1,
        explanation: "In Python, integers (int) are numbers without decimals."
      },
      {
        id: 'q2-5',
        question: "How do you turn '50' (text) into a number?",
        options: ["str('50')", "make_num('50')", "int('50')", "num('50')"],
        correctIndex: 2,
        explanation: "int() converts a compatible string into an integer."
      },
      {
        id: 'q2-6',
        question: "Can you add a String and an Integer together directly?",
        options: ["Yes, always", "Only on Sundays", "No, it causes an error", "Only if the number is zero"],
        correctIndex: 2,
        explanation: "Python needs both items to be the same type to combine them."
      },
      {
        id: 'q2-7',
        question: "What is the symbol for multiplication in Python?",
        options: ["x", "times", "*", "^"],
        correctIndex: 2,
        explanation: "Python uses the asterisk (*) for multiplication."
      },
      {
        id: 'q2-8',
        question: "What does 'float' mean in Python?",
        options: ["A number with a decimal", "A floating boat", "A text type", "A error type"],
        correctIndex: 0,
        explanation: "Float represents real numbers with decimal points."
      },
      {
        id: 'q2-9',
        question: "What is the result of 10 / 2 in Python?",
        options: ["5", "5.0", "12", "8"],
        correctIndex: 1,
        explanation: "Division in Python 3 always returns a float (decimal)."
      },
      {
        id: 'q2-10',
        question: "Which way is best for putting variables inside strings?",
        options: ["Adding with +", "f-strings f\"{}\"", "Quotes within quotes", "Using print twice"],
        correctIndex: 1,
        explanation: "f-strings are the modern, clean way to embed variables in text."
      }
    ]
  },
  {
    levelId: 'Level 3: The Decision Gates',
    levelName: 'The Logic Boss',
    questions: [
      {
        id: 'q3-1',
        question: "What does an 'if' statement do?",
        options: ["Repeats code", "Makes a decision", "Deletes code", "Prints text"],
        correctIndex: 1,
        explanation: "If statements run code only if a specific condition is True."
      },
      {
        id: 'q3-2',
        question: "Which symbol means 'is equal to'?",
        options: ["=", "==", "===", "!="],
        correctIndex: 1,
        explanation: "Use double equals (==) to compare values. Single equals (=) is for assignment!"
      },
      {
        id: 'q3-3',
        question: "When does the 'else' block run?",
        options: ["Always", "Never", "When the 'if' condition is False", "When the code is correct"],
        correctIndex: 2,
        explanation: "Else is the fallback plan when your condition isn't met."
      },
      {
        id: 'q3-4',
        question: "What is 'elif' short for?",
        options: ["Elephant", "Else if", "Early life", "Electronic life"],
        correctIndex: 1,
        explanation: "elif allows you to check multiple conditions in sequence."
      },
      {
        id: 'q3-5',
        question: "How do you check if TWO things are BOTH true?",
        options: ["and", "or", "also", "double"],
        correctIndex: 0,
        explanation: "Use 'and' to ensure both conditions are met."
      },
      {
        id: 'q3-6',
        question: "What symbol means 'Greater than or equal to'?",
        options: [">", "<=", "=>", ">="],
        correctIndex: 3,
        explanation: ">= is the correct symbol for greater than or equal to."
      },
      {
        id: 'q3-7',
        question: "How do you check if ANY of two conditions is true?",
        options: ["and", "any", "or", "maybe"],
        correctIndex: 2,
        explanation: "'or' returns true if at least one side is true."
      },
      {
        id: 'q3-8',
        question: "Python cares about spaces (indentation) in if statements. True or False?",
        options: ["True", "False", "Only in Accra", "Sometimes"],
        correctIndex: 0,
        explanation: "Indentation tells Python which code belongs to the if statement!"
      },
      {
        id: 'q3-9',
        question: "Can you have an 'else' without an 'if'?",
        options: ["Yes", "No", "Only on Mondays", "If you are a pro"],
        correctIndex: 1,
        explanation: "Else always follows an if or an elif."
      },
      {
        id: 'q3-10',
        question: "Is '3' == 3 True or False?",
        options: ["True", "False", "Error", "Maybe"],
        correctIndex: 1,
        explanation: "False! A string '3' is not the same as the number 3."
      }
    ]
  },
  {
    levelId: 'Level 4: The Loop Kingdom',
    levelName: 'The Loop Master Challenge',
    questions: [
      {
        id: 'q4-1',
        question: "What is a List in Python?",
        options: ["A single number", "A collection of items", "A type of error", "A loop"],
        correctIndex: 1,
        explanation: "Lists store many items in one variable using square brackets."
      },
      {
        id: 'q4-2',
        question: "Which brackets are used for Lists?",
        options: ["()", "{}", "[]", "<>"],
        correctIndex: 2,
        explanation: "Lists always use square brackets []."
      },
      {
        id: 'q4-3',
        question: "What does a 'for loop' do?",
        options: ["Checks a condition", "Repeats an action for items in a list", "Deletes a list", "Asks a question"],
        correctIndex: 1,
        explanation: "For loops repeat a block of code for every item in a sequence."
      },
      {
        id: 'q4-4',
        question: "How do you add an item to the end of a list?",
        options: ["list.add()", "list.append()", "list.plus()", "list.join()"],
        correctIndex: 1,
        explanation: "The append() method adds an item to the end of an existing list."
      },
      {
        id: 'q4-5',
        question: "When should you use a 'while' loop?",
        options: ["To iterate over a list", "To repeat while a condition is true", "To define a function", "To print text once"],
        correctIndex: 1,
        explanation: "While loops are best for conditions where you don't know the end point yet."
      },
      {
        id: 'q4-6',
        question: "What function tells you the number of items in a list?",
        options: ["count()", "len()", "size()", "total()"],
        correctIndex: 1,
        explanation: "len() is short for length."
      },
      {
        id: 'q4-7',
        question: "Can a list hold different types of data (strings and numbers)?",
        options: ["Yes", "No", "Only in Level 1", "Only if they are small"],
        correctIndex: 0,
        explanation: "Yes, Python lists are very flexible!"
      },
      {
        id: 'q4-8',
        question: "What happens in an 'infinite loop'?",
        options: ["The code gets faster", "The code never stops", "The computer explodes", "It skips the code"],
        correctIndex: 1,
        explanation: "An infinite loop occurs when the condition never becomes False."
      },
      {
        id: 'q4-9',
        question: "What counting number does a list start with?",
        options: ["1", "0", "-1", "Any number"],
        correctIndex: 1,
        explanation: "Python is 'zero-indexed', meaning the first item is index 0."
      },
      {
        id: 'q4-10',
        question: "Is [1, 2] the same as (1, 2)?",
        options: ["Yes", "No, one is a List, one is a Tuple", "Only in Python 2", "Depends on the mood"],
        correctIndex: 1,
        explanation: "No! [] is for Lists (which can change) and () is for Tuples (which can't change)."
      }
    ]
  },
  {
    levelId: "Level 5: The Master's Workshop",
    levelName: "Workshop Certification",
    questions: [
      {
        id: 'q5-1',
        question: "What keyword is used to define a function?",
        options: ["func", "define", "def", "create"],
        correctIndex: 2,
        explanation: "'def' is the standard Python keyword for defining functions."
      },
      {
        id: 'q5-2',
        question: "What are the parentheses () used for in a function?",
        options: ["For decoration", "To hold input data (arguments)", "To stop the code", "To add numbers"],
        correctIndex: 1,
        explanation: "Parentheses hold arguments—data you pass into the function."
      },
      {
        id: 'q5-3',
        question: "What does the 'return' keyword do?",
        options: ["Restarts the function", "Exits the program", "Sends a value back from the function", "Prints a value"],
        correctIndex: 2,
        explanation: "Return 'gives back' a result to where the function was called."
      },
      {
        id: 'q5-4',
        question: "Can a function have more than one argument?",
        options: ["Yes", "No", "Only if they are strings", "Only in Accra"],
        correctIndex: 0,
        explanation: "Yes! You can have as many as you need, separated by commas."
      },
      {
        id: 'q5-5',
        question: "How do you 'call' a function named 'run'?",
        options: ["run", "call run", "run()", "start run"],
        correctIndex: 2,
        explanation: "Use the name followed by parentheses to execute the function."
      },
      {
        id: 'q5-6',
        question: "Does a function run as soon as you define it?",
        options: ["Yes", "No, only when called", "Only on startup", "Maybe"],
        correctIndex: 1,
        explanation: "Defining just teaches Python the magic word. Calling actually does the magic."
      },
      {
        id: 'q5-7',
        question: "What is a 'parameter'?",
        options: ["A type of error", "A variable in a function definition", "A math symbol", "The result of a loop"],
        correctIndex: 1,
        explanation: "Parameters are the 'bowl' names used inside a function definition."
      },
      {
        id: 'q5-8',
        question: "What happens to code AFTER a 'return' line inside a function?",
        options: ["It still runs", "It never runs", "It runs twice", "It causes an error"],
        correctIndex: 1,
        explanation: "'return' immediately exits the function. No lines after it are reached."
      },
      {
        id: 'q5-9',
        question: "Can you define a function inside another function?",
        options: ["Yes", "No", "Only in Level 10", "Only if it is short"],
        correctIndex: 0,
        explanation: "Yes, Python allows 'nested' functions!"
      },
      {
        id: 'q5-10',
        question: "Why use functions at all?",
        options: ["To make code longer", "To make code reusable and clean", "To confuse others", "Because it is required"],
        correctIndex: 1,
        explanation: "Functions help organize code and stop you from repeating yourself."
      }
    ]
  }
];

export const BADGES: Badge[] = [
  { id: 'first-step', name: 'First Step', description: 'Completed your first lesson!', icon: '👣' },
  { id: 'momo-pro', name: 'MoMo Pro', description: 'Mastered variables and math!', icon: '💰' },
  { id: 'logic-king', name: 'Logic King/Queen', description: 'Conquered conditionals!', icon: '🧠' },
  { id: 'tech-royalty', name: 'Tech Royalty', description: 'Unlocked the Tech Kingdom!', icon: '👑' },
];
