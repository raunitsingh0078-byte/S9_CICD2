import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
 const [isOpen , setIsOpen] = useState(false);
 const [isRegister , setIsRegister] = useState(false);
 const [pageIndex , setPageIndex] = useState(0);
  return (
    <>
    <button
  onClick={() => {
    setIsOpen(true);
    setIsRegister(false);   
  }}
>
  Open Login
</button>

<button
  onClick={() => {
    setIsRegister(true);
    setIsOpen(false);      
  }}
>
  Open Register
</button>

     {isOpen && (
        <div className="overlay">
          <div className="modal">
            <h2>Login</h2>
            <input type="text" placeholder="Username" /><br></br>
            <input type="password" placeholder="Password" />
           
            <div className="actions">
              <button onClick={() => setIsOpen(false)}>Cancel</button>
              <button>Login</button>
            </div>
           
          </div>
        </div>
      )}
      
     
     {isRegister && (
      
        <div className="overlay">
          <div className="modal">
            <h2>Register</h2>
            <input type="text" placeholder="Username" /><br></br>
            <input type="password" placeholder="Password" />
            
            <div className="actions">
              <button onClick={() => setIsRegister(false)}>Cancel</button>
              <button>Register</button>
            </div>
            
          </div>
        </div>
      )}
      
      
    </>
  )
}

export default App