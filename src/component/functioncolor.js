import React, { useState } from 'react';

function Functioncolor (props) {
  const [backgroundColor, setBackgroundColor] = useState('white'); // Initial background color is set to 'white'

  const handleColorChange = (newColor) => {
    setBackgroundColor(newColor);
  }

  return (
    <div style={{ backgroundColor: backgroundColor }}>
      {/* Content of the component */}
      <h1>Component with Background Color</h1>
      <p>Current background color: {backgroundColor}</p>
      <button onClick={() => handleColorChange('red')}>Red</button>
      <button onClick={() => handleColorChange('blue')}>Blue</button>
      <button onClick={() => handleColorChange('green')}>Green</button>
    </div>
  );
}

export default Functioncolor;
