// When user hits the search-btn
$("#dropdownMenuButton").on("click", function(event) {
    event.preventDefault();
  
    // Save the book they typed into the book-search input
    var foodSelected = $("#sizeDropdown").val().trim();
  
    // Make an AJAX get request to our api, including the user's book in the url
    $.get("/api/" + bookSearched, function(data) {
  
      console.log(data);
      // Call our renderBooks function to add our books to the page
      renderBooks(data);
  
    });
  