// Schools of thought definitions
const schools = {
    thomism: { name: "Thomism", color: "#4A90E2" },
    scotism: { name: "Scotism", color: "#7B68EE" },
    augustinianism: { name: "Augustinianism", color: "#FF6B6B" },
    molinism: { name: "Molinism", color: "#4ECDC4" },
    banezianism: { name: "Banezianism", color: "#8B4513" },
    bonaventurianism: { name: "Bonaventurianism", color: "#FFE66D" },
    suarezianism: { name: "Suarezianism", color: "#95E1D3" },
    nominalism: { name: "Nominalism", color: "#F38181" },
    lullism: { name: "Lullism", color: "#9B59B6" },
    averroism: { name: "Latin Averroism", color: "#E67E22" }
};

// Questions with scoring weights for each school
// Each question has weights: positive = agree aligns, negative = disagree aligns
const questions = [
    // THOMISM STATEMENTS
    {
        text: "Essence and existence are really distinct in every finite being.",
        weights: {
            thomism: 2,
            scotism: -2,
            augustinianism: 0,
            molinism: 0,
            banezianism: 2,
            bonaventurianism: 0,
            suarezianism: -2,
            nominalism: -1,
            lullism: 0,
            averroism: 0
        }
    },
    {
        text: "Grace is intrinsically efficacious—even before the creature responds.",
        weights: {
            thomism: 2,
            scotism: 0,
            augustinianism: 1,
            molinism: -2,
            banezianism: 2,
            bonaventurianism: 0,
            suarezianism: -1,
            nominalism: 0,
            lullism: 0,
            averroism: 0
        }
    },
    {
        text: "The intellect has priority over the will in human acts.",
        weights: {
            thomism: 2,
            scotism: -2,
            augustinianism: -1,
            molinism: 0,
            banezianism: 2,
            bonaventurianism: -1,
            suarezianism: 0,
            nominalism: 0,
            lullism: 0,
            averroism: 0
        }
    },
    {
        text: "The analogy of being is the only correct way to speak of God.",
        weights: {
            thomism: 2,
            scotism: -2,
            augustinianism: 0,
            molinism: 0,
            banezianism: 2,
            bonaventurianism: 0,
            suarezianism: -1,
            nominalism: 0,
            lullism: 0,
            averroism: 0
        }
    },
    {
        text: "Universals exist as real forms in things, not merely in the mind.",
        weights: {
            thomism: 2,
            scotism: 1,
            augustinianism: 1,
            molinism: 0,
            banezianism: 1,
            bonaventurianism: 1,
            suarezianism: 1,
            nominalism: -2,
            lullism: 0,
            averroism: 0
        }
    },

    // SCOTISM STATEMENTS
    {
        text: "Being is said in the same sense (univocally) of God and creatures.",
        weights: {
            thomism: -2,
            scotism: 2,
            augustinianism: 0,
            molinism: 0,
            banezianism: -1,
            bonaventurianism: 0,
            suarezianism: 1,
            nominalism: 0,
            lullism: 0,
            averroism: 0
        }
    },
    {
        text: "The will has priority over the intellect.",
        weights: {
            thomism: -2,
            scotism: 2,
            augustinianism: -1,
            molinism: 0,
            banezianism: -1,
            bonaventurianism: 1,
            suarezianism: 0,
            nominalism: 0,
            lullism: 0,
            averroism: 0
        }
    },
    {
        text: "The formal distinction explains real differences that aren't separable.",
        weights: {
            thomism: -2,
            scotism: 2,
            augustinianism: 0,
            molinism: 0,
            banezianism: -1,
            bonaventurianism: 0,
            suarezianism: 1,
            nominalism: -1,
            lullism: 0,
            averroism: 0
        }
    },
    {
        text: "The Immaculate Conception is theologically necessary.",
        weights: {
            thomism: 0,
            scotism: 2,
            augustinianism: 0,
            molinism: 0,
            banezianism: 0,
            bonaventurianism: 1,
            suarezianism: 1,
            nominalism: 0,
            lullism: 0,
            averroism: 0
        }
    },
    {
        text: "God's freedom is the foundation of morality, not natural law alone.",
        weights: {
            thomism: -2,
            scotism: 2,
            augustinianism: 0,
            molinism: 0,
            banezianism: -1,
            bonaventurianism: 0,
            suarezianism: 0,
            nominalism: 1,
            lullism: 0,
            averroism: 0
        }
    },

    // MOLINISM STATEMENTS
    {
        text: "God knows what any free creature would do in any hypothetical situation.",
        weights: {
            thomism: -1,
            scotism: 0,
            augustinianism: -1,
            molinism: 2,
            banezianism: -2,
            bonaventurianism: 0,
            suarezianism: 1,
            nominalism: 0,
            lullism: 0,
            averroism: 0
        }
    },
    {
        text: "God's predestination depends on foreknowledge, not prior decrees.",
        weights: {
            thomism: -1,
            scotism: 0,
            augustinianism: -2,
            molinism: 2,
            banezianism: -2,
            bonaventurianism: 0,
            suarezianism: 1,
            nominalism: 0,
            lullism: 0,
            averroism: 0
        }
    },
    {
        text: "Grace becomes efficacious because the creature freely cooperates.",
        weights: {
            thomism: -2,
            scotism: 0,
            augustinianism: -1,
            molinism: 2,
            banezianism: -2,
            bonaventurianism: 0,
            suarezianism: 0,
            nominalism: 0,
            lullism: 0,
            averroism: 0
        }
    },
    {
        text: "Human free will is libertarian, not determined by God's motion.",
        weights: {
            thomism: -2,
            scotism: 0,
            augustinianism: -1,
            molinism: 2,
            banezianism: -2,
            bonaventurianism: 0,
            suarezianism: 1,
            nominalism: 0,
            lullism: 0,
            averroism: 0
        }
    },
    {
        text: "Divine concurrence does not predetermine human choice.",
        weights: {
            thomism: -1,
            scotism: 0,
            augustinianism: -1,
            molinism: 2,
            banezianism: -2,
            bonaventurianism: 0,
            suarezianism: 1,
            nominalism: 0,
            lullism: 0,
            averroism: 0
        }
    },

    // BANEZIANISM STATEMENTS
    {
        text: "God premoves the will, determining free acts without removing freedom.",
        weights: {
            thomism: 1,
            scotism: 0,
            augustinianism: 1,
            molinism: -2,
            banezianism: 2,
            bonaventurianism: 0,
            suarezianism: -1,
            nominalism: 0,
            lullism: 0,
            averroism: 0
        }
    },
    {
        text: "Predestination is logically prior to God's knowledge of free acts.",
        weights: {
            thomism: 1,
            scotism: 0,
            augustinianism: 1,
            molinism: -2,
            banezianism: 2,
            bonaventurianism: 0,
            suarezianism: -1,
            nominalism: 0,
            lullism: 0,
            averroism: 0
        }
    },
    {
        text: "Grace is efficacious because of God, not human cooperation.",
        weights: {
            thomism: 2,
            scotism: 0,
            augustinianism: 1,
            molinism: -2,
            banezianism: 2,
            bonaventurianism: 0,
            suarezianism: -1,
            nominalism: 0,
            lullism: 0,
            averroism: 0
        }
    },
    {
        text: "There is no such thing as 'middle knowledge.'",
        weights: {
            thomism: 1,
            scotism: 0,
            augustinianism: 1,
            molinism: -2,
            banezianism: 2,
            bonaventurianism: 0,
            suarezianism: -1,
            nominalism: 0,
            lullism: 0,
            averroism: 0
        }
    },
    {
        text: "Contingent free acts must be predetermined by divine motion.",
        weights: {
            thomism: 1,
            scotism: 0,
            augustinianism: 1,
            molinism: -2,
            banezianism: 2,
            bonaventurianism: 0,
            suarezianism: -1,
            nominalism: 0,
            lullism: 0,
            averroism: 0
        }
    },

    // SUAREZIANISM STATEMENTS
    {
        text: "Essence and existence are distinct only conceptually, not really.",
        weights: {
            thomism: -2,
            scotism: 1,
            augustinianism: 0,
            molinism: 0,
            banezianism: -2,
            bonaventurianism: 0,
            suarezianism: 2,
            nominalism: 1,
            lullism: 0,
            averroism: 0
        }
    },
    {
        text: "Divine concursus does not predetermine human choice.",
        weights: {
            thomism: -1,
            scotism: 0,
            augustinianism: -1,
            molinism: 1,
            banezianism: -2,
            bonaventurianism: 0,
            suarezianism: 2,
            nominalism: 0,
            lullism: 0,
            averroism: 0
        }
    },
    {
        text: "Physical premotion is philosophically unnecessary.",
        weights: {
            thomism: -1,
            scotism: 0,
            augustinianism: 0,
            molinism: 1,
            banezianism: -2,
            bonaventurianism: 0,
            suarezianism: 2,
            nominalism: 0,
            lullism: 0,
            averroism: 0
        }
    },
    {
        text: "Metaphysical distinctions should be minimized when possible.",
        weights: {
            thomism: -1,
            scotism: -1,
            augustinianism: 0,
            molinism: 0,
            banezianism: -1,
            bonaventurianism: 0,
            suarezianism: 2,
            nominalism: 1,
            lullism: 0,
            averroism: 0
        }
    },
    {
        text: "The analogy of being is insufficient without univocal elements.",
        weights: {
            thomism: -2,
            scotism: 1,
            augustinianism: 0,
            molinism: 0,
            banezianism: -1,
            bonaventurianism: 0,
            suarezianism: 2,
            nominalism: 0,
            lullism: 0,
            averroism: 0
        }
    },

    // AUGUSTINIANISM STATEMENTS
    {
        text: "The Fall so wounded the will that only irresistible grace can save.",
        weights: {
            thomism: -1,
            scotism: 0,
            augustinianism: 2,
            molinism: -2,
            banezianism: 1,
            bonaventurianism: 0,
            suarezianism: -1,
            nominalism: 0,
            lullism: 0,
            averroism: 0
        }
    },
    {
        text: "The intellect is darkened unless illuminated by God.",
        weights: {
            thomism: 0,
            scotism: 0,
            augustinianism: 2,
            molinism: 0,
            banezianism: 0,
            bonaventurianism: 1,
            suarezianism: 0,
            nominalism: 0,
            lullism: 0,
            averroism: -1
        }
    },
    {
        text: "Predestination is not based on foreseen merits.",
        weights: {
            thomism: 1,
            scotism: 0,
            augustinianism: 2,
            molinism: -2,
            banezianism: 1,
            bonaventurianism: 0,
            suarezianism: -1,
            nominalism: 0,
            lullism: 0,
            averroism: 0
        }
    },
    {
        text: "Human freedom is compatible with irresistible grace.",
        weights: {
            thomism: 0,
            scotism: 0,
            augustinianism: 2,
            molinism: -2,
            banezianism: 1,
            bonaventurianism: 0,
            suarezianism: -1,
            nominalism: 0,
            lullism: 0,
            averroism: 0
        }
    },
    {
        text: "Original sin fundamentally corrupts human motivation.",
        weights: {
            thomism: 0,
            scotism: -1,
            augustinianism: 2,
            molinism: -1,
            banezianism: 0,
            bonaventurianism: 1,
            suarezianism: 0,
            nominalism: 0,
            lullism: 0,
            averroism: 0
        }
    },

    // NOMINALISM STATEMENTS
    {
        text: "Universals are mental constructs, not real features of things.",
        weights: {
            thomism: -2,
            scotism: -2,
            augustinianism: -1,
            molinism: 0,
            banezianism: -1,
            bonaventurianism: -1,
            suarezianism: -1,
            nominalism: 2,
            lullism: 0,
            averroism: 0
        }
    },
    {
        text: "God's will alone determines morality—even if it seems arbitrary.",
        weights: {
            thomism: -2,
            scotism: -1,
            augustinianism: 0,
            molinism: -1,
            banezianism: -1,
            bonaventurianism: -1,
            suarezianism: -1,
            nominalism: 2,
            lullism: 0,
            averroism: 0
        }
    },
    {
        text: "Reason cannot definitively prove theological truths.",
        weights: {
            thomism: -2,
            scotism: -1,
            augustinianism: 0,
            molinism: -1,
            banezianism: -1,
            bonaventurianism: 0,
            suarezianism: -1,
            nominalism: 2,
            lullism: -1,
            averroism: 0
        }
    },
    {
        text: "The natural law has no independent metaphysical foundation.",
        weights: {
            thomism: -2,
            scotism: -1,
            augustinianism: 0,
            molinism: -1,
            banezianism: -1,
            bonaventurianism: 0,
            suarezianism: -1,
            nominalism: 2,
            lullism: 0,
            averroism: 0
        }
    },
    {
        text: "Only individual substances exist; no essences or natures.",
        weights: {
            thomism: -2,
            scotism: -2,
            augustinianism: -1,
            molinism: 0,
            banezianism: -1,
            bonaventurianism: -1,
            suarezianism: -1,
            nominalism: 2,
            lullism: 0,
            averroism: 0
        }
    },

    // BONAVENTURIANISM STATEMENTS
    {
        text: "Divine illumination is necessary for certain knowledge.",
        weights: {
            thomism: -2,
            scotism: 0,
            augustinianism: 1,
            molinism: 0,
            banezianism: 0,
            bonaventurianism: 2,
            suarezianism: 0,
            nominalism: -1,
            lullism: 0,
            averroism: -1
        }
    },
    {
        text: "All creatures exist by participating in God's exemplar ideas.",
        weights: {
            thomism: 0,
            scotism: 0,
            augustinianism: 1,
            molinism: 0,
            banezianism: 0,
            bonaventurianism: 2,
            suarezianism: 0,
            nominalism: -2,
            lullism: 0,
            averroism: 0
        }
    },
    {
        text: "The will is naturally inclined to love God.",
        weights: {
            thomism: 0,
            scotism: 1,
            augustinianism: 0,
            molinism: 0,
            banezianism: 0,
            bonaventurianism: 2,
            suarezianism: 0,
            nominalism: 0,
            lullism: 0,
            averroism: 0
        }
    },
    {
        text: "Intellectual knowledge is inseparable from affective experience.",
        weights: {
            thomism: -2,
            scotism: 0,
            augustinianism: 1,
            molinism: 0,
            banezianism: 0,
            bonaventurianism: 2,
            suarezianism: 0,
            nominalism: 0,
            lullism: 0,
            averroism: 0
        }
    },
    {
        text: "Platonic metaphysics better describes spiritual realities than Aristotelianism.",
        weights: {
            thomism: -2,
            scotism: 0,
            augustinianism: 0,
            molinism: 0,
            banezianism: 0,
            bonaventurianism: 2,
            suarezianism: 0,
            nominalism: 0,
            lullism: 0,
            averroism: -1
        }
    },

    // LULLISM STATEMENTS
    {
        text: "Evangelization can be done with a universal logical-combinatorial method.",
        weights: {
            thomism: -1,
            scotism: -1,
            augustinianism: -1,
            molinism: -1,
            banezianism: -1,
            bonaventurianism: -1,
            suarezianism: -1,
            nominalism: -1,
            lullism: 2,
            averroism: -1
        }
    },
    {
        text: "Theological truths can be demonstrated through rational diagrams.",
        weights: {
            thomism: -1,
            scotism: -1,
            augustinianism: -1,
            molinism: -1,
            banezianism: -1,
            bonaventurianism: -1,
            suarezianism: -1,
            nominalism: -2,
            lullism: 2,
            averroism: 0
        }
    },
    {
        text: "A single structured 'Art' underlies all sciences and theology.",
        weights: {
            thomism: -1,
            scotism: -1,
            augustinianism: -1,
            molinism: -1,
            banezianism: -1,
            bonaventurianism: -1,
            suarezianism: -1,
            nominalism: -1,
            lullism: 2,
            averroism: -1
        }
    },
    {
        text: "Reasonable non-Christians can be convinced of Christianity purely logically.",
        weights: {
            thomism: 0,
            scotism: 0,
            augustinianism: -1,
            molinism: 0,
            banezianism: 0,
            bonaventurianism: 0,
            suarezianism: 0,
            nominalism: -1,
            lullism: 2,
            averroism: 0
        }
    },
    {
        text: "Truth can be generated by combining divine attributes systematically.",
        weights: {
            thomism: -1,
            scotism: -1,
            augustinianism: -1,
            molinism: -1,
            banezianism: -1,
            bonaventurianism: -1,
            suarezianism: -1,
            nominalism: -1,
            lullism: 2,
            averroism: -1
        }
    },

    // LATIN AVERROISM STATEMENTS
    {
        text: "Philosophy can reach conclusions contrary to theology without conflict.",
        weights: {
            thomism: -2,
            scotism: -2,
            augustinianism: -2,
            molinism: -2,
            banezianism: -2,
            bonaventurianism: -2,
            suarezianism: -2,
            nominalism: 0,
            lullism: -2,
            averroism: 2
        }
    },
    {
        text: "Aristotle provides the best description of the eternal natural world.",
        weights: {
            thomism: 1,
            scotism: 0,
            augustinianism: -1,
            molinism: 0,
            banezianism: 0,
            bonaventurianism: -1,
            suarezianism: 0,
            nominalism: 0,
            lullism: 0,
            averroism: 2
        }
    },
    {
        text: "The world could be eternal according to philosophy.",
        weights: {
            thomism: -1,
            scotism: 0,
            augustinianism: -1,
            molinism: 0,
            banezianism: 0,
            bonaventurianism: -1,
            suarezianism: 0,
            nominalism: 0,
            lullism: 0,
            averroism: 2
        }
    },
    {
        text: "Reason must be autonomous from revelation.",
        weights: {
            thomism: -2,
            scotism: -2,
            augustinianism: -2,
            molinism: -2,
            banezianism: -2,
            bonaventurianism: -2,
            suarezianism: -2,
            nominalism: 0,
            lullism: -1,
            averroism: 2
        }
    },
    {
        text: "There can be two parallel truths: philosophical and theological.",
        weights: {
            thomism: -2,
            scotism: -2,
            augustinianism: -2,
            molinism: -2,
            banezianism: -2,
            bonaventurianism: -2,
            suarezianism: -2,
            nominalism: 0,
            lullism: -2,
            averroism: 2
        }
    }
];

