$(function() {
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
        
      var newBurger = {
        burger_name: $("#newburger")
          .val()
          .trim(),
        devoured: 0
      };
      
    //  ajax post request
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(function() {
        console.log("this that new burger");
        location.reload();
      });
    });
    
    // on click event to eat burger
    $(".eatburger").on("click", function(event) {
      event.preventDefault();
  
      var id = $(this).data("id");
    //   this puts devoured state of burger to true
      var devouredState = {
        devoured: 1
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState
      }).then(function() {
        console.log("You just devoured a burger");
        location.reload();
      });
    });
  
    $(".trashburger").on("click", function(event) {
      event.preventDefault();
  
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax({
        type: "DELETE",
        url: "/api/burgers/" + id
      }).then(location.reload());
    });
  });