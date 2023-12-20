// Adding class visible to every image and make time gap between boxes
window.onload = () => {
  const boxes = document.querySelectorAll(".box");

  boxes.forEach((box, index) => {
    setTimeout(() => {
      box.classList.add("visible");
    }, index * 90);
  });
};
