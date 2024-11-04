function addGratitude() {
    const input = document.getElementById('userInput');
    const gratitudeText = input.value;
    
    // Check if there is anything written in Input
    if (gratitudeText.length > 0) {
        console.log('if statement');
        const list = document.getElementById('gratList');

        // Create list item
        const listItem = document.createElement('li');
        
        // Create span to hold gratitude text
        const textSpan = document.createElement('span');
        textSpan.textContent = gratitudeText;
        
        // Create delete button
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
