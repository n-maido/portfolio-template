function darkmode(){
  let toogleStatus = document.getElementById('check-mode');
  let bodyElement = document.getElementsByTagName('body')[0];
  let navLogo = document.getElementsByClassName('nav-logo')[0];
  let cards = document.getElementsByClassName('card');
  if(toogleStatus.checked){
    bodyElement.className += " " + "darkmode";
    navLogo.className += " " + "darkmode";
    for(let i = 0; i < cards.length; i++){
      cards[i].className += " " + "alt-background";
    }

  }else{
    bodyElement.classList.remove('darkmode');
    navLogo.classList.remove('darkmode');
    for(let i = 0; i < cards.length; i++){
      cards[i].classList.remove('alt-background');
    }
  }
}
