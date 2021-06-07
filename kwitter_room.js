//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyBYYYuzeh34yXcWcfx0Zu3s7q_UoCvFvKo",
  authDomain: "kwitterbyakshaj-965bc.firebaseapp.com",
  databaseURL: "https://kwitterbyakshaj-965bc-default-rtdb.firebaseio.com",
  projectId: "kwitterbyakshaj-965bc",
  storageBucket: "kwitterbyakshaj-965bc.appspot.com",
  messagingSenderId: "416351931734",
  appId: "1:416351931734:web:d0bbc791c8b2d8193c9af7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
              childKey = childSnapshot.key;
   Room_names = childKey;

console.log("Room Name - " + Room_names); 
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
document.getElementById("output").innerHTML += row;
   });
  });
}
getData();

function redirectToRoomName(name) { 
  console.log(name); 
  localStorage.setItem("room_name", name); 
  window.location = "bitter_page.html"; 
}
