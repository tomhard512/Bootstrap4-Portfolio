// (function() {

// })

// event pada saat link diklik
$('.page-scroll').on('click', function(e) {

    // console.log('ok')

    // ambil isi href
    var tujuan = $(this).attr('href');
    // console.log(href);

    // tangkap elemen yang bersangkutan
    var elemenTujuan = $(tujuan);

    // console.log($('body').scrollTop());
    // console.log(elemenTujuan.offset().top);

    // pindahkan scroll
    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1250, 'easeInOutExpo');
    // $('html, body').scrollTop(elemenTujuan.offset().top);


    e.preventDefault();
});
