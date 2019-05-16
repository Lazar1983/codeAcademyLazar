function MusicApp() {
    this.artist = null;

    // var lastFmPromise = new Promise(function(resolve, reject){
    //     var artistName = "Axl Rose"
    //     $.ajax({
    //         type: "GET",
    //         url: "http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist="
    //         + artistName + "&api_key=0ddd76aebc3fa24dffe397fda294c50b&format=json",
    //         success: function(data) {
    //             resolve(data);
    //         },
            
    //         error: function(err) {
    //             reject(err);
    //         }
    //     });
    // });

    async function getArtist() {
        try {
            var artistName = "Axl Rose";
            var response =  await fetch("http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist=" 
            + artistName + "&api_key=0ddd76aebc3fa24dffe397fda294c50b&format=json");
            return await response.json();
        } catch(error) {
            return error;
        }
        
    };
    async function main() {
        console.log("starting ajax call");
        var data = await getArtist();
        console.log(data);
        console.log("continuing with the app");
    }
    main();
    


    // lastFmPromise.then (function(data){
    //     console.log("Promise fulfilled", data);

    // }).catch(function(error){
    //     console.log("promise rejected", error);
    // }).finally(function(){
    //     console.log("We are done ");
    // })

    // console.log("continuing with app");





    
}