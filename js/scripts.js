$(document).ready(function() {
  $("form#address-form").submit(function(event) {
    event.preventDefault();
    const name = $("#name").val();
    const streetAddress = $("#st-add").val();
    const city = $("#city").val();
    const state = $("#state").val();
    const zipcode = $("#zip").val();
    
    let contact = $("<ul></ul>");
    contact.html(name);
    contact.append($("<li>" + streetAddress + "</li>"));
    contact.append($("<li>" + city + ", " + state + " " + zipcode +"</li>"));

    $("#address-book").prepend(contact);

    contact.click(function() {
        $(this).children().toggleClass("hidden");
      });

    contact.contextmenu(function(event) {
      event.preventDefault();
      $(this).remove();
    });
  });

});