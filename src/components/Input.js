import React, { useState } from 'react'

function Input(props) {
    const[inputText,setInputText] = useState('');
    const handleEnterPress = (e) => {
      if (e.keyCode === 13) {
        props.addList(inputText);
        setInputText(''); // Reset input text after adding
      }
    };
  return (
    <div className='input-container'>
        <input type='text' 
        className='input-box' 
        placeholder='Enter your task' 
        value = {inputText} 
        onChange={e=>{setInputText(e.target.value)
        }}
        onKeyDown={handleEnterPress}
        />
        <button className='add'
        onClick={()=>{
          props.addList(inputText)
          setInputText('')
        }}>+ <p className='add-task'>Add Task</p></button>
    </div>
  )
}

export default Input