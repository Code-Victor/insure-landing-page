const ham=document.getElementsByClassName('ham')[0];
const nav=document.getElementsByClassName('mobile-nav')[0];
const close=document.getElementsByClassName('close')[0];
ham.addEventListener('click',()=>{
 nav.style.display='block'
 ham.style.display='none'
 close.style.display='block'
})

close.addEventListener('click',()=>{
    nav.style.display='none';
    ham.style.display='block';
    close.style.display='none';
})

function remove_ham(){
    console.log(innerWidth)
    if (innerWidth>720){
        ham.style.display='none';
        close.style.display='none';
        nav.style.display='none';
    }
}
window.addEventListener('resize',remove_ham)
window.addEventListener('resize',()=>{
    if (innerWidth<720){
        ham.style.display='block'
    }
})
// while (ham.style.display==='block'){
//     remove_ham()
// }

// while (close.style.display==='block'){
//     remove_ham()
// }
