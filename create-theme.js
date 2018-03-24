const path = require(`path`);
const Attheme = require(`attheme-js`);
const fs = require(`promise-fs`);
const Color = require(`./color`);

const localization = require(`./localization`);

const createTheme = async (args) => {
  const { savePath, templatePath } = args;

  let finalTemplatePath = path.resolve(process.cwd(), templatePath);
  let finalSavePath = path.resolve(process.cwd(), savePath);

  if (!finalTemplatePath.endsWith(`.attheme-template`)) {
    finalTemplatePath += `.attheme-template`;
  }

  if (!finalSavePath.endsWith(`.attheme`)) {
    finalSavePath += `.attheme`;
  }

  try {
    const templateContent = await fs.readFile(finalTemplatePath, `utf8`);
    const { template, image } = JSON.parse(templateContent);

    const theme = new Attheme();

    for (let color in template) {
      const variables = template[color];

      if (!color.startsWith(`#`)) {
        let valid = false;

        while (!valid) {
          const userColor = await ask(localization.en.keywordReplace(color));

          try {
            const { alpha, red, green, blue } = Color.parse(userColor);

            if (isNaN(alpha) || isNaN(red) || isNaN(green) || isNaN(blue)) {
              throw new Error();
            }

            valid = true;
            color = userColor;
          } catch (error) {
            console.log(localization.en.invalidColor());
          }
        }
      }

      color = Color.parse(color);

      variables.forEach((variable) => {
        theme[variable] = color;
      });
    }

    if (image) {
      const decodedImage = Buffer.from(image, `base64`).toString(`binary`);

      theme[Attheme.IMAGE_KEY] = decodedImage;
    }

    const stringified = Attheme.asText(theme);

    try {
      await fs.writeFile(finalSavePath, stringified, `binary`);
      console.log(localization.en.themeCreationSuccess(finalSavePath));
      process.exit(0);
    } catch (error) {
      console.log(localization.en.saveError(finalSavePath));
      process.exit(1);
    }
  } catch (error) {
    console.log(localization.en.templateDoesNotExist(finalTemplatePath));
    process.exit(1);
  }
};

module.exports = createTheme;