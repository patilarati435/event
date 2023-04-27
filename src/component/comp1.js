import React, { useState } from 'react';

function Comp1(props) {
  const [text, setText] = useState('by using function component');

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const convertToUppercase = () => {
    setText(text.toUpperCase());
  }
  const convertToLowercase = () => {
    setText(text.toLowerCase());
  }

  return (
    <div>
      {/* <h1>{props.heading}</h1> */}
      <label htmlFor="">Example of Function Component</label><br />
      <textarea name="" id="" rows="7" className='container mx-auto ' value={text} onChange={handleChange}></textarea>
      
      <button className='btn btn-primary' onClick={convertToUppercase}>Convert to Uppercase</button>
      <button className='btn btn-primary' onClick={convertToLowercase}>Convert to Lowercase</button> {/* Fixed button text */}
      <h4>preview <br />{text}</h4> {/* Fixed spelling of "preview" */}
    </div>
  );
}

export default Comp1;
