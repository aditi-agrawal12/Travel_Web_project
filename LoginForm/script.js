function showmenu(){
    const nav = document.querySelector(".nav-elements");
    const navbar = document.querySelector("nav");
    const login = document.querySelector(".button")

    nav.style.display = "flex";
    nav.style.flexDirection = "column"
    nav.style.backgroundColor= "white"
    login.style.display="none";
    navbar.style.height = "60%"
    navbar.style.display = "flex"
    nav.style.padding = "30px 0" 

}

const form = document.querySelector(".form-pop");
const sectionBlur = document.querySelector("section");

function loginPop(){
    sectionBlur.style.filter="blur(20px)";
    form.style.display="flex";
    form.style.backgroundColor="white";
    form.style.zIndex="10"
    gsap.from(".form-pop",{
        y:-100,
        opacity:0,
        duration:1
    })
}

const signform = document.querySelector(".sign-pop");

var check=0;


function signupForm(){
    sectionBlur.style.filter="blur(20px)";
    signform.style.display="flex";
    signform.style.backgroundColor="white";
    form.style.display="none";
   
}

function loginform(){

    sectionBlur.style.filter="blur(20px)";
    form.style.display="flex";
    form.style.backgroundColor="white";
    signform.style.display="none";

}

function loginwindow(){
    form.style.display="none";
    sectionBlur.style.filter="none";

}

function signwindow(){
    signform.style.display="none";
    sectionBlur.style.filter="none";

}



gsap.from(".leftmain h1 , .leftmain span",{
    x:-100,
    opacity:0,
    stagger:0.3,
    duration:1
})





gsap.from("#one",{
    y:-200,
    duration:1,
    opacity:0,
    delay:0.5

})
gsap.from("#two",{
    y:200,
    duration:1,
    opacity:0,
    delay:0.5

})

gsap.from("#three",{
    y:-200,
    duration:1,
    opacity:0,
    delay:0.5

})

gsap.to("#explore",{
    y:20,
    repeat:-1,
    yoyo:true,
    duration:0.7
})


gsap.from("#first",{
    scale:0,
    opacity:0 ,
    duration:1,
    scrollTrigger:{

        trigger:"#first",
        scroller:"body"

    },
})

gsap.from("#second",{
    scale:0,
    opacity:0  ,
    duration:1,
    scrollTrigger:{

        trigger:"#first",
        scroller:"body"

    },
})

gsap.from("#third",{
    scale:0,
    opacity:0  ,
    duration:1,
    scrollTrigger:{

        trigger:"#first",
        scroller:"body"

    },
})

gsap.to(".main3 button",{
    y:20,
    repeat:-1,
    yoyo:true,
    duration:0.7
})


gsap.from(".packages-box",{
    scale:0,
    opacity:0 ,
    duration:1,
    scrollTrigger:{

        trigger:".packages-box",
        scroller:"body"

    },
})





