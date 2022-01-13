import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props){
    return (
        <Card className='expense-item'>
            
            <ExpenseDate expDate={props.data.expDate}/>
            
            <div className='expense-item__description'>
                <h2>{props.data.expTitle}</h2>
                <div className='expense-item__price'>${props.data.expPrice}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;