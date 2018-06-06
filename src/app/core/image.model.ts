export class ImageModel {
  advert: number;
  pk: number;
  file: string;

  constructor(json: any) {
    this.advert = json.advert;
    this.pk = json.pk;
    this.file = json.file;
  }
}
