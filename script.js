const questions = [
  { question: "Which piece of the Armor of God helps you stand firm in the righteousness of Christ?", choices: { A: "The Shield of Faith", B: "The Breastplate of Righteousness", C: "The Helmet of Salvation" }, answer: "B" },
  { question: "When you're feeling overwhelmed by life's circumstances, which piece of the Armor of God helps you remain steady?", choices: { A: "The Shoes of Peace", B: "The Sword of the Spirit", C: "The Shield of Faith" }, answer: "C" },
  { question: "Which piece of the Armor of God helps you discern truth from lies?", choices: { A: "The Belt of Truth", B: "The Helmet of Salvation", C: "The Sword of the Spirit" }, answer: "A" },
  { question: "Which piece of the Armor of God helps you guard your mind against the enemy's deceptions?", choices: { A: "The Helmet of Salvation", B: "The Shield of Faith", C: "The Shoes of Peace" }, answer: "A" },
  { question: "Which piece of the Armor of God helps you protect your heart and emotions from attacks?", choices: { A: "The Breastplate of Righteousness", B: "The Shield of Faith", C: "The Helmet of Salvation" }, answer: "A" },
  { question: "Which piece of the Armor of God helps you stay prepared to share the gospel of peace?", choices: { A: "The Belt of Truth", B: "The Shoes of Peace", C: "The Sword of the Spirit" }, answer: "B" },
  { question: "Which piece of the Armor of God helps you fight the enemy's lies by speaking God's word?", choices: { A: "The Sword of the Spirit", B: "The Belt of Truth", C: "The Shield of Faith" }, answer: "A" },
  { question: "When you feel like you're failing, which piece of the Armor of God reminds you that you're victorious in Christ?", choices: { A: "The Helmet of Salvation", B: "The Shield of Faith", C: "The Breastplate of Righteousness" }, answer: "B" },
  { question: "Which piece of the Armor of God helps you stand firm in the gospel even in the face of trials?", choices: { A: "The Shoes of Peace", B: "The Sword of the Spirit", C: "The Belt of Truth" }, answer: "A" },
  { question: "Which piece of the Armor of God is designed to protect your heart and mind from the enemy's attacks on your identity?", choices: { A: "The Breastplate of Righteousness", B: "The Helmet of Salvation", C: "The Shield of Faith" }, answer: "A" },
  { question: "Which piece of the Armor of God provides protection against the enemy's fiery arrows of doubt and discouragement?", choices: { A: "The Sword of the Spirit", B: "The Shield of Faith", C: "The Helmet of Salvation" }, answer: "B" },
  { question: "When you're facing temptation, which piece of the Armor of God strengthens your faith to stand firm?", choices: { A: "The Shield of Faith", B: "The Belt of Truth", C: "The Sword of the Spirit" }, answer: "A" },
  { question: "Which piece of the Armor of God reminds you that your salvation is secure and unshakeable?", choices: { A: "The Helmet of Salvation", B: "The Breastplate of Righteousness", C: "The Shoes of Peace" }, answer: "A" },
  { question: "Which piece of the Armor of God is used to cut down the lies of the enemy with the truth of God's word?", choices: { A: "The Sword of the Spirit", B: "The Shield of Faith", C: "The Helmet of Salvation" }, answer: "A" },
  { question: "Which piece of the Armor of God allows you to walk in peace and share the gospel wherever you go?", choices: { A: "The Shoes of Peace", B: "The Belt of Truth", C: "The Shield of Faith" }, answer: "A" },
  { question: "Which piece of the Armor of God protects your heart from feeling defeated by the enemy's attacks?", choices: { A: "The Shield of Faith", B: "The Breastplate of Righteousness", C: "The Helmet of Salvation" }, answer: "B" },
  { question: "Which piece of the Armor of God helps you stand firm in God's righteousness, no matter what the enemy throws your way?", choices: { A: "The Breastplate of Righteousness", B: "The Shoes of Peace", C: "The Shield of Faith" }, answer: "A" },
  { question: "Which piece of the Armor of God helps you remain faithful even in the face of persecution?", choices: { A: "The Helmet of Salvation", B: "The Shield of Faith", C: "The Sword of the Spirit" }, answer: "B" },
  { question: "Which piece of the Armor of God reminds you that the truth of God's word is a solid foundation for your life?", choices: { A: "The Sword of the Spirit", B: "The Shield of Faith", C: "The Belt of Truth" }, answer: "C" },
  { question: "Which piece of the Armor of God strengthens you to hold on to the truth when the enemy tries to deceive you?", choices: { A: "The Belt of Truth", B: "The Helmet of Salvation", C: "The Sword of the Spirit" }, answer: "A" },
  { question: "Which piece of the Armor of God protects you from the enemy’s lies that you are unworthy of God’s love?", choices: { A: "The Breastplate of Righteousness", B: "The Shield of Faith", C: "The Helmet of Salvation" }, answer: "A" },
  { question: "Which piece of the Armor of God helps you keep your thoughts focused on God's promises and not the enemy's lies?", choices: { A: "The Helmet of Salvation", B: "The Belt of Truth", C: "The Sword of the Spirit" }, answer: "A" },
  { question: "Which piece of the Armor of God gives you peace when you're uncertain about the future?", choices: { A: "The Shoes of Peace", B: "The Sword of the Spirit", C: "The Helmet of Salvation" }, answer: "A" },
  { question: "Which piece of the Armor of God enables you to fight the enemy’s attacks by speaking God's word?", choices: { A: "The Belt of Truth", B: "The Shield of Faith", C: "The Sword of the Spirit" }, answer: "C" },
  { question: "When you're feeling fearful, which piece of the Armor of God reminds you that you are protected by God's truth?", choices: { A: "The Helmet of Salvation", B: "The Breastplate of Righteousness", C: "The Shield of Faith" }, answer: "C" },
  { question: "Which piece of the Armor of God helps you to boldly share the gospel of peace with others?", choices: { A: "The Shoes of Peace", B: "The Sword of the Spirit", C: "The Shield of Faith" }, answer: "A" },
  { question: "Which piece of the Armor of God helps you stand firm and resist the devil's temptations?", choices: { A: "The Belt of Truth", B: "The Shield of Faith", C: "The Breastplate of Righteousness" }, answer: "B" },
  { question: "Which piece of the Armor of God reminds you that your salvation is secure and that you are eternally safe in Christ?", choices: { A: "The Helmet of Salvation", B: "The Breastplate of Righteousness", C: "The Shoes of Peace" }, answer: "A" },
  { question: "Which piece of the Armor of God enables you to endure hardships and trials with a victorious mindset?", choices: { A: "The Shield of Faith", B: "The Helmet of Salvation", C: "The Breastplate of Righteousness" }, answer: "A" },
  { question: "Which piece of the Armor of God helps you stand firm in God’s peace, no matter what comes your way?", choices: { A: "The Shoes of Peace", B: "The Shield of Faith", C: "The Sword of the Spirit" }, answer: "A" },
  { question: "Which piece of the Armor of God helps you remember the truth of God's word and walk in it?", choices: { A: "The Belt of Truth", B: "The Shield of Faith", C: "The Sword of the Spirit" }, answer: "A" },
  { question: "Which piece of the Armor of God gives you the strength to fight against the enemy’s attacks on your identity?", choices: { A: "The Helmet of Salvation", B: "The Shield of Faith", C: "The Sword of the Spirit" }, answer: "A" },
  { question: "Which piece of the Armor of God gives you confidence in your salvation when the enemy tries to make you doubt?", choices: { A: "The Helmet of Salvation", B: "The Shield of Faith", C: "The Belt of Truth" }, answer: "A" },
  { question: "Which piece of the Armor of God helps you confidently resist the enemy’s temptations and live victoriously?", choices: { A: "The Sword of the Spirit", B: "The Breastplate of Righteousness", C: "The Shield of Faith" }, answer: "C" },
  // Continue adding the remaining 70 questions in the same format...
];

