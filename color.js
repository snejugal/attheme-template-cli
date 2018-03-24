const colors = require(`./colors`);

const ALPHA_START = 1;
const RED_START = 3;
const GREEN_START = 5;
const BLUE_START = 7;

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

  static hex (color) {
    let hex = `#`;

    hex += color.alpha.toString(16).padStart(2, 0);
    hex += color.red.toString(16).padStart(2, 0);
    hex += color.green.toString(16).padStart(2, 0);
    hex += color.blue.toString(16).padStart(2, 0);

    return hex;
  }

  static parse (hex) {
    // Assuming only #aarrggbb are passed
    const alpha = parseInt(hex.slice(ALPHA_START, RED_START), 16);
    const red = parseInt(hex.slice(RED_START, GREEN_START), 16);
    const green = parseInt(hex.slice(GREEN_START, BLUE_START), 16);
    const blue = parseInt(hex.slice(BLUE_START), 16);

    const color = {
      alpha,
      red,
      green,
      blue,
    };

    return color;
  }
}

for (const color in colors) {
  for (const shade in colors[color]) {
    colors[color][shade] = Color.parse(`#ff${colors[color][shade]}`);
  }
}

module.exports = Color;