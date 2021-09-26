
export class IProduct {
  id: string;
  name: string;
  manufacturer: IManufacturer;
  price: number;
  expiryDate: Date;

  constructor(obj?: any) {
    this.name = obj && obj.name || null;
    this.manufacturer = obj && obj.manufacturer || {};
    this.price = obj && obj.price || null;
    this.expiryDate = obj && parseDate(obj.expiryDate) || null;
  }
}

function parseDate(val) {
  return val.toDate();
}
export class IManufacturer {
  id: string;
  name: string;

  constructor(obj?: any) {
    this.id = obj && obj.id || null;
    this.name = obj && obj.name || null;
  }
}
