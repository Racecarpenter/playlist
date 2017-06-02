//shuffle is .sort(function(){return 0.5 - Math.random()});
$.get("https://lit-fortress-6467.herokuapp.com/object").done(function(data) {
  var music = data.results;
  var covers = [];
  for (var i = 0; i < music.length; i++) {
    covers.push("images/" + music[i].cover_art);
  }




  covers.sort(function() {
    return 0.5 - Math.random();
  });

  console.log(covers);

  $('.first_album').append("<img src=" + covers[0] + ">");
  $('.second_album').append("<img src=" + covers[1] + ">");
  $('.third_album').append("<img src=" + covers[3] + ">");
})
