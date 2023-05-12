function tab(m) {
  var memder = m.getAttribute('href');
  var login = document.getElementById('login').style;
  var login_guest = document.getElementById('login_guest').style;
  if (memder == '#login') {
    login.display = 'block';
    login_guest.display = 'none';
  } else {
    login.display = 'none';
    login_guest.display = 'block';
  }
}

//getAttribut 는 속성을 가저오는
//setAttribut 은 속성을 바꾸는
function showCar(x) {
  var source = x.getAttribute('href');
  var placeholder = document.getElementById('placeholder');
  placeholder.setAttribute('src', source);
}

function login_close(a) {
  var loginBox = (document.getElementById('loginBox').style.display = a);
}

// ----------------
function showCar(x) {
  //getAttribut 는 속성을 가저오는
  //setAttribut 은 속성을 바꾸는
  var source = x.getAttribute('href');
  var placeholder = document.getElementById('placeholder');
  placeholder.setAttribute('src', source);
  console.log(source);
  var y = document.getElementsByClassName('y');

  for (var i = 0; i < y.length; i++) {
    var colors = y.item(i);
    if (x == colors) {
      x.setAttribute('style', 'background-color: yellow');
    } else {
      colors.setAttribute('style', 'background-color: black');
    }
  }
}
var count = 0;
function pre() {
  var image = document.getElementById('placeholder');
  count--;
  if (count == -3 || count == 0) {
    image.setAttribute('src', '../image/gug3.jpg');
    document.getElementById('one').style.backgroundColor = 'yellow';
    document.getElementById('two').style.backgroundColor = 'black';
    document.getElementById('three').style.backgroundColor = 'black';
    count = 0;
  } else if (count == -2 || count == 1) {
    image.setAttribute('src', '../image/gug1.jpg');
    document.getElementById('one').style.backgroundColor = 'black';
    document.getElementById('two').style.backgroundColor = 'yellow';
    document.getElementById('three').style.backgroundColor = 'black';
  } else if (count == -1) {
    image.setAttribute('src', '../image/gug5.jpg');
    document.getElementById('one').style.backgroundColor = 'black';
    document.getElementById('two').style.backgroundColor = 'black';
    document.getElementById('three').style.backgroundColor = 'yellow';
  } else {
  }
  console.log(count);
}

function next() {
  var image = document.getElementById('placeholder');
  count++;

  if (count == 1) {
    image.setAttribute('src', '../image/gug1.jpg');
    document.getElementById('one').style.backgroundColor = 'black';
    document.getElementById('two').style.backgroundColor = 'yellow';
    document.getElementById('three').style.backgroundColor = 'black';
  } else if (count == 2 || count == -1) {
    image.setAttribute('src', '../image/gug5.jpg');
    document.getElementById('one').style.backgroundColor = 'black';
    document.getElementById('two').style.backgroundColor = 'black';
    document.getElementById('three').style.backgroundColor = 'yellow';
  } else if (count == 3 || count == 0) {
    image.setAttribute('src', '../image/gug3.jpg');
    document.getElementById('one').style.backgroundColor = 'yellow';
    document.getElementById('two').style.backgroundColor = 'black';
    document.getElementById('three').style.backgroundColor = 'black';
    count = 0;
  }
  console.log(count);
}

function zoomIn(event) {
  event.target.style.width = '600px';
  event.target.style.height = '336px';
  event.target.style.transition = 'all 0.5s';
}

function zoomOut(event) {
  event.target.style.width = '500px';
  event.target.style.height = '280px';
  event.target.style.transition = 'all 0.5s';
}

// 메인 슬라이드
// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName('mySlides');

//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = 'none';
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   slides[slideIndex - 1].style.display = 'block';

//   setTimeout(showSlides, 2000); // 2초마다 이미지가 체인지됩니다
// }
