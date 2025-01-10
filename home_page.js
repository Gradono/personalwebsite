function embed(album){
    console.log("embed()");
    let div = document.getElementById(album);
    let img = div.children[0];
    let embed = div.children[1];
    img.setAttribute('style', 'display: none');
    embed.setAttribute('style', 'display: block');   
}

document.addEventListener('DOMContentLoaded', function(){
    console.log("started");
    var apiKey = "fb16daa78d24cfa0392177c65fe39ebb";
    var ap = new XMLHttpRequest();
    var url = "http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=Gradono&period=7day&limit=15&api_key=" + apiKey + "&format=json";
    var ap = new XMLHttpRequest();
    ap.open("GET", url, true);
    console.log(ap);
    ap.onreadystatechange = function() {
        console.log("hey");
        if(ap.readyState == 4 && ap.status == 200){
            var data = JSON.parse(ap.responseText);
            console.log(data);
        }
    }
});