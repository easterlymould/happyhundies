$(document).ready(function() {
    let initialLoad = true; // Flag to track the initial load

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

                // Scroll to the film details card on small screens if it's not the initial load
                if (!initialLoad && $(window).width() < 992) {
                    $('html, body').animate({
                        scrollTop: $('#filmDetails').offset().top
                    }, 1000);
                }
            } else {
                $('#filmTitle').text("No films found.");
                $('#filmDetails').hide();
            }

            // After the first load, set the flag to false
            initialLoad = false;
        }).fail(function() {
            $('#filmTitle').text("Error fetching film.");
            $('#filmDetails').hide();
            initialLoad = false; // Set the flag to false even if there's an error
        });
    }

    // Fetch a random film on page load without scrolling
    fetchFilmDetails(''); // Fetch any genre

    // Button click handlers
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

    $('#familyButton').click(function() {
        fetchFilmDetails('Family');
    });
});
