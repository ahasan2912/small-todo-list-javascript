document.getElementById('theme1').addEventListener('click', function () {
    const theme = document.getElementsByTagName('html')[0];
    theme.setAttribute('data-theme', 'light');
});
document.getElementById('theme2').addEventListener('click', function () {
    const theme = document.getElementsByTagName('html')[0];
    theme.setAttribute('data-theme', 'dark');
});

let x = 1;

//For Click
const doneBtn = document.getElementById('add-task').addEventListener('click', function () {
    const inputFiled = document.getElementById('input-field');
    const inputValue = inputFiled.value;
    if (inputValue.length === 0) {
        alert("Please typing some word");
    }
    else{
        const addItem = document.getElementById('add-item');
        const ul = document.createElement('ul');
        const hr = document.createElement('hr');
        ul.classList.add('grid');
        ul.classList.add('grid-cols-3');
        ul.classList.add('my-2');
        ul.setAttribute('id','ul-tag')
        ul.innerHTML = `<li>${x++}</li>
                        <li>${inputValue}</li>
                        <li><button onclick = "deleteTr(this)" id="done-bnt" class="bg-yellow-500 text-white p-2 border-2
                        border-green-500 rounded-md">Done</button></li>`;
        addItem.appendChild(ul);
        addItem.appendChild(hr);
        inputFiled.value = '';
    }
});
//For Enter press
document.getElementById('input-field').addEventListener("keyup", function (event) {
    if (event.key === 'Enter') {
        const inputFiled = document.getElementById('input-field');
        const inputValue = inputFiled.value;
        if (inputValue.length === 0) {
            alert("Please typing some word");
        }
        else {
            const addItem = document.getElementById('add-item');
            const ul = document.createElement('ul');
            const hr = document.createElement('hr');
            ul.classList.add('grid');
            ul.classList.add('grid-cols-3');
            ul.classList.add('my-2');
            ul.innerHTML = `<li>${x++}</li>
                        <li>${inputValue}</li>
                        <li><button onclick = "deleteTr(this)" class="bg-yellow-500 text-white p-2 border-2 border-green-500 rounded-md">Done</button></li>`;
            addItem.appendChild(ul);
            addItem.appendChild(hr);
            inputFiled.value = '';
        }
    }
});
//Clear All
document.getElementById('clear-all').addEventListener('click', function(event){
    const addItem = document.getElementById('add-item');
    addItem.innerHTML = '';
});

function deleteTr(event) {
    const tr = event.parentNode.previousElementSibling;
    tr.style.textDecoration = 'line-through';
    const tr2 = event.parentNode;
    tr2.innerHTML =`<li><button onclick="myFunction(this)" id="done-bnt" class="bg-red-600 text-white p-2 border-2 border-green-500 rounded-md">Delete</button></li>`;
}
function myFunction(event){
    const tr = event.parentNode.parentNode.parentNode;
    tr.remove();
}

/* <ul>
        <li>
            <span></span>
            <span></span>
            <span></span>
        </li>
</ul> */