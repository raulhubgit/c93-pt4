username = localStorage.getItem("username");
room_name = localStorage.getItem("room_name");

function send(){
    msg = document.getElementById("msg").value;
    document.getElementById("msg").value = " ";
    document.getElementById("msg1").innerHTML = username +": "+msg;
}
function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}