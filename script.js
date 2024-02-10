const inputValue = document.getElementById('input-box')
console.log(inputValue)
const containerUl = document.getElementById('list-container')
console.log(containerUl)

function addTask(){
    if(inputValue.value === '') {
        alert('Please enter task')
    }
    else{
        let li = document.createElement('li')
        li.innerHTML = inputValue.value
        containerUl.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    saveData();
}

containerUl.addEventListener("click",function(e){
    console.log(e)
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }

    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData(){
    localStorage.setItem("data", containerUl.innerHTML)
}

function showTask(){
    containerUl.innerHTML = localStorage.getItem("data")
}

showTask()