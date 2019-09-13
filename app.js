$(document).ready(function () {

    let btn = $('<button>Click Me</button>');
    $('body').prepend(btn);

    $(btn).click(function () {
        alert('You did it!');
    });

    $('.button-2').click(function () {
        var str = $('input').val();
        alert(str);
    });

    $('.div-1').mouseover(function () {
        $('.div-1').css('background-color', 'red');
    });

    $('.div-1').mouseout(function () {
        $('.div-1').css('background-color', 'transparent');
    });

    let p = $('<p>Hey this is some text.</p>');
    $('body').append(p);

    $(p).click(function () {
        $(p).css({
            color: reallyRandomColor(),
        }); // function that takes an object as an argument - look it up
    });

    let btn2 = $('<button>Span</button>')
    $('body').append(btn2);

    let div = $('<div>Lindsay</div>');

    $(btn2).click(function () {
        $('body').append(div);
    });

    let friendsArray = ['Haily', 'Jasmine', "Halle", "Alexis", "Jalon", "Ariel", "Natasha", "Aisha", "Camille", "Sophia"];
    let index = 0;

    $('.button-3').click(function () {
        let li = $('<li>' + friendsArray[index] + '</li>');
        $('#friends').append(li);
        index++;
    });

});

function reallyRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

