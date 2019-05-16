    var app = new MusicApp ();

    async function main() {
        console.log("starting ajax call");
        var data = await getArtist();
        console.log(data);
        console.log("continuing with the app");
    }
    main();