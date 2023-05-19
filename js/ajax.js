// 使用AJAX请求加载header.html文件
var headerXHR = new XMLHttpRequest();
headerXHR.open('GET', 'modules/header.html', true);
headerXHR.onreadystatechange = function() {
    if (headerXHR.readyState === 4 && headerXHR.status === 200) {
        // 将header.html的内容插入到headerContainer容器中
        document.getElementById('headerContainer').innerHTML = headerXHR.responseText;
    }
};
headerXHR.send();

// 使用AJAX请求加载footer.html文件
var footerXHR = new XMLHttpRequest();
footerXHR.open('GET', 'modules/footer.html', true);
footerXHR.onreadystatechange = function() {
    if (footerXHR.readyState === 4 && footerXHR.status === 200) {
        // 将footer.html的内容插入到footerContainer容器中
        document.getElementById('footerContainer').innerHTML = footerXHR.responseText;
    }
};
footerXHR.send();