import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import './skillsCarousel.css'

const SkillsCarousel = ({icon, title, text}) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  return (
    <div className='embla' ref={emblaRef}>
      <div className='embla__container'>
        <div className='embla__slide'>
          <article>
            <span className='h-16 w-16'>{icon}</span>
            <h4 className='mt-6 font-bold'>{title}</h4>
            <p className='mt-2 text-slate-500'>{text}</p>
          </article>
        </div>
      </div>
    </div>
  );
};
export default SkillsCarousel;
