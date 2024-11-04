function addGratitude() {
    const input = document.getElementById('userInput');
    const gratitudeText = input.value;
    
    // Check if there is anything written in Input
    if (gratitudeText.length > 0) {
        const list = document.getElementById('gratList');

        // Create list item AND span to hold gratitude text
        const listItem = document.createElement('li');
        const textSpan = document.createElement('span');
        textSpan.textContent = gratitudeText;
        
        // Create delete button, display it, add functionality
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            list.removeChild(listItem);
        };

        // Append textSpam and deleteButton to listItem
        listItem.appendChild(textSpan);
        listItem.appendChild(deleteButton);
        
        // Append listItem to the list
        list.appendChild(listItem);

        // Clear input field
        input.value = "";
    }
}
