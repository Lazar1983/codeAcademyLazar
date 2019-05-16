function PageRenderer(user) {
    this.user = user;
    var _user = this.user;
    this.mainContainer = document.getElementById("main-container");


    this.album = document.createElement("div");
    var _album = this.album;
    this.album.classList.add("album");
    this.album.id = "album";

    // this.album.addEventListener('click', function(event){
    //     event.srcElement.style.display = "none";
    // })


    var closeBtn = document.createElement("button");
    closeBtn.innerText = "X";
    closeBtn.style.position = 'fixed';
    closeBtn.style.top = '20px';
    closeBtn.style.right = '20px';

    closeBtn.addEventListener('click', function (event) {
        _album.style.display = 'none';
    })

    var leftButton = document.createElement("button");
    leftButton.innerText = "left";
    leftButton.addEventListener('click', function (event) {
        var index = parseInt(_album.getAttribute("index"));
        if (index != 0) {
            index--;
          
            _album.setAttribute("index", index);
            var previousImageSrc = _user.pictures[index-1].src;
            picture.src = previousImageSrc;
        }
        
    })


    var rightButton = document.createElement("button");
    rightButton.innerText = "right";
    rightButton.addEventListener('click', function (event) {
        var index = parseInt(_album.getAttribute("index"));
        if (index != 10) {
            index++;
            
            _album.setAttribute("index", index);
            var previousImageSrc = _user.pictures[index-1].src;
            picture.src = previousImageSrc;
        }
        
    })




    var picture = document.createElement("img");
    picture.src = 'https://picsum.photos/200/300/?random';
    picture.id = 'albumSrc';
    this.album.appendChild(leftButton);
    this.album.appendChild(picture);
    this.album.appendChild(rightButton);
    this.album.appendChild(closeBtn);
    this.mainContainer.appendChild(this.album);



    this.renderAll = function () {
        this.mainContainer.classList.add("main");
        this.renderLeft();
        this.renderRight();
    }
    this.renderLeft = function () {
        var leftSide = document.createElement("div");
        leftSide.classList.add("left-side");
        this.mainContainer.appendChild(leftSide);

        var profilePic = document.createElement("img");
        profilePic.src = this.user.profilePictures.src;
        profilePic.alt = this.user.profilePictures.alt;
        profilePic.classList.add('prof');
        leftSide.appendChild(profilePic);

        var aboutMe = document.createElement('div');
        var aboutMeHeader = document.createElement("h1");
        aboutMeHeader.innerText = this.user.aboutMe.header;
        var aboutMeParagraph = document.createElement("p");
        aboutMeParagraph.innerText = this.user.aboutMe.paragraph;
        aboutMe.classList.add('about');
        leftSide.appendChild(aboutMe);
        aboutMe.appendChild(aboutMeHeader);
        aboutMe.appendChild(aboutMeParagraph);


        // function zoom(event) {
        //     profilePic.style.width = '350px';
        //     profilePic.style.width = '350px';

        //     event.removeEventListener("mouseover", zoom, false);

        // }


        // profilePic.addEventListener('mouseover', function (event) {
        //     zoom();



        // })
    }
    this.renderRight = function () {
        var rightSide = document.createElement('div');
        rightSide.classList.add('right-side');
        this.mainContainer.appendChild(rightSide);

        var gallery = document.createElement('div');
        gallery.classList.add('gallery');
        rightSide.appendChild(gallery);

        for (var index = 0; index < 10; index++) {
            var image = document.createElement('img');
            image.classList.add('imageStyle');
            image.src = this.user.pictures[index].src;
            image.id = this.user.pictures[index].id;
            gallery.appendChild(image);

            image.addEventListener("click", function (event) {
                var albumce = document.getElementById("album");
                albumce.style.display = "block";
                albumce.setAttribute('index', event.srcElement.getAttribute('id'));
                document.getElementById("albumSrc").src = event.srcElement.getAttribute('src');
            })

        }


        var posts = document.createElement('div');
        posts.classList.add('posts');
        rightSide.appendChild(posts);


        for (var index = 0; index < 5; index++) {
            var news = document.createElement('div');
            news.classList.add('news');
            news.id = user.posts[index].id;
            posts.appendChild(news);

            var newsHeader = document.createElement("h1");
            newsHeader.innerText = this.user.posts[index].header + index;
            news.appendChild(newsHeader);



            var newsParagraph = document.createElement("p");
            newsParagraph.innerText = this.user.posts[index].paragraph;
            news.appendChild(newsParagraph);


            var newsButton = document.createElement("button");
            newsButton.innerText = "delete";
            newsButton.addEventListener('click', function (event) {
                user.posts.splice(index, 1);
                event.srcElement.parentElement.remove();
            })

            news.appendChild(newsButton);
        }


    }


}
