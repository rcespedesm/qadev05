/**
 * Created by rodrigocespedes on 12/17/2015.
 */


$(document).ready(function() {
    addLetters();
    $('.key').on('click', writeOnInput);
    addOtherButtons();
    $('.extra').on('click', writeOtherLetters);
});

