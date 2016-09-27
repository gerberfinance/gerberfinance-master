jQuery(document).ready(function(){
                jQuery('#slider-stage').carousel('#beyond0','#beyond1','#beyond2');
                jQuery('#ceo_video').carousel('#beyond0_d', '#beyond1_d', '#beyond2_d');  
            });
    


jQuery.fn.carousel = function(beyond0, beyond1, beyond2, options){
    var sliderList = jQuery(this).children()[0];
    
    if (sliderList) {
        var increment = jQuery(sliderList).children().outerWidth("true"),
        elmnts = jQuery(sliderList).children(),
        numElmts = elmnts.length,
        sizeFirstElmnt = increment,
        shownInViewport = Math.round(jQuery(this).width() / sizeFirstElmnt),
        firstElementOnViewPort = 1,
        isAnimating = false;
        
        for (i = 0; i < shownInViewport; i++) {
            jQuery(sliderList).css('width',(numElmts+shownInViewport)*increment + increment + "px");
            jQuery(sliderList).append(jQuery(elmnts[i]).clone());
        }
        
        jQuery(beyond0).click(function(event){
            $("iframe").each(function() {
                this.contentWindow.postMessage('{ "method": "pause" }', "http://player.vimeo.com");
            });
            if (!isAnimating) {
                if (firstElementOnViewPort == 1) {
					jQuery(sliderList).css('left', "-" + numElmts * sizeFirstElmnt + "px");
                    firstElementOnViewPort = numElmts;        
                }
                else {
                    firstElementOnViewPort--;
                }
                
                jQuery(sliderList).animate({
                    left: "+=" + increment,
                    y: 0,
                    queue: true
                }, "swing", function(){isAnimating = false;});
                isAnimating = true;
            }
            
        });
        
        jQuery(beyond1).click(function(event) {
            $("iframe").each(function() {
                this.contentWindow.postMessage('{ "method": "pause" }', "http://player.vimeo.com");
            });
            if (!isAnimating) {
                if (firstElementOnViewPort > numElmts) {
                    firstElementOnViewPort = 2;
                    jQuery(sliderList).css('left', "0px");
                }
                else {
                    firstElementOnViewPort++;
                }
                jQuery(sliderList).animate({
                    left: "-=" + increment,
                    y: 0,
                    queue: true
                }, "swing", function(){isAnimating = false;});
                isAnimating = true;
            }
        });
        
        jQuery(beyond2).click(function(event) {
            $("iframe").each(function() {
                this.contentWindow.postMessage('{ "method": "pause" }', "http://player.vimeo.com");
            });
            if (!isAnimating) {
                if (firstElementOnViewPort > numElmts) {
                    firstElementOnViewPort = 3;
                    jQuery(sliderList).css('left', "0px");
                }
                else {
                    firstElementOnViewPort++;
                }
                jQuery(sliderList).animate({
                    left: "-=" + increment,
                    y: 0,
                    queue: true
                }, "swing", function(){isAnimating = false;});
                isAnimating = true;
            }
        });
    }
};