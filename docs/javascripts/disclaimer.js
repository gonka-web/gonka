document.addEventListener("DOMContentLoaded", function () {
  const bar = document.getElementById("gonkaDisclaimer");
  const close = document.getElementById("gonkaDisclaimerClose");

  if (!bar || !close) return;

  close.addEventListener("click", function () {
    bar.style.display = "none";
  });
});
