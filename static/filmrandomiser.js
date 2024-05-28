$(document).ready(function() {
    function fetchFilmDetails(genre) {
        $.getJSON('/random_film', { genre: genre }, function(data) {
            console.log("Data received:", data); // Log the received data
            if (data) {
                $('#filmTitle').text(data.title + " (" + data.year + ")");
                $('#filmRuntime').text(data.runtime + " minutes");
                $('#filmGenre').text(data.genre);
                $('#filmLanguage').text(data.language);
                $('#filmIMDBScore').text(data.imdb_score);
                $('#filmComment').text(data.comment);
                $('#filmIMDBLink').attr('href', data.imdb_link);
                $('#filmDetails').show();
            } else {
                $('#filmTitle').text("No films found.");
                $('#filmDetails').hide();
            }
        }).fail(function() {
            $('#filmTitle').text("Error fetching film.");
            $('#filmDetails').hide();
        });
    }

    $('#pluckyButton').click(function() {
        fetchFilmDetails(''); // Fetch any genre
    });

    $('#comedyButton').click(function() {
        fetchFilmDetails('Comedy');
    });

    $('#dramaButton').click(function() {
        fetchFilmDetails('Drama'); 
    });

    $('#actionButton').click(function() {
        fetchFilmDetails('Action');
    });

    $('#horrorButton').click(function() {
        fetchFilmDetails('Horror');
    });

    $('#thrillerButton').click(function() {
        fetchFilmDetails('Thriller');
    });

    $('#animationButton').click(function() {
        fetchFilmDetails('Animation');
    });

    $('#romanceButton').click(function() {
        fetchFilmDetails('Romance');
    });

});
