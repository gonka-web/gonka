document.querySelectorAll(".mining-faq__question").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var item = this.closest(".mining-faq__item");
    var isOpen = item.classList.contains("mining-faq__item--open");
    document.querySelectorAll(".mining-faq__item").forEach(function (el) {
      el.classList.remove("mining-faq__item--open");
    });
    if (!isOpen) {
      item.classList.add("mining-faq__item--open");
    }
  });
});
