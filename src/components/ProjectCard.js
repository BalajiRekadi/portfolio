class ProjectCard extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      const src = this.getAttribute('src');

      this.innerHTML = `
        <div class="top">
          <img src="${src}"/>
        </div>
        <div class="bottom">${this.innerText}</div>
      `;
    }
  }
  
  export default ProjectCard;
  