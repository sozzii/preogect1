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
    const burger1 = document.querySelector('.insite');
    const insite = document.querySelector('.insite2');
    const burger2 = document.querySelector('.outsite');
    const outsite = document.querySelector('.outsite2');
    const outbtn = document.querySelectorAll('.burger button');


    burger1.addEventListener('click', function () {
        insite.classList.add('active');
    });


    burger2.addEventListener('click', function () {
        outsite.classList.add('active');
        burger2.addEventListener('click', function () {
            outbtn.classList.remove('active');
        });
    });
}

$(window).on('scroll', headerdown);
