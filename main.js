let bars = document.querySelector(".bars");
let navs = document.querySelector(".navs");
let cover = document.querySelector(".cover");
let accordionBtns = document.querySelectorAll(".accordion-btn");
let accordionBodies = document.querySelectorAll(".accordion-body");
let accordionIcons = document.querySelectorAll(".accordion-btn i");

accordionBodies.forEach(body => {
    body.style.height = "0px";
    body.style.overflow = "hidden"; // إخفاء أي محتوى زائد
});

bars.addEventListener("click", () => {
    if (navs.style.maxHeight === "0px" || navs.style.maxHeight === "") {
        navs.style.maxHeight = navs.scrollHeight + "px";
    } else {
        navs.style.maxHeight = "0px";
    }
});

window.addEventListener("load", () => {
    cover.classList.add("cover-hide");
    setTimeout(() => {
        cover.remove();
    }, 1000);
});

// جعل كل أكوردين مستقل عن الآخر
accordionBtns.forEach((btn, index) => {
    let body = accordionBodies[index]; // جلب جسم الأكوردين المرتبط بالزر
    let icon = btn.querySelector("i"); // جلب الأيقونة داخل الزر نفسه

    btn.addEventListener("click", () => {
        if (body.style.height === "0px" || body.style.height === "") {
            body.style.height = body.scrollHeight + "px";
            icon.style.transform = "rotate(180deg)"; // لف الأيقونة
        } else {
            body.style.height = "0px";
            icon.style.transform = "rotate(0deg)"; // إرجاع الأيقونة للوضع الطبيعي
        }
    });
});