let currentQuestionIndex = 0;

// Function to display a question and choices
function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  const questionText = document.getElementById("question");
  const choicesList = document.getElementById("choices");

  questionText.textContent = currentQuestion.question;
  choicesList.innerHTML = '';

  for (const [key, value] of Object.entries(currentQuestion.choices)) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<button onclick="checkAnswer('${key}')">${key}: ${value}</button>`;
    choicesList.appendChild(listItem);
  }

  document.getElementById("feedback").textContent = '';
}

// Function to check the answer
function checkAnswer(selectedChoice) {
  const currentQuestion = questions[currentQuestionIndex];
  const feedback = document.getElementById("feedback");

  if (selectedChoice === currentQuestion.answer) {
    feedback.textContent = "Correct!";
  } else {
    feedback.textContent = `Incorrect! The correct answer is ${currentQuestion.answer}.`;
  }

  // Disable the buttons after answering
  const buttons = document.querySelectorAll('#choices button');
  buttons.forEach(button => button.disabled = true);

  // Enable the "Next Question" button
  document.getElementById("next-button").disabled = false;
}

// Show the next question
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
    document.getElementById("next-button").disabled = true;
  } else {
    document.getElementById("quiz-container").innerHTML = "<p>Congratulations, you've completed the quiz!</p>";
  }
}

// Initialize the game
displayQuestion();