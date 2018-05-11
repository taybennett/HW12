// jQuery functions for capturing button clicks for buying a dog and submitting a new one to the list. PUT and POST requests, then reload the page to see the new list.

$(function() {
  $(".bought-btn").on("click", function(event) {
    var id = $(this).data("id");
    
    var newBoughtState = {
      newBoughtState: true
    };
    
    $.ajax("/api/dogs/" + id, {
      type: "PUT",
      data: newBoughtState
    }).then(
      function() {
        location.reload();
      }
    );
  });
  
  $("#submit-dog").on("click", function(event) {
    event.preventDefault();
    var newDog = {
      dog_name: $("#add-dog-box").val().trim(),
      bought: false
    };
    
    $.ajax("/api/dogs", {
      type: "POST",
      data: newDog
    }).then(
      function() {
        location.reload();
      }
    );
  });
});