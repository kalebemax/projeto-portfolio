const btnTopo = document.getElementById("btnTopo");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }
};

btnTopo.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
