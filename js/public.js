window.onload = function () {
    var links = document.querySelectorAll('header .item_ul li');
    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            console.log(event.target);
            links.forEach(function (el) {
                el.classList.remove('active');
            });
            link.classList.add('active');
        });
    });
}


