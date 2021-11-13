
import {useState} from 'react'
import "./ExpenseForm.css"


const ExpenseForm=(props)=>{

    const [enterTitle,setEnterTitle]=useState('')
    const [enterAmount,setEnterAmount]=useState('')
    const [enterDate,setEnterDate]=useState('')
    const titleChangeHandeler =(event)=>{
       setEnterTitle(event.target.value)
    }
    const amountChangeHandeler =(event)=>{
        setEnterAmount(event.target.value)
     }
     const dateChangeHandeler =(event)=>{
        setEnterDate(event.target.value)
     }

    const formHandler= (event)=>{
        event.preventDefault()
        const expense={
            title:enterTitle,
            amount:enterAmount,
            date:new Date(enterDate)
        }
    console.log('Expense From',expense)
    props.onSaveDate(expense)
    setEnterTitle('');
    setEnterAmount('');
    setEnterDate('');

    }

    return(

<form onSubmit={formHandler}>
  <div className="new-expense__controls">
      <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enterTitle} onChange={titleChangeHandeler}/>
       </div>
       <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.1" step="0.01" value={enterAmount} onChange={amountChangeHandeler}/>
       </div>
       <div className="new-expense__control">
          <label>Title</label>
          <input type="date" value={enterDate} onChange={dateChangeHandeler}/>
       </div>
  </div>
  <div className="new-expense__actions">
      <button type="submit">Add Expense</button>
       </div>
        </form>
    )
}

export default ExpenseForm