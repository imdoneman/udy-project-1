import './NewExpense.css';
import ExpenseForm from './ExpenseForm';


function NewExpense(props){
    
    const saveExpenseDataHandler = (expData) => {
        const expObj = {
            ...expData,
            id: Math.random().toString()
        };
        props.onSaveData(expObj);
    };

    
    return(
        <div className='new-expense'>
            <ExpenseForm onSubmitData={saveExpenseDataHandler}/>
        </div>
    );
}

export default NewExpense;