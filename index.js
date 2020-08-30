(() => {
  // enumerateDevices
  const enuBtn = document.querySelector("#call-enumerate-devices");
  const enuResult = document.querySelector("#enumerate-devices-result");
  enuBtn.addEventListener(
    "click",
    () => {
      if (!window.navigator.mediaDevices) {
        enuResult.innerHTML = "cannot found mediaDevices";
      }
      window.navigator.mediaDevices.enumerateDevices().then((result) => {
        enuResult.innerHTML = JSON.stringify(result);
      });
    },
    false
  );
  // beforeunload
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
