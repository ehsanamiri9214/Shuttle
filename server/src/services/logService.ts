import { consoleColors } from "../constants";
const { Reset, BgRed } = consoleColors;

class LogService {
  constructor() {}

  log(message: string) {
    console.log("LOG:", message);
  }

  info() {}

  warn() {}

  error(err: string) {
    console.log(BgRed, err, Reset);
  }
}

export default LogService;
