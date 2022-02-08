import React, { useState } from 'react';

const Form = () => {
    const [inputText,setInputText] = useState(' ');
    return (
        <div className="container_input">
            <div className="button_input">
                <input type ="text"/>
                <button>ADD</button>

            </div>
        </div>
    );

}

export default Form