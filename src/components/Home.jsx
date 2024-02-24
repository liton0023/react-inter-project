import { IoMdTime } from "react-icons/io";
import { IoChevronDownOutline } from "react-icons/io5";
import { LuAlertCircle } from "react-icons/lu";
import { MdNavigateNext } from "react-icons/md";
import { TfiCup } from "react-icons/tfi";
import './Home/home.css';
const Home = () => {
    return (
        <div className="home-container">
      <div className="home-header">
      <h1 >Best Website builders in th US</h1>
      </div>
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
          <div className="tools">
            <span>Tools</span>
            <span>AWS Builder</span>
            <span>Start Build</span>
            <span>Build Supplies</span>
            <span>Tooling</span>
            <span>BlueHosting</span>
          </div>
          <div className="hosting">
            <span>Home</span>
            <MdNavigateNext />
            <span>Hosting for all</span>
            <MdNavigateNext />
            <span>Hosting</span>
            <MdNavigateNext />
            <span>Hosting6</span>
            <MdNavigateNext />
            <span>Hosting5</span>
          </div>
          <button className="btn-1">
          <TfiCup />
            <span>
                Best Choice
            </span>
          </button>
        </div>
    );
};

export default Home;