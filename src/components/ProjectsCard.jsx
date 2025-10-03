import { FaGithubSquare } from "react-icons/fa"
import {TbWorldWww} from 'react-icons/tb'

const ProjectsCard = (props) => {
 
  const { title, img, url, urlGithub, techStack } = props;
  return (
    <article className='bg-white rounded-lg shadow-md block hover:shadow-2xl duration-300' >
      <img
        src={img}
        alt={title}
        className='w-full object-cover rounded-t-lg h-64'
      />
      <div className='capitalize p-8'>
        <h2 className='text-xl tracking-wide font-medium'>{title}</h2>
        {/* <p className="mt-4 text-slate-700 leading-loose">{text}</p> */}
        <div className='mt-4 flex gap-x-4'>
          <a href={url}>
            <TbWorldWww className='fa-icons' />
          </a>
          <a href={urlGithub}>
            <FaGithubSquare className='fa-icons' />
          </a>
          {/* <a href={url}><FaExternalLinkAlt className="fa-icons"/></a> */}
        </div>
        {techStack &&
          techStack.map((item, index) => {
            return (
              <span
                key={index}
                className='bg-slate-200 text-sky-800 px-2 py-1 rounded-full text-sm/8 mr-2'
              >
                {item}
              </span>
            );
          })}
      </div>
    </article>
  );
}
export default ProjectsCard