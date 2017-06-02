//getting the object data through API call
$.get("https://lit-fortress-6467.herokuapp.com/object").done(function(data) {
  var music = data.results;
  //to shuffle the object .sort(function(){return 0.5 - Math.random()});
  var sorter = music.sort(function() {
    return 0.5 - Math.random();
  });
  //creating an array of album cover images and an array of artist and album names from the shuffled object
  var covers = [];
  var artistAlbum = [];
  for (var i = 0; i < music.length; i++) {
    covers.push("images/" + music[i].cover_art);
    artistAlbum.push(music[i].title + " by " + music[i].artist);
  }
  console.log(artistAlbum);
  //on the splash page, adding shuffled images over railroad track
  $('.first_album').append("<img src=" + covers[0] + ">");
  $('.second_album').append("<img src=" + covers[1] + ">");
  $('.third_album').append("<img src=" + covers[3] + ">");
  //allows the select track button to take you to the playlist page
  $('.track_button').click(function() {
    window.location.href = 'playlist.html';
  });
  //add album covers to the playlist page
  $('.album_1').append("<img src=" + covers[0] + ">");
  $('.album_2').append("<img src=" + covers[1] + ">");
  $('.album_3').append("<img src=" + covers[2] + ">");
  $('.album_4').append("<img src=" + covers[3] + ">");
  $('.album_5').append("<img src=" + covers[4] + ">");
  //all of these click functions allow the album cover to be clicked and add the album and artist info to the text area.
  $('.album_1').click(function() {
    $('.track_list').append(artistAlbum[0] + "<br>");
  });
  $('.album_2').click(function() {
    $('.track_list').append(artistAlbum[1] + "<br>");
  });
  $('.album_3').click(function() {
    $('.track_list').append(artistAlbum[2] + "<br>");
  });
  $('.album_4').click(function() {
    $('.track_list').append(artistAlbum[3] + "<br>");
  });
  $('.album_5').click(function() {
    $('.track_list').append(artistAlbum[4] + "<br>");
  });
  //this button clears the tracks from the track list
  $('.clear_tracks').click(function() {
    $('.track_list').empty();
  })
  //this button submits the info and then emptys the track list
  $('.submit_button').click(function() {
    var tracksubmission = $('.track_list').val();
    $.post("https://lit-fortress-6467.herokuapp.com/post", tracksubmission, function(data) {
      alert("you did it. you actually did it.");
      $('.track_list').empty();
    })
  });
})
