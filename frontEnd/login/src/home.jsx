import './css/home.css'
import h1 from './home.png'
const Home = () => {
    return ( 
        <div className="main ">
            <div className="lefthome">
                <img src={h1} alt="" />
            </div>
            <div className="righthome">
                <div className="contents">
                <p>FEATURED POST</p>
                <h1>I Am a bloger & I Love Foods</h1>
                <div className="line">
                    
                </div>
                <p>A small river named dudden flows  by that place and supplies it with a necessary regililia</p>
                <button>Read more -</button>
                </div>
                
            </div>
        </div>
     );
}
 
export default Home;