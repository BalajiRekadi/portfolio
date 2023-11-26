class MenuItem extends HTMLElement {
  constructor(value) {
    super();
    this.value = value;
  }

  connectedCallback() {
    this.innerHTML = `
      <a class="menu-item" href="">${this.innerText}</a>
    `;
  }
}

export default MenuItem;
