/**
 * jQuery classifiedList v1.0
 * 2012-01-09
 * http://code.google.com/p/jquery-classified-list/
 * Copyright Beckerle Matias
 * Licensed under The MIT License (http://www.opensource.org/licenses/mit-license.php)
 */

(function($){
    
    var ClassifiedList = function(element, options){
        
        //Merge with the defaults
        var settings = $.extend({}, $.fn.classifiedList.defaults, options);
        
        //The element
        var $element = $(element);
        
        /**
         * This is the main funtion. Is recursive, and do all the tasks.
         * $list = the list
         * level = the number of the list taking the nesting
         */
        var process = function($list, level){
            //Checks if the list has processed. This is for the case where the selector is a generic 'ul' or 'ol'
            if($list.hasClass('classified-list')){
                return true;
            }
			
            //Add class 'classified-list'. This is for the case where the selector is a generic 'ul' or 'ol'
            $list.addClass('classified-list');
            
            if(settings.level) {
                $list.addClass('lev-' + level);
            }
            level++;
            		
            //We need the li's...
            var $li = $list.children('li');

            //If we have li
            if ($li.length) {
                
                //...and the items counter
                var item = 1;
                
                if(settings.hover) {
                    $li.hover(function(){
                        $element.find('li').removeClass('hover');
                        $(this).addClass('hover');
                    }, function(){
                        $(this).removeClass('hover');
                    });
                }
                
                //Iteration per li
                $.each($li, function(){
                    
                    if(settings.item){
                        $(this).addClass('it-' + item++);
                    }
                    
                    var $childrenList = $(this).children($list.get(0).tagName);
                    
                    //If we have a children list, then call again
                    if($childrenList.length) {
                        process($childrenList, level);
                    }
                });
                
                //Some extra classes...
                if(settings.odd) {
                    $list.children('li:even').addClass('odd');
                }   
                if(settings.even) {
                    $list.children('li:odd').addClass('even');
                }                           
                if(settings.first){
                    $li.first().addClass('first');
                }
                if(settings.last){
                    $li.last().addClass('last');
                }
                
            }
 
            return $li;
        }
        
        //Begin!
        process($element, 1);
        
        //Fire the onLoad method
        settings.onLoad.call($element);
    }
    
    $.fn.classifiedList = function(options) {
        
        return this.each(function() {
            var element = $(this);
            
            //Return the instance if this element already has a plugin instance
            if (element.data('classifiedlist')){ 
                return element.data('classifiedlist');
            }
            
            //Constructor
            var classifiedlist = new ClassifiedList(this, options);
            
            //Store plugin object
            element.data('classifiedlist', classifiedlist);
        });
        
    };
    
    //Default settings
    $.fn.classifiedList.defaults = {
        level: true,
        item: true,
        first: true,
        last: true,
        even: true,
        odd: true,
        hover: true,
        onLoad: function(){}
    }
    
})(jQuery);