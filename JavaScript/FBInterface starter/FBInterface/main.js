function main() {
	var socialNetwork = new SocialNetwork("FaceNoteBook");
    var renderer = new PageRenderer(socialNetwork.users[15]);
    renderer.renderAll();
	console.log(socialNetwork);
}
main();