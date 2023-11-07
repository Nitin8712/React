import {Award} from 'lucide-react'
import './Assert/Css/style.css';
export const App = () => {
  return (
    <>
      {/* <div className="myform"> */}
        <form className="f1">
          <input type="text" name="name" id="" placeholder="Name" className="fx1"/>
          <input type="email" name="" id="" placeholder="Email"  className="fx1"/>
          <input type="number" name="" id="" placeholder="Phone"  className="fx1"/>
          <input type="text" name="" id="" placeholder="Username"  className="fx1"/>
          <input type="password" name="" id="" placeholder="Password"  className="fx1"/>
          {/* <input type="submit" value="Register"  className="fx2"></input> */}
          <button className="fx2"><Award size={36} color="#fffafa" strokeWidth={1} /> Register</button>
        </form>
      {/* </div> */}
    </>
  )
}
