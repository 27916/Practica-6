customElements.define("mi-footer", class extends HTMLElement {
  connectedCallback() {
    this.innerText = "Bustos Martinez Pamela Guadalupe IC-51M";
  }
}, { extends: "footer" });