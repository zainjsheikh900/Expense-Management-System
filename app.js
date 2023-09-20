const expenses = [];

        function addExpense() {
            const expenseName = document.getElementById("expenseName").value;
            const expenseAmount = parseFloat(document.getElementById("expenseAmount").value);
            const expenseDate = document.getElementById("expenseDate").value;

            if (expenseName.trim() === "" || isNaN(expenseAmount) || expenseAmount <= 0 || expenseDate.trim() === "") {
                alert("Please enter valid expense details.");
                return;
            }

            expenses.push({ name: expenseName, amount: expenseAmount, date: expenseDate });
            displayExpenses();
            calculateTotalExpenses();
            document.getElementById("expenseName").value = "";
            document.getElementById("expenseAmount").value = "";
            document.getElementById("expenseDate").value = "";
        }

        function displayExpenses() {
            const expenseList = document.getElementById("expenseList");
            expenseList.innerHTML = "";

            for (const expense of expenses) {
                const listItem = document.createElement("li");
                listItem.textContent = `${expense.name} - $${expense.amount.toFixed(2)} - Date: ${expense.date}`;
                expenseList.appendChild(listItem);
            }
        }

        function calculateTotalExpenses() {
            const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
            document.getElementById("totalExpenses").textContent = totalExpenses.toFixed(2);
        }
