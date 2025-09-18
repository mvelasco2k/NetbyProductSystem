export class TransactionModel {
  constructor(
    public idProduct: number,
    public quantity: number,
    public operation: string,
    public detail: string
  ) {}
}    