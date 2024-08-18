import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp, FaDownload } from "react-icons/fa"; // Import FaDownload for the download icon
import { styles } from "../styles";
import myCV from "../assets/my_cv.pdf"; // Importing your CV

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto flex items-center`}>
      <div
        className={`absolute inset-0 top-0 bottom-0 flex justify-center items-center max-w-7xl mx-auto ${styles.paddingX} gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-60 h-60 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hey, I'm <span className='text-[#915EFF]'>Aryan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-4 text-gray-400`}>
            Bringing visions to life <br className='sm:block hidden' />
            through cutting-edge web Technologies.
          </p>

          {/* Social Media Icons and Download CV Icon */}
          <div className='flex flex-wrap items-center gap-4 mt-8'>
            <div className='flex gap-4'>
              <a href='https://www.linkedin.com/in/naresh-parashar-a34676213/' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin className='text-white text-xl sm:text-2xl hover:text-[#0077B5] transition-colors duration-200' />
              </a>
              <a href='https://github.com/Aryan-one6/' target='_blank' rel='noopener noreferrer'>
                <FaGithub className='text-white text-2xl sm:text-2xl hover:text-[#333] transition-colors duration-200' />
              </a>
              <a href='https://instagram.com/Aryan_one6/' target='_blank' rel='noopener noreferrer'>
                <FaInstagram className='text-white text-2xl sm:text-2xl hover:text-[#E4405F] transition-colors duration-200' />
              </a>
              <a href='https://wa.me/+919354249191/' target='_blank' rel='noopener noreferrer'>
                <FaWhatsapp className='text-white text-2xl sm:text-2xl hover:text-[#25D366] transition-colors duration-200' />
              </a>
              <a href={myCV} download target='_blank' rel='noopener noreferrer'>
                <FaDownload className='text-white text-2xl sm:text-2xl hover:text-[#915EFF] transition-colors duration-200' />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
