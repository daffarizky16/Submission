import "./player-item.js";

class PlayerList extends HTMLElement {
  set players(players) {
    this._players = players;
    this.render();
  }

  render() {
    this.innerHTML = ``;
    this._players.forEach((player) => {
      const playerItemElement = document.createElement("player-item");
      playerItemElement.player = player;
      this.appendChild(playerItemElement);
    });
  }

  renderError(message) {
    this.innerHTML = "";
    this.innerHTML += `
        <div class="col">
                <div class="alert alert-primary" role="alert">
                    ${message}
                </div>
        </div>
        `;
  }
}

customElements.define("player-list", PlayerList);
