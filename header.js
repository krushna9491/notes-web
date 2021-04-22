let sideBtn = document.getElementById(`sideBtn`);
sideBtn.addEventListener(`click`,  function(){
    if(navBar.style.height ==`170px`){
        navBar.style.height = `27px`;}
    else{
    navBar.style.height=`170px`;
    }
});
