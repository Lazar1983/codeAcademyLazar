import { Artist } from "../entities/artist.js";

export function ArtistRepository() {

    this.getArtistInfo = async function(artistName) {
        try {
            var response =  await fetch("http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist=" 
            + artistName + "&api_key=0ddd76aebc3fa24dffe397fda294c50b&format=json");
            var data = await response.json();
            console.log("Response from getArtistInfo API", data);
            return new Artist(data.artist);
        } catch(jamesBond) {
            return jamesBond;
        }
    }

    this.getTopAlbumNames = async function(artistName) {
        
        try {
            var response =  await fetch("http://ws.audioscrobbler.com/2.0/?method=artist.getTopAlbums&artist=" 
            + artistName + "&api_key=0ddd76aebc3fa24dffe397fda294c50b&format=json");
            var data = await response.json();
            console.log("Album Api " , data)
            return data.topalbums.album.map((album) => {
                return album.name;
            })
        } catch(jamesBond) {
            return jamesBond;
        }

    }

    // this.searchArtist = async function (name){
    //     var result = null;
    //     try{
    //         var response = await fetch("http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=" + 
    //         name +  "&api_key=0ddd76aebc3fa24dffe397fda294c50b&format=json&limit=5");
    //         result = response.json();
    //         return result;
    //     } catch (error){
    //         return result;
    //     }
    // }

}