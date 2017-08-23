$("#gallerysearch").keyup(function() {
  let $searchInput = $("#gallerysearch").val().toLowerCase();
  $(".image-gallery").find("a").each(function(){
    let dataOfLink = $(this).attr("data-title").toLowerCase();
    if ( dataOfLink.includes($searchInput) ){
      $(this).show();
    } else {
      $(this).hide();
    }
  }); // end of foreach

  showNoMatchesMessage();
}); // end of keyup

$('a.gallery-pic').featherlightGallery({
		previousIcon: '&#9664;',
		nextIcon: '&#9654;',
		galleryFadeIn: 300,
		openSpeed: 300,
    afterContent: function() {
        // Add a div for the legend if needed:
        this.$legend = this.$legend || $('<div class="legend"/>').insertAfter(this.$content);
        // Set the content:
        this.$legend.text(this.$currentTarget.attr('data-title'));
    }
	});

function showNoMatchesMessage() {

  if (checkHiddenChildren() !== $(".image-gallery").find("a").length) {
    $("#empty").hide();
  } else {
    $("#empty").show();
  }
}

function checkHiddenChildren() {
  let numberOfhidden = 0;
  $(".image-gallery").find("a").each(function(){
    if($(this).css('display') == 'none') {
      numberOfhidden++;
    }
  });
  return numberOfhidden;
}
