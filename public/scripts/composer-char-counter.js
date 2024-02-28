console.log("Composer character counter script loaded successfully.");

$(document).ready(function() {
  $('.new-tweet textarea').on('keyup', function() {
    
    const text = $(this).val();
    const counter = $(this).closest(".new-tweet").find(".counter");
    const textLength = text.length;
    const maxChars = 140 - textLength;
    counter.text(maxChars)

    if (maxChars <= 0) {
     $(counter).css("color", "red");
    } else if (maxChars >= 0) {
      $(counter).css("color", "");
    }
  
});
}) 