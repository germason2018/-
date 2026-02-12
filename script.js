document.getElementById('send-button').addEventListener('click', function() {
    const messageInput = document.getElementById('message-input');
    const chatContainer = document.getElementById('chat-container');

    const message = messageInput.value;
    if (message.trim() !== '') {
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.textContent = message;
        chatContainer.appendChild(messageElement);

        messageInput.value = '';
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
});
