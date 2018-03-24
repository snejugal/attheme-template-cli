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

  static hex (color) {
    let hex = `#`;

    hex += color.alpha.toString(16).padStart(2, 0);
    hex += color.red.toString(16).padStart(2, 0);
    hex += color.green.toString(16).padStart(2, 0);
    hex += color.blue.toString(16).padStart(2, 0);

    return hex;
  }

  static parse (hex) {
    let alpha = 255;
    let red;
    let green;
    let blue;

    switch (hex.length) {
      /* eslint-disable no-magic-numbers */
      case 9:
        alpha = parseInt(hex.slice(1, 3), 16);
        red = parseInt(hex.slice(3, 5), 16);
        green = parseInt(hex.slice(5, 7), 16);
        blue = parseInt(hex.slice(7), 16);

        break;
      case 7:
        red = parseInt(hex.slice(1, 3), 16);
        green = parseInt(hex.slice(3, 5), 16);
        blue = parseInt(hex.slice(5), 16);

        break;
      case 5:
        alpha = parseInt(hex.slice(1, 2).repeat(2), 16);
        red = parseInt(hex.slice(2, 3).repeat(2), 16);
        green = parseInt(hex.slice(3, 4).repeat(2), 16);
        blue = parseInt(hex.slice(4).repeat(2), 16);

        break;
      case 4:
        red = parseInt(hex.slice(1, 2).repeat(2), 16);
        green = parseInt(hex.slice(2, 3).repeat(2), 16);
        blue = parseInt(hex.slice(3).repeat(2), 16);

        break;
    }

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
    colors[color][shade] = Color.parse(`#${colors[color][shade]}`);
  }
}

module.exports = Color;