
let search = document.querySelector(".search-box");

function show_hidden_searchBox() {
    search.classList.toggle('active');
  }



   
  let header = document.querySelector('header');

  window.addEventListener('scroll'  ,  headerShadow , false) ;


  function headerShadow() {
    header.classList.toggle('shadow' , window.scrollY > 0);
  }




  function cars (car){
    
    var img = document.getElementById("home");
    var aboutImg = document.querySelector('.about-img img');
    var r = document.querySelector(':root');
    var footer = document.querySelector('.footer');

  
    switch(car) {

      // 1 = orange , 2 = red , 3 = blue
      case 1 : 
      img.style.backgroundImage = 'url("images/Car_background_orange.png")' ;
      r.style.setProperty('--main-color', '#fe9739');
      r.style.setProperty('--main-color-dark', '#ff7219');
      aboutImg.src = "images/about2.png" ;
      footer.style.setProperty('box-shadow' , '0px -2px 10px #fe9739');


      break;

      case 2 : 
      img.style.backgroundImage = 'url("images/Car_background_red.png")' ;
      r.style.setProperty('--main-color', '#ec515c');
      r.style.setProperty('--main-color-dark', '#df1721');
      aboutImg.src = "images/about3.png" ;
      footer.style.setProperty('box-shadow' , '0px -2px 10px #ec515c');

      break;

      case 3 : 
      img.style.backgroundImage = 'url("images/Car_background_blue.png")' ;
      r.style.setProperty('--main-color', '#41caf8');
      r.style.setProperty('--main-color-dark', '#136dfd');
      aboutImg.src = "images/about4.png" ;
      footer.style.setProperty('box-shadow' , '0px -2px 10px #41caf8');

      break;


      default :
      r.style.setProperty('--main-color', 'blue');

    }
    
  }