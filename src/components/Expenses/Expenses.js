import React from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpensesChart from './ExpensesChart';

function Expenses(props){ 
    
    const addSelectData = (select) => {
        props.onSelect(select);
    }
    const filteredArray = props.data.filter(value=>{return value.expDate.getFullYear().toString()===props.selected});
    let expression = <h3 className='condition'>No Expenses have been made</h3>;
    if(filteredArray.length) {expression=filteredArray.map(exp=><ExpenseItem key={exp.id} data={exp}/>)}
    return (
        <Card className='expenses'>
            <ExpensesFilter selected={props.selected} onSaveSelectData={addSelectData}/>
            <ExpensesChart expenses={filteredArray}/>
            {(props.selected!=='null')?expression:props.data.map(exp=><ExpenseItem key={exp.id} data={exp}/>)}
        </Card>
    );

}
    export default Expenses;
    