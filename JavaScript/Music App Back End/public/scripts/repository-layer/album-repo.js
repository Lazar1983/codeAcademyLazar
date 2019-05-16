import { Album } from "../entities/album.js";

export function AlbumRepository() {

    this.getAlbumsByName = async function(artistName, albumNames) {
        var albums = [];
        for (let index = 0; index < albumNames.length; index++) {
            try {
                var response =  await fetch("http://ws.audioscrobbler.com/2.0/?method=album.getInfo&album="
                + albumNames[index] + "&artist=" 
                + artistName + "&api_key=0ddd76aebc3fa24dffe397fda294c50b&format=json");
                var data = await response.json();
                albums.push(new Album(data.album));
            } catch(jamesBond) {
                return jamesBond;
            }
            
        }

        return albums;
        
    }
}