var randomBg = function(div){
    // this loads in a random BG
    // For security reasons, we can't just load
    // a file at random from a directory. So, what we're going
    // to do is chance to set a random class.

//    $faetower: '/images/backgrounds/randomBgs/faetower.png';
//$mistvalley: '/images/backgrounds/randomBgs/mistvalley.png';
//$moonrise: '/images/backgrounds/randomBgs/moonrise.png';
//$shroomvalley: '/images/backgrounds/randomBgs/shroomvalley.png';
//$sunsetwillows: '/images/backgrounds/randomBgs/sunsetwillows.png';
//$zangarra: '/images/backgrounds/randomBgs/zangarra.png';
    var classes = ["faetower", "mistvalley", "moonrise", "shroomvalley","sunsetwillows", "zangarra"],
        maxNum = classes.length - 1,
        theDiv = $(div);

    // pick a number between 0 and classes.length -1
    var chooseRandom = Math.floor(Math.random() * (maxNum - 0) + 0);

    // apply random number class
    theDiv.addClass(classes[chooseRandom]);
};
