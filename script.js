let storiesCreated;
$("button").click(function() {
    let name = $(".name-input").val();
    let transportation = $(".transport-input").val();
    let adjective = $(".adjective-input").val();
    let time = $(".number-input").val();
    //Write code below!
    $(".story").append( "One day my friend" + name +" and I decided to take a trip to the beach, so we packed our bags and took the" + transportation +" over.It was a "+ adjective + " day at the beach! We ended up staying for"+ time +  " hours!" );

});