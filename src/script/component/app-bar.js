class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-success">
        <div class="container-fluid">
          <a class="navbar-brand">Football Player App</a>
        </div>
        </nav>
        `;
  }
}

customElements.define("app-bar", AppBar);
