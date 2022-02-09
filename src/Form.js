import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskContext from './TaskList';

const Form = (setTodos,todos) => {
    const [inputText,setInputText] = useState(' ');

    const displayValue = e => {
        setInputText(e.target.value)
        console.log(e.target.value);
    }

    const inputSubmit = () => {
        setTodos([...todos,{text:inputText,completed:false,id:Math.random * 1000}])
        setInputText(' ');
    }
    
    return (
        <div className="container_input">
            <div className="button_input">
                <input type="text" value={inputText} onChange={displayValue}/>
                <button>ADD</button>
                
            </div>
        </div>
    );

}

export default Form