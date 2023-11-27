class Paragraph extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <p>
            ${this.innerText}
        </p>
      `;
    }
  }
  
  export default Paragraph;
  
