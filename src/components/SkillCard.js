import './skillcard.css';
class SkillCard extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      const name = this.getAttribute('name');
      const src = this.getAttribute('src');
      const size = this.getAttribute('size');

      this.innerHTML = `
        <div class="top">
            <img class="skill-image" width="${size}%"/>
        </div>
        <div class="bottom">${name}</div>
      `;
    }
  }
  
  export default SkillCard;
  