// Quiz state
let currentQuestion = 0;
let scores = {};
let answers = [];

// Initialize scores
Object.keys(schools).forEach(school => {
    scores[school] = 0;
});

// DOM elements
const introSection = document.getElementById('intro');
const quizSection = document.getElementById('quiz');
const resultsSection = document.getElementById('results');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const questionNumber = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const answerBtns = document.querySelectorAll('.answer-btn');
const progressFill = document.getElementById('progress');
const resultsContainer = document.getElementById('results-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Event listeners
startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', restartQuiz);
prevBtn.addEventListener('click', goToPreviousQuestion);
nextBtn.addEventListener('click', goToNextQuestion);

answerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const value = parseInt(btn.dataset.value);
        selectAnswer(value);
    });
});

// Start quiz
function startQuiz() {
    introSection.classList.add('hidden');
    quizSection.classList.remove('hidden');
    currentQuestion = 0;
    answers = [];
    Object.keys(schools).forEach(school => {
        scores[school] = 0;
    });
    showQuestion();
}

// Show current question
function showQuestion() {
    const question = questions[currentQuestion];
    questionNumber.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    questionText.textContent = question.text;

    // Update progress bar based on answered questions
    const answeredCount = answers.length;
    const progress = (answeredCount / questions.length) * 100;
    progressFill.style.width = `${progress}%`;

    // Check if there's a previous answer for this question
    const previousAnswer = answers.find(a => a.question === currentQuestion);

    // Reset button states
    answerBtns.forEach(btn => {
        btn.classList.remove('selected');
        btn.disabled = false;

        // Restore previous answer if it exists
        if (previousAnswer && parseInt(btn.dataset.value) === previousAnswer.answer) {
            btn.classList.add('selected');
        }
    });

    // Update navigation buttons
    prevBtn.disabled = currentQuestion === 0;

    // Show/hide next button based on whether question is answered
    if (previousAnswer) {
        nextBtn.style.display = 'block';
        // Update button text for last question
        if (currentQuestion === questions.length - 1) {
            nextBtn.textContent = 'Show Results';
        } else {
            nextBtn.textContent = 'Next Question';
        }
    } else {
        nextBtn.style.display = 'none';
    }
}

