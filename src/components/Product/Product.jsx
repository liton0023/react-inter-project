import { IoChevronDownOutline } from "react-icons/io5";
import { LuAlertCircle } from "react-icons/lu";
import { TiStarFullOutline } from "react-icons/ti";
import './product.css';
import img from '/rs.png';
const Product = () => {
    return (
        <div className='product-cotainer'>
       <div>
       <h5 className="number">1</h5>
       </div>
        <div className='img'>
            <img src={img} alt="" />
            <span className='img-name'>Builder 1</span>
            </div>  
            <div>
              <p className='discription'><span className='discription-heading'>WixPro 72-Inch Responsive Website Builder-</span>Comprehensive Digital Platform CreationvTool,Streamlined Design Interface for Professional Websites and Online Stores(Black/Blue)</p>
              <span className='discription-heading'>Main Highlights</span>
              <p className='main'>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>
              <button className='btn-2'>
              <a href=""><span>Show more</span></a>
                <IoChevronDownOutline />
              </button>
               </div>
               {/* <button><IoDiamondOutline /></button> */}
            
             <div className="review"> 
             <div className="reating-div">
            
             <li className="reating">9.8</li>
             <li> <LuAlertCircle /></li>
             </div>
             <li className="exceptional">Exceptional</li>
             <li><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline />
             </li>
             <button>View</button>
             </div>

           
        </div>
    );
};

export default Product;