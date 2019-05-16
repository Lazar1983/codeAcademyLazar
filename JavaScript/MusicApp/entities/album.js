export function Album (data) {
    this.name = data && data.name ? data.name : "test";
    // this.listeners = data.listeners;
    // this.playcount = data.playcount;
    this.tracks = data.tracks.track;
    // this.picture = data.image;
    this.image = data.image;


}