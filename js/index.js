window.onload = function () {
  //mouse scroll
  function scrollToNextSection() {
    // console.log("scrollToNextSection");
    window.scrollBy(0, window.innerHeight);
  }
  let mouse_btn = document.getElementById("mouse_btn");
  mouse_btn.addEventListener("click", scrollToNextSection);

}








