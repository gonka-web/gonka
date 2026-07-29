document.addEventListener("DOMContentLoaded", function () {
  const bar = document.getElementById("gonkaDisclaimer");
  const close = document.getElementById("gonkaDisclaimerClose");
  const toggle = document.getElementById("gonkaDisclaimerToggle");
  const storageKey = "gonkaDisclaimerCollapsed";

  if (!bar || !close || !toggle) return;

  function isCollapsedSaved() {
    try {
      return sessionStorage.getItem(storageKey) === "true";
    } catch (e) {
      return false;
    }
  }

  function saveCollapsed() {
    try {
      sessionStorage.setItem(storageKey, "true");
    } catch (e) {}
  }

  function clearCollapsed() {
    try {
      sessionStorage.removeItem(storageKey);
    } catch (e) {}
  }

  function collapseDisclaimer(shouldFocusToggle) {
    document.documentElement.classList.add("gonka-disclaimer-collapsed");
    bar.setAttribute("aria-hidden", "true");
    toggle.setAttribute("aria-expanded", "false");

    if (shouldFocusToggle) {
      toggle.focus();
    }
  }

  function expandDisclaimer() {
    document.documentElement.classList.remove("gonka-disclaimer-collapsed");
    bar.removeAttribute("aria-hidden");
    toggle.setAttribute("aria-expanded", "true");
    close.focus();
  }

  if (isCollapsedSaved()) {
    collapseDisclaimer(false);
  }

  close.addEventListener("click", function () {
    saveCollapsed();
    collapseDisclaimer(true);
  });

  toggle.addEventListener("click", function () {
    clearCollapsed();
    expandDisclaimer();
  });
});
