

(function () {

var names = ["Reem", "Jasim", "Jamila", "Meera", "Fatma", "Jowhara", "Sara", "Roudha", "Ahmad", "Jim"];


for (var i = 0; i < names.length; i++) {

 
  var firstLetter = names[i].charAt(0).toLowerCase();

  
  if (firstLetter === 'j') {
    //byeSpeaker.speak(names[i]);
    console.log('Good Bye'+ '  ' + names[i]);
  } else {
    console.log('hello' + '  ' + names[i]);
  }
}

})();
