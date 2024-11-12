document.getElementById('add-prompt').addEventListener('click', function() {
    const promptBody = document.getElementById('prompt-body');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td><input type="text" placeholder="Enter your prompt here"></td>
        <td><button class="delete-btn">Delete</button></td>
    `;

    promptBody.appendChild(newRow);

    // Add event listener to the delete button
    newRow.querySelector('.delete-btn').addEventListener('click', function() {
        promptBody.removeChild(newRow);
    });
});

// Add event listener to the initial delete button
document.querySelector('.delete-btn').addEventListener('click', function() {
    const promptBody = document.getElementById('prompt-body');
    const firstRow = promptBody.querySelector('tr');
    promptBody.removeChild(firstRow);
});
// script.js
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const container = document.querySelector('.container');
    const inputs = document.querySelectorAll('input[type="text"]');
    const buttons = document.querySelectorAll('button');

});
document.getElementById('home-button').addEventListener('click', function() {
        window.location.href = 'index.html'; // Change 'index.html' to your target page
    });
