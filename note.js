document.getElementById("submitNote").addEventListener("click", () => {
    const noteContent = document.getElementById("noteInput").value;

    if (noteContent) {
        // Get existing notes from local storage
        const notes = JSON.parse(localStorage.getItem("notes")) || [];
        
        // Add the new note to the array
        notes.push(noteContent);
        
        // Save the updated notes back to local storage
        localStorage.setItem("notes", JSON.stringify(notes));
        
        // Clear the input field
        document.getElementById("noteInput").value = "";
        
        // Update the notes list displayed on the page
        displayNotes();
    }
});

// Function to display notes
function displayNotes() {
    const notesList = document.getElementById("notesList");
    notesList.innerHTML = ""; // Clear existing notes
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    
    notes.forEach(note => {
        const listItem = document.createElement("li");
        listItem.textContent = note;
        notesList.appendChild(listItem);
    });
}

// Display existing notes on page load
displayNotes();