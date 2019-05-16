export function Artist(data) {
    this.name = data.name;
    this.biography = data.bio;
    this.statistics = data.stats;
    this.image = data.image[2]["#text"]
}