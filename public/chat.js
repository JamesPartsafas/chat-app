const socket = io();
const form=document.getElementById('form');
const input= document.getElementById('input');
// const name= swal({
//     title: 'Enter your name',
//     text: "Welcome to Chatbox! Here at ChatBox, we help you meetTo enter a chat room, please enter your name.",
//     content : {
//         element: 'input',
//     }
//   });


let username= prompt("enter your name")

socket.emit('user', username);
socket.on('new-message', data => {
appendMessage(`${data.name}: ${data.message}`);
})

form.addEventListener('submit', e => {
    e.preventDefault();
    const message = input.value;
    // const username = document.createElement('div');
    // username.className='fst-italic';
    appendMessage(`You: ${message}`);
    socket.emit('chat', message);
    input.value='';
})

function appendMessage(message){
const chats = document.getElementById('chats');
const gparent = document.createElement('div');
gparent.className="chat-body";
const parent = document.createElement('div');
parent.className="chat-content";
const text = document.createElement('p');
text.innerHTML=message;
parent.appendChild(text);
gparent.appendChild(parent);
chats.appendChild(gparent);
}