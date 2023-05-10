const colors=document.querySelectorAll('.color-box h2');

function generateColors(){
    colors.forEach((color)=>{
        let hexcode='#' + Math.random().toString(16).substring(2,8);
        color.style.backgroundColor=hexcode;
        color.innerHTML=hexcode;
    });
}
generateColors();