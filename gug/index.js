function tab(m){
  var memder =m.getAttribute("href");
  var login = document.getElementById("login").style;
  var login_guest = document.getElementById("login_guest").style;
  if(memder=="#login"){
    login.display="block";
    login_guest.display="none";
  }else{
    login.display="none";
    login_guest.display="block";
  }
}

//getAttribut 는 속성을 가저오는
//setAttribut 은 속성을 바꾸는
function showCar(x) {
  var source = x.getAttribute('href');
  var placeholder = document.getElementById('placeholder');
  placeholder.setAttribute('src', source);
}

function login_close(a){
  var loginBox = document.getElementById("loginBox").style.display=a;

}