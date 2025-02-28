$('.ham-btn').click(function() {
    var sidebar = $('.left-sidebar');
    
    // Set the initial state of the sidebar
    $(sidebar).css({
        'position': 'absolute',  // Ensure it's positioned correctly
        'left': '-150px',         // Initially off-screen (adjust based on sidebar width)
        'width': '0',             // Start with zero width
        'display': 'block',       // Make sure it's visible
        'z-index': '1000000'      // Ensure it's on top
    });

    // Animate the sidebar
    $(sidebar).animate({
        left: '0',              // Move it to the left edge of the screen (or change based on your design)
        width: '150px'          // Set the desired width for the sidebar
    }, 500);  // Animation duration (500ms)

});

$('.ham-close').click(function() {
    var sidebar = $('.left-sidebar');
    
    // Animate the sidebar to slide out
    $(sidebar).animate({
        left: '-250px',         // Move it off-screen to the left
        width: '0'              // Shrink the width back to 0
    }, 500);

    // Hide the close button and show the hamburger button
    $('.ham-btn').show();
});

$('.right-sidebar-btn').click(function() {
    var sidebar = $('.right-sidebar');

    $('.right-sidebar').css({
        'background-color': '#fff',
        'padding': '20px 20px 0px 20px',
        'box-shadow': '0px 4px 6px rgba(0, 0, 0, 0.1)'  // Adding a subtle shadow
    });
    
    
    // Set the initial state of the sidebar
    $(sidebar).css({
        'position': 'absolute',  // Ensure it's positioned correctly
        'right': '-250px',         // Initially off-screen (adjust based on sidebar width)
        'width': '0',             // Start with zero width
        'display': 'block',       // Make sure it's visible
        'z-index': '1000000'      // Ensure it's on top
    });

    // Animate the sidebar
    $(sidebar).animate({
        right: '0',              // Move it to the left edge of the screen (or change based on your design)
        width: '250px'          // Set the desired width for the sidebar
    }, 500);  // Animation duration (500ms)

});

$('.right-sidebar-close').click(function() {
    var sidebar = $('.right-sidebar');
    
    // Animate the sidebar to slide out
    $(sidebar).animate({
        right: '-250px',         // Move it off-screen to the left
        width: '0'              // Shrink the width back to 0
    }, 500);

    // Hide the close button and show the hamburger button
    // $('.ham-btn').show();
});

