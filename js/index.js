window.onload = function () {

  var links = document.querySelectorAll('#headerContainer>header>.header_nav>.item_ul>li');
  links.forEach(function (link) {
      link.addEventListener('click', function () {
          var previousActiveLi = document.querySelector('#headerContainer>header>.header_nav>.item_ul>li.active');
          if (previousActiveLi) {
              previousActiveLi.classList.remove('active');
          }
          // console.log(links);

          link.classList.add('active');
      });
  });
  
  //mouse scroll

  let mouse_btn = document.querySelectorAll("#mouse_btn");
  mouse_btn[0].addEventListener("click", scrollToNextSection);

  function scrollToNextSection() {
    window.scrollBy(0, window.innerHeight);
  }

}








