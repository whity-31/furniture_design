// ドロワーメニュー

$(function(){
    $('.drawer-btn').on('click',function(){
        $('.drawer-menu').toggleClass('show')
    })
})

// フェードイン

$(function(){
    $('.image').on('inview',function(){
        $(this).addClass('fadeIn')
    })
})