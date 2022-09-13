// import React, { Component } from 'react'

// export default class about extends Component {
//   render() {
//     return (
//       <div>
//         <h1>About Me is working</h1>
//       </div>
//     )
//   }
// }



import React, { useEffect, useState } from 'react';
import { UserData } from '../data/userData';
// const UserData = [
//   { name: "Jeevan" },
//   { name: "Manish" },
//   { name: "Prince" },
//   { name: "Arti" },
//   { name: "rahul" }
// ];

const About = () => {

  const [users, setUsers] = useState([]);
  // const [isChecked, setIsChecked] = useState(false);

  useEffect(
    () => {
      setUsers(UserData);
    }, []
    // [users] then the tick after checked won't work I have to know why?
  );

  // const handleChange = (e) => {
  //   const {name, checked} = e.target;
  //   // now store the user value we will store in the state.

  //   // as the user clicked we will assign a new property names isChecked in our users data and set it to true.

  //   if(name === 'selectAll') {
  //     let tempUser = users.map((user) => {return {...user, isChecked: checked}});

  //     setUsers(tempUser);
  //   }
  //   else {
  //     let tempUser = users.map(user => user.name === name ? {...user, isChecked : checked} : user);
  //     setUsers(tempUser);
  //   }

    
  // }

  const handleChange = (e) => {
    // get the name of the event by using name attribute.

    const {name, checked} = e.target;

    // checked means if it is set to true then that box will get checked if false then unchecked. So, we need a 
    // way to control that event.

    console.log(name);
    console.log('checked value' ,checked);

    // to control this first we need to store the user details into this state.

    if(name === 'selectAll') {
      let tempUser = users.map(user => {return {...users, isChecked: checked}});
      setUsers(tempUser);
      console.log(tempUser);
    }

    else {
      let tempUser = users.map(user => user.name === name ? {...user, isChecked : checked} : user);
      setUsers(tempUser);
      console.log(tempUser);
    }

    
  }

  return (
    <div className="container">
    
      <h1 className="text-center" style={{paddingTop: "30%"}}>
        About Me
      </h1>

      <div>
        I am Pragyat Mishra and here are my small projects.
      </div>

      {/* -------------------------- Adding select all property --------- */}
      <div style = {{margin: '3%'}}>
        <h1>
          Select All 
        </h1>


        <div style = {{marginTop: '2%'}}> 
            <input type = 'checkbox' name = "selectAll"
            // checked = {
            //   users.filter(user => user.isChecked !== true).length <1}
            checked={!users.some((user) => user?.isChecked !== true)}
              onChange = {handleChange}
             />
            <label style = {{marginLeft: '2%'}}>Select All </label>
          </div>

          {/* Right now without using name tag this part of the code is controlled by JSX but we waant to control it and want to make it
          a controlled component so we will use name tag and the onClick event. */}

        <div style = {{marginTop: '2%'}}>
          {users.map((user, index) => (
            
            <div key = {index} style = {{marginTop: '2%'}}> 
            <input type = 'checkbox' 
            name = {user.name}
            checked = {user?.isChecked || false}
            // checked = {false}
            onChange = {handleChange} 
            />
            <label style = {{marginLeft: '2%'}}>{user.name} </label>
          </div>
            
          ) )}
        </div>

      </div>
      
    </div>
  )
}
export default About;
