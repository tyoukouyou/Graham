if (window.innerWidth > 1000) {
  // Navbar color change
  var links = document.querySelectorAll('#headerContainer>header>.header_nav>.item_ul>li');
  links.forEach(function (link) {
    link.addEventListener('click', function () {
      var previousActiveLi = document.querySelector('#headerContainer>header>.header_nav>.item_ul>li.active');
      if (previousActiveLi) {
        previousActiveLi.classList.remove('active');
      }

      link.classList.add('active');
    });
  });

  // Scroll to next section
  function scrollToNextSection() {
    window.scrollBy(0, window.innerHeight);
  }

}



if (window.innerWidth < 1000) {
  //Show navbar
  function showNavBar() {
    var headerMenu = document.getElementById('header_menu');
    var headerNav = document.getElementById('header_nav');
    var headerLogo = document.getElementById('header_logo');
    if (headerNav.style.display === 'flex') {
      headerNav.style.display = 'none';
      // Restore the original image after closing the navigation
      headerMenu.setAttribute('src', '../res/s_menu.svg');
      // Restore the original position after closing the navigation
      headerMenu.classList.remove('close-image');
      headerLogo.classList.remove('centered-image');
      enableScroll();
    } else {
      headerNav.style.display = 'flex';
      headerMenu.setAttribute('src', '../res/s_close.svg');
      headerMenu.classList.add('close-image');
      headerLogo.classList.add('centered-image');
      disableScroll();
    }
  }
  // Disable scroll() function
  function disableScroll() {
    document.body.classList.add('disable-scroll');
    document.documentElement.classList.add('disable-scroll');
  }
  // Enable scroll() function
  function enableScroll() {
    document.body.classList.remove('disable-scroll');
    document.documentElement.classList.remove('disable-scroll');
  }
}

// Lazy loading
if ('loading' in HTMLImageElement.prototype) {
  var images = document.querySelectorAll("img.lazyload");
  images.forEach(img => {
    img.src = img.dataset.src;
  });
} else {
  // Dynamically import the LazySizes library
  var script = document.createElement("script");
  script.async = true;
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/4.1.8/lazysizes.min.js";
  document.body.appendChild(script);
}











