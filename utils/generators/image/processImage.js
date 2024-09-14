const canvas = require("canvas");

module.exports = async (image) => {
  return canvas.loadImage(image).then(img => {
    const imageCanvas = canvas.createCanvas(img.width, img.height);
    const ctx = imageCanvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    return imageCanvas.toBuffer();
  });
}