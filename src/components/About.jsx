import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className=' bg-white/10 py-20' id='about'>
      <div className='align-elements grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} alt='' className='w-full h-64' />
        <article>
          <SectionTitle text={'about me'} />
          <p className='text-white/80 mt-8 leading-loose'>
            As an aspiring developer, I am dedicated to continuously learning
            and practicing coding and technology to build a strong foundation
            for a career in software development. My current focus is on
            enhancing my skills in both front-end and back-end web development,
            alongside exploring cloud technologies. I actively leverage AI tools
            to accelerate my learning process, particularly when navigating
            complex challenges.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
