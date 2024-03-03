$(document).ready(function(){
    var classActive= 'active';
    $('.tab-menu a').first().addClass(classActive);
    $('.nft').first().addClass(classActive);

    $('.tab-menu a').click(function(e){
        e.preventDefault();
        var nftID = $(this).attr('href');
        $('.tab-menu a, .nft').removeClass(classActive);
        $(this).addClass(classActive); 
        $(nftID).addClass(classActive);
    });
});