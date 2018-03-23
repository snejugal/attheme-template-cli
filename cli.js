const createTheme = require(`./create-theme`);
const createTemplate = require(`./create-template`);

const localization = require(`./localization`);
const args = process.argv.slice(2);

const MAX_ARGS_LENGTH = 5;

require(`colors`);

if (args.length === 0) {
  args.push(``);
}

switch (args[0].toLowerCase()) {
  case `create`:
    switch (args[1].toLowerCase()) {
      case `template`:
        if (
          args.length < MAX_ARGS_LENGTH ||
          args.length > MAX_ARGS_LENGTH ||
          args[3].toLowerCase() !== `using`
        ) {
          console.log(localization.en.wrongCreateTemplateSyntax());
        }

        createTemplate({
          savePath: args[2],
          themePath: args[4],
        });

        break;
      case `theme`:
        if (
          args.length < MAX_ARGS_LENGTH ||
          args.length > MAX_ARGS_LENGTH ||
          args[3].toLowerCase() !== `using`
        ) {
          console.log(localization.en.wrongCreateThemeSyntax());
        }

        createTheme({
          savePath: args[2],
          templatePath: args[4],
        });
    }

    break;
  case `help`:
  case ``:
    console.log(localization.en.help());

    break;
  default:
    console.log(localization.en.unknownAction(args[0]));
}