import React, {useState} from 'react';
import './ExpenseForm.css';

function ExpenseForm(props){
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const [toggle, setToggle] = useState(false);

    // const [userInput, setUserInput] = useState({
    //     title:'',
    //     amount:'',
    //     date:''
    // });

    function changeTitleHandler(event){
        setTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     title:event.target.value
        // });

        // setUserInput(prevState=>{
        //     return {...prevState, title:event.target.value}
        // });
    }
    function changeAmountHandler(event){
        setAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     amount:event.target.value
        // });

        // setUserInput(prevState=>{
        //     return {...prevState, amount:event.target.value}
        // });
    }
    function changeDateHandler(event){
        setDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     date:event.target.value
        // });

        // setUserInput(prevState=>{
        //     return {...prevState, date:event.target.value}
        // });
    }
    function submitHandler(event){
        event.preventDefault();

        const expenseData = {
            expDate:new Date(date),
            expTitle:title,
            expPrice:+amount
                       
        }
        
        props.onSubmitData(expenseData);
        setTitle('');
        setAmount('');
        setDate('');
        setToggle(false);
    }
    function cancelFunc(){
        setToggle(false);
    }
    function toggleFunc(){
        setToggle(true);       
    }


    return(
        (toggle)?
            <form onSubmit={submitHandler}>
                            <div className='new-expense__controls'>
                                <div className='new-expense__control'>
                                    <label>Title</label>
                                    <input type='text' value={title} onChange={changeTitleHandler}/>
                                </div>
                                <div className='new-expense__control'>
                                    <label>Amount</label>
                                    <input type='number' value={amount} min='0.01' step='0.01' onChange={changeAmountHandler}/>
                                </div>
                                <div className='new-expense__control'>
                                    <label>Date</label>
                                    <input type='Date' value={date} min='2019-01-01' max='2022-12-31' onChange={changeDateHandler}/>
                                </div>
                            </div>
                            <div className='new-expense__actions'>
                                <button type='submit'>Add Expense</button>
                                <button onClick={cancelFunc}>Cancel</button>
                            </div>
            </form>:
            <div>
            <button onClick={toggleFunc}>Add new Expense</button>
            </div>

    );                
}

export default ExpenseForm;