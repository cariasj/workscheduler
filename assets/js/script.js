var currentDate = moment().format('dddd, MMM Do YYYY');
$("#day").html(currentDate);

$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");










})
})