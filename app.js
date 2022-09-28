//-------------------get id from field input
var Username = document.getElementById("username");
var Email = document.getElementById("email");
var Pass = document.getElementById("password");
var ConfPass = document.getElementById("confPass");
var Adress = document.getElementById("Address");
var Calender = document.getElementById("calender");
var MobNum = document.getElementById("number");
var PostalCode = document.getElementById("postalCode")
//-------------------create vaiable of gender get gender value by radio button------
let gender = null;
//------------------- create for get data from user in object and get object data in array------
let datafromObject = [];
//------------------- create function beacuse checking validation of input values------

let DataUser = {};
function validationForm() {
    if (Username.value.trim() == "") {
        document.getElementById("Error1").innerText = "UserName is Required!";
        Username.focus();
        return false;
    }
    else if (Email.value.trim() == "") {
        document.getElementById("Error2").innerText = "Email is Required!";
        Email.focus();
        return false;
    }
    else if (Pass.value.trim() == "") {
        document.getElementById("Error3").innerText = "Password is Required!";
        Pass.focus();
        return false;
    }
    else if (ConfPass.value.trim() == "") {
        document.getElementById("Error4").innerText = "Confirm Password is Required!";
        ConfPass.focus();
        return false;
    }
    else if (ConfPass.value.trim() != Pass.value) {
        document.getElementById("Error4").innerText = "Sorry! Password not Match Try Again"
        ConfPass.focus();
        return false;
    }
    else if (Adress.value.trim() == "") {
        document.getElementById("Error5").innerText = "Addres is Required!";
        Adress.focus();
        return false;
    }
    else if (Calender.value.trim() == "") {
        document.getElementById("Error6").innerText = "DOB is Required!";
        Calender.focus();
        return false;
    }

    else if (MobNum.value.trim() == "") {
        document.getElementById("Error8").innerText = "Mobile Number is Required!";
        MobNum.focus();
        return false;
    }
    else if (PostalCode.value.trim() == "") {
        document.getElementById("Error9").innerText = "Mobile Number is Required!";
        PostalCode.focus();
        return false;
    }
    //------------------------create looop of check which radio button has been checked checkedy throught name-------
    var radios = document.getElementsByName('gender');
    for (var radio of radios) {
        if (radio.checked) {
            gender = radio.value;
        }
    }
    //-------------------------getting data from user and input in object-----------
    DataUser = {
        UserName: Username.value,
        Email: Email.value,
        Password: Pass.value,
        confPassword: ConfPass.value,
        Adress: Adress.value,
        Calender: Calender.value,
        MobNumber: MobNum.value,
        PostalCode: PostalCode.value,
        gender: gender
    }
    //-------------------------pushing object data in array------
    datafromObject.push(DataUser);
    //-------------------------stored all data in localstorage by stringify in json --------
    localStorage.setItem("UserData", JSON.stringify(datafromObject));
}

//-----------Main page Sinup Page Display---------------
function SIngUpFunc() {
    document.querySelector(".ContainerSinUp").style.display = "flex";
    document.getElementById("TopContainer").style.display = "none";
}
//-----------Main page Sinup Page Display End---------------
function bodyData() {
    document.getElementById("TopContainer").style.display = "block";
}
//-----------Main page Login Page Display---------------
function loginFunc() {
    document.querySelector("#LoginContainer").style.display = "flex";
    document.querySelector("#TopContainer").style.display = "none"
}
//-----------Main page Sinup Page Display End---------------


//---------Start working on LIGIN FORM--------

