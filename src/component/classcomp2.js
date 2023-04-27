// import React from 'react'

// export default function classcomp2() {
//   return (
//     <div>
      
//     </div>
//   );
// }
import React from 'react';

class Classcomp2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'using class component',
    };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  convertToUppercase = () => {
    this.setState({ text: this.state.text.toUpperCase() });
  }

  render() {
    return (
      <div>
        {/* <h1>{this.props.heading}</h1> */}
        <label htmlFor="">Example of class component</label><br />
        <textarea name="" id="" rows="7" className='container ms-2 ' value={this.state.text} onChange={this.handleChange}></textarea>

        <button className='btn btn-primary' onClick={this.convertToUppercase}>Convert to Uppercase</button>
        <h4>previwe <br />{this.state.text}</h4>
      </div>
    );
  }
}

export default Classcomp2;


