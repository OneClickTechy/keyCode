const container = document.querySelector("#container");

window.addEventListener("keydown", (event) => {
  container.innerHTML = `
        <div class="key">
        <small>Key</small>
        ${event.key == " " ? "space" : event.key}
        </div>

        <div class="key">
        <small>Key Code</small>
        ${event.keyCode}
        </div>

        <div class="key">
        <small>Code</small>
        ${event.code == " " ? "space" : event.key}
        </div>
        `;
});
