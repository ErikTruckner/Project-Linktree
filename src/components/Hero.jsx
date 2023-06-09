import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

import youtubeIcon from '../assets/youtube.png'
import dcLogo from '../assets/dcLogo.png'

const slides = [
  {
    id: 0,
    imageSrc: youtubeIcon,
    linkName: 'Web 3D',
    linkLink: 'https://www.youtube.com/@webddd/',
  },
  {
    id: 1,
    imageSrc: youtubeIcon,
    linkName: 'Web 3D',
    linkLink: 'https://www.youtube.com/@webddd/',
  },
  {
    id: 2,
    imageSrc: youtubeIcon,
    linkName: 'Web 3D',
    linkLink: 'https://www.youtube.com/@webddd/',
  },
  {
    id: 3,
    imageSrc: youtubeIcon,
    linkName: 'Web 3D',
    linkLink: 'https://www.youtube.com/@webddd/',
  },
]

const Hero = (props) => {
  const { isLoaded } = props

  const h1variants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        bounce: 0.5,
        stiffness: 100,
        duration: 1,
        delay: 1.8,
      },
    },
    hidden: { opacity: 0, scale: 0 },
  }
  const h2variants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        bounce: 0.5,
        stiffness: 100,
        duration: 0.8,
        delay: 2.8,
      },
    },
    hidden: { opacity: 0, scale: 0 },
  }
  const container = {
    visible: {
      opacity: 1,

      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.4,
        duration: 5.3,
        delay: 3,

        type: 'spring',
        bounce: 0.5,
        stiffness: 100,
      },
    },
    hidden: { opacity: 0 },
  }
  const item = {
    visible: {
      opacity: 1,

      type: 'spring',
    },
    hidden: { opacity: 0 },
  }

  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const Links = ({ imageSrc, linkName, linkLink }) => {
    return (
      <div>
        <a className='' target='_blank' href={linkLink}>
          <div className=' flex flex-row justify-center items-center '>
            <img
              alt='youtube'
              src={imageSrc}
              className='w-[5%] bg-white rounded-full'
            />
            <p className='text-2xl lg:text-5xl fredoka-font ml-4'>{linkName}</p>
          </div>
        </a>
      </div>
    )
  }

  return (
    <section className='w-screen h-screen'>
      <div className='relative w-screen h-[95%] mt-5 fredoka-font text-white flex flex-col justify-start items-center '>
        {isLoaded ? (
          <>
            <motion.h1
              ref={ref}
              animate={controls}
              initial='hidden'
              variants={h1variants}
              className=' text-5xl lg:text-7xl'>
              Hi, I'm{' '}
              <span className='hover-text-glow light-blue-text font-semibold '>
                Erik{' '}
              </span>
            </motion.h1>
            <motion.h2
              ref={ref}
              animate={controls}
              initial='hidden'
              variants={h2variants}
              className=' mt-8 text-3xl mx-2 text-center'>
              I'm a{' '}
              <span className='hover-text-glow light-blue-text font-semibold '>
                3D
              </span>{' '}
              Developer and Designer
              <br />
              <br />
              Follow my work!
            </motion.h2>
            <motion.div
              ref={ref}
              animate={controls}
              initial='hidden'
              variants={container}
              className='flex flex-col justify-start items-center '>
              {slides.map((slide) => (
                <motion.div
                  variants={item}
                  className='mt-10 w-[95%] lg:w-[70%] xl:w-[50%]  text-white py-3 px-2 hover-glowing-shadow-and-scale border rounded-lg text-center glass-background flex flex-col justify-center items-center'>
                  <Links
                    key={slide.id}
                    imageSrc={slide.imageSrc}
                    linkName={slide.linkName}
                    linkLink={slide.linkLink}
                  />
                </motion.div>
              ))}
            </motion.div>
          </>
        ) : null}
      </div>
    </section>
  )
}

export default Hero
