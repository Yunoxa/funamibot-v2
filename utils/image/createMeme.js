const canvas = require("canvas");
const wrapText = require("./canvas/wrapText");
canvas.registerFont("./fonts/unicode.impact.ttf", { family: "Sans-serif" });

module.exports = async (image, text) => {
  return canvas.loadImage(image).then(img => {
    const imageCanvas = canvas.createCanvas(800, 800);
    const ctx = imageCanvas.getContext("2d");
    wrappedText = wrapText(ctx, text, 110);
    ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, imageCanvas.width, imageCanvas.height);
    ctx.font = `80px Impact Unicode`;
    ctx.lineWidth = 4;
    ctx.textAlign = "center";
    ctx.fillStyle = "white";

    let lineheight = 80;
    for (let i = 0; i < wrappedText.length; i++) {
      ctx.fillText(wrappedText[i], 400, 80 + (i*lineheight));
      ctx.strokeText(wrappedText[i], 400, 80 + (i*lineheight));
    }

    return imageCanvas.toBuffer();
  });
}