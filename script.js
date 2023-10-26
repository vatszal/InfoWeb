let mode = document.querySelector(".colormode")
mode.onclick = function () {
    document.body.classList.toggle("darkmode");
    let icon = document.querySelector(".icon");
    let headericon = document.querySelector(".header img");
    let decorative = document.querySelector(".main img")
    let cloud = document.querySelector(".main");
    if (document.body.classList.contains("darkmode")) {
        icon.classList.add("ri-sun-line");
        icon.classList.remove("ri-contrast-2-fill");
        headericon.src = "img/logo black.png";
        decorative.src = 'img/sunset.png';
        cloud.style.backgroundImage = "url('img/sunset2.jpg')";

    }
    else {
        icon.classList.add("ri-contrast-2-fill");
        icon.classList.remove("ri-sun-line");
        headericon.src = "img/logo white.png";
        decorative.src="img/sun.gif";
        cloud.style.backgroundImage = "url('img/clouds.png')";
    }
}

