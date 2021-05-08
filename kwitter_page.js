//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBHDUdMs36c2Usz6EJhwO1FI47KK1PiGJk",
      authDomain: "kwitter-project-5a533.firebaseapp.com",
      projectId: "kwitter-project-5a533",
      storageBucket: "kwitter-project-5a533.appspot.com",
      messagingSenderId: "1012912674989",
      appId: "1:1012912674989:web:e11c1d5ff2e78dc2430e24"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name")
    room_name = localStorage.getItem("room_name")
    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
//Start code
console.log(message_data);
console.log(firebase_message_id);
name = message_data['name'];
message = message_data['message'];
like = message_data['likes'];
name_with_tag = "<h4>" + name + "<img class = 'user_tick' src = 'tick.png'></h4>";
message_with_tag = "<h4 class = 'message_h4'>" + message + "</h4>";
like_button = "<button class = 'btn-warning' id = '" + firebase_message_id + "'value ='" + like + "' onclick = 'updateLike(this.id)'>";
span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>Like:" + like + "</span></button><hr>";
row = name_with_tag + message_with_tag + like_button + span_with_tag;
//End code
   } });  }); }
getData();

function logout(){
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location = "index.html";
}

function send(){
   msg = document.getElementById("msg").value
   firebase.database().ref(room_name).push({
         name: user_name,
         message: msg,
         likes: 0
   });

   document.getElementById("msg").value = "";
   document.getElementById("output").innerHTML += row;
}

function updateLike(message_id){
   console.log("clicked on the like button - " + message_id);
   button_id = message_id;
   likes = document.getElementById(button_id).value;
   updated_likes = Number(likes) + 1;
   console.log(updated_likes);
   firebase.database().ref(room_name).child(message_id).update({like: updated_likes});
}