import axios from "axios";
import { useEffect, useState } from "react";
import './css/food.css'
const Foodlist = () => {
    let [state,setState]=useState([])
    axios.get('http://localhost:3002/food')
    useEffect(()=>{
        let fetchdata=async ()=>{
            let response=await axios.get('http://localhost:3002/food')
            let data=response.data
           setState(data)
        }
        fetchdata()
    },[])
//    let del=()=>{
//     axios.delete('http://localhost:3002/food').then((res)=>{
//         if(res.status==200){
//             alert(res.message)
//         }
        
//     })
//    }
  
    return ( 
        <div className="food">
            {state.map((x)=>{
                return(
                    <div className="display">
                        <img src={x.imageURL} alt="" />
                        <h2>Title:{x.title}</h2>
                        <h3>Written by:{x.author}</h3>
                        <button onClick={del}>delete</button>
                    </div>
                )
            })}
        </div>
     );
}
 
export default Foodlist;