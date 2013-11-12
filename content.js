var fullTrackName = "";
var artists = "";

//get all artists
$('.artists .artist').each(function(){
    artists = artists.concat($(this).text());
    artists = artists.concat(' ');
});

//get trackname
fullTrackName = fullTrackName.concat(artists).concat('- ').concat($('.trackName.txt-uppercase').text());

//create the search query for youtube
var searchQuery = "http://www.youtube.com/results?search_query="+fullTrackName+"&sm=3"

//reloads the window. this is actually needed in order 
//to refresh page content because the information of the track would not change after the first usage
location.reload();
var win=window.open(searchQuery, 'BeatportToYoutube');
win.focus();
