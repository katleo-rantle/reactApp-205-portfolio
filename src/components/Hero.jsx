import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import heroImg from '../assets/avatar.svg';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className='bg-sky-100 py-24 lg:h-[calc(100vh-70px)]'>
      <div className='align-elements grid place-items-center' id='home'>
        <article className='hidden md:block'>
          <img src={heroImg} className='h-80 md:h-60 lg:h-80' />
        </article>
        <article className='mt-8'>
          <h1 className='font-bold tracking-wider animate-typing-effect'>
            <TypeAnimation
              sequence={[
                "Hello, I am Katleo",
                3000,
                'Welcome to my site',
                2000,
                () => {
                  console.log('animation sequence  complete');
                },
              ]}
              wrapper='span'
              cursor={true}
              repeat={1}
              style={{ fontSize: '2em', display: 'inline-block' }}
            />
          </h1>

          <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
            front-end developer
          </p>
          <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
            turning ideas into interactive reality
          </p>
          <div className='flex justify-around gap-x-4 mt-4'>
            <a href='#'>
              <FaGithubSquare className='fa-icons' />
            </a>
            <a href='#'>
              <FaLinkedin className='fa-icons' />
            </a>
            <a href='#'>
              <FaTwitterSquare className='fa-icons' />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};
export default Hero;
