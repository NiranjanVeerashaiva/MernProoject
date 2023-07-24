import {Link} from 'react-router-dom'
import './css/navbar.css'
const Navbar = () => {
    return ( 
        <div className="nav">
            <div className="leftnav">
            <h2>Stories <span style={{color:"yellow",fontSize:"50px",marginRight:"20px"}}>.</span></h2>
            </div>
            <div className="rightnav">
                <Link to='/home'>Home</Link>
                <Link to='/food'>Food list</Link>
                <Link to='/addfood'>Add Food</Link>

            </div>
           
        </div>
     );
}
 
export default Navbar;