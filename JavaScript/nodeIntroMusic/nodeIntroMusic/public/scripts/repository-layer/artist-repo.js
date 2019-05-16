import { Artist } from "../entities/artist.js";

export function ArtistRepository() {

    this.getArtistInfo = async function(artistName) {
        try {
            var response =  await fetch("http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist=" 
            + artistName + "&api_key=d3e7cbd8223a021b7efdce3f7c547977&format=json");
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
            + artistName + "&api_key=d3e7cbd8223a021b7efdce3f7c547977&format=json");
            var data = await response.json();
            return data.topalbums.album.map((album) => {
                return album.name;
            })
        } catch(jamesBond) {
            return jamesBond;
        }
    }

    this.getArtistByQuery = async function(query) {
        try {
            var response =  await fetch("http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=" 
            + query + "&api_key=d3e7cbd8223a021b7efdce3f7c547977&format=json&limit=5");
            var data = await response.json();
            console.log("Response from getArtistInfo API", data);
            return data.results.artistmatches.artist.map((result) => {
                return new Artist(result);
            });
        } catch(jamesBond) {
            return jamesBond;
        }
    }
}

export var name = "Zoki";