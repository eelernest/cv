
//Buttons
var btnHome = document.getElementById("btn-home");
var btnAbout = document.getElementById("btn-about");
var btnExp = document.getElementById("btn-exp");
var btnContact = document.getElementById("btn-contact");

//Buttons-mobile
var btnHomeMobile = document.getElementById("btn-home-m");
var btnAboutMobile = document.getElementById("btn-about-m");
var btnExpMobile = document.getElementById("btn-exp-m");
var btnContactMobile = document.getElementById("btn-contact-m");

//Pages
var pageHome = document.getElementById("home");
var pageAbout = document.getElementById("about");
var pageExp = document.getElementById("experience");
var pageContact = document.getElementById("btn-contact");

//Button-Home-ActiveNav
btnHome.addEventListener("click", activenav, true);
function activenav(){
    btnHome.classList.add("active");
    btnAbout.classList.remove("active");
    btnExp.classList.remove("active");
    btnContact.classList.remove("active");

}

//Button-About-add-Z-index

btnAbout.addEventListener("click", changeIndex, true);
btnAboutMobile.addEventListener("click", changeIndex, true);

function changeIndex(){
    var contador = 0;
if(contador == 0){
pageAbout.classList.add("active1");
pageExp.classList.remove("active1");
pageContact.classList.remove("active1");
//Active-Class Navbar
btnHome.classList.remove("active");
btnAbout.classList.add("active");
btnExp.classList.remove("active");
btnContact.classList.remove("active");
}else{
    pageAbout.classList.remove("active1");
    contador =1;
}
}
//Button-Experience-add-Z-index

btnExp.addEventListener("click", changeIndex1, true);
btnExpMobile.addEventListener("click", changeIndex1, true);

function changeIndex1(){
    var contador = 1;
if(contador == 1){
pageAbout.classList.remove("active1");
pageExp.classList.add("active1");
pageContact.classList.remove("active1");
//Active-Class Navbar
btnHome.classList.remove("active");
btnAbout.classList.remove("active");
btnExp.classList.add("active");
btnContact.classList.remove("active");
}else{
    pageExp.classList.remove("active1");
}
}

//Button-Contact-add-Z-index

btnContact.addEventListener("click", changeIndex2, true);
btnContactMobile.addEventListener("click", changeIndex2, true);

function changeIndex2(){
    var contador = 2;
if(contador == 2){
pageAbout.classList.remove("active1");
pageExp.classList.remove("active1");
pageContact.classList.add("active1");
//Active-Class Navbar
btnHome.classList.remove("active");
btnAbout.classList.remove("active");
btnExp.classList.remove("active");
btnContact.classList.add("active");
}else{
    pageContact.classList.remove("active1");
}
}

//Button mobile home
btnHomeMobile.addEventListener("click", margenes, true);
btnAboutMobile.addEventListener("click", margenesa, true);
btnExpMobile.addEventListener("click", margenese, true);
btnContactMobile.addEventListener("click", margenesc, true);

function margenes(){
    var contador = 4;
if(contador == 4){

btnHomeMobile.classList.add("margentop");
btnAboutMobile.classList.remove("margentop");
btnExpMobile.classList.remove("margentop");
btnContactMobile.classList.remove("margentop");
}else{
    btnHomeMobile.classList.remove("margentop");
}
}
function margenesa(){
    var contador = 1;
if(contador == 1){

btnHomeMobile.classList.remove("margentop");
btnAboutMobile.classList.add("margentop");
btnExpMobile.classList.remove("margentop");
btnContactMobile.classList.remove("margentop");
}else{
    btnAboutMobile.classList.remove("margentop");
}
}
function margenese(){
    var contador = 2;
if(contador == 2){

btnHomeMobile.classList.remove("margentop");
btnAboutMobile.classList.remove("margentop");
btnExpMobile.classList.add("margentop");
btnContactMobile.classList.remove("margentop");
}else{
    btnExpMobile.classList.remove("margentop");
}
}
function margenesc(){
    var contador = 3;
if(contador == 3){

btnHomeMobile.classList.remove("margentop");
btnAboutMobile.classList.remove("margentop");
btnExpMobile.classList.remove("margentop");
btnContactMobile.classList.add("margentop");
}else{
    btnContactMobile.classList.remove("margentop");
}
}
