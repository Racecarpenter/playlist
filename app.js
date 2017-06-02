//shuffle is .sort(function(){return 0.5 - Math.random()});
$.get("https://lit-fortress-6467.herokuapp.com/object").done(function(data) {
  var music = data.results;

  music.sort(function() {
    return 0.5 - Math.random();
  });

  var covers = [];
  var artistAlbum = [];
  for (var i = 0; i < music.length; i++) {
    covers.push("images/" + music[i].cover_art);
    artistAlbum.push(music[i].title + " by " + music[i].artist);
  }





  console.log(artistAlbum);

  $('.first_album').append("<img src=" + covers[0] + ">");
  $('.second_album').append("<img src=" + covers[1] + ">");
  $('.third_album').append("<img src=" + covers[3] + ">");


  $('.track_button').click(function() {
    window.location.href = 'playlist.html';
  });

  $('.album_1').append("<img src=" + covers[0] + ">");
  $('.album_2').append("<img src=" + covers[1] + ">");
  $('.album_3').append("<img src=" + covers[2] + ">");
  $('.album_4').append("<img src=" + covers[3] + ">");
  $('.album_5').append("<img src=" + covers[4] + ">");

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

  $('.clear_tracks').click(function() {
    $('.track_list').empty();
  })
  $('.submit_button').click(function() {
    var tracksubmission = $('.track_list').val();
    $.post("https://lit-fortress-6467.herokuapp.com/post", tracksubmission, function(data) {
      console.log(tracksubmission);
    })
  });
})
