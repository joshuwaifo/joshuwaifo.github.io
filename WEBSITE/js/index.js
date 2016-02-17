var main = function(){
    $('.btn').click(function(){
        
        var post = $('.status-box').val();
        $('<li>').text(post).prependTo('.posts');
        $('.status-box').val('');
        $('.counter').text('300');
        
        
        $('.btn').addClass('disabled');
        
    });

    
    $('.status-box').keyup(function(){
        
        var postLength = $(this).val().length;
        var charactersLeft = 300 - postLength;
        $('.counter').text(charactersLeft);
        
        
        if(charactersLeft < 0){
            $('btn').addClass('disabled');
        } else if(charactersLeft === 300){
            $('btn').addClass('disabled');
        } else {
            $('.btn').removeClass('disabled');
        }
        
    });
    
    $('.btn').addClass('disabled');
    
    
    $('.arrow-next').click(function(){
        
        var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.next();
        
        
        var currentDot = $('.active-dot');
        var nextDot = currentDot.next();
        
        
        if(nextSlide.length === 0){
            nextSlide = $('.slide').first();
            nextDot = $('.dot').first();
        }
        
        
        currentSlide.fadeOut(600).removeClass('active-slide');
        nextSlide.fadeIn(600).addClass('active-slide');
        
        
        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');
        
    });
    
    
    $('.arrow-prev').click(function(){
        
        var currentSlide = $('.active-slide');
        var prevSlide = currentSlide.prev();
        
        
        var currentDot = $('.active-dot');
        var prevDot = currentDot.prev();
        
        
        if(prevSlide.length === 0){
            prevSlide = $('.slide').last();
            prevDot = $('.dot').last();
        }
        
        
        currentSlide.fadeOut(600).removeClass('active-slide');
        prevSlide.fadeIn(600).addClass('active-slide');
        
        
        currentDot.removeClass('active-dot');
        prevDot.addClass('active-dot');
        
    });
}    

$(document).ready(main);