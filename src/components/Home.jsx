import { IoMdTime } from "react-icons/io";
import { IoChevronDownOutline } from "react-icons/io5";
import { LuAlertCircle } from "react-icons/lu";
import './Home/home.css';
const Home = () => {
    return (
        <div className="home-container">
        <h1>Best Website builders in the US</h1>
        <div  className="updated">
            <div className="last-update">
            <IoMdTime /> 
            <span>Last Updated</span>
           
            </div>
            <span>-</span>
            <div>
                <span>February 22,2020</span>
            </div>
            <div className="last-update">
        <LuAlertCircle />
        <span>Advertising Discloure</span>
            </div>
           <div className="top-relevent">
           <span >Top Relevant</span>
            <IoChevronDownOutline />
           </div>
          </div>
        </div>
    );
};

export default Home;