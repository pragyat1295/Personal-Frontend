import React  from 'react';
import { NavLink } from 'react-router-dom';
// import '../styles/navbar.css';

const MyNav = () => {

  return (

    <div className='myBody'>
      <div className='row'>

        <div className='col-4'>
          <NavLink to='/' exact><h3>Pragyat Mishra</h3> </NavLink>
          {/* <input type="checkbox" className='nav-checkbox'/> */}
          <label htmlFor="nav-toggle" className='myNav-button'>
            <span></span>
          </label>
        </div>
        
        <div className='col-7'>
          <nav className='myNav-content' role= 'navigation'>
            <div className='row'>
              

                <div className='clo-2'>
                  
                    <NavLink to="/" exact>
                      Home
                    </NavLink>
                  
                </div> 

                <div className='clo-2'>
                  
                    <NavLink to = '/about' exact>
                      About Me
                    </NavLink>
                  
                </div>

                <div className='clo-2'>
                 <NavLink to =  '/contact' exact>
                      Contact Me
                    </NavLink>
                  
                </div>
              
            </div>

            
          </nav>
        </div>
        
      </div>
    </div>

    
  )
}

export default MyNav;