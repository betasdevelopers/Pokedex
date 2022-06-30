btn.addEventListener('click', function() {
    
    if(document.getElementById('entrada').textContent == ""){
        urlApi = "https://pokeapi.co/api/v2/pokemon/"+Math.floor(Math.random()*905);
    }else{
        urlApi = "https://pokeapi.co/api/v2/pokemon/"+document.getElementById('entrada').textContent
    }
    console.log(urlApi == "")
    $.ajax({
        method: "GET",
        url: urlApi,
        dataType: "json",
      })
        .done(function( msg ) {
            //$('#titleCard').text(msg[Math.floor(Math.random()*msg.length)]['name']);
            //$('#adrrCard').text(msg[Math.floor(Math.random()*msg.length)]['email']);
            $('#titleCard').text(msg['name']);
            $('#imgCard').attr('src',msg['sprites']['other']['home']['front_default']);
            $('#typeOne').text(msg['types'][0]['type']['name']);
            if(msg['types'].length > 1 ){
                $('#typeTwo').text(msg['types'][1]['type']['name'])
                $('#typeTwo').attr('style','list-style-type: disc;');
            }else{
                $('#typeTwo').text('')
                $('#typeTwo').attr('style','list-style-type: none;');
            }
            //console.log(msg['types'][0], msg['types'][1]);    
        });
});