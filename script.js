// Color Changer Functionality
const redBtn = document.getElementById('red-btn');
const blueBtn = document.getElementById('blue-btn');
const greenBtn = document.getElementById('green-btn');
const colorDisplay = document.getElementById('color-display');

redBtn.addEventListener('click', () => {
    colorDisplay.style.backgroundColor = '#b39ddb';
    colorDisplay.style.color = 'white';
    colorDisplay.textContent = 'Color: Light Purple';
});

blueBtn.addEventListener('click', () => {
    colorDisplay.style.backgroundColor = '#673ab7';
    colorDisplay.style.color = 'white';
    colorDisplay.textContent = 'Color: Deep Purple';
});

greenBtn.addEventListener('click', () => {
    colorDisplay.style.backgroundColor = '#9c27b0';
    colorDisplay.style.color = 'white';
    colorDisplay.textContent = 'Color: Magenta';
});

// Counter Functionality
const decreaseBtn = document.getElementById('decrease-btn');
const increaseBtn = document.getElementById('increase-btn');
const resetBtn = document.getElementById('reset-btn');
const countDisplay = document.getElementById('count');

let count = 0;

decreaseBtn.addEventListener('click', () => {
    count--;
    updateCountDisplay();
});

increaseBtn.addEventListener('click', () => {
    count++;
    updateCountDisplay();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateCountDisplay();
});

function updateCountDisplay() {
    countDisplay.textContent = count;
    
    // Change color based on the number
    if (count < 0) {
        countDisplay.style.color = '#9c27b0'; // Magenta
    } else if (count > 0) {
        countDisplay.style.color = '#673ab7'; // Deep Purple
    } else {
        countDisplay.style.color = '#5e35b1'; // Medium Purple
    }
}

// Name Input Functionality
const nameInput = document.getElementById('name-input');
const submitBtn = document.getElementById('submit-btn');
const greetingText = document.getElementById('greeting-text');

submitBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    
    if (name !== '') {
        greetingText.textContent = `Hello, ${name}! Welcome to our website.`;
        nameInput.value = '';
    } else {
        alert('Please enter your name first!');
    }
});

// Also allow submitting when pressing Enter
nameInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        submitBtn.click();
    }
});

// Todo List Functionality
const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoList = document.getElementById('todo-list');

// Add new todo item
addTodoBtn.addEventListener('click', () => {
    addTodoItem();
});

// Allow submitting when pressing Enter
todoInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        addTodoBtn.click();
    }
});

function addTodoItem() {
    const todoText = todoInput.value.trim();
    
    if (todoText !== '') {
        // Create new elements
        const li = document.createElement('li');
        li.className = 'todo-item';
        
        const todoTextSpan = document.createElement('span');
        todoTextSpan.textContent = todoText;
        
        const todoActions = document.createElement('div');
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        
        // Add item to the list
        todoActions.appendChild(deleteBtn);
        li.appendChild(todoTextSpan);
        li.appendChild(todoActions);
        todoList.appendChild(li);
        
        // Clear input
        todoInput.value = '';
        
        // Handle item click (mark as completed)
        todoTextSpan.addEventListener('click', () => {
            todoTextSpan.classList.toggle('completed');
        });
        
        // Handle delete
        deleteBtn.addEventListener('click', () => {
            li.remove();
        });
    } else {
        alert('Please enter a task!');
    }
}