let btn = document.getElementById("btn");
btn.addEventListener('click', function() {
    let myParagraphs = document.querySelectorAll('body > p');
    // let myParagraphs2 = document.getElementsByTagName(p);
    alert(myParagraphs.length);

    // for (let i = 0; i < myParagraphs.length; i++) {
    //     myParagraphs[i].style.color='red';
    //     myParagraphs[i].style.fontSize = '18px';
    // }

    myParagraphs.forEach(function(value) {
        value.style.color = 'red';
        value.style.fontSize = '18px';
    });
    
});

//metoda 2

let btn1 = document.getElementById('btn1');
btn1.addEventListener('click', function () {
    let myDiv1 = document.getElementsByClassName('div-left');
    // alert(typeof myDiv1);
    myDiv1[0].style.cssText='color: red;';
});

//metoda 3

let btn2 = document.getElementById('btn2');
btn2.addEventListener('click', function () {
    let myDiv2 = document.getElementsByClassName('div-right');
    // alert(typeof myDiv1);
    myDiv2[0].setAttribute('style', 'color: green;');
});


//metoda 4
let btn4 = document.getElementById('btn4');
btn4.addEventListener('click', function () {
    let myDiv2 = document.getElementsByClassName('div-right');
    // alert(typeof myDiv1);
    myDiv2[0].classList.add('demo');
});


//metoda 5
let btn5 = document.getElementById('btn5');
btn5.addEventListener('click', function () {
    let myDiv2 = document.getElementsByClassName('div-right');
    // alert(typeof myDiv1);
    myDiv2[0].classList.remove('demo');
});


//metoda 6
let btn6 = document.getElementById('btn6');
btn6.addEventListener('click', function () {
    let myDiv2 = document.getElementsByClassName('div-right');
    // alert(typeof myDiv1);
    myDiv2[0].classList.toggle('demo');
});