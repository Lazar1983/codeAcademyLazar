import { ArtistPageLogic } from "../business-layer/artist-logic.js";

export function Renderer() {
    this.pageData = null;
    this.activeSearch = false;
    this.searchTimeout = null;
    this.mainContainer = $("#main-container");

    this.pageLogic = new ArtistPageLogic();
    
    this.renderAll = function() {
        console.log(this.pageData);
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
    }

    this.init = async function(artistName) {
        this.pageData = await this.pageLogic.getDataForArtistPage(artistName);
        this.mainContainer.html("");
        this.renderAll();
    }
}