document.addEventListener("DOMContentLoaded", function () {
    let body = document.body;
    let icon = document.querySelector(".icon");
    let headericon = document.querySelector(".header img");
    let decorative = document.querySelector(".main img");
    let cloud = document.querySelector(".main");

    // Check for dark mode on page load and apply styles
    checkDarkModeOnLoad();

    // Check screen width on page load and enable dark mode if below 600px
    if (window.innerWidth < 600) {
        body.classList.add("darkmode");
        enableDarkMode();
        // Store the dark mode state in localStorage
        localStorage.setItem("darkmode", "enabled");
    }

    let mode = document.querySelector(".colormode");
    mode.addEventListener("click", function () {
        body.classList.toggle("darkmode");

        if (body.classList.contains("darkmode")) {
            enableDarkMode();
            // Store the dark mode state in localStorage
            localStorage.setItem("darkmode", "enabled");
        } else {
            disableDarkMode();
            // Remove the dark mode state from localStorage
            localStorage.removeItem("darkmode");
        }
    });

    function enableDarkMode() {
        icon.classList.add("ri-sun-line");
        icon.classList.remove("ri-contrast-2-fill");
        if (headericon) {
            headericon.src = "img/logo black.png";
        }
        if (decorative) {
            decorative.src = 'img/sunset.png';
        }
        if (cloud) {
            cloud.style.backgroundImage = "url('img/sunset2.jpg')";
        }
    }

    function disableDarkMode() {
        icon.classList.add("ri-contrast-2-fill");
        icon.classList.remove("ri-sun-line");
        if (headericon) {
            headericon.src = "img/logo white.png";
        }
        if (decorative) {
            decorative.src = "img/sun.gif";
        }
        if (cloud) {
            cloud.style.backgroundImage = "url('img/clouds.png')";
        }
    }

    function checkDarkModeOnLoad() {
        // Check if dark mode is enabled in localStorage
        if (localStorage.getItem("darkmode") === "enabled") {
            body.classList.add("darkmode");
            enableDarkMode();
        }
    }

    const toggleBtn = document.querySelector('.toggle_btn');
    const toggleBtnIcon = document.querySelector('.toggle_btn i');
    const dropDownMenu = document.querySelector('.dropdown');

    toggleBtn.onclick = () => {
        dropDownMenu.classList.toggle('open');
        const isOpen = dropDownMenu.classList.contains('open')

        toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    }
});
