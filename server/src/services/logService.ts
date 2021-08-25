import { consoleColors } from "../constants";
const { Reset, FgRed } = consoleColors;

class LogService {
  constructor() {}

  log(message: string) {
    console.log("LOG:", message);
  }

  info() {}

  warn() {}

  error(err: string) {
    console.log(FgRed, err, Reset);
  }
}

export default LogService;
