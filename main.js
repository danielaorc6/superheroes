
function check() {

  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;

  var messages = ["You are Deadpool", "You are Iron Man", "You are Rocket Racoon", "You are Thor"];
  var pictures = ["deadpool.jpg", "ironman.png", "rocket.jpg", "thor.jpg"];

    if (question1 == "funny" & question2 == "experience") {
         document.getElementById('message').innerHTML = messages[0];
         document.getElementById('picture').src = pictures[0];
    }

    if (question1 == "attention" & question2 == "books") {
         document.getElementById('message').innerHTML = messages[1];
         document.getElementById('picture').src = pictures[1];
    }

    if (question1 == "funny" & question2 == "books") {
         document.getElementById('message').innerHTML = messages[2];
         document.getElementById('picture').src = pictures[2];
    }

    if (question1 == "attention" & question2 == "experience") {
         document.getElementById('message').innerHTML = messages[3];
         document.getElementById('picture').src = pictures[3];
    }

document.getElementById('after-submit').style.visibility = "visible";

}
