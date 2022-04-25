const incomeArea = document.querySelector(".income-area");
const expensesArea = document.querySelector(".expenses-area");
const availableMoney = document.querySelector(".handler-amount");
const addTransactionPanel = document.querySelector(".add-transaction-panel");

const nameInput = document.querySelector("#name");
const amountInput = document.querySelector("#amount");
const selectCategory = document.querySelector("#category");

const addTransaction = document.querySelector(".add-transaction");
const removeTransaction = document.querySelector(".transaction-delete");
const removeAllTransaction = document.querySelector(".remove-all-transaction");
const saveTransaction = document.querySelector(".save");
const cancelTransaction = document.querySelector(".cancel");

const lightStyle = document.querySelector(".light");
const darkStyle = document.querySelector(".dark");

let root = document.documentElement;
let ID = 0;
let categoryIcon;
let selectedCategory;
let amountArray = [0];

const showPanel = () => {
	addTransactionPanel.style.display = "flex";
};

const closePanel = () => {
	addTransactionPanel.style.display = "none";
	clearFormPanel();
};

const checkFormPanel = () => {
	if (
		nameInput.value !== "" &&
		amountInput.value !== "" &&
		selectCategory.value !== "none"
	) {
		createTransaction()
	} else {
		alert("Uzupełnij wszystkie pola!");
	}
};

const clearFormPanel = () => {
	nameInput.value = "";
	amountInput.value = "";
	selectCategory.selectedIndex = 0;
};

const createTransaction = () => {
    let color;

	const newTransaction = document.createElement("div");
	newTransaction.classList.add("transaction");
	newTransaction.setAttribute("id", ID);
    checkIcon(selectedCategory);

	newTransaction.innerHTML = `<p class="transaction-name">${categoryIcon} ${nameInput.value}</p>
                                <p class="transaction-amount">${amountInput.value} USD<button class="transaction-delete" onclick=deleteTransaction(${ID})><i
                                    class="ti ti-x"></i></button></p>`;


    if(amountInput.value > 0){
        incomeArea.appendChild(newTransaction)
        newTransaction.classList.add('income')
    } else{
        expensesArea.appendChild(newTransaction)
        newTransaction.classList.add('expense')
    }

    amountArray.push(parseFloat(amountInput.value))
    calculate(amountArray)
    ID++
    closePanel()
    clearFormPanel()
};

const checkIcon = transaction => {
    switch(transaction){
        case '[ + ] Deposit':
            categoryIcon = '<i class="ti ti-cash"></i>';
            break;
        case '[ - ] Shopping':
            categoryIcon = '<i class="ti ti-currency-dollar"></i>';
            break;
        case '[ - ] Eating':
            categoryIcon = '<i class="ti ti-shopping-cart"></i>';
            break;
        case '[ - ] Leisure':
            categoryIcon = '<i class="ti ti-movie"></i>';
            break;
        case '[ - ] Car':
            categoryIcon = '<i class="ti ti-car"></i>';
            break;
        case '[ - ] Home':
                categoryIcon = '<i class="ti ti-home"></i>';
                break;
        case '[ - ] Other':
                categoryIcon = '<i class="ti ti-credit-card"></i>';
                break;
    }
}

const calculate = (amount) => {
    const newAmount = amount.reduce ((a, b) => a + b)
    availableMoney.textContent = `${newAmount} USD`
}

const deleteTransaction = id => {
    const transactionToDelete = document.getElementById(id)
    const amountOfTransaction = parseFloat(transactionToDelete.childNodes[2].innerText)
    const indexTransaction = amountArray.indexOf(amountOfTransaction)

    amountArray.splice(indexTransaction, 1)
    if(transactionToDelete.classList.contains('income')){
        incomeArea.removeChild(transactionToDelete)
    } else {
        expensesArea.removeChild(transactionToDelete)
    }

    calculate(amountArray)
}

const chooseIcon = () => {
    selectedCategory = selectCategory.options[selectCategory.selectedIndex].text
}

const deleteAllTransaction = () => {
    incomeArea.innerHTML = '<h3 class="income-area-heading">Deposit:</h3>'
    expensesArea.innerHTML = '<h3 class="expenses-area-heading">Expense:</h3>'
    availableMoney.textContent = '0 USD'
    amountArray = [0]
}

const chooseLightStyle = () => {
    root.style.setProperty('--light-color', 'rgb(207, 207, 207)')
    root.style.setProperty('--dark-color', 'rgb(59, 59, 59)')
    root.style.setProperty('--border-color', 'rgba(0, 0, 0, 0.3)')
}

const chooseDarkStyle = () => {
    root.style.setProperty('--light-color', 'rgb(59, 59, 59)')
    root.style.setProperty('--dark-color', 'rgb(207, 207, 207)')
    root.style.setProperty('--border-color', 'rgba(255, 255, 255, 0.4)')
}

addTransaction.addEventListener("click", showPanel);
cancelTransaction.addEventListener("click", closePanel);
saveTransaction.addEventListener("click", checkFormPanel);
removeAllTransaction.addEventListener('click', deleteAllTransaction)
lightStyle.addEventListener('click', chooseLightStyle)
darkStyle.addEventListener('click', chooseDarkStyle)
