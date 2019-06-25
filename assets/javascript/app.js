/* ---------- Variabls ---------- */
var correct = 0;
var incorrect = 0;
var timesUp = false;

/* ---------- Questions ---------- */
var question1 = {
    q: "???",
    a: "aa",
    b: "bb",
    c: "cc",
};

var question2 = {
    q: "???",
    a: "xx",
    b: "xx",
    c: "xx",
};

var question3 = {
    q: "???",
    a: "xx",
    b: "xx",
    c: "xx",
};

var question4 = {
    q: "???",
    a: "xx",
    b: "xx",
    c: "xx",
};

var question5 = {
    q: "???",
    a: "xx",
    b: "xx",
    c: "xx",
};


/* ---------- Functions ---------- */
function start() {
    $("#start").click(function() {
        $("#start").hide();
        $("#questions").append(question1.q);
        $("#a").show();
        $("#b").show();
        $("#c").show();
        $("#a").append(question1.a);
        $("#b").append(question1.b);
        $("#c").append(question1.c);
    });
};

/* ---------- Prcoesses ---------- */
$(document).ready(function() {
    
    $("#a").hide();
    $("#b").hide();
    $("#c").hide();
    start();
})