function embed(album){
    console.log("embed()");
    let div = document.getElementById(album);
    let img = div.children[0];
    let embed = div.children[1];
    img.setAttribute('style', 'display: none');
    embed.setAttribute('style', 'display: block');   
}