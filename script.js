const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
// document.querySelector("#mousefollowercircle").style.opacity = 0;

// function MouseChaptaKro(){
//     var xscale = 1;
//     var yscale = 1;

//     var xprev = 0;
//     var yprev = 0;

//     window.addEventListener("mousemove",(dets)=>{
//         xscale = gsap.utils.clamp(0.8,5,xprev);
//         yscale = gsap.utils.clamp(0.8,5,yprev);

//         var xdiff = dets.clientX - xprev;
//         var ydiff = dets.clientY - yprev;

//         xprev = dets.clientX;
//         yprev = dets.clientY;

        
//     });
// }
// MouseChaptaKro();

function MouseFollower(){
    window.addEventListener("mousemove",(dets)=>{
        // console.log(dets);
        // console.log(dets.clientX,dets.clientY);
            document.querySelector("#mousefollowercircle").style.left= `${dets.clientX}px`;
            document.querySelector("#mousefollowercircle").style.top=`${dets.clientY}px`;
            document.querySelector("#mousefollowercircle").style.opacity = 1;
            // document.querySelector("#mousefollowercircle").style.tranform = `scale(${xscale},${yscale})` ;
    })
}
// window.addEventListener("mouseout",()=>{
//     document.querySelector("#mousefollowercircle").style.opacity = 0;
// });

function firstPageAnimation(){
    var tl = gsap.timeline();
    
    tl.from("#nav",{
        y:-10,
        opacity:0,
        ease:Expo.easeInout,
    });
    tl.to(".boundingelem",{
        y:0,
        duration:0.8,
        ease:Expo.easeInout,
        stagger:0.2,
    })
    tl.from(".boundingeleminverse",{
        y:-50,
        opacity:0,
        ease:Expo.easeInout,
    })
    tl.from(".herofootermain1",{
        opacity:0,
        y:10,
        delay:0,
    })
};

const elementss = document.querySelectorAll(".elem");

elementss.forEach(elem =>{
    var rotateimg = 0;
    var diffroate = 0;
    elem.addEventListener("mouseleave",()=>{
        gsap.to(elem.querySelector("img"),{
            opacity:0,
            // ease:Power5,
        })
     })
    elem.addEventListener("mousemove",(dets)=>{
        diffroate = dets.clientX - rotateimg;
        rotateimg = dets.clientX;
        let diffy = dets.clientY - elem.getBoundingClientRect().top //- (elem.getBoundingClientRect().height/2);
        gsap.to(elem.querySelector("img"),{
            opacity:1,
            top:diffy,
            left:dets.clientX ,//-(elem.getBoundingClientRect().width)/4,
            rotate:diffroate,
        });
    });

});





MouseFollower();
firstPageAnimation();