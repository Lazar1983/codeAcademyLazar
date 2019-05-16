import { ArtistPageLogic } from "../business-layer/artist-logic.js";

export function Renderer() {
    this.pageData = null;
    this.mainContainer = $("#main-container");

    this.pageLogic = new ArtistPageLogic();
    
    this.renderAll = function() {
        console.log(this.pageData);


        var container = $("<div>")
            .addClass('container').appendTo("#main-container")
            .css("width", "80%")
            .css("margin", "0 auto")
            .css("display", "flex")
            .css("justify-content", "space-between")  


        $("<input>").attr("id", "searchInput").appendTo(this.mainContainer);
        $("<div>").attr("id", "suggestions").appendTo(this.mainContainer).hide();;
        $("<button>").attr("id", "searchButton").text("SEARCH").appendTo(this.mainContainer);
        $("<img>").attr("src", this.pageData.artistInfo.image).appendTo(this.mainContainer);
        $("<h1>").text(this.pageData.artistInfo.name).appendTo(this.mainContainer);

        $("#searchButton").on("click", (e) => {
            e.preventDefault();
            console.log("searching...");
            this.init($("#searchInput").val());
        });

        $("#searchInput").on("input", async (e) => {
            if (this.activeSearch) {
                clearTimeout(this.searchTimeout);
            }
            this.activeSearch = true;
            this.searchTimeout = setTimeout(async () => {
                var result = await this.pageLogic.getSearchForInput($(e.target).val());
                console.log(result);
                if (result.length > 0) {
                    $("#suggestions").show();
                    $("#suggestions").html("");
                    for (var index = 0; index < result.length; index++) {
                        const element = result[index];
                        $("<span>").addClass("search-results").css("display", "block").text(element.name).appendTo($("#suggestions"));
                    }
                }
            }, 500);
            
        });

        $(document).on("click", ".search-results", (e) => {
            this.init($(e.target).text());
        });

        this.renderArtist();
        this.renderSimilar();
        this.albumRender();

    }

    this.renderArtist = function() {

        var artistContainer = $("<div>")
            .addClass("name-image").appendTo(".container")
            .css("width", "40%")


                $("<div>")
                .addClass("name").appendTo(".name-image")
                    .text(this.pageData.artistInfo.name)
                        .css("text-align", "center")
                        .css("margin", "10px")
                        .css("padding", "5px")
                        .css("font-size", "31px")
                        .css("color", "cornflowerblue")

                $("<div>")
                .addClass("image").appendTo(".name-image")
                .css("height", "400px")
                .css("text-align", "center")
                .css("margin", "10px")     
        
        var artistImage = $("<img>")
                .addClass("artist-image").appendTo(".image")
            $(artistImage)
                .attr("src", this.pageData.artistInfo.images[5]['#text']); 


    }

 

    this.renderSimilar = function() {

        var artistContainer = $("<div>")
            .addClass("similar").appendTo(".container")
            .css("width", "40%")
            .css("height", "400px")
            .css("text-align", "center")  

            $("<p>")
            .addClass("sim").appendTo(".similar")
            .text("Similar Artist")
                .css("text-align", "center")
                .css("margin", "10px")
                .css("padding", "5px")
                .css("font-size", "31px")
                .css("color", "cornflowerblue")

        for (var index = 1; index <= 4; index++) {

            var similarArtist = $("<div>")
            .addClass("similar-artist")
            .attr("id", "art" + index)
            .text(this.pageData.artistInfo.similar.artist[index].name).appendTo(".similar")
            .css("display", "flex")

            var similarImg = $("<img>")
            .addClass("similar-image")
            .attr("id", "img" + index)
            .attr("src", this.pageData.artistInfo.similar.artist[index].image[1]["#text"]).appendTo(".similar");

        }


                  

    }

    this.albumRender = function () {
        var albumContainer = $("<div>")
            .addClass("albumContainer").appendTo("#main-container")

            for (var j = 0; j < 5; j++) {
                var album = $("<div>").addClass("albumName")
                .attr("id", "alb" + j)
                .text(this.pageData.albumData[j].name).appendTo(albumContainer);

                var albumImg = $("<img>").addClass("albumImg")
                .attr("src", this.pageData.albumData[j].image[1]["#text"]).appendTo(album);

                for (var i = 0; i < this.pageData.albumData[j].tracks.length; i++) {
                    var albumSongs = $("<p>").addClass("songs")
                    .text(this.pageData.albumData[j].tracks[i]["name"])
                    .appendTo(album);
                }

               
            }
    }


    this.init = async function(artistName) {
        this.pageData = await this.pageLogic.getDataForArtistPage(artistName);
        this.mainContainer.html("");
        this.renderAll();
    }

    

    // this.searchArtist = async function(){
    //     this.delayedInput = null;
    //     this.newArtistData = await this.pageData.searchArtist(this.pageData.artistLetters.join("").toString());
    //     console.log(this.newArtistData);
    //     $("#search-bar")
    //             .css("position", "relative")
    //             .append($("<div>")
    //                 .attr("id", "search-sugestion")
    //                 .css("position", "absolute")
    //                 .css("width", "auto")
    //                 .css("height", "auto")
    //                 .css("left", "0px")
    //                 .css("top", "20px")
    //                 .css("background-color", "white")
    //                 .css("padding", "0px 20px 10px 20px")
    //                 .css("box-shadow", "3px 3px 7px #777"))

    //     for(var i = 0; i < this.newArtistData.artistInfo.length; i++){
    //         var $searchSugestion = $("#search-sugestion")
            
    //             var $bla = $("<div>")
    //                             .css("margin-top", "10px")
    //                             .append($("<img>")
    //                             .attr("src", this.newArtistData.artistInfo[i].image[0]["#text"]))
    //                             .append($("<span>")
    //                             .html(this.newArtistData.artistInfo[i].name))
    //         $searchSugestion.append($bla)
    //     }
    //     this.pageData.artistLetters = [];
        
    // }
    // var that = this;
    // this.delayedInput = null
    // document.addEventListener("keypress", function(event){
    //     if(event.code == "Enter"){
    //         that.pageData.artistName = that.pageData.artistLetters.join("").toString()
    //         console.log(that.pageData.artistName)
    //         return
    //     }
    //     that.pageData.artistLetters.push(event.key)
    //     console.log(that.pageData.artistLetters)
    //     if(this.delayedInput != null){
    //         clearTimeout(this.delayedInput);
    //         $("#search-bar div").remove();
            
    //     }
    //     this.delayedInput = setTimeout(function(){
    //         that.searchArtist()
                
    //     }, 300)
    // })
    
}

    
