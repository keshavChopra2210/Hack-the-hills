document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('menuToggle').addEventListener('click', toggleSideNav);
document.getElementById('closeButton').addEventListener('click', toggleSideNav);

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== '') {
        appendMessage(userInput, 'user');
        document.getElementById('user-input').value = ''; // Clear input field
        
        // Simulate bot response
        setTimeout(() => {
            const botResponse = getBotResponse(userInput);
            appendMessage(botResponse, 'bot');
        }, 1000); // Simulate a delay for the bot response
    }
}

function appendMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', sender);
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

function getBotResponse(userInput) {
    // Simple logic to simulate bot responses
    if (userInput.toLowerCase().includes('stress')) {
        return 'I understand that stress can be overwhelming. Have you tried deep breathing exercises?';
    } else if (userInput.toLowerCase().includes('anxiety')) {
        return 'Anxiety can be tough to deal with. How about practicing mindfulness or meditation?';
    } else if (userInput.toLowerCase().includes('help')) {
        return 'It sounds like you might need professional assistance. Here is a link to find a therapist: [Link to professional help]';
    } else {
        return 'I am here to help you. Please tell me more about what you are experiencing.';
    }
}

function toggleSideNav() {
    const sideNav = document.getElementById('side-nav');
    if (sideNav.style.left === '0px') {
        sideNav.style.left = '-250px'; // Hide side nav
    } else {
        sideNav.style.left = '0px'; // Show side nav
    }
}