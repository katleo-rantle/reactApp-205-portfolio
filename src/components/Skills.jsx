import SectionTitle from './SectionTitle'

import {skills} from '../data'
import SkillsCard from './SkillsCard'
import SkillsCarousel from './SkillsCarousel';

const Skills = () => {
  return (
    <section className='py-20 align-elements' id='skills'>
      <SectionTitle text='tech stack' />
      <div className='py-16 grid md:grid-cols-3 gap-8'>
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
      {/* <div className='py-16'>
        {skills.map((skill) => {
          return <SkillsCarousel key={skill.id} {...skill} />;
        })}
      </div> */}
    </section>
  );
}
export default Skills