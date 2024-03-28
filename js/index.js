const pageArea = document.querySelectorAll(".area");

const animateArea = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section_hidden");
  observer.unobserve(entry.target);
};

const areaObserve = new IntersectionObserver(animateArea, {
  root: null,
  threshold: 0.1,
});

pageArea.forEach((area) => {
  areaObserve.observe(area);
  area.classList.add("section_hidden");
});

