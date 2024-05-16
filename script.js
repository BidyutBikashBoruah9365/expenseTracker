const expenseForm = document.getElementById("expenseForm")
const description = document.getElementById("description")
const amount = document.getElementById("amount")
const expenseList = document.getElementById("expenseList")

expenseForm.addEventListener("submit", function(e){
    e.preventDefault()
    const descriptionValue = description.value
    const amountValue = amount.value
    if (descriptionValue == " "){
        return this.addEventListener
    }
    addExpense(descriptionValue, amountValue)
})

function addExpense(descriptionValue,amountValue){
    console.log(descriptionValue)
    console.log(amountValue)
    const li = document.createElement("li")
    li.innerHTML = `<span>${descriptionValue}</span><span>$${amountValue}</span><button onclick="removeUnit"> Remove</button>`
    expenseList.appendChild(li)
}

// input field must be cleared
// description must not be empty or null
// remove button must work