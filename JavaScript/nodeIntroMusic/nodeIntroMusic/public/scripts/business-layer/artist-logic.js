import { ArtistRepository } from "../repository-layer/artist-repo.js";
import { AlbumRepository } from "../repository-layer/album-repo.js";

export function ArtistPageLogic() {

    this.artistRepo = new ArtistRepository();
    this.albumRepo = new AlbumRepository(); // treba novo repo

    this.getDataForArtistPage = async function(artistName) {
        var artistData = await this.artistRepo.getArtistInfo(artistName);
        var topAlbums = await this.artistRepo.getTopAlbumNames(artistName);
        // var albums = await this.albumRepo.getAlbumsByName(artistName, topAlbums);

        var pageData = {
            artistInfo: artistData
            // albumData: albums
        };
        console.log("Business logic", pageData);

        return pageData;
    }

    this.getSearchForInput = async function(query) {
        return await this.artistRepo.getArtistByQuery(query);
    }
}