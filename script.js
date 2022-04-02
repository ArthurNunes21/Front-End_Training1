const toggle = document.getElementById("toggle");
const sidebar = document.getElementById("sidebar");

toggle.onclick = () => {
  toggle.classList.toggle("active");
  sidebar.classList.toggle("active");

  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
    // if any scroll is attempted, set this to the previous value
    (window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    });
};

document.onclick = function (e) {
  if (e.target.id !== "sidebar" && e.target.id !== "toggle") {
    toggle.classList.remove("active");
    sidebar.classList.remove("active");

    window.onscroll = function () {};
  }
};

/*
function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  
        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}
  
function enableScroll() {
    window.onscroll = function() {};
}
*/
