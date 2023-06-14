import React from 'react'
import { motion } from "framer-motion";
import TransitionEffect from '../components/transition/TransitionEffect'

const Piloto = () => {
  return (
    <>
    <TransitionEffect/>
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{ duration: 1}}
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
      <div className='text-center'>
      <h1 className='text-3xl font-semibold mt-10'>Pagina de Piloto</h1>
      </div>
      <div className='grid gap-3 mt-10'>
      <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa laborum illum, voluptatem, eaque assumenda, autem alias quo quae molestiae ex quidem quasi. Deserunt eaque iste maxime quae eveniet cum, provident in, qui reprehenderit fugit quas autem. Esse tenetur eius sapiente totam, nesciunt dicta natus, alias veritatis temporibus recusandae facere eaque porro deserunt quis, voluptas id doloremque consequuntur voluptatum? Quam accusamus maiores tenetur aspernatur ipsa eum distinctio obcaecati recusandae similique, blanditiis fuga magnam possimus libero, voluptate vel! Dicta dolorem quidem veritatis aliquam accusantium hic placeat eaque, aperiam quaerat expedita vero cum ratione alias a exercitationem beatae error doloribus possimus quis quasi quisquam? Laborum in veniam rem quae aut fuga, quia, voluptates ullam quos voluptatem corporis necessitatibus repellat excepturi molestias pariatur! Dignissimos assumenda obcaecati reprehenderit illum! Eaque, vitae minima dicta delectus doloremque perspiciatis recusandae ea necessitatibus, dolore deserunt, id harum reprehenderit architecto in aperiam corrupti impedit libero quibusdam sed asperiores temporibus sint mollitia autem! Ratione sed adipisci quia illo, corporis ullam inventore odit, quos omnis excepturi aspernatur modi ad minima ipsa voluptatibus, a dolore! In doloremque hic nemo necessitatibus quibusdam veritatis libero rerum eveniet, excepturi voluptatibus! Nesciunt, recusandae soluta dolorem quisquam tempora harum ipsum quos hic perspiciatis amet voluptas labore, totam officiis numquam reprehenderit, sed molestias? Voluptatum officiis enim quos, minus aliquam sit consequatur autem corrupti at accusantium alias eaque numquam inventore soluta delectus libero. Culpa illum dignissimos officia magnam iusto, voluptatem omnis enim cupiditate repellendus natus iste, quas earum ea atque eos eius sint rem corrupti, unde expedita quidem necessitatibus placeat eveniet aliquid. Cupiditate assumenda labore velit laboriosam dolorum animi nisi, mollitia corporis incidunt aspernatur iste eum inventore! Ipsum, quis fugit distinctio laboriosam, labore nam praesentium optio iure quasi commodi possimus natus officia at earum quae molestiae nostrum enim, dolorum ratione itaque cum obcaecati provident quia inventore. Officia quibusdam repudiandae nemo culpa eligendi architecto, asperiores ducimus quia sit facere. Atque minima, sint natus at non deleniti exercitationem porro voluptates commodi error unde quam ipsum adipisci asperiores repellendus facere culpa blanditiis voluptatem. Iste harum a ea omnis dolorum officiis ab totam porro iure itaque neque quo dolore explicabo facere, illum delectus veritatis voluptatem repellendus incidunt voluptas, fugit magni earum nulla! Nam tempora recusandae quidem, ab dolor explicabo dolores. Quod architecto neque dolores sint, accusantium minus explicabo, provident asperiores nam quisquam quo corporis reiciendis ipsum adipisci accusamus dignissimos expedita, aliquam debitis pariatur porro qui aut. Optio quo ducimus obcaecati, alias, delectus vero ratione fugiat incidunt magni culpa libero distinctio consequuntur corporis! Sapiente ea maiores ullam placeat repudiandae omnis facere explicabo blanditiis, repellendus mollitia optio, odio temporibus, molestiae doloribus autem. Incidunt quae repudiandae sit! Est distinctio sequi, vel quisquam optio officiis saepe adipisci accusantium consectetur non minima architecto, possimus perspiciatis. Debitis, culpa dicta doloribus excepturi labore magnam! Laborum iste deserunt quo excepturi porro rem voluptatibus dignissimos eius similique reprehenderit, officiis nemo molestias itaque inventore magni ratione esse cupiditate iusto neque natus assumenda facere quae explicabo? Asperiores velit autem ducimus. Deleniti a numquam aperiam expedita ad aliquid quam accusantium, earum accusamus, dignissimos totam quaerat ea!</p>
      </div>
      
    </motion.div>
    </>
    
  )
}

export default Piloto