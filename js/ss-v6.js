$(document).ready( function($) {

$('[data-toggle="tooltip"]').tooltip()

$('.ss-sidenav-sticky').affix({
  offset: {
    top: function () {
      return ( ($('#left-side').height() + $('#left-side').offset().top) - $('.ss-sidenav-sticky').height() )
    },
    bottom: 0
  }
});

$('button[data-sample="btnAnim1"]').click(function(){
    var $this = $(this);
    if ( !$this.hasClass('animating') ) {
        $this.addClass('animating');
        $this.find('.original-text').addClass('thinking');
        setTimeout(function(){
            $this.find('.original-text').removeClass('thinking');
            $this.find('.original-text').addClass('animate-out');
            $this.find('.succeeded-text').addClass('animate-in');
        }, 3300);
        setTimeout(function(){
            $this.find('.original-text').removeClass('animate-out');
            $this.find('.succeeded-text').removeClass('animate-in');
            $this.removeClass('animating');
        }, 6000);
    }
});

$('button[data-sample="btnAnim2"]').click(function(){
    var $this = $(this);
    if ( !$this.hasClass('animating') ) {
        $this.addClass('animating');
        $this.find('.original-text').addClass('thinking');
        setTimeout(function(){
            $this.find('.original-text').removeClass('thinking');
            $this.find('.original-text').addClass('animate-out');
            $this.find('.warned-text').addClass('animate-in');
        }, 3300);
        setTimeout(function(){
            $this.find('.original-text').removeClass('animate-out');
            $this.find('.warned-text').removeClass('animate-in');
            $this.removeClass('animating');
        }, 6000);
    }
});







});//doc ready