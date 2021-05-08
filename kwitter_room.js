user_name = localStorage.getItem("username");
document.getElementById("welcome_label").innerHTML = "Welcome " + user_name + "!";
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBHDUdMs36c2Usz6EJhwO1FI47KK1PiGJk",
      authDomain: "kwitter-project-5a533.firebaseapp.com",
      projectId: "kwitter-project-5a533",
      storageBucket: "kwitter-project-5a533.appspot.com",
      messagingSenderId: "1012912674989",
      appId: "1:1012912674989:web:e11c1d5ff2e78dc2430e24"
    };
    function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
    }
    //Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logOut(){
      localStorage.removeItem("username");
      window.location = "index.html"
}