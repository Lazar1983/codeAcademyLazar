import { Renderer } from "../presentation-layer/artist-render.js";

function main() {

    var renderer = new Renderer();
    renderer.init("Rihanna");
    console.log(renderer);
}

main();