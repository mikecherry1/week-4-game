var crystal = {
    pink:
    {
        name: "Pink",
        value: 0
    },
    blue:
    {
        name: "Blue",
        value: 0
    },
    green:
    {
        name: "Green",
        value: 0
    },
    yellow:
    {
        name: "Yellow",
        value: 0
    }
};

var currentScore    = 0;
var targetScore     = 0;

var winCount        = 0;
var lossCount       = 0;


var getRandom = function(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var startGame = function() {

    var currentScore = 0;

    targetScore =           getRandom(19,120);

    crystal.pink.value =    getRandom(1, 12);
    crystal.blue.value =    getRandom(1, 12);
    crystal.green.value =   getRandom(1, 12);
    crystal.yellow.value =  getRandom(1, 12);

    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);
}

var addValues = function(crystal) {

    currentScore = currentScore + crystal.value;

    $("#yourScore").html(currentScore);

    checkWin();
}



$("#pink").click(function() {
    alert("pink!");
});

$("#blue").click(function() {
});

$("#green").click(function() {
});

$("#yellow").click(function() {
});