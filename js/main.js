$(document).ready(function () {
    $('nav a').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 61
        }, 500);
        return false;
    });
    $('.testimonal-slider').slick({
		infinite: true,
		speed: 500,
		autoplay: true,
	});
});
$(window).scroll(function () {
    var e = $(".sticky_active").offset().top;
    $(this).scrollTop() > e ? $("nav").addClass("stickyheader") : $("nav").removeClass("stickyheader")
})
const mHTML = document.getElementById('message'),
    messages = [
        'Making Brighter Smiles Everyday'
    ];
let currentMessage = 0;

function typeMessage() {
    if (!messages[currentMessage]) {
        currentMessage = 0;
    }
    const currentStr = messages[currentMessage];
    currentStr.split();
    let part = '';
    let currentLetter = 0;
    let int1 = setInterval(() => {
        if (!currentStr[currentLetter]) {
            currentMessage++;
            setTimeout(() => {
                deleteMessage(part);
            }, 500);
            clearInterval(int1);
        } else {
            part += currentStr[currentLetter++];
            mHTML.innerHTML = part;
        }
    }, 100);
}

function deleteMessage(str) {
    let int = setInterval(() => {
        if (str.length === 0) {
            setTimeout(() => {
                typeMessage();
            }, 500);
            clearInterval(int);
        } else {
            str = str.split('');
            str.pop();
            str = str.join('');
            mHTML.innerHTML = str;
        }
    }, 50);
}
typeMessage();
var today = new Date();
var year = today.getFullYear();
document.getElementById("year").innerHTML = year;