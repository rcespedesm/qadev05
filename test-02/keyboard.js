/**
 * Created by rodrigocespedes on 12/17/2015.
 */

function addLetters()
{
    var keys = '';
    for(var i = 65;i < 91; i++)
    {
        var keys = '<div class="key" id="'
            + String.fromCharCode(i) + '">'
            + String.fromCharCode(i) + '</div>';
        $('.box').append(keys);
    }
    var keyExtra = '<div class="key-extra"></div>';
    $('.box').append(keyExtra);
}

function addOtherButtons()
{
    var space = '<div class="extra" id="space">SPACE</div>';
    var reset = '<div class="extra" id="reset">RESET</div>';
    $('.key-extra').append(reset);
    $('.key-extra').append(space);
}

function writeOnInput(e)
{
    $('#display').val($('#display').val()+e.target.id);
}

function writeOtherLetters(e)
{
    if(e.target.id == 'space')
        $('#display').val($('#display').val()+" ");
    if(e.target.id == 'reset')
        $('#display').val("");
}
