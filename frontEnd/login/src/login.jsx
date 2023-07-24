import i1 from './image1.png'
import {Link, Navigate, useNavigate} from 'react-router-dom'
import './css/login.css'
import { useRef } from 'react'
import axios from 'axios'
const LoginPage = () => {
    let navigate=useNavigate()
    let email=useRef("")
    let password=useRef("")
    let submit=(a)=>{
        a.preventDefault()
        let data={email:email.current.value,password:password.current.value}
        axios.post('http://localhost:3002/signin',data)
        .then((res)=>{
            alert(res.data.message)
            if(res.data.status==200){
                navigate("/home")
            }
        })
        console.log(data);
    }
    return ( 
       
            <div className="box">
            <div className="left">
                <div className="content">
                    <h2>Login to Colorlib</h2>
                    <form action="" onSubmit={submit}>
                        <label htmlFor="">username</label>
                        <input ref={email} type="email" placeholder='your-email'/>
                        <label htmlFor="">Password</label>
                        <input ref={password} type="password" placeholder='your-password'/><br />
                        <Link to='/signup' >sign up</Link> <br />
                        <button>login</button>
                    </form>
                </div>
            </div>
            <div className="right">
                <img src={i1} alt="" />
            </div>
            </div>
        
     
     );
}
 
export default LoginPage;