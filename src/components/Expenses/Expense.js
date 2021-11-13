import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";

function Expense(props) {
  const [filterYear, setFilterYear] = useState("2020");
  const filterChangeHandler = (slectedYear) => {
    setFilterYear(slectedYear);
  };
  const filterExpense = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  let filterContent = <p>No Expense Found</p>;
  if (filterExpense.length > 0) {
    filterContent = filterExpense.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    });
  }
  return (
    <div className="expenses">
      <ExpensesFilter selected={filterYear} onDropdown={filterChangeHandler} />

      {filterContent}
    </div>
  );
}

export default Expense;
