// Animate progress bars on page load
document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress");
  progressBars.forEach(bar => {
    const value = bar.getAttribute("data-progress");
    setTimeout(() => {
      bar.style.width = value;
    }, 500); // small delay for smooth animation
  });
});
