document.addEventListener('DOMContentLoaded',() => {
    const BtnSideBar = document.getElementById("menu_button");
    const BtnCloseSideBar = document.getElementById("close_sidebar");
    const SideBar = document.getElementById("sidebar_menu");

    function openSidebar(){
        SideBar.classList.remove("-translate-x-full");
        SideBar.classList.add("translate-x-0");
    }

    function closeSideBar(){
        SideBar.classList.remove("translate-x-0");
        SideBar.classList.add("-translate-x-full");
    }

    if(BtnSideBar){
        BtnSideBar.addEventListener("click", openSidebar);
    }

    if(BtnCloseSideBar){
        BtnCloseSideBar.addEventListener("click", closeSideBar);
    }
});