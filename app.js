
let currentUser = localStorage.getItem('kukuUser');

if(currentUser){
document.getElementById('welcomeText').innerText = 'Welcome ' + currentUser;
}

function createAccount(){
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;

if(username && password){
localStorage.setItem('kukuUser', username);
localStorage.setItem('kukuPass', password);
alert('Account created successfully!');
}
else{
alert('Enter username and password');
}
}

function login(){
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;

const savedUser = localStorage.getItem('kukuUser');
const savedPass = localStorage.getItem('kukuPass');

if(username === savedUser && password === savedPass){
document.getElementById('welcomeText').innerText = 'Welcome ' + username;
alert('Login successful!');
}
else{
alert('Wrong login details');
}
}

function addToCart(item){
const list = document.getElementById('cartItems');
const li = document.createElement('li');
li.innerText = item;
list.appendChild(li);
}

function googleSearch(){
const query = document.getElementById('searchInput').value;

if(query){
window.open('https://www.google.com/search?q=' + encodeURIComponent(query), '_blank');
}
}
