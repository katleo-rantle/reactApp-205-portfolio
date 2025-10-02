import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { FaGithubAlt, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const Sidebar = () => {
 const linksRef = useRef([]);
 const navRef = useRef(null);
 const contactRef = useRef(null);
 const bottomLineRef = useRef(null);
 const topLineRef = useRef(null);
 const tlSidebarRef = useRef(null);
 const tlIconRef = useRef(null);
 const [isOpen, setIsOpen] = useState(false)

 const toggleMenu = () =>{
  if(!isOpen){
    tlSidebarRef.current.reverse();
    tlIconRef.current.reverse();
  } else {
    tlSidebarRef.current.play();
    tlIconRef.current.play();
  }
  setIsOpen(!isOpen)
 }

 useGSAP(()=>{
  gsap.set(navRef.current,{xPercent:100})
  gsap.set([linksRef.current,contactRef.current],{autoAlpha:0, x:-20})
  
  tlSidebarRef.current = gsap.timeline({paused:true}).to(navRef.current,{xPercent:0, duration:1, ease:"power3.out"})
  .to(linksRef.current,{autoAlpha:1, x:0, stagger:0.1, duration:0.5, ease:"power2.out"}, "<")
  .to(contactRef.current, {autoAlpha:1, x:0, duration:0.5, ease:"power2.out"}, "<0.2")

  tlIconRef.current = gsap.timeline({paused:true}).to(topLineRef.current, {rotation:45, y:8, duration:0.3, ease:"power2.out"},0).to(bottomLineRef.current, {rotation:-45, y:-8, duration:0.3, ease:"power2.out"},0)

 })

  return (
    <>
      <nav
        ref={navRef}
        className='fixed z-50 flex flex-col justify-between w-full h-full px-10 uppercase bg-black/70 text-white/80 py-28 gap-y-10 md:w-1/2 md:left-1/2'
      >
        <div className='flex flex-col text-5xl gap-y-2 md:text-6xl lg:text-8xl'>
          {['home', 'about', 'projects', 'contact'].map((section, index) => (
            <div key={index} ref={(el) => (linksRef.current[index] = el)}>
              <a className='transition-all duration-300 cursor-pointer hover:text-white'>
                {section}
              </a>
            </div>
          ))}
        </div>
        <div
          className='flex flex-col flex-wrap justify-between gap-8 md:flex-row'
          ref={contactRef}
        >
          <div className='font-light'>
            <p className='tracking-wider text-white/50'>Email</p>
            <p className='text-xl tracking-widest lowercase text-pretty'>
              kprantle@gmail.com
            </p>
          </div>
          <div className='font-light'>
            <p className='tracking-wider text-white/50'>social media</p>
            <div className='flex flex-col flex-wrap md:flex-row gap-x-2'>
              {[
                { name: 'Instagram', href: '#', icon: <FaInstagram /> },
                { name: 'YouTube', href: '#', icon: <FaYoutube /> },
                { name: 'LinkedIn', href: '#', icon: <FaLinkedin /> },
                { name: 'GitHub', href: '#', icon: <FaGithubAlt /> },
              ].map(({ name, href, icon }, index) => (
                <a
                  key={index}
                  href={href}
                  className='text-sm leading-loose traclking-widest uppercase hover:text-white transition-colors duration-300 cursor-pointer'
                >
                  <div className='flex items-center gap-x-2'>
                    {icon}
                    {name}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
      {/* hamburger menu */}
      <div className='fixed z-50 flex flex-col items-center justify-center gap-3 transition-all duration-300 bg-black rounded-full cursor-pointer w-14 h-14 md:w-20 md:h-20 top-4 right-10' onClick={toggleMenu}>
        <span  ref={topLineRef} className="block w-8 h-0.5 bg-white rounded-full origin-center"></span>
        <span ref={bottomLineRef} className="block w-8 h-0.5 bg-white rounded-full origin-center"></span>
      </div>
    </>
  );
}
export default Sidebar