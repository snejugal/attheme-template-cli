/* eslint-disable max-len */

const en = {
  unknownAction: (action) => `${`Oops, I couldn't get what do you want to do because I don't know what`.red} ${action.yellow} ${`means.`.red}`,
  wrongCreateTemplateSyntax: () => `${`Oops, your syntax of the`.red} ${`create template`.yellow} ${`command is wrong.`.red}
The correct syntax is ${`create template`.yellow} ${`"path to new template"`.gray} ${`[`.gray}${`using`.yellow} ${`"path to an existing .attheme"]`.gray}.`,
  wrongCreateThemeSyntax: () => `${`Oops, your syntax of the`.red} ${`create theme`.yellow} ${`command is wrong.`.red}
The correct syntax is ${`create theme`.yellow} ${`"path to new .attheme"`.gray} ${`using`.yellow} ${`"path to existing template"`.gray}.`,
  help: () => `Hi there! I'm a CLI that can easily create templates for .attheme's and create .attheme's using these templates.

${`create template`.yellow} ${`"path to new template"`.gray} ${`using`.yellow} ${`"path to an existing .attheme"`.gray} for each unique color in the theme asks you what keyword you'd like to use instead you can (or leave the color constant). After this, it saves the template which you can use later.

${`create theme`.yellow} ${`"path to new .attheme"`.gray} ${`using`.yellow} ${`"path to an existing template"`.gray} for each keyword in the template asks you what color you'd like to use. After this, it saves the theme.`,
};

module.exports = {
  en,
};