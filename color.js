const colors = require(`./colors`);

class Color {
  static distance (firstColor, secondColor) {
    const redDistance = (firstColor.red - secondColor.red) ** 2;
    const greenDistance = (firstColor.green - secondColor.green) ** 2;
    const blueDistance = (firstColor.blue - secondColor.blue) ** 2;
    const sum = redDistance + greenDistance + blueDistance;
    const root = Math.sqrt(sum);

    return root;
  }

  static name (userColor) {
    let colorName = ``;
    let shadeName = ``;
    let distance = Infinity;

    for (const color in colors) {
      const shades = colors[color];

      for (const shade in shades) {
        const currentDistance = Color.distance(shades[shade], userColor);

        if (currentDistance < distance) {
          colorName = color;
          shadeName = shade;
          distance = currentDistance;
        }
      }
    }

    const result = {
      colorName,
      isPure: shadeName === `_pure`,
      shadeName,
    };

    return result;
  }
}

module.exports = Color;