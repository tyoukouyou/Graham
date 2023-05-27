// Load the header.html file using AJAX request
var headerXHR = new XMLHttpRequest();
headerXHR.open('GET', 'modules/header.html', true);
headerXHR.onreadystatechange = function () {
    if (headerXHR.readyState === 4 && headerXHR.status === 200) {
        document.getElementById('headerContainer').innerHTML = headerXHR.responseText;
    }
};
headerXHR.send();

// Load the top.html file using AJAX request
var topXHR = new XMLHttpRequest();
topXHR.open('GET', 'top.html', true);
topXHR.onreadystatechange = function () {
    if (topXHR.readyState === 4 && topXHR.status === 200) {
        document.getElementById('bodyContainer').innerHTML = topXHR.responseText;
        scripts_get(topXHR.responseText)
    }
};
topXHR.send();

//Load the footer.html file using AJAX request
var footerXHR = new XMLHttpRequest();
footerXHR.open('GET', 'modules/footer.html', true);
footerXHR.onreadystatechange = function () {
    if (footerXHR.readyState === 4 && footerXHR.status === 200) {
        document.getElementById('footerContainer').innerHTML = footerXHR.responseText;
    }
};
footerXHR.send();


// Load the requested page using AJAX request
function loadIndex() {
    if (window.innerWidth < 1000) {
        showNavBar()
    }
    var url = this.getAttribute("href");
    var bodyContainer = document.querySelector("#bodyContainer");
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            bodyContainer.innerHTML = xhr.responseText; 
           // Reload the required scripts
            scripts_get(xhr.responseText)
            // Scroll to the top of the page
            window.scrollTo(0, 0); 
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
    // Block the default link click behavior
    return false; 

}

// scripts_get(context)function
function scripts_get(context){
    // Create a regular expression to match the script tag
    var regex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
    // Use regular expressions to find the matching script tag in the html string
    var jsContained = context.match(regex);
    if (jsContained) {
        // Execute the matched script tags
        for (var i = 0; i < jsContained.length; i++) {
            var scriptTag = jsContained[i];
            var tempDiv = document.createElement('div');
            tempDiv.innerHTML = scriptTag;
            var scriptElement = tempDiv.querySelector('script');
            if (scriptElement) {
                var newScriptElement = document.createElement('script');
                newScriptElement.src = scriptElement.src;
                newScriptElement.defer = scriptElement.defer;
                document.head.appendChild(newScriptElement);
              }


        }
    }
}
