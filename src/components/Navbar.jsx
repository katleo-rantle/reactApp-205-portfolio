import { links } from '../data';

const Navbar = () => {
  return (
    <nav className='bg-sky-100 '>
      <div className='align-elements py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center justify-around sm:py-4 bg-white border-1 rounded-full relative top-20 sm:max-w-xl lg:max-w-4xl'>
        <h2 className='text-3xl font-bold '>
          Dev<span className='text-sky-600'>Folio</span>
        </h2>
        <div className='flex gap-x-3'>
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className='capitalize tracking-wider text-lg hover:text-sky-600 duration-300'
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
