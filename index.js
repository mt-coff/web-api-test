const { start } = require("repl");
const { count } = require("console");

(() => {
  window.addEventListener(
    "beforeunload",
    (ev) => {
      ev.preventDefault();
      ev.returnValue = "";
    },
    false
  );
  const startBtn = document.querySelector("#start-btn");
  const stopBtn = document.querySelector("#stop-btn");
  const countEl = document.querySelector("#count");
  let worker = null;

  startBtn.addEventListener(
    "click",
    () => {
      worker = new Worker("worker.js");
      worker.onmessage = (ev) => {
        if ("count" in ev.data) {
          countEl.innerHTML = ev.data.count;
        }
      };
    },
    false
  );
  stopBtn.addEventListener(
    "click",
    () => {
      worker.terminate();
    },
    false
  );
})();
