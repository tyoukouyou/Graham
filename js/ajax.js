
// 使用AJAX请求加载header.html文件
var headerXHR = new XMLHttpRequest();
headerXHR.open('GET', 'modules/header.html', true);
headerXHR.onreadystatechange = function () {
    if (headerXHR.readyState === 4 && headerXHR.status === 200) {
        // 将header.html的内容插入到headerContainer容器中
        document.getElementById('headerContainer').innerHTML = headerXHR.responseText;
    }
};
headerXHR.send();

// 使用AJAX请求加载footer.html文件
var footerXHR = new XMLHttpRequest();
footerXHR.open('GET', 'modules/footer.html', true);
footerXHR.onreadystatechange = function () {
    if (footerXHR.readyState === 4 && footerXHR.status === 200) {
        // 将footer.html的内容插入到footerContainer容器中
        document.getElementById('footerContainer').innerHTML = footerXHR.responseText;
    }
};
footerXHR.send();


// 使用AJAX请求加载index.html文件 封装成一个函数
function loadIndex() {
    var url = this.getAttribute("href");
    var bodyContainer = document.querySelector("#bodyContainer");
    // 创建一个新的XMLHttpRequest对象
    var xhr = new XMLHttpRequest();
    // 处理完成加载的回调函数
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            bodyContainer.innerHTML = xhr.responseText; // 将响应内容插入到bodyContainer中
            window.scrollTo(0, 0); // 滚动到页面顶部
        }
    };
    // 发送GET请求以获取index.html文件
    xhr.open("GET", url, true);
    xhr.send();
    return false; // 阻止默认的链接点击行为

}
