
const firebaseConfig = {
  apiKey: "AIzaSyAuR-TVwfKkcEsoqFc8G3cEJXAieBU6JfQ",
  authDomain: "seminar-746a3.firebaseapp.com",
  databaseURL: "https://seminar-746a3-default-rtdb.firebaseio.com",
  projectId: "seminar-746a3",
  storageBucket: "seminar-746a3.appspot.com",
  messagingSenderId: "483314293322",
  appId: "1:483314293322:web:466063eb3c0ea85b1aa4b3",
  measurementId: "G-RTHTH5PQ82"
};

  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
  var dataRef1 = database.ref('temp');
	  var dataRef2 = database.ref('humid');
	  var dataRef3 = database.ref('led');

  //fetch the data
	  dataRef2.on('value', function(getdata1){
	  	var humi = getdata1.val();
	  	document.getElementById('humidity').innerHTML = humi + "%";
	  })

	   dataRef1.on('value', function(getdata2){
	  	var temp = getdata2.val();
	  	document.getElementById('temperature').innerHTML = temp + "&#8451;";
	  })

	var index=0;
var btn=document.getElementById("led");

function press() {
index++;
if (index%2==1) {
	database.ref('LED').set("1");
	document.getElementById('led').innerHTML="turn off";
}
else {
database.ref('LED').set("0");
document.getElementById('led').innerHTML="turn on";
}
}
