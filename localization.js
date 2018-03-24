/* eslint-disable max-len */

const terminalColorsMap = {
  white: `white`,
  gray: `gray`,
  black: `black`,
  magenta: `magenta`,
  pink: `red`,
  red: `red`,
  brown: `yellow`,
  orange: `yellow`,
  yellow: `yellow`,
  green: `green`,
  cyan: `cyan`,
  blue: `blue`,
  violet: `magenta`,
};

const en = {
  unknownAction: (action) => `${`Oops, I couldn't get what do you want to do because I don't know what`.red} ${action.yellow} ${`means.`.red}`,

  wrongCreateTemplateSyntax: () => `${`Oops, your syntax of the`.red} ${`create template`.yellow} ${`command is wrong.`.red}
The correct syntax is ${`create template`.yellow} ${`"path to new template"`.gray} ${`using`.yellow} ${`"path to an existing .attheme"`.gray}.`,

  wrongCreateThemeSyntax: () => `${`Oops, your syntax of the`.red} ${`create theme`.yellow} ${`command is wrong.`.red}
The correct syntax is ${`create theme`.yellow} ${`"path to new .attheme"`.gray} ${`using`.yellow} ${`"path to existing template"`.gray}.`,

  help: () => `Hi there! I'm a CLI that can easily create templates for .attheme's and create .attheme's using these templates.

${`create template`.yellow} ${`"path to new template"`.gray} ${`using`.yellow} ${`"path to an existing .attheme"`.gray} for each unique color in the theme asks you what keyword you'd like to use instead you can (or leave the color constant). After this, it saves the template which you can use later.

${`create theme`.yellow} ${`"path to new .attheme"`.gray} ${`using`.yellow} ${`"path to an existing template"`.gray} for each keyword in the template asks you what color you'd like to use. After this, it saves the theme.`,

  createActionCompletion: () => `${`The`.red} ${`create`.yellow} ${`action must follow either`.red} ${`theme`.yellow} ${`or`.red} ${`template`.yellow} ${`keyword.`.red}`,

  themeDoesNotExist: (filePath) => `${`I couldn't read the theme placed in`.red} ${filePath.cyan}${`. Are you sure it exists?`.red}`,

  templateDoesNotExist: (filePath) => `${`I couldn't read the template placed in`.red} ${filePath.cyan}${`. Are you sure it exists?`.red}`,

  saveError: (filePath) => `\n${`Oops, I couldn't save the file in`.red} ${filePath.cyan}. ${`Are you sure that file is writable?`.red}`,

  createTemplateInstruction: () => `Okay, I ask you what keyword you'd like to use instead of a color and you answer. If you leave the field empty, I'll assume you want to leave the color constant. If the answer begins with ${`#`.cyan}, I'll replace that color with yours.\n`,

  colorReplace: (color, colorData) => `${
    color[terminalColorsMap[colorData.colorName]]} ${
    `looks like ${
      colorData.isPure ?
        `pure ${colorData.colorName}` :
        `the ${colorData.shadeName} shade of ${colorData.colorName}`
    }`.gray} →`,

  keywordReplace: (keyword) => `${keyword.cyan} →`,

  templateCreationSuccess: (filePath) => `\n${`Successfully saved the template in`.green} ${filePath.cyan}${`.`.green}`,

  themeCreationSuccess: (filePath) => `\n${`Successfully saved the theme in`.green} ${filePath.cyan}${`.`.green}`,
};

module.exports = {
  en,
};