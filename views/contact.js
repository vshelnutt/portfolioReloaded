$(function() {
  
  // contact form animations
  $('#contact').click(function() {
    $('#hiddenForm').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#hiddenForm");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.fadeOut();
    }
  });
  
});


