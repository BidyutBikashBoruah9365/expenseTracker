const expenseForm = document.getElementById("expenseForm")
const description = document.getElementById("description")
const amount = document.getElementById("amount")
const expenseList = document.getElementById("expenseList")

expenseForm.addEventListener("submit", function(e){
    e.preventDefault()
    const descriptionValue = description.value
    const amountValue = amount.value
    if (descriptionValue.trim() === "" || isNaN(amountValue) || amountValue <= 0){
    alert("Please enter a valid description or amount")
    return
    }
    addExpense(descriptionValue, amountValue)
    description.value = ""
    amount.value = ""
})

function addExpense(descriptionValue,amountValue){
    console.log(descriptionValue)
    console.log(amountValue)
    const li = document.createElement("li")
    li.innerHTML = `<span>${descriptionValue}</span><span>$${amountValue}</span><button onclick="removeUnit"> Remove</button>`
    const removeButton = li.querySelector("button")
    removeButton.addEventListener("click", function(){
        removeExpense(li)
    })
    expenseList.appendChild(li)
}

function removeExpense(li){
    expenseList.removeChild(li)
    console.log("Button Clicked")
}

// input field must be cleared
// description must not be empty or null
// remove button must work