import { ArtistRepository } from "../repository-layer/artist-repo.js";
import { AlbumRepository } from "../repository-layer/album-repo.js";

export function ArtistPageLogic() {

    this.artistRepo = new ArtistRepository();
    this.albumRepo = new AlbumRepository();
    // this.artistLetters = [];

    this.getDataForArtistPage = async function(artistName) {
        var artistData = await this.artistRepo.getArtistInfo(artistName);
        var topAlbumNames = await this.artistRepo.getTopAlbumNames(artistName);
        var albums = await this.albumRepo.getAlbumsByName(artistName, topAlbumNames)
        
        var pageData = {
            artistInfo: artistData,
            albumData: albums
        };

        return pageData;
    }

    // this.searchArtist = async function(artist){
    //     var artist = await this.artistRepo.searchArtist(artist);
    //     var pageData = {
    //         artistInfo: artist.results.artistmatches.artist
    //     }
    //     return pageData;
    // }

}