// Select answer (without auto-advancing)
function selectAnswer(value) {
    const question = questions[currentQuestion];

    // Remove old answer if it exists
    const existingAnswerIndex = answers.findIndex(a => a.question === currentQuestion);
    if (existingAnswerIndex !== -1) {
        const oldAnswer = answers[existingAnswerIndex];
        // Remove old score contribution
        Object.keys(schools).forEach(school => {
            const weight = question.weights[school] || 0;
            scores[school] -= weight * oldAnswer.answer;
        });
        answers.splice(existingAnswerIndex, 1);
    }

    // Calculate scores for each school
    Object.keys(schools).forEach(school => {
        const weight = question.weights[school] || 0;
        // Multiply weight by answer value (2 to -2) and add to score
        scores[school] += weight * value;
    });

    // Store answer
    answers.push({
        question: currentQuestion,
        answer: value
    });

    // Mark selected button
    answerBtns.forEach(btn => {
        if (parseInt(btn.dataset.value) === value) {
            btn.classList.add('selected');
        } else {
            btn.classList.remove('selected');
        }
    });

    // Update progress bar
    const answeredCount = answers.length;
    const progress = (answeredCount / questions.length) * 100;
    progressFill.style.width = `${progress}%`;

    // Show next button and update text if on last question
    nextBtn.style.display = 'block';
    if (currentQuestion === questions.length - 1) {
        nextBtn.textContent = 'Show Results';
    } else {
        nextBtn.textContent = 'Next Question';
    }
}

