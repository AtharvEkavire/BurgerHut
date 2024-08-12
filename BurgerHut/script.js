let cart = [];

// Function to handle category tabs
function openCategory(evt, categoryName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(categoryName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Function to add items to cart
function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    alert(`${itemName} added to cart!`);
}

// Function to handle order now action
function orderNow() {
    // Populate bill popup with cart items
    const billItems = document.getElementById('bill-items');
    const totalAmountElem = document.getElementById('total-amount');

    // Clear previous bill items
    billItems.innerHTML = '';

    // Calculate total amount
    let totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

    // Add each item to the bill
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name}: $${item.price.toFixed(2)}`;
        billItems.appendChild(listItem);
    });

    // Set total amount
    totalAmountElem.textContent = `Total Amount: $${totalAmount.toFixed(2)}`;

    // Show the bill popup
    document.getElementById('bill-popup').style.display = 'flex';
}

// Function to close the bill popup
function closeBillPopup() {
    document.getElementById('bill-popup').style.display = 'none';
}

// Function to confirm order and close the popup
function confirmOrder() {
    alert("Order confirmed! Thank you for your purchase.");
    closeBillPopup();
}

// Function to handle chatbox toggle
function toggleChatBox() {
    const chatBox = document.getElementById('chat-box');
    chatBox.classList.toggle('show');
}

// Function to send message in chatbox
function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const message = chatInput.value.trim();
    if (message === '') return;

    const chatBody = document.getElementById('chat-body');

    // User message
    const userMessage = document.createElement('div');
    userMessage.className = 'chat-message user-message';
    userMessage.textContent = message;
    chatBody.appendChild(userMessage);

    chatInput.value = '';
    chatBody.scrollTop = chatBody.scrollHeight; // Scroll to the bottom

    // Simulate bot response after a delay
    setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.className = 'chat-message bot-message';
        botMessage.textContent = 'Thank you for your message!'; // Placeholder response
        chatBody.appendChild(botMessage);
        chatBody.scrollTop = chatBody.scrollHeight; // Scroll to the bottom
    }, 1000);
}

// Function to handle key press for sending message
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Initialize default category
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.tablink').click();
});
