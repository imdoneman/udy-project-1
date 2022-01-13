import React, {useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";

const initialObj = [
  {
    expDate:new Date(2021,1,3),
    expTitle:"bought a car",
    expPrice: 16216,
    id: '01'
  },
  {
    expDate:new Date(2022,0,2),
    expTitle:"boughgt a bike",
    expPrice: 2864,
    id: '02'
  },
  {
    expDate:new Date(2020,2,1),
    expTitle:"bought a iphone",
    expPrice: 1216,
    id: '03'
  }
]

function App() {
  const [expObj, setExpObj] = useState(initialObj);
  
  
  const addExpData = expense => {
    setExpObj(prevExp =>{return [expense, ...prevExp]});    
    // console.log(expense);
  }
  const [select, setSelect] = useState('null');
  const showSelect = exp => {
    setSelect(exp);
  }
  
  return (
    <div className="App">
      <NewExpense onSaveData={addExpData}/>
      
      <Expenses selected={select} onSelect={showSelect} data={expObj}/>
    </div>
  );
}

export default App;
