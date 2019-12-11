var config = {
    apiKey: "AIzaSyDnt7NKUuKQM-j767DG0PyoTrH8N0xr4Zk",
    authDomain: "gmed-edc1a.firebaseapp.com",
    databaseURL: "https://gmed-edc1a.firebaseio.com",
    projectId: "gmed-edc1a",
    storageBucket: "gmed-edc1a.appspot.com",
    messagingSenderId: "492044765191"
  };
  firebase.initializeApp(config);

var messagesRef = firebase.database().ref('messages');

document.getElementById("contactForm").addEventListener("submit" , submitForm);

function submitForm(e)
{
    e.preventDefault();


var name = getInputVal('name');
var surName = getInputVal('surName');
var phoneNumber = getInputVal('phoneNumber');
var CIN = getInputVal('CIN');
var adresse = getInputVal('adresse');
var Email = getInputVal('Email');
var comment = getInputVal('comment');
var professionnel = document.getElementById('professionnel').checked;
var patient =  document.getElementById('patient').checked;
var revendeur = document.getElementById('revendeur').checked;
var autre = document.getElementById('autre').checked;

saveMessage(name, surName, phoneNumber, CIN, adresse, Email, comment, professionnel, patient, revendeur, autre);

document.getElementById("contactForm").reset();
}
function getInputVal(id){
    return document.getElementById(id).value;
}

function saveMessage(name, surName, phoneNumber, CIN, adresse, Email, comment, professionnel, patient, revendeur, autre){
    var newMessageRef = messagesRef.push();
   newMessageRef.set ({
        name: name,
        surName: surName,
        phoneNumber: phoneNumber,
        CIN: CIN,
        adresse: adresse,
        Email: Email,
        comment: comment,
        professionnel: professionnel,
        patient: patient,
        revendeur: revendeur,
        autre: autre
    });
}
