
function Addition() {

    let number1= parseInt(document.getElementById('number1').value);
    let number2= parseInt(document.getElementById('number2').value);
    let tong = number1 + number2;
    alert("tong 2 so la:" + tong);
}
function Subtraction() {

    let number1= parseInt(document.getElementById('number1').value);
    let number2= parseInt(document.getElementById('number2').value);
    let hieu = number1 - number2;
    alert("hieu 2 so la:" + hieu);
}
function Multiplication() {

    let number1= parseInt(document.getElementById('number1').value);
    let number2= parseInt(document.getElementById('number2').value);
    let tich = number1*number2;
    alert("tich 2 so la:" + tich);
}
function Division() {

    let number1= parseInt(document.getElementById('number1').value);
    let number2= parseInt(document.getElementById('number2').value);
    let thuong = number1/number2;
    alert("thuong 2 so la:" + thuong);
}