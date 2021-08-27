class CustomError extends Error {
  public status: number;
  public message: string;

  constructor(status: number, message: string) {
    super(message);
    Object.setPrototypeOf(this, CustomError.prototype);

    this.status = status;
    this.message = message;
  }
}

export default CustomError;
