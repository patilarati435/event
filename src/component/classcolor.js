import React, { Component } from 'react';

class Classcolor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: 'white' // Initial background color is set to 'white'
    };
  }

  handleColorChange = (newColor) => {
    this.setState({ backgroundColor: newColor });
  }

  render() {
    const { backgroundColor } = this.state;

    return (
      <div style={{ backgroundColor: backgroundColor }}>
        {/* Content of the component */}
        <h1>Component with Background Color</h1>
        <p>Current background color: {backgroundColor}</p>
        <button onClick={() => this.handleColorChange('red')}>Red</button>
        <button onClick={() => this.handleColorChange('blue')}>Blue</button>
        <button onClick={() => this.handleColorChange('green')}>Green</button>
      </div>
    );
  }
}

export default Classcolor;
