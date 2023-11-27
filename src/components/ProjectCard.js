class ProjectCard extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
            <div class="dot"></div>
            ${this.innerText}
      `;
    }
  }
  
  export default ProjectCard;
  