const first = document.createElement('p')
const second = document.createElement('h3');
const third = document.createElement('div');
const fourth = document.createElement('h1');
const fifth = document.createElement('p');

const container = document.querySelector("#DOM_activity");

first.style.color = "red";
first.textContent = "Hey I'm red!";

second.style.color = "blue";
second.textContent = "I'm a blue h3!";

third.style.borderColor = "black";
third.style.borderWidth = 4;
third.style.backgroundColor = "pink";

third.appendChild(fourth);
third.appendChild(fifth);

fourth.textContent = "I'm in a div";
fifth.textContent = "ME TOO!";

container.appendChild(first);
container.appendChild(second);
container.appendChild(third);