// Function to toggle the dropdown
function toggleDropdown() {
    const dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");
}

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Your existing code for creating balloons, dropdowns, etc.

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        const dropdown = document.getElementById("myDropdown");
        if (!event.target.matches('.dropbtn') && !dropdown.contains(event.target)) {
            dropdown.classList.remove("show");
        }
    }

    // Function to create a balloon
    function createBalloon() {
        const balloon = document.createElement("div");
        balloon.className = "balloon " + getRandomColor(); // Add a random color class
        balloon.style.position = "absolute";
        balloon.style.bottom = "0"; // Position at the bottom
        balloon.style.left = Math.random() * window.innerWidth + "px"; // Random horizontal position
        balloon.style.animation = "float 5s infinite"; // Use the same float animation

        document.body.appendChild(balloon);

        // Remove the balloon after the animation is done
        setTimeout(() => {
            balloon.remove();
        }, 5000); // Adjust this time to match your animation duration
    }

    // Function to get a random color class
    function getRandomColor() {
        const colors = ['red', 'blue', 'green', 'yellow', 'pink'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // Event listener for left click
    window.addEventListener("click", (event) => {
        if (event.button === 0) { // Left mouse button
            createBalloon();
        }
    });
});