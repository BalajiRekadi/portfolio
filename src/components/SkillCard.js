class SkillCard extends HTMLElement {
    constructor(name, src) {
      super();
      this.name = name;
      this.src = src;
    }
  
    connectedCallback() {
      const name = this.getAttribute('name');
      const src = this.getAttribute('src');

      this.innerHTML = `
        <div class="top">
            <img src="${src}"/>
        </div>
        <div class="bottom">${name}</div>
      `;
    }
  }
  
  export default SkillCard;
  
