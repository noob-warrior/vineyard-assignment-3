// JavaScript for Hobby Interaction Enhancements

// Add a new hobby item to the list
function addHobby() {
    const input = document.getElementById('hobbyInput');
    const hobbyList = document.getElementById('hobbyList');

    if (input.value.trim() !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = input.value;

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            hobbyList.removeChild(listItem);
        };

        listItem.appendChild(deleteButton);
        hobbyList.appendChild(listItem);

        // Clear the input box
        input.value = '';
    }
}

// Alert on form submission
function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission
    alert('Form submitted successfully!');
}

// Display current date and time in the footer
function updateFooterTime() {
    const footerTime = document.getElementById('footerTime');
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    footerTime.textContent = now.toLocaleDateString('en-US', options);
}

// Update the footer time every second
setInterval(updateFooterTime, 1000);

// Initialize the footer time on page load
updateFooterTime();

// Task 1: Find the second largest number in an array
function findSecondLargest(arr) {
    let max = -Infinity, secondMax = -Infinity;
    for (let num of arr) {
        if (num > max) {
            secondMax = max;
            max = num;
        } else if (num > secondMax && num < max) {
            secondMax = num;
        }
    }
    return secondMax;
}

function displayTask1Result() {
    const arr = [25, 45, 67, 89, 12, 90, 44];
    const result = findSecondLargest(arr);
    document.getElementById('task1-result').textContent = `Second Largest Number: ${result}`;
    console.log("Second Largest Number:", result);
}

// Task 2: Return unique elements from two arrays
function getUniqueElements(arr1, arr2) {
    const combined = [...arr1, ...arr2];
    const unique = combined.filter((item, index) => combined.indexOf(item) === index);
    return unique;
}

function displayTask2Result() {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [4, 5, 6, 7, 8];
    const result = getUniqueElements(arr1, arr2);
    document.getElementById('task2-result').textContent = `Unique Elements: [${result.join(', ')}]`;
    console.log("Unique Elements:", result);
}

// Task 3: Student Score Analysis
const students = [
    { name: 'Alice', age: 22, scores: [78, 85, 92] },
    { name: 'Bob', age: 20, scores: [88, 90, 76] },
    { name: 'Charlie', age: 21, scores: [95, 80, 85] }
];

function analyzeStudentScores() {
    let topStudent = null;
    let highestAverage = 0;

    students.forEach(student => {
        const total = student.scores.reduce((sum, score) => sum + score, 0);
        const average = total / student.scores.length;
        console.log(`${student.name}'s average score: ${average.toFixed(2)}`);

        if (average > highestAverage) {
            highestAverage = average;
            topStudent = student;
        }
    });

    return { topStudent, highestAverage };
}

function displayTask3Result() {
    const { topStudent, highestAverage } = analyzeStudentScores();
    const result = `Top Student: ${topStudent.name} with an average score of ${highestAverage.toFixed(2)}`;
    document.getElementById('task3-result').textContent = result;
    console.log(result);
}

// Task 4: Countdown Timer (1 hour)
let timerInterval;
let timeRemaining = 3600; // 1 hour in seconds

function updateTimerDisplay() {
    const hours = Math.floor(timeRemaining / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((timeRemaining % 3600) / 60).toString().padStart(2, '0');
    const seconds = (timeRemaining % 60).toString().padStart(2, '0');
    document.getElementById('timer-display').textContent = `${hours}:${minutes}:${seconds}`;
}

function startTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            if (timeRemaining > 0) {
                timeRemaining--;
                updateTimerDisplay();
            } else {
                clearInterval(timerInterval);
                timerInterval = null;
                document.getElementById('timer-display').textContent = 'Time is Up!';
                alert('Time is Up!');
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    timeRemaining = 3600;
    updateTimerDisplay();
}

// Timer button event listeners
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('start-btn')) {
        document.getElementById('start-btn').addEventListener('click', startTimer);
    }
    if (document.getElementById('pause-btn')) {
        document.getElementById('pause-btn').addEventListener('click', pauseTimer);
    }
    if (document.getElementById('reset-btn')) {
        document.getElementById('reset-btn').addEventListener('click', resetTimer);
    }
    // Initialize the timer display
    updateTimerDisplay();
});

// Student Score Analyzer
const scores = [];

function addScore() {
    const scoreInput = document.getElementById('scoreInput');
    const scoreList = document.getElementById('scoreList');

    const score = parseFloat(scoreInput.value);
    if (!isNaN(score)) {
        scores.push(score);

        const listItem = document.createElement('li');
        listItem.textContent = `Score: ${score}`;
        scoreList.appendChild(listItem);

        scoreInput.value = '';
    } else {
        alert('Please enter a valid number.');
    }
}

function calculateAverage() {
    if (scores.length === 0) {
        alert('No scores to calculate.');
        return;
    }

    const total = scores.reduce((sum, score) => sum + score, 0);
    const average = total / scores.length;

    const averageScore = document.getElementById('averageScore');
    averageScore.textContent = `Average Score: ${average.toFixed(2)}`;
}

// Call the function to analyze scores
analyzeStudentScores();