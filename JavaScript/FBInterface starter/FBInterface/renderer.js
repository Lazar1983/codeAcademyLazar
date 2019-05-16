function PageRenderer(user) {
	this.user = user;
    this.mainContainer = document.getElementById("main-container");

    this.renderAll = function() {
        this.mainContainer.classList.add("main");
        this.renderLeft();
        this.renderRight();
    }
    this.renderLeft = function() {
        var userName = document.createElement("div");
        userName.classList.add("user");
        userName.innerText = "Lazar";
        this.mainContainer.appendChild(userName);
        
        var profilePic = document.createElement("img");
        profilePic.classList.add("profile");
        profilePic.src = "https://encypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVk1hrE6Z1fJ3HKUDsYRxRWXW5zRRrOIg3jWC1_usrh5Qqf4xz";
        userName.appendChild(profilePic);


        profilePic.addEventListener ("mouseover", function(){
            profilePic.src = "https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80";
        })

        var aboutSection = document.createElement("div");
        aboutSection.classList.add("about-me");
        aboutSection.innerHTML = "about me";
        userName.appendChild(aboutSection);
        
    }

    this.renderRight = function() {
        var albumContainer = document.createElement("div");
        albumContainer.classList.add("main");
        this.mainContainer.appendChild(albumContainer);

        for (var index = 0; index < this.user.album.length; index++) {
            var imageData = this.user.album[index];
            var image = document.createElement("img");
            image.classList.add("imageStyle");
            image.id = imageData.id;
            image.src = imageData.url;
            image.alt = imageData.altText
            albumContainer.appendChild(image);

            // image.addEventListener("click", function(event) {
            //     albumContainer.childNodes.forEach(function(el) {
            //         el.style.height = "100px";
            //         el.style.width = "100px";
            //     })

            //     event.target.style.height = "200px";
            //     event.target.style.width = "200px";
            //     var sound = document.getElementById("clickSound");
            //     sound.play();
            // })

            image.addEventListener("click", (event) => {
                this.popup.innerHTML = "";
                var currentId = parseInt(event.target.id);
                var imageData = this.user.album.filter(function(image) {
                    return image.id === currentId;
                });

                var imageRender = document.createElement("img");
                imageRender.id = imageData[0].id;
                imageRender.src = imageData[0].url;
                imageRender.alt = imageData[0].altText;

                this.popup.appendChild(imageRender);
                this.popup.style.display = "block";
            })
        }

        var myStories = document.createElement("div");
        myStories.classList.add("stories");
        albumContainer.appendChild(myStories);

        var storyRandom1 = document.createElement("div");
        storyRandom1.classList.add("storyRandom");
        storyRandom1.innerHTML = "story1";
        myStories.appendChild(storyRandom1);

        var storyRandom2 = document.createElement("div");
        storyRandom2.classList.add("storyRandom");
        storyRandom2.innerHTML = "story2";
        myStories.appendChild(storyRandom2);

        var storyRandom3 = document.createElement("div");
        storyRandom3.classList.add("storyRandom");
        storyRandom3.innerHTML = "story3";
        myStories.appendChild(storyRandom3);




    }

}