function PageRenderer(user) {
	this.user = user;
    this.mainContainer = document.getElementById("main-container");

    this.renderAll = function() {
        this.mainContainer.classList.add("main");
        this.renderLeft();
        this.renderRight();
    }

    this.renderLeft = function() {
        var name = document.createElement("div");
        name.classList.add("user");
        name.innerText = "Lazar";
        this.mainContainer.appendChild(name);


        // var artistPicture = document.createElement("img");
        // name.classList.add("artistPic");
        // name.appendChild(artistPicture + getArtist());



    }

    this.renderRight = function() {
        
    }


}