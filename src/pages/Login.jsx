import React from 'react'
import { motion } from "framer-motion";
import TransitionEffect from '../components/transition/TransitionEffect'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../pages/css/Login.css'
import { faUser } from '@fortawesome/free-solid-svg-icons';
const Login = () => {
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
        <div>
          <h1 className='text-3xl font-semibold'>Login</h1>
        </div>
        <div classname="bodyLogin">
          <div className="box-form">
            <div className="left">
              <div className='background-left'>
                <div className="overlay">
                  <h1>Federacion Argentina de vuelo</h1>
                  <p className='p-login'>¡Aqui amamos lo que hacemos!</p>
                  <div className="buttn">
                    <a href="#" className="facebook"><FontAwesomeIcon icon={faUser} className='margin-left'></FontAwesomeIcon> Ingresar con facebook</a>
                    <a href="#"><FontAwesomeIcon icon={faTwitter} className='margin-left'></FontAwesomeIcon> Ingresar con twitter</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="right">
              <h5 className='text-3xl font-semibold colorear'>Ingresar</h5>
              <p className='p-login'>No tienes cuenta? <a href="#">crea tu cuenta</a> tarda menos de un minuto</p>
              <div className="inputs">
                <input type="text" placeholder="Usuario" />
                <br />
                <input type="password" placeholder="Ingresa tu contraseña" />
              </div>

              <br /><br />

              <div className="remember-me--forget-password">
                <label>
                  <input type="checkbox" name="item" checked />
                  <span className="text-checkbox">Recordarme</span>
                </label>
                <p className='p-login'><a href="#">olvidaste tu contraseña?</a></p>
              </div>

              <br />
              <button className='button-login'><a href="#">ingresar</a></button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Login