//------Decalre variable get from localstorage--------
let namegiveU = null;
let emailgiveU = null;
let dobgiveU = null;
let passgiveU = null;
let addresgiveU = null;
let gendergiveU = null;
let postalCodeU = null;
let mobileU = null;
let getDataFromlocalStorage = localStorage.getItem("UserData");
let arrayData = JSON.parse(getDataFromlocalStorage);
for (let key in arrayData) {
    if (arrayData[key].Email) {
        emailgiveU = arrayData[key].Email;
    }
    if (arrayData[key].Password) {
        passgiveU = arrayData[key].Password;
    }
    if (arrayData[key].UserName) {
        namegiveU = arrayData[key].UserName;
    }
    if (arrayData[key].Calender) {
        dobgiveU = arrayData[key].Calender;
    }
    if (arrayData[key].Adress) {
        addresgiveU = arrayData[key].Adress
    }
    if (arrayData[key].gender) {
        gendergiveU = arrayData[key].gender;
    }
    if(arrayData[key].PostalCode){
        postalCodeU = arrayData[key].PostalCode;
    }
    if(arrayData[key].MobNumber){
        mobileU = arrayData[key].MobNumber;
    }
}
console.log(addresgiveU);

console.log("hi",gender);
let getPass = document.getElementById("passwords");
let getmail = document.getElementById("mails");
function loginFuncdata() {
    if (emailgiveU !== getmail.value || passgiveU !== getPass.value) {
        alert("Email or Password Is Incorrect!")
    }
    else {
        alert("Congratulation Login SuccessFully")
        document.getElementById("LoginContainer").style.display = "none";
        document.getElementById("dashboardContainer").style.display = "block";
        document.getElementById("TopContainer").style.display = "none";

    }
    window.preventDefault();
}
//---------working on LIGIN FORM End--------

//-------Working on DashBoard-start-----------------
function DisplayAssignments() {
    document.getElementById("listMenu").style.display = "block";
}

function DisplayMoviesOnmain() {
    document.getElementById("MoviesContainer").style.display = "block";
    document.getElementById("UserDataShow").style.display = "none";
    document.getElementById("mainPage").style.display = "none";
    document.getElementById("sideBar").style.width = "20%"
    document.getElementById("Movie1Information").style.display = "none";
    window.preventDefault();
}
document.getElementById("nameUser").innerText = "👋WELCOME_" + namegiveU.toUpperCase() + " TO MY DASHBOARD";
//-------Working on DashBoard End------------------
//---------------logoout Data----------------
function LogOutData() {
    document.getElementById("TopContainer").style.display = "block";
    document.getElementById("dashboardContainer").style.display = "none";
    localStorage.clear();
}

//-------Seat booking by user start-----------------

let bookedSeat = [12, 13, 23, 44, 45, 53];
function userSeat(seatNumber) {
    for (var i = 1; i <= 48; i++) {
        if (seatNumber == i) {
            bookedSeat.push(seatNumber);
            document.querySelector("#seatNo" + i).style.backgroundColor = "gold";
            localStorage.setItem("seatsBooked", JSON.stringify(bookedSeat));
        }
    }
}
function nextPAGE() {
    document.getElementById("LoginContainer").style.display = "block";
    document.getElementById("ContainerSinUp").style.display = "none";
}
function TicketBookMovie() {
    document.getElementById("MoviesContainer").style.display = "none";
    document.getElementById("Movie1Information").style.display = "block";
}
//-------Seat booking by user start End-----------------
function displayData(){

}
//-------User Data Show-----------------

let imgGetData= null;

document.querySelector("#NameU").innerText = namegiveU;
document.querySelector("#emailU").innerText = emailgiveU;
document.querySelector("#dobU").innerText = dobgiveU;
document.querySelector("#passU").innerText = passgiveU;
document.querySelector("#addresU").innerText = addresgiveU;
document.querySelector("#genderU").innerText = gendergiveU;
document.querySelector("#mobileU").innerText = mobileU;
document.querySelector("#postalCodeU").innerText = postalCodeU;

let informationUser  = document.getElementById("dataIformation");
function DisplayDatUser(){
     document.getElementById("UserDataShow").style.display = "block"; 
     document.getElementById("mainPage").style.display = "none"; 
     document.getElementById("MoviesContainer").style.display = "none"; 
     document.getElementById("sideBar").style.width = "18%";
}
