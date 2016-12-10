$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/rishipandey888.json',
    dataType: 'jsonp',
    success: function(response) {     
      var courses = response.courses.completed;
      
      $.each(courses, function( key, value ) {
        
        d = document.createElement('div');
        $(d).addClass("course")        
        .appendTo($("#badges"))
        
        addHeader(d, value.title);
        addImage(d, value.badge);        
        addLink(d, value.url);
      });
    }
  });

  function addHeader(parent, headerText) {
    h = document.createElement('h3');
    $(h).html(headerText);
        
    parent.append(h);
  }

  function addImage(parent, imageUrl) {
    img = document.createElement('img');        
    a = document.createAttribute("src");

    a.value = imageUrl;
    img.setAttributeNode(a);

    parent.append(img);
  }

  function addLink(parent, badgeUrl) {
    badgeLink = document.createElement('a');

    $(badgeLink).html('See Course');
    $(badgeLink).addClass("btn btn-primary");
    
    badgeHref = document.createAttribute("href");
    badgeHref.value = badgeUrl;
    badgeLink.setAttributeNode(badgeHref);

    targetAttribute = document.createAttribute("target");
    targetAttribute.value = "_blank";
    badgeLink.setAttributeNode(targetAttribute);

    parent.append(badgeLink);
  }
});