// Go to previous question
function goToPreviousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

// Go to next question
function goToNextQuestion() {
    // Check if current question is answered
    const currentAnswer = answers.find(a => a.question === currentQuestion);
    if (!currentAnswer) {
        return; // Don't advance if not answered
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Calculate and show results
function showResults() {
    quizSection.classList.add('hidden');
    resultsSection.classList.remove('hidden');

    // Calculate maximum possible scores
    const maxScores = {};
    Object.keys(schools).forEach(school => {
        maxScores[school] = 0;
        questions.forEach(question => {
            const weight = question.weights[school] || 0;
            // Maximum is weight * 2 (strongly agree) if positive, or weight * -2 (strongly disagree) if negative
            if (weight > 0) {
                maxScores[school] += weight * 2;
            } else if (weight < 0) {
                maxScores[school] += Math.abs(weight) * 2;
            }
        });
    });

    // Calculate percentages
    const percentages = {};
    Object.keys(schools).forEach(school => {
        const maxScore = maxScores[school];
        if (maxScore > 0) {
            // Normalize: (score - min) / (max - min) * 100
            // Min score would be -maxScore, so range is 2*maxScore
            const percentage = ((scores[school] + maxScore) / (2 * maxScore)) * 100;
            percentages[school] = Math.max(0, Math.min(100, Math.round(percentage)));
        } else {
            percentages[school] = 50; // Neutral if no questions for this school
        }
    });

    // Sort schools by percentage
    const sortedSchools = Object.keys(schools).sort((a, b) => {
        return percentages[b] - percentages[a];
    });

    // Display results
    resultsContainer.innerHTML = '';

    sortedSchools.forEach(school => {
        const percentage = percentages[school];
        const schoolData = schools[school];

        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';

        const barContainer = document.createElement('div');
        barContainer.className = 'bar-container';

        const label = document.createElement('div');
        label.className = 'result-label';
        label.textContent = `${schoolData.name}: ${percentage}%`;

        const bar = document.createElement('div');
        bar.className = 'result-bar';

        const fill = document.createElement('div');
        fill.className = 'result-fill';
        fill.style.width = `${percentage}%`;
        fill.style.backgroundColor = schoolData.color;

        bar.appendChild(fill);
        barContainer.appendChild(label);
        barContainer.appendChild(bar);
        resultItem.appendChild(barContainer);

        resultsContainer.appendChild(resultItem);
    });
}

// Restart quiz
function restartQuiz() {
    resultsSection.classList.add('hidden');
    introSection.classList.remove('hidden');
    currentQuestion = 0;
    answers = [];
    Object.keys(schools).forEach(school => {
        scores[school] = 0;
    });
}
