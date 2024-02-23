import { FaSearch } from "react-icons/fa";
import '../../style/heder.css';
const Header = () => {
    return (
            <div className="header">
             <div className="sherch">
              <div className="input-container">
              <FaSearch className="icon-placeholder"/> 
              <input className='input' type="text" />
              
              </div>
                <div>
                    <a href="">Categories</a>
                    <a href="">Website</a>
                    <a href="">Todays deals</a>
             </div>
             </div>
          
            </div>
    );
};

export default Header;