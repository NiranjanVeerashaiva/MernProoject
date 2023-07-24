import { useRef } from 'react';
import './css/addfood.css'
import f1 from './food.png'
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
const AddFood = () => {
    let navigate=useNavigate()
    let title=useRef("")
    let author=useRef("")
    let imageURL=useRef("")
    let submit=(a)=>{
        a.preventDefault()
        let data={title:title.current.value,author:author.current.value,imageURL:imageURL.current.value}

            axios.post('http://localhost:3002/addfood',data).then((res)=>{
                alert(res.data.message)
                 navigate('/food')
            })

            
        
       

        // console.log(data);
    }
    return ( 
        <div className="addfood">
            <div className="foodimg">
                <img src={f1} alt="" />
            </div>
            <div className="additem">
            <form action="" onSubmit={submit}>
                
                <input type="text" ref={title} placeholder='food title'/>
               
                <input type="text" ref={author} placeholder='author'/> <br />
                <input type="imageURL" ref={imageURL} placeholder='image url'/>
                <button>Add food</button>
            </form>
            </div>
          
        </div>
     );
}
 
export default AddFood;