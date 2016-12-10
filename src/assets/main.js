$(function() {
  $.ajax({
    url: 'https://www.codeschool.com/users/rishipandey888.json',
    dataType: 'jsonp',
    success: function(response) {
      var courses = response.courses.completed;
      
      $.each(courses, function( key, value ) {

        var outer = jQuery('<div/>', {
          class: 'course'
        }).appendTo('#badges');

        addHeader(outer, value.title);
        addImage(outer, value.badge);
        addCourseLink(outer, value.url);
        
      });
    }
  });

  function addHeader(parent, titleValue) {
    jQuery('<h3/>', {
      html: titleValue
    }).appendTo(parent);
  }

  function addImage(parent, imageUrl) {
    jQuery('<img/>', {
      src: imageUrl
    }).appendTo(parent);
  }

  function addCourseLink(parent, courseLink) {
    jQuery('<a/>', {
      class: 'btn btn-primary',
      href: courseLink,
      target: '_blank',
      text: 'See Course'
    }).appendTo(parent);
  }

});