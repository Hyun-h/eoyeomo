$(document).ready(function(){
    //scroll event
    $(window).scroll(function(){
        if ($(window).scrollTop() > 36) {
            //스크롤 탑에서 몇 만큼 내려오는지 값을 지정해주세요
            //$("header").css("background-color", "#fff");
            $("header").addClass("bg_w");
        } else if($(window).scrollTop() <= 36){
           // $("header").css("background-color", "none");
           $("header").removeClass("bg_w");
        }
    });
    

    //nav bar
    $(".gnb_list").hide()
    $(".gnb>li").mouseover(function(){
        $(this).children(".gnb_list").slideDown();
        $(this).siblings("li").children(".gnb_list").slideUp();
    });

    $(".gnb>li").mouseleave(function(){
        $(".gnb_list").hide()
    });
});

//ham_btn.js
const hamBtn = document.querySelector(".ham_btn");
const asideNav = document.querySelector(".aside_nav");
const closeBtn = document.querySelector("#close");

hamBtn.addEventListener("click", () => {
    asideNav.classList.add("change");
});

closeBtn.addEventListener("click", () => {
    asideNav.classList.remove("change");
});

//aside_nav
const asideList = document.querySelectorAll(".aside_list");
for(let i = 0; i < asideList.length; i++){
    asideList[i].addEventListener("click", function(){
        for(let j = 0; j < asideList.length; j++){
            asideList[j].classList.remove("active");
        }
        this.classList.add("active");
    });
}