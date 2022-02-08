import React, { useState } from 'react';

const Form = () => {
    const [inputText,setInputText] = useState(' ');

    const displayValue = e => {
        setInputText(e.target.value)
        console.log(e.target.value);
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