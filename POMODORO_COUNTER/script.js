// JavaScript for Pomodoro Timer
let workDuration = 25 * 60; // 25 minutes
let breakDuration = 5 * 60; // 5 minutes
let isWorkTime = true; // true if it's work time, false if break time
let timer = false; // to hold the interval
let timeLeft = workDuration; // time left in seconds
let completedCount = 0; // Counter for completed work sessions


const timeDisplay = document.querySelector('#timer'); // Display element for time
const statusDisplay = document.querySelector('#status');// Status element for work/break
const countDisplay = document.querySelector('#count');// Display element for completed count

function updateDisplay(){
    let minutes = Math.floor(timeLeft / 60);// Get remaining minutes
    let seconds = timeLeft % 60;// Get remaining seconds
    timeDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    statusDisplay.textContent = isWorkTime ? "Work Time" : "Break Time";
    countDisplay.textContent = completedCount; // Update completed count display
}

updateDisplay(); // Initial display update

//Start Button
document.querySelector('#start').addEventListener("click", () => {
   if(!timer){ // Only start if no timer is running
    timer = setInterval(() => {
        if(timeLeft > 0){
            timeLeft--;
            updateDisplay();// Update display every second
        } else{ // Time's up, switch modes
            clearInterval(timer); // Clear current timer
            timer = false; // Reset timer flag
            if(isWorkTime){
                completedCount++; // Increment completed count on work session completion
                localStorage.setItem('completedPomodoroCount', completedCount);
            }

            isWorkTime = !isWorkTime; // Toggle between work and break
            timeLeft = isWorkTime ? workDuration : breakDuration;
            updateDisplay();
            alert(isWorkTime ? "Time to Work!" : "Time for a Break!");
            document.querySelector('#start').click(); // Automatically start the next session
        }
         
    }, 1000); // Run every second
   }
});

//Pause Button
document.querySelector('#pause').addEventListener("click", () => {
    if(timer){ // Only pause if timer is running
        clearInterval(timer); // Clear the interval to pause
        timer = false; // Reset timer flag so we can start again
    }
});

//Reset Button
document.querySelector('#reset').addEventListener("click", () => {
    if(timer){
        clearInterval(timer);
        timer = false;
    }
    timeLeft = workDuration; // Reset to work duration 25 minutes
    isWorkTime = true; // Reset to work time
    updateDisplay(); // Update display to reflect reset state
    document.querySelector('#count').textContent = "0"; // Reset completed count
});

// Load completed count from localStorage on page load
window.addEventListener('load', () => {
    const savedCount = localStorage.getItem('completedPomodoroCount');
    if(savedCount){
        completedCount = parseInt(savedCount);
        updateDisplay();
    }
});