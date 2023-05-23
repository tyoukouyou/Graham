  if (window.innerWidth > 1000) {
    //navbar color change
    var links = document.querySelectorAll('#headerContainer>header>.header_nav>.item_ul>li');
    links.forEach(function (link) {
      link.addEventListener('click', function () {
        console.log('aaaaaaa');
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
  


if (window.innerWidth < 1000) {
  function showNavBar() {
    var headerMenu = document.getElementById('header_menu');
    var headerNav = document.getElementById('header_nav');
    var headerLogo = document.getElementById('header_logo');
    if (headerNav.style.display === 'flex') {
      headerNav.style.display = 'none';
      headerMenu.setAttribute('src', '../res/s_menu.svg'); // 关闭导航后恢复原始图像
      headerMenu.classList.remove('close-image'); // 关闭导航后恢复原始位置
      headerLogo.classList.remove('centered-image'); // 关闭导航后恢复原始位置
      enableScroll(); // 关闭导航后恢复滚动
    } else {
      headerNav.style.display = 'flex';
      headerMenu.setAttribute('src', '../res/s_close.svg'); // 点击导航时更改图像
      headerMenu.classList.add('close-image'); // 点击导航时设置新位置
      headerLogo.classList.add('centered-image'); // 点击导航时设置新位置
      disableScroll(); // 点击导航后禁用滚动
    }
  }
  function disableScroll() {
    document.body.classList.add('disable-scroll');
    document.documentElement.classList.add('disable-scroll');
  }
  //恢复滚动条
  function enableScroll() {
    document.body.classList.remove('disable-scroll');
    document.documentElement.classList.remove('disable-scroll');
  }
}











