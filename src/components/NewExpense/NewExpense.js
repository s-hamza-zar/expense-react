
import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'

const NewExpense= (props) =>{
  const formSubmitHandler=(expense)=>{
      const expenseData={
          ...expense,
          id:Math.random().toString()
      }
    console.log("newExpense",expenseData)
    props.onSave(expenseData)
  }

    return(
     <div className="new-expense">
         <ExpenseForm  onSaveDate={formSubmitHandler}/>
     </div>



    );
};

export default NewExpense
