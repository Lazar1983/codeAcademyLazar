function User (name) {
    this.name = name;
    this.photos = [];
    this.aboutMe = aboutMe;
    this.age = age;
    this.height = height;
    this.profilePic = new Photos ();
    this.album = [];


    this.generatePhotos = function () {
        for (var index = 1; index <=10; index++) {
            var photo = new Photos ();
            this.photos.push (photo);
        }
    }

    this.aboutMe = function () {

    }




    this.generatePhotos ();

}