class PlayerItem extends HTMLElement {
  set player(player) {
    this._player = player;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="col">
    <div class="card h-100">
        <img src="${this._player.strFanArt1}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${this._player.strPlayer}</h5>
            <div class="multi-line-text-truncate">
                <p class="card-text" style="text-align: justify;">${this._player.strDescriptionEN}</p>
            </div>
            <div class="card-block">
                <div class="row">
                    <div class="col-6">
                        <p class="card-text"><small class="text-body-secondary">${this._player.strTeam}</small></p>
                    </div>
                    <div class="col-6 text-end">
                    <p class="card-text"><small class="text-body-secondary">${this._player.strNationality}</small></p>
                    </div>
            </div>
        </div>
    </div>
</div>
`;
  }
}

customElements.define("player-item", PlayerItem);
