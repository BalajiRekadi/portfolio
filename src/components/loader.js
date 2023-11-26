import MenuItem from './MenuItem';
import SkillCard from './SkillCard';

const loadComponents = () => {
  customElements.define('menu-item', MenuItem);
  customElements.define('skill-card', SkillCard);
};

export default loadComponents;
