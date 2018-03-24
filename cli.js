const readline = require(`readline`);
const rl = readline.createInterface(process.stdin, process.stdout);

const createTheme = require(`./create-theme`);
const createTemplate = require(`./create-template`);

const localization = require(`./localization`);
const args = process.argv.slice(2);

const MAX_ARGS_LENGTH = 5;

require(`colors`);

if (args.length === 0) {
  args.push(``);
}

global.ask = (question) => new Promise((resolve) => {
  question += ` `;

  rl.question(question, (answer) => {
    resolve(answer);
  });
});

switch (args[0].toLowerCase()) {
  case `create`:
    if (!args[1]) {
      console.log(localization.en.createActionCompletion());
      process.exit(1);
    }
    switch (args[1].toLowerCase()) {
      case `template`:
        if (
          args.length < MAX_ARGS_LENGTH ||
          args.length > MAX_ARGS_LENGTH ||
          args[3].toLowerCase() !== `using`
        ) {
          console.log(localization.en.wrongCreateTemplateSyntax());
          process.exit(1);
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
          process.exit(1);
        }

        createTheme({
          savePath: args[2],
          templatePath: args[4],
        });

        break;
      default:
        console.log(localization.en.createActionCompletion());
        process.exit(1);
    }

    break;
  case `help`:
  case ``:
    console.log(localization.en.help());
    process.exit(0);

    break;
  default:
    console.log(localization.en.unknownAction(args[0]));
    process.exit(1);
}