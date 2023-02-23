const stitem_tow= document.querySelector(".stitem-2")
const listthree =document.querySelector(".listthree")
const fstdoar =document.querySelector('.firstdownarow')


const newlistthree =document.querySelector('.newlistthree')
const stitem3= document.querySelector('.stitem-3')
const secdoar =document.querySelector('.secondownarow')


const enter =(lithr,downarow,bole)=>{
    if(bole==true){
    downarow.style.transform="rotate(0deg)"
    lithr.style.display="flex"
    lithr.classList.add('list')
    lithr.classList.remove('listtwo')

    }else{
    downarow.style.transform="rotate(0deg)"
    lithr.style.display="flex"
    lithr.classList.add('list_three')
    lithr.classList.remove('removee')

    }
    
}

const leave =(lithr,downarow,bole)=>{
    if(bole==true){
        downarow.style.transform="rotate(-180deg)"
        lithr.classList.remove('list')
        lithr.classList.add('listtwo')
        setTimeout( ()=>{
            lithr.style.display="none"
        }, 400);

    }else{
        downarow.style.transform="rotate(-180deg)"
        lithr.classList.remove('list_three')
        lithr.classList.add('removee')
        setTimeout( ()=>{
            lithr.style.display="none"
        }, 400);

    }
    

}


let bole
stitem_tow.addEventListener('mouseenter',()=>{
    bole=true
    enter(listthree,fstdoar,bole);

})
stitem_tow.addEventListener('mouseleave',()=>{
    bole=true
    leave(listthree,fstdoar,bole);

})

stitem3.addEventListener('mouseenter',()=>{
    bole=false
    enter(newlistthree,secdoar,bole);

})
stitem3.addEventListener('mouseleave',()=>{
    bole=false
    leave(newlistthree,secdoar,bole);

})

//**********************menu-button**************** */
var bol =false
const img1 =document.querySelector('.img1')
const img2 =document.querySelector('.img2')
const menuslid =document.querySelector('.sliddermenubar')

img1.addEventListener('click',()=>{
    img2.style.transform="translateX(0px) "
    img1.style.transform="translateX(-100px)"
    menuslid.style.transform="translateX(0px) "
    bol =true
    
})

img2.addEventListener('click',()=>{
    img1.style.transform="translateX(0px)"
    img2.style.transform="translateX(-100px) "
    menuslid.style.transform="translateX(-1000px) "
    bol =false
})

window.onclick = function(event) {
  if ((!event.target.matches('.img2')&&!event.target.matches('.img1'))  && bol==true) {
        img1.style.transform="translateX(0px)"
        img2.style.transform="translateX(-100px) "
        menuslid.style.transform="translateX(-1000px) "
        bol =false
      
    }
  }



/*************************menuslider section************* */
const img11=document.querySelector('.img11')
const img12=document.querySelector('.img12')
const img13=document.querySelector('.img13')
const img14=document.querySelector('.img14')

img11.addEventListener('click',()=>{
    document.querySelector('.deschild').style.display="flex"
    img11.style.display="none"
    img12.style.display="block"
    document.getElementById('sml2').style.marginBottom="0";

})
img12.addEventListener('click',()=>{
    document.querySelector('.deschild').style.display="none"
    img11.style.display="block"
    img12.style.display="none"
})
img13.addEventListener('click',()=>{
    document.querySelector('.expchild').style.display="flex"
    img13.style.display="none"
    img14.style.display="block"
    document.getElementById('sml1').style.marginBottom="0";

})
img14.addEventListener('click',()=>{
    document.querySelector('.expchild').style.display="none"
    img13.style.display="block"
    img14.style.display="none"
    

})


/////***************home img & text animation+++++++++*/

const homeimgtitile =document.querySelector('.homeimgtitile')
const imgmidilcontainer =document.querySelector('.imgmidilcontainer')
const logo =document.querySelector('.logo')

imgmidilcontainer.addEventListener('mouseenter',()=>{
    homeimgtitile.style.transform="translateX(20px)";
    logo.style.color="orange"

})

imgmidilcontainer.addEventListener('mouseleave',()=>{
    homeimgtitile.style.transform="translateX(0)";
    logo.style.color="white"

})


/***************typing-animation**************/

const textTypingAnimation=(tex,typing)=>{
    let i=0;
const textTypingAnimation =()=>{
   
    if(i< tex.length){
        typing.innerHTML += tex.charAt(i);
        i+=1
    setTimeout(textTypingAnimation,100)
    }
}
textTypingAnimation()
}

let typing =document.getElementById('typing')
let text ="Resplendent Quetzal"
textTypingAnimation(text,typing)



