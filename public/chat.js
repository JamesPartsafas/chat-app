const socket = io();
const form = document.getElementById('form');
const input = document.getElementById('input');
// const messagesContainer = document.querySelector('.messages-container');

// const name= swal({
//     title: 'Enter your name',
//     text: "Welcome to Chatbox! Here at ChatBox, we help you meetTo enter a chat room, please enter your name.",
//     content : {
//         element: 'input',
//     }
//   });


let username = prompt("enter your name")
document.getElementById('userNameDisplay').textContent = username

let roomId = prompt("enter your room id")
document.getElementById('roomIdDisplay').textContent = roomId

//socket.emit('user', username);
socket.emit('join-room', {roomId})

socket.on('new-message', data => {
    appendMessage(`${data.username}: ${data.message}`);
    // appendMessage(data);
})

form.addEventListener('submit', e => {
    e.preventDefault();
    const message = input.value;
    // const username = document.createElement('div');
    // username.className='fst-italic';
    appendMessage(`You: ${message}`);
    socket.emit('chat', {username, message, roomId}); //TODO hange when auth
    // socket.emit('chat', message); //TODO hange when auth
    input.value = '';
})

function appendMessage(message) {

    /*
    const msg = `<div class="msg-container"><div class="message own">${message}</div></div>`
    messagesContainer.insertAdjacentHTML('beforeend', msg);
    */

    const chats = document.getElementById('chats');
    const gparent = document.createElement('div');
    gparent.className = "chat-body";
    const parent = document.createElement('div');
    parent.className = "chat-content";
    const text = document.createElement('p');
    text.innerHTML = message;
    parent.appendChild(text);
    gparent.appendChild(parent);
    chats.appendChild(gparent);
}