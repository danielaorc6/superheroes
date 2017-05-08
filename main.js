
function check() {

  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;

  var messages = ["You are Deadpool", "You are Iron Man", "You are Rocket Racoon", "You are Thor", "You are Ant-man"];

  var pictures = ["deadpool.jpg", "ironman.png", "rocket.jpg", "thor.jpg", "antman.png"];

  var personality = [
    "Deadpool's personality is that of the idea-driven weirdo, leading with Ne and basing it all with logic. Logic, you say? This guy is insane! He cuts his own limbs off at times and has shot himself in the head on several occasions! Well, logic doesn’t actually mean the user is intelligent, but that the decisions made are meant to be done in the most reasonable manner the user is capable of. Dearing, quick thinker and very passionate.",

    "Iron Man is by far the most charismatic of the superheroes. While many heroes have a persona that is a bit of a blank slate, Iron Man oozes personality from every pore. As Iron or his alter-ego Tony Stark, he loves the spotlight, and is perfectly at home talking in front of large groups of people. In fact, he loves attention so much that he is one of the few superheroes who doesn’t try to maintain a secret identity.",

    "Rocket is always planning one step ahead of everyone else. He can see all the moving parts he needs to make his plans work—whether it’s escaping a prison or building a new gadget or weapon. Rocket likes to get his hands dirty tinkering with new inventions, and he’s especially happy when he gets his hands on a gun during the prison escape. He’s able to seize on every opportunity that comes his way, and always wants to know what’s in it for him.",

    "Planning is not Thor's strong suit, but he was a trained warrior and can create reasonable battle strategy.  He is not a particularly pensive person, who needs to organize his inner thoughts.  Instead, Thor focuses his organization outwards, making simple plans and categorizing people, places, and things. Not only is he loyal to his family and to Asguard, but he also has strongly held beliefs about freedom, trust and honor.",

    "Ant-Man character has had a weird and varied history, but it's often been a fun title to follow. You're the guy with the flexible intellect. Solutions to other people's problems come easily if they can get your attention away from your own projects. People have called you a dreamer, but you’ve never been afraid to put your big ideas to the test. Very family oriente'"

  ]

// --------------DEADPOOL--------------
    if (question1 == "funny" && question2 == "experience" && question3 == "no") {
         document.getElementById('message').innerHTML = messages[0];
         document.getElementById('picture').src = pictures[0];
         document.getElementById('personality').innerHTML = personality[0];
    }

// --------------IRON MAN--------------
    if (question1 == "attention" && question2 == "books" && question3 == "yes") {
         document.getElementById('message').innerHTML = messages[1];
         document.getElementById('picture').src = pictures[1];
         document.getElementById('personality').innerHTML = personality[1];
    }

// --------------ROCKET RACOON--------------
    if (question1 == "funny" && question2 == "books" && question3 == "yes") {
         document.getElementById('message').innerHTML = messages[2];
         document.getElementById('picture').src = pictures[2];
         document.getElementById('personality').innerHTML = personality[2];
    }

// --------------THOR-----------------------
    if (question1 == "attention" & question2 == "experience" && question3 == "no") {
         document.getElementById('message').innerHTML = messages[3];
         document.getElementById('picture').src = pictures[3];
         document.getElementById('personality').innerHTML = personality[3];
    }

// --------------ANT MAN-----------------------
if (question1 == "funny" && question2 == "experience" && question3 == "yes") {
     document.getElementById('message').innerHTML = messages[4];
     document.getElementById('picture').src = pictures[4];
     document.getElementById('personality').innerHTML = personality[4];
}

document.getElementById('after-submit').style.visibility = "visible";

}

// --------------ANSWER BOX VISIVILITY----------------------

 $(document).ready(function(){
   $("#quiz").click(function(){
       $("#quiz").css({marginLeft:'97px'})
          $(".submit").show().css({display: 'inline-block'})

   });

 });
