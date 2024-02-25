import { FaChevronDown } from "react-icons/fa";
import { LuAlertCircle } from "react-icons/lu";
import { TiStarFullOutline } from "react-icons/ti";
import './product.css';
import img from '/rs.png';
const Product = () => {
    return (
      <div className="container">
          <div className='product-container-2'>
       <div>
       <h5 className="number">1</h5>
       </div>
        <div className='img'>
            <img src={img} alt="" />
            <p className='img-name'>Builder 1</p>
            </div>  
            <div className="product-item">
              <p className='discription'><span className='discription-heading'>WixPro 72-Inch Responsive Website Builder-</span>Comprehensive Digital Platform CreationvTool,Streamlined Design Interface for Professional Websites and Online Stores(Black/Blue)</p>
              <p className='discription-heading'>Main Highlights</p>
              <p className='main'>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>
              <button className='btn-2'>
              <a href="">Show more </a>
              <FaChevronDown />
              </button>
               </div>    
         <div>      
         <div className="review"> 
             <div className="reating-div">
             <li className="reating">9.8</li>
             <li> <LuAlertCircle /></li>
             </div>
             <li className="exceptional">Exceptional</li>
            <div className="star-div">
            <li ><TiStarFullOutline className="star" /><TiStarFullOutline className="star" /><TiStarFullOutline className="star" /><TiStarFullOutline className="star" /><TiStarFullOutline className="star" />
             </li>
            </div>
             </div>
         <div>
         <button className="btn-3">View</button>
         </div>
         </div> 
        </div>
          <div className='product-container-2'>
       <div>
       <h5 className="number">1</h5>
       </div>
        <div className='img'>
            <img src={img} alt="" />
            <p className='img-name'>Builder 1</p>
            </div>  
            <div className="product-item">
              <p className='discription'><span className='discription-heading'>WixPro 72-Inch Responsive Website Builder-</span>Comprehensive Digital Platform CreationvTool,Streamlined Design Interface for Professional Websites and Online Stores(Black/Blue)</p>
              <span className='discription-heading'>Main Highlights</span>
              <p className='main'>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>
              <button className='btn-2'>
              <a href=""><span>Show more</span></a>
              <FaChevronDown />
              </button>
               </div>    
         <div>      
         <div className="review"> 
             <div className="reating-div">
             <li className="reating">9.8</li>
             <li> <LuAlertCircle /></li>
             </div>
             <li className="exceptional">Exceptional</li>
            <div className="star-div">
            <li ><TiStarFullOutline className="star" /><TiStarFullOutline className="star" /><TiStarFullOutline className="star" /><TiStarFullOutline className="star" /><TiStarFullOutline className="star" />
             </li>
            </div>
             </div>
         <div>
         <button className="btn-3">View</button>
         </div>
         </div> 
        </div>
      </div>
    );
};

export default Product;