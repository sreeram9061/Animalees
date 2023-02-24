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
const slid_not_left =document.querySelector('.img_container1')

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
  if ((!event.target.matches('.img2')&&!event.target.matches('.img1')&&!event.target.matches('.slid_not_left'))  && bol==true) {
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
let boll5=false
let boll6=false
img11.addEventListener('click',()=>{
    document.querySelector('.deschild').style.display="flex"
    img11.style.display="none"
    img12.style.display="block"
    document.getElementById('sml2').style.marginBottom="0";
    boll5=true

})
img12.addEventListener('click',()=>{
    document.querySelector('.deschild').style.display="none"
    img11.style.display="block"
    img12.style.display="none"
    boll5=false
})
img13.addEventListener('click',()=>{
    document.querySelector('.expchild').style.display="flex"
    img13.style.display="none"
    img14.style.display="block"
    document.getElementById('sml1').style.marginBottom="0";
    boll6=true

})
img14.addEventListener('click',()=>{
    document.querySelector('.expchild').style.display="none"
    img13.style.display="block"
    img14.style.display="none"
    boll6=false
})
img2.addEventListener('click',()=>{
    
if(boll5==true || boll6==true){
    console.log("yes it's in")
   
    document.querySelector('.deschild').style.display="none"
    img11.style.display="block"
    img12.style.display="none"
    boll5=false
    document.querySelector('.expchild').style.display="none"
    img13.style.display="block"
    img14.style.display="none"
    boll6=false
    
}
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


/***************typing-animation****************/

const textTypingAnimation=(tex,typing)=>{
    let i=0;
const textTypingAnimation =()=>{
    if(i< tex.length){
        typing.innerHTML += tex.charAt(i);
        i++
    setTimeout(textTypingAnimation,100)
    }
}
textTypingAnimation()
}



let typing =document.getElementById('typing')
let text ="Resplendent Quetzal"
textTypingAnimation(text,typing)



const devicewidth =window.matchMedia('(max-width: 835px)')
let mediaqueryboll=true;
if(devicewidth.matches){
    mediaqueryboll=false
}



if(mediaqueryboll){
    console.log("hleo")




let boll=false
let texttwo ="Giant panda"
document.querySelector('.hleoee').addEventListener('mouseenter',()=>{
let typing_two =document.getElementById('typing_two')
           if(!boll){
            document.querySelector('.informptag').style.display="block"
               textTypingAnimation(texttwo,typing_two) 
               boll=true
           }
})

let boll_2=false
let textsecond="Philippine eagle (Pithecophaga jefferyi)"
document.querySelector('.img_2').addEventListener('mouseenter',()=>{
let typing_scond =document.getElementById('typing_scond');
    if(!boll_2){
        document.querySelector('.informptag_2').style.display="block"
           textTypingAnimation(textsecond,typing_scond) 
           boll_2=true
    }
})
let boll_3=false
textthird ="Gharial (Gavialis gangeticus)"
document.querySelector('.img_3').addEventListener('mouseenter',()=>{
    let typing_third =document.getElementById('typing_third')
    if(!boll_3){
        document.querySelector('.informptag_3').style.display="block"
        textTypingAnimation(textthird,typing_third)
        boll_3=true
    }
})

let boll_4=false
textfourth ="Malayan Tiger (Panthera tigris jacksoni)"
document.querySelector('.img_4').addEventListener('mouseenter',()=>{
    let typing_fourth =document.getElementById('typing_fourth')
    if(!boll_4){
        document.querySelector('.informptag_4').style.display="block"
        textTypingAnimation(textfourth,typing_fourth)
        boll_4=true
    }
})

}else{
    
    document.getElementById('typing_two').innerHTML="Giant panda"
    document.getElementById('typing_scond').innerHTML="Philippine eagle (Pithecophaga jefferyi)"
    document.getElementById('typing_third').innerHTML="Gharial (Gavialis gangeticus)"
    document.getElementById('typing_fourth').innerHTML="Malayan Tiger (Panthera tigris jacksoni)"

}