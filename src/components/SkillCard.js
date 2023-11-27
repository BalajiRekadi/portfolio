class SkillCard extends HTMLElement {
    constructor(name, src, size) {
      super();
      this.name = name;
      this.src = src;
      this.size = size;
    }
  
    connectedCallback() {
      const name = this.getAttribute('name');
      const src = this.getAttribute('src');
      const size = this.getAttribute('size');

      this.innerHTML = `
        <div class="top">
            <img src="${src}" width="${size}%"/>
        </div>
        <div class="bottom">${name}</div>
      `;
    }
  }
  
  export default SkillCard;
  
