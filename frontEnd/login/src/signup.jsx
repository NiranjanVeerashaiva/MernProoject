import { useRef } from 'react';
import './css/signup.css'
import i1 from './image1.png'
import axios from 'axios';
const Signup = () => {
    let name = useRef("")
    let email = useRef("")
    let password = useRef("")
    let ConfirmPassword = useRef("")
    let submit = (x) => {
        x.preventDefault()
        let data = { name: name.current.value, email: email.current.value, password: password.current.value, ConfirmPassword: ConfirmPassword.current.value }

        if (data.name && data.email && data.password && (data.password == data.ConfirmPassword)) {
            axios.post('http://localhost:3002/signup', data).then((res) => {

                alert(res.data.message)
            })
        }
        else {
            alert("invalid credentials")
        }


    }
    return (

        <div className="box">
            <div className="left">
                <img src={i1} alt="" />
            </div>
            <div className="right">

                <div className="content">
                    <h2>Login to Colorlib</h2>
                    <form action="" onSubmit={submit}>
                        <label htmlFor="">username</label>
                        <input type="text" ref={name} placeholder='name' /><br />
                        <label htmlFor="">Email</label><br />
                        <input type="email" ref={email} placeholder='your email' />
                        <label htmlFor="">Password</label>
                        <input type="password" ref={password} placeholder='your-password' />
                        <label htmlFor=""> confirm  Password</label>
                        <input type="password" ref={ConfirmPassword} placeholder='confirm-password' /> <br />
                        <button>sign up</button>
                    </form>
                </div>
            </div>
        </div>


    );
}

export default Signup;