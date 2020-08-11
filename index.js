(() => {
  console.log(window.history);
  const go = document.querySelector("#go");
  go.addEventListener(
    "click",
    () => {
      window.history.go();
    },
    false
  );
  window.setTimeout(() => {
    window.history.go();
  }, 10000);
})();
