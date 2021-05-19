function testVariable() {
    let strText = document.getElementById("memid").value;
    let strText1 = document.getElementById("fname").value;
    let strText2 = document.getElementById("lname").value;
    let strText3 = document.getElementById("date").value;
    sessionStorage.setItem("memid", strText);
    sessionStorage.setItem("fname", strText1);
    sessionStorage.setItem("lname", strText2);
    sessionStorage.setItem("date", strText3);
    console.log("strText");
}