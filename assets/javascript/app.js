/* ---------- Variables ---------- */
var correct = 0;
var incorrect = 0;
var timesUp = false;

/* ---------- Questions ---------- */
var question1 = {
    q: "Who was Halo's first developing company?",
    a: "Bungie",
    b: "343 Industries",
    c: "EA Games",
};

var question2 = {
    q: "What is Master Chief's real name?",
    a: "David",
    b: "John",
    c: "Michael",
};

var question3 = {
    q: "What is the name of Master Chief's partner AI?",
    a: "Elise",
    b: "Cortana",
    c: "Autumn",
};

var question4 = {
    q: "What species is Arbiter Thel Vadam?",
    a: "Jiralhanae",
    b: "Flood",
    c: "Elites",
};

var question5 = {
    q: "What team did Master Chief lead?",
    a: "Blue Team",
    b: "Fireteam Osiris",
    c: "Noble Team",
};


/* ---------- Functions ---------- */
function start() {
    $("#start").click(function() {
        $("#start").hide();
        $(".choices").show();
        $(".questions").show();
        $("#a1").append(question1.a);
        $("#b1").append(question1.b);
        $("#c1").append(question1.c);
        $("#a2").append(question2.a);
        $("#b2").append(question2.b);
        $("#c2").append(question2.c);
        $("#a3").append(question3.a);
        $("#b3").append(question3.b);
        $("#c3").append(question3.c);
        $("#a4").append(question4.a);
        $("#b4").append(question4.b);
        $("#c4").append(question4.c);
        $("#a5").append(question5.a);
        $("#b5").append(question5.b);
        $("#c5").append(question5.c);
        $("#submit").show();
    });
};

/* ---------- Prcoesses ---------- */
$(document).ready(function() {
    
    $("#submit").hide();
    $(".questions").hide();
    $(".choices").hide();
    start();

})