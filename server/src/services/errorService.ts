class ErrorService {
  throw(code: number, message: string) {
    const err = new Error();
    err.message = message;
    err.name = code.toString();
    throw err;
  }
}

export default ErrorService;
