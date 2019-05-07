//Array of TV show titles
var topics = ['Game of Thrones', 'The Walking Dead', 'Dexter', 'West World', 'Black Mirror', 'Stranger Things',
    'Breaking Bad', 'The Office', 'The Boondocks', 'Modern Family', 'CSI', 'Santa Clarita Diet', 'Insecure', 'Atlanta',
    'Shes Gotta Have it', 'Bleach', 'Naruto', 'Dragon Ball Z', 'Attack on Titans'];

//Function to display giphy
function renderButtons() {

    //Deleting TV show buttons prior to creating more, loops through the array of TV show titles
    //then generate a button for each title and adding the button to HTML
    $('#tvShows-view').empty();

    for (var i = 0; i < topics.length; i++) {

        var a = $('<button>');
        a.addClass('tvShow');
        a.attr('data-name', topics[i]);
        a.text(topics[i]);
        $('#tvShows-view').append(a);
    }
}
//click event
$('#add-tvShow').on('click', function (event) {
    event.preventDefault();

    //grabs text from the input box and adds to the array
    var tvShow = $('#tvShow-input').val().trim();
    topics.push(tvShow);
    renderButtons();
});

function displayGiphys() {
    $("button").on("click", function () {
        //var tvShow = $(this).data('data-name');
        var queryURL = 'http://api.giphy.com/v1/gifs/search?q=';

        //creating AJAX call for the buttons being clicked
        $.ajax({
            url: queryURL,
            method: "GET",
            data: {
                q: show,
                limit: 10,
                apikey: '&api_key=2TzsdgEdC55UteEvy18b8dGMSEPIfImZ',
                //&q=&limit=10&offset=0&rating=G&lang=en'
            }
        }).then(function (response) {
            console.log(response);

            //Creating div to hold the Giphy and display rating
            var tvShowDiv = $("<div class='tvShow'>");

            var rating = response.Rated;

            var ageAp = $('<p>').text('Rating: ' + rating);

            tvShowDiv.append(ageAp);

        });
    })
}