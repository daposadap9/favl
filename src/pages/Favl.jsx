import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TransitionEffect from "../components/transition/TransitionEffect";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

const Favl = () => {
  const [clubs, setclubs] = useState([]);

  useEffect(() => {
    const BASE_URL = "http://15.228.21.51:5000/club";
    const URL = BASE_URL;
    axios
      .get(URL)
      .then((res) => {
        setclubs(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <TransitionEffect />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="App relative m-auto h-full pl-4 pr-4 pb-4
      miniMobile:max-w-screen-miniMobile miniMobile:bg-transparent
      mobile:max-w-screen-mobile mobile:bg-transparent
      midMobile:max-w-screen-midMobile midMobile:bg-transparent
      miniTablet:max-w-screen-miniTablet miniTablet:bg-transparent
      tablet:max-w-screen-tablet tablet:bg-transparent
      laptop:max-w-screen-laptop laptop:bg-transparent 
      midDesktop:max-w-screen-midDesktop midDesktop:bg-transparent overflow-hidden
     mt-[699px]"
      >
        <h1 className="text-center text-3xl mt-20 text-blue-500 font-bold">
          Clubes
        </h1>
        <div className="mt-7 text-center">
          <input
            type="text"
            className="border-rose-700 border-2 rounded-md p-1"
          />
          <button className="border-2 border-black ml-2 text-white bg-blue-500 p-1 rounded-md">
            Buscar Clubes
          </button>
        </div>
        <div className="flex justify-evenly gap-10 mt-16">
          <div
            className="bg-slate-200 p-4 mt-1 rounded-md min-w-[100%] max-w-[100%] 
          shadow-lg grid 
          laptop:grid-cols-4 gap-2
          miniTablet:grid-cols-2"
          >
            {clubs.map((club) => (
              <div
                key={club.nombre}
                className="mt-3 bg-slate-200 rounded-md flex justify-center max-w-[450px] flex-col gap-1 border-2 border-zinc-8S00 overflow-hidden px-5 py-2 shadow-lg"
              >
                <div className="p-2 bg-slate-200 flex justify-center font-bold border-b-2 border-b-slate-500 rounded-md shadow-lg">
                  <h1>{club.nombre}</h1>
                  <div className="ml-2">
                    <FontAwesomeIcon
                      icon={faUsers}
                      className="margin-left"
                    ></FontAwesomeIcon>
                  </div>
                </div>
                <div>
                  {club.logo ? (
                    <div>{club.logo}</div>
                  ) : (
                    <div className="flex justify-center">
                      <img src="group.png" className="rounded-lg w-[200px]" />
                    </div>
                  )}
                </div>
                <div className="p-2 bg-slate-200 flex justify-center font-bold border-b-2 border-b-slate-500 rounded-md shadow-lg text-blue-500">
                  <h1>{club.nombre_largo}</h1>
                </div>
                <div className="p-2 bg-slate-200 flex justify-center font-bold border-b-2 border-b-slate-500 rounded-md shadow-lg text-blue-500">
                  <h1>{club.nombre_largo}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Favl;
