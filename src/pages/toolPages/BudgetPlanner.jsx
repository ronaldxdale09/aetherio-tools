import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BudgetPlanner = () => {
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState([
    { id: 1, category: 'Housing', amount: '', description: '' }
  ]);
  const [budget, setBudget] = useState(null);

  const addExpense = () => {
    const newId = expenses.length + 1;
    setExpenses([
      ...expenses,
      { id: newId, category: '', amount: '', description: '' }
    ]);
  };

  const handleExpenseChange = (id, field, value) => {
    setExpenses(
      expenses.map(expense => 
        expense.id === id ? { ...expense, [field]: value } : expense
      )
    );
  };

  const calculateBudget = () => {
    const totalIncome = parseFloat(income) || 0;
    const totalExpenses = expenses.reduce(
      (sum, expense) => sum + (parseFloat(expense.amount) || 0), 
      0
    );
    
    const remaining = totalIncome - totalExpenses;
    const expensesByCategory = {};
    
    expenses.forEach(expense => {
      if (expense.category && expense.amount) {
        const amount = parseFloat(expense.amount) || 0;
        if (!expensesByCategory[expense.category]) {
          expensesByCategory[expense.category] = 0;
        }
        expensesByCategory[expense.category] += amount;
      }
    });
    
    setBudget({
      totalIncome,
      totalExpenses,
      remaining,
      expensesByCategory
    });
  };

  return (
    <div className="budget-planner-container">
      <header>
        <h1>Budget Planner</h1>
        <Link to="/tools" className="back-link">Back to Tools</Link>
      </header>

      <div className="budget-form">
        <section className="form-section">
          <h2>Income</h2>
          <div className="input-group">
            <label htmlFor="income">Monthly Income</label>
            <input
              type="number"
              id="income"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              placeholder="Enter your monthly income"
            />
          </div>
        </section>

        <section className="form-section">
          <h2>Expenses</h2>
          {expenses.map((expense) => (
            <div key={expense.id} className="expense-item">
              <select
                value={expense.category}
                onChange={(e) => handleExpenseChange(expense.id, 'category', e.target.value)}
              >
                <option value="">Select Category</option>
                <option value="Housing">Housing</option>
                <option value="Transportation">Transportation</option>
                <option value="Food">Food</option>
                <option value="Utilities">Utilities</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Other">Other</option>
              </select>
              
              <input
                type="number"
                placeholder="Amount"
                value={expense.amount}
                onChange={(e) => handleExpenseChange(expense.id, 'amount', e.target.value)}
              />
              
              <input
                type="text"
                placeholder="Description (optional)"
                value={expense.description}
                onChange={(e) => handleExpenseChange(expense.id, 'description', e.target.value)}
              />
            </div>
          ))}
          <button type="button" onClick={addExpense} className="add-button">Add Expense</button>
        </section>

        <div className="form-actions">
          <button type="button" onClick={calculateBudget} className="calculate-button">Calculate Budget</button>
        </div>
      </div>

      {budget && (
        <div className="budget-results">
          <h2>Budget Summary</h2>
          <div className="budget-summary">
            <div className="summary-item">
              <span>Total Income:</span>
              <span>${budget.totalIncome.toFixed(2)}</span>
            </div>
            <div className="summary-item">
              <span>Total Expenses:</span>
              <span>${budget.totalExpenses.toFixed(2)}</span>
            </div>
            <div className="summary-item remaining">
              <span>Remaining:</span>
              <span 
                className={budget.remaining >= 0 ? 'positive' : 'negative'}
              >
                ${budget.remaining.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="expense-breakdown">
            <h3>Expense Breakdown</h3>
            <ul>
              {Object.entries(budget.expensesByCategory).map(([category, amount]) => (
                <li key={category}>
                  <span>{category}:</span>
                  <span>${amount.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default BudgetPlanner; 