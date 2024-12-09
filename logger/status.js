import chalk from "chalk";

const logger = console.log;

export function serverAsStart(port) {
    let msg = `Server is listening on port: http://localhost:${port}`;
    logger(chalk.blue(msg));
};

export function serverAsClose() {
    let msg = 'Server has stopped listening';
    logger(chalk.blue(msg));
};

export function serverAsCrashed(err) {
    let msg = 'Server as crashed due to error => ';
    logger(chalk.redBright(msg) + chalk.underline.grey(err) + '\n' + chalk.bgGrey(err));
};

export function serverHasRequest(reqDetail) {
    let msg = 'Request on => ';
    logger(chalk.underline.yellowBright(msg) + chalk.greenBright(reqDetail));
}

export function serverHasResponse(resDetail) {
    let msg = 'Request on => ';
    logger(chalk.underline.magentaBright(msg) + chalk.greenBright(resDetail));
}
