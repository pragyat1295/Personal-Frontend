import React, { Component } from 'react'

export default class home extends Component {
  
    constructor(props) {
        super(props);

        this.state = {
            myName: '',
            myEmail: '',
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        // console.log("onChanging");

        this.setState({ [e.target.name]: e.target.value });
        console.log({[e.target.name]: e.target.value});
    }

    onSubmit(e) {

        console.log("Form Submitted", this.state);
        e.preventDefault();
        this.setState({
            myEmail: '',
            myName: ''
        });
        
    }

    render() {
    return (
      <div>
        <form className='container col-8' onSubmit={this.onSubmit}>
            <input className='form-control' type = 'text' placeholder='Name' name='myName' value={this.state.myName} onChange={this.onChange} required/>
            <br/>
            <input className='form-control'type = "text" name='myEmail' value={this.state.myEmail} placeholder =  "Email" onChange = {this.onChange} required />
            <br/>
            <button className='btn btn-success' type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}


// import React from 'react'
// const Home = () => {
//   return (
//     <div className="container">
    
//       <h1 className="text-center" style={{paddingTop: "30%"}}>
//         Home
//       </h1>
      
//     </div>
//   )
// }
// export default Home;