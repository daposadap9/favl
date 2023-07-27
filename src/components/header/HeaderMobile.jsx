import Nav from "./Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faRectangleXmark } from "@fortawesome/free-solid-svg-icons";


const HeaderMobile = ({ handleActive, isOpen }) => {
  return (
  <>
    <div
      className="bg-blue-950 text-white opacity-90 h-24 w-full flex justify-around items-center shadow-md overflow-hidden
    "
    >
      <li className="px-2 py-2 list-none">
        <img src="/images/favl_logo.png" className="mobile:w-[160px] miniMobile:w-[110px]" alt="logo" />
      </li>
      <li className="px-2 py-2 list-none">
          <FontAwesomeIcon icon={faGlobe} />
            <select className="bg-transparent mr-3" id="">
              <option className="bg-morado" value="">English</option>
              <option className="bg-morado" value="">Español</option>
            </select>
            <button onClick={handleActive}>
              {isOpen?<FontAwesomeIcon size="xl" icon={faRectangleXmark} style={{color: "#c82f09",}} />: <img srcSet="/images/menuHamburguesa.png" alt="" />}
              
            </button>
      </li>
    </div>
      {isOpen && <Nav className="z-10" handleActive={handleActive} />}
    </>
  );
};

export default HeaderMobile;
