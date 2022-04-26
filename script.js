
// English version 

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

const english = document.querySelector('#english')
const polish = document.querySelector('#polish')
const englishVersion = document.querySelector('.english')
const polishVersion = document.querySelector('.polish')

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
		alert("You have to complete all fields of form!");
	}
};

const clearFormPanel = () => {
	nameInput.value = "";
	amountInput.value = "";
	selectCategory.selectedIndex = 0;
};

const createTransaction = () => {

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

    if(parseFloat(availableMoney.textContent) < 0){
        availableMoney.style.color = 'rgb(170, 19, 19)'
    } else{
        availableMoney.style.color = 'rgb(59, 59, 59)'
    }
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

// Polish version 

const incomeAreaPl = document.querySelector(".income-area-pl");
const expensesAreaPl = document.querySelector(".expenses-area-pl");
const availableMoneyPl = document.querySelector(".handler-amount-pl");
const addTransactionPanelPl = document.querySelector(".add-transaction-panel-pl");

const nameInputPl = document.querySelector(".name-pl");
const amountInputPl = document.querySelector(".amount-pl");
const selectCategoryPl = document.querySelector(".category-pl");

const addTransactionPl = document.querySelector(".add-transaction-pl");
const removeTransactionPl = document.querySelector(".transaction-delete-pl");
const removeAllTransactionPl = document.querySelector(".remove-all-transaction-pl");
const saveTransactionPl = document.querySelector(".save-pl");
const cancelTransactionPl = document.querySelector(".cancel-pl");

const lightStylePl = document.querySelector(".light-pl");
const darkStylePl = document.querySelector(".dark-pl");

let IDPL = 0;
let categoryIconPl;
let selectedCategoryPl;
let amountArrayPl = [0];

const showPanelPl = () => {
	addTransactionPanelPl.style.display = "flex";
};

const closePanelPl = () => {
	addTransactionPanelPl.style.display = "none";
	clearFormPanelPl();
};

const checkFormPanelPl = () => {
	if (
		nameInputPl.value !== "" &&
		amountInputPl.value !== "" &&
		selectCategoryPl.value !== "none"
	) {
		createTransactionPl()
	} else {
		alert("Uzupełnij wszystkie pola!");
	}
};

const clearFormPanelPl = () => {
	nameInputPl.value = "";
	amountInputPl.value = "";
	selectCategoryPl.selectedIndex = 0;
};

const createTransactionPl = () => {

	const newTransaction = document.createElement("div");
	newTransaction.classList.add("transaction");
	newTransaction.setAttribute("id", IDPL);
    checkIconPl(selectedCategoryPl);

	newTransaction.innerHTML = `<p class="transaction-name">${categoryIconPl} ${nameInputPl.value}</p>
                                <p class="transaction-amount">${amountInputPl.value} USD<button class="transaction-delete transaction-delete-pl" onclick=deleteTransactionPl(${IDPL})><i
                                    class="ti ti-x"></i></button></p>`;


    if(amountInputPl.value > 0){
        incomeAreaPl.appendChild(newTransaction)
        newTransaction.classList.add('income')
    } else{
        expensesAreaPl.appendChild(newTransaction)
        newTransaction.classList.add('expense')
    }

    amountArrayPl.push(parseFloat(amountInputPl.value))
    calculatePl(amountArrayPl)
    IDPL++
    closePanelPl()
    clearFormPanelPl()
};

const checkIconPl = transaction => {
    switch(transaction){
        case '[ + ] Wpłata':
            categoryIconPl = '<i class="ti ti-cash"></i>';
            break;
        case '[ - ] Zakupy':
            categoryIconPl = '<i class="ti ti-currency-dollar"></i>';
            break;
        case '[ - ] Jedzenie':
            categoryIconPl = '<i class="ti ti-shopping-cart"></i>';
            break;
        case '[ - ] Rozrywka':
            categoryIconPl = '<i class="ti ti-movie"></i>';
            break;
        case '[ - ] Samochód':
            categoryIconPl = '<i class="ti ti-car"></i>';
            break;
        case '[ - ] Dom':
                categoryIconPl = '<i class="ti ti-home"></i>';
                break;
        case '[ - ] Pozostałe':
                categoryIconPl = '<i class="ti ti-credit-card"></i>';
                break;
    }
}

const calculatePl = (amount) => {
    const newAmount = amount.reduce ((a, b) => a + b)
    availableMoneyPl.textContent = `${newAmount} USD`

    if(parseFloat(availableMoneyPl.textContent) < 0){
        availableMoneyPl.style.color = 'rgb(170, 19, 19)'
    } else{
        availableMoneyPl.style.color = 'rgb(59, 59, 59)'
    }
}

const deleteTransactionPl = id => {
    const transactionToDelete = document.getElementById(id)
    const amountOfTransaction = parseFloat(transactionToDelete.childNodes[2].innerText)
    const indexTransaction = amountArrayPl.indexOf(amountOfTransaction)

    amountArrayPl.splice(indexTransaction, 1)
    if(transactionToDelete.classList.contains('income')){
        incomeAreaPl.removeChild(transactionToDelete)
    } else {
        expensesAreaPl.removeChild(transactionToDelete)
    }

    calculatePl(amountArrayPl)
}

const chooseIconPl = () => {
    selectedCategoryPl = selectCategoryPl.options[selectCategoryPl.selectedIndex].text
    console.log(selectedCategoryPl);
}

const deleteAllTransactionPl = () => {
    incomeAreaPl.innerHTML = '<h3 class="income-area-heading">Wpłaty:</h3>'
    expensesAreaPl.innerHTML = '<h3 class="expenses-area-heading">Wydatki:</h3>'
    availableMoneyPl.textContent = '0 USD'
    amountArrayPl = [0]
    availableMoneyPl.style.color = 'rgb(59, 59, 59)'
}

const chooseLightStylePl = () => {
    root.style.setProperty('--light-color', 'rgb(207, 207, 207)')
    root.style.setProperty('--dark-color', 'rgb(59, 59, 59)')
    root.style.setProperty('--border-color', 'rgba(0, 0, 0, 0.3)')
}

const chooseDarkStylePl = () => {
    root.style.setProperty('--light-color', 'rgb(59, 59, 59)')
    root.style.setProperty('--dark-color', 'rgb(207, 207, 207)')
    root.style.setProperty('--border-color', 'rgba(255, 255, 255, 0.4)')
}

const choosePolishVersion= () => {
    englishVersion.style.display = "None"
    polishVersion.style.display = "Flex"
}

const chooseEnglishVersion= () => {
    englishVersion.style.display = "Flex"
    polishVersion.style.display = "None"
}

addTransactionPl.addEventListener("click", showPanelPl);
cancelTransactionPl.addEventListener("click", closePanelPl);
saveTransactionPl.addEventListener("click", checkFormPanelPl);
removeAllTransactionPl.addEventListener('click', deleteAllTransactionPl)
lightStylePl.addEventListener('click', chooseLightStylePl)
darkStylePl.addEventListener('click', chooseDarkStylePl)
english.addEventListener('click', chooseEnglishVersion)
polish.addEventListener('click', choosePolishVersion)
