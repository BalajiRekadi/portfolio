import MenuItem from './MenuItem';
import ParaHeader from './ParaHeader';
import Paragraph from './Paragraph';
import ProjectCard from './ProjectCard';
import SkillCard from './SkillCard';

const loadComponents = () => {
  customElements.define('menu-item', MenuItem);
  customElements.define('skill-card', SkillCard);
  customElements.define('my-paragraph', Paragraph);
  customElements.define('para-header', ParaHeader);
  customElements.define('project-card', ProjectCard);
};

export default loadComponents;
