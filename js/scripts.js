$(document).ready(function() {
  $("form#address-form").submit(function(event) {
    event.preventDefault();
    const name = $("#name").val();
    const streetAddress = $("#st-add").val();
    const city = $("#city").val();
    const state = $("#state").val();
    const zipcode = $("#zip").val();
    const phone = $("#phone").val();
    const email = $("#email").val();
    
    let contact = $("<ul></ul>");
    let button = $("<button type='button' class='btn-close btn-danger' aria-label='Close'></button>");
    contact.html(name);
    contact.append(button);
    contact.append($("<li>" + streetAddress + "</li>"));
    contact.append($("<li>" + city + ", " + state + " " + zipcode +"</li>"));
    contact.append($("<li>" + phone + "</li>"));
    contact.append($("<li>" + email + "</li>"));

    $("#address-book").prepend(contact);

    contact.click(function() {
        $(this).children().toggleClass("hidden");
      });

    $(".btn-close").click(function() {
        $(this).parent().remove();
    }); 

    // Right click to remove contact
    // contact.contextmenu(function(event) {
    //   event.preventDefault();
    //   $(this).remove();
    // });
  });

});