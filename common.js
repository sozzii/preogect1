$('header').load('header.html article', headerdown);

function headerdown() {
    let scrollState = { y: 0, y2: 0, state: 'down' };
    let scrollTop;

    scrollTop = $(window).scrollTop()

    if (scrollState) {
        $('header article').addClass('active');
    } else {
        $('header article').removeClass('active');
    }

    if (scrollState.y == 0) {
        $('header article').addClass('white');
    } else {
        $('header article').addClass('white');
    }
}


$('footer').load('footer.html .foot', footerFun);


function footerFun() {
    $('.insite p:nth-of-type(2)').on('click', function () {
        $('.insite2').addClass('active');
    });
    $('.insite2 button').on('click', function () {
        $('.insite2').removeClass('active');
    });
    
    $('.outsite p:nth-of-type(2)').on('click', function () {
        $('.outsite2').addClass('active');
    });
    $('.outsite2 button').on('click', function () {
        $('.outsite2').removeClass('active');
    });
}
$(window).on('scroll', headerdown);
