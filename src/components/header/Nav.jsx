import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { NavLink, } from "react-router-dom";
import { faEnvelope, faHome, faPlane, faUser, faUserGroup} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import person from "../../assets/person.json"
import Lottie from "lottie-web";

const Nav = ({ handleActive }) => {

  const containerAnimation = useRef(null)
  const divRef = useRef(null);

  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: containerAnimation.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: person,
    });
    return () => {
      anim.destroy();
    };
  }, []);
  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollTop = divRef.current.scrollHeight;
    }
  }, []);

  return (
  <div ref={divRef} style={{overflow: "auto"}} className="h-screen overflow-hidden overflow-y-auto absolute">
      <motion.nav
      initial={{ width: 0 }}
      animate={{ width: "100vw" }}
      transition={{ duration: 0.7}}
      className="w-screen relative h-full bg-[#ACB1D6] z-50 backdrop-blur-15 overflow-hidden pt-3"
      >
      <b>
      <ul className="flex flex-col items-center justify-center gap-2 text-2xl font-dashiellText italic font-black 
      first:text-2xl midMobile:text-3xl tablet:text-4xl translate-y-[-20px]">
        <motion.div
        initial={{ x: -2000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1}}
        className="text-center mb-4 mt-4 px-12 mx-2 text-xl">
        <p>¡Vuela con nosotros!</p>
        </motion.div>
        <motion.li
        initial={{ x: -2000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1}}
        className="px-4 py-0 m-0 text-center max-w-[280px]"
        ref={containerAnimation}>
        </motion.li>
        <motion.li
        initial={{ x: -2000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1}}
        className="px-4 py-0 m-0 text-center max-w-[280px]"
        ref={containerAnimation}>
        </motion.li>
        
        <motion.li
        initial={{ x: -2000 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8}}
        className="sombras text-white shadow-xl w-full overflow-hidden">
          <NavLink className={({isActive}) => isActive?"bg-morado flex flex-row gap-2 justify-center items-center py-1":"bg-[#C6C8EE] flex flex-row gap-2 justify-center items-center py-1 hover:bg-morado"} onClick={handleActive} to="/">
            <FontAwesomeIcon icon={faHome}/><h1>Inicio</h1>
          </NavLink>
        </motion.li>
        <motion.li 
        initial={{ x: -2000 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8}}
        className="sombras text-white   shadow-xl w-full overflow-hidden">
          <NavLink className={({isActive}) => isActive?"bg-morado flex flex-row gap-2 justify-center items-center py-1":"bg-[#C6C8EE] flex flex-row gap-2 justify-center items-center py-1 hover:bg-morado"} onClick={handleActive} to="/piloto">
          <FontAwesomeIcon icon={faPlane}/><h1>Piloto</h1>
          </NavLink>
        </motion.li>
        <motion.li
        initial={{ x: -2000 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8}}
        className=" sombras text-white shadow-xl w-full overflow-hidden">
          <NavLink className={({isActive}) => isActive?"bg-morado flex flex-row gap-2 justify-center items-center py-1":"bg-[#C6C8EE] flex flex-row gap-2 justify-center items-center py-1 hover:bg-morado"} onClick={handleActive} to="/favl">
          <FontAwesomeIcon icon={faUserGroup}/><h1>Clubes</h1>
          </NavLink>
        </motion.li>
        <motion.li
        initial={{ x: -2000 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8}}
        className=" sombras text-white shadow-xl w-full overflow-hidden">
          <NavLink className={({isActive}) => isActive?"bg-morado flex flex-row gap-2 justify-center items-center py-1":"bg-[#C6C8EE] flex flex-row gap-2 justify-center items-center py-1 hover:bg-morado"} onClick={handleActive} to="/ingresar">
          <FontAwesomeIcon icon={faUser}/><h1>Ingresar</h1>
          </NavLink>
        </motion.li>
        <motion.li
        initial={{ x: -2000 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8}}
        className=" sombras text-white shadow-xl w-full overflow-hidden">
          <a href="#contact" className="bg-[#C6C8EE] flex flex-row gap-2 justify-center items-center py-1 hover:bg-morado" onClick={handleActive}>
          <FontAwesomeIcon icon={faEnvelope}/><h1>Contact me</h1>
          </a>
        </motion.li>
      <motion.div initial={{ x: -2000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.3}}
      className="text-center relative text-xl px-5">
      </motion.div>
      </ul>
      </b>
      <div className="burbujas absolute bottom-0 mx-auto">
      <div className="burbuja"></div>
      <div className="burbuja"></div>
      <div className="burbuja"></div>
      <div className="burbuja"></div>
      <div className="burbuja"></div>
      <div className="burbuja"></div>
      <div className="burbuja"></div>
      <div className="burbuja"></div>
      <div className="burbuja"></div>
      <div className="burbuja"></div>
      </div>
    </motion.nav>
    </div>
  );
};

export default Nav;