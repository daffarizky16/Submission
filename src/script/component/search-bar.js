class searchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector("#searchElement").value;
  }
  render() {
    this.innerHTML = `
      <div id="search-container" class="search-container">
      <div class="input-group bg-primary-border-subtle mt-3" data-bs-theme="light">
          <input class="form-control" id="searchElement" type="search" placeholder="Search Football Player" aria-label="default input example">
          <button class="btn btn-outline-success btn-lg" type="submit" id="searchButtonElement">Search</button>
      </div>
  </div>
      `;

    this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", searchBar);
