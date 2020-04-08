// first parameter is the event, for example something to happen on every click and the second parameter is the function that we call when the event occurs

//Whenever the user clicks, I want to run this function

var button = document.getElementsByTagName("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
const listItems = document.getElementsByTagName("li");
const li = document.getElementsByTagName("li");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li"); //create element
  li.appendChild(document.createTextNode(input.value)); //the element needs to have text inside and in order to do that we have to create a text node
  // input.value is how we get the value of the input
  ul.appendChild(li); //we want to attach that element to the ul as a child
  input.value = "";

  let deleteButton = document.createElement("button");
  deleteButton.appendChild(document.createTextNode("Delete"));
  li.appendChild(deleteButton);
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function strikeThrough(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("done");
  }
}

function listItemsLength() {
  return listItems.length;
}

function addDeleteButton() {
  let deleteButton = document.createElement("button");
  deleteButton.appendChild(document.createTextNode("Delete"));
  listItems[i].appendChild(deleteButton);
}

for (i = 0; i < listItemsLength(); i++) {
  addDeleteButton();
}

function removeItemfromList(event) {
  event.target.parentNode.remove();
}

enter.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", strikeThrough);
ul.addEventListener("click", removeItemfromList);
