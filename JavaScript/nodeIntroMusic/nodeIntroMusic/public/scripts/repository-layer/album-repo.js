import { Album } from "../entities/album.js";

export function AlbumRepository() {

    this.getAlbumsByName = async function(artistName, albumNames) {
        var albums = [];
        for (let index = 0; index < albumNames.length; index++) {
            try {
                var response =  await fetch("http://ws.audioscrobbler.com/2.0/?method=album.getInfo&album="
                + albumNames[index] + "&artist=" 
                + artistName + "&api_key=d3e7cbd8223a021b7efdce3f7c547977&format=json");
                var data = await response.json();
                albums.push(new Album(data.album));
            } catch(jamesBond) {
                return jamesBond;
            }
            
        }
        
        return albums;
    }
}