// import "../styles/index.scss";
const mouseGlow = document.querySelector(".mouse-glow");
const handleMouseMove = event => {
  console.log(event.clientX, event.clientY);
  console.log(mouseGlow);
  mouseGlow.style.transform = `translate3d(${event.clientX - 100}px, ${
    event.clientY - 100
  }px, 0px)`;
};

window.addEventListener("mousemove", handleMouseMove);
