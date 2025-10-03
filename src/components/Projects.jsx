import SectionTitle from "./SectionTitle"
import ProjectsCard from "./ProjectsCard"
import { useFetchProjects } from "../utils/fectchProjects"

const Projects = () => {
 const {projects, isLoading} = useFetchProjects()
  return (
    <section className="py-20 align-elements " id='projects'>
     <SectionTitle text={'Projects'}/>
     {isLoading? (
      <h2>Loading...</h2>
     ):(     <div className="py-16 grid xl:grid-cols-2  gap-8">
      {projects.map((project)=>{
       return <ProjectsCard key={project.id} {...project}/>
      })}
     </div>)}
    </section>
  )
}
export default Projects