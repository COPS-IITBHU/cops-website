$(document).ready(function(){
    var timeline_blocks = $('.vertical-timeline-block');
    var x = 3;
    $('#collapse-vertical-timeline-block').fadeOut(400, 'linear');
    for(var i=x; i<timeline_blocks.length-2; i++){
        $(timeline_blocks[i]).fadeOut(400, 'linear');
    }
    
    $('#expand-vertical-timeline-block').click(function(){
        for(var i=x; i<timeline_blocks.length-2; i++){
            $(timeline_blocks[i]).fadeIn(400, 'linear');
        }
        $('#expand-vertical-timeline-block').fadeOut(400, 'linear');
        $('#collapse-vertical-timeline-block').fadeIn(400, 'linear');
        window.scrollBy(0,1);
    });

    $('#collapse-vertical-timeline-block').click(function(){
        for(var i=x; i<timeline_blocks.length-2; i++){
            $(timeline_blocks[i]).fadeOut(400, 'linear');
        }
        $('#expand-vertical-timeline-block').fadeIn(400, 'linear');
        $('#collapse-vertical-timeline-block').fadeOut(400, 'linear');
    });
});