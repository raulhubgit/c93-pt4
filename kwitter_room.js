username = localStorage.getItem("username");
room_name = localStorage.getItem("room_name");
document.getElementById("oi").innerHTML = username;
  
function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
function addRoom(){
  room_name = document.getElementById("roomName").value;
 
  document.getElementById("output").innerHTML = room_name;

  localStorage.setItem("room_name", room_name);

  document.getElementById("oi").innerHTML = "Bem-Vindo(a) "+username;
}
function move(){
  window.location = "Kwitter_page.html";
}

