import {ImageModel} from './image.model';

export class DataModel {
  public id: number;
  public theme: string;
  public images: any;
  constructor(json: any) {
    this.id = json.pk;
    this.theme = json.theme;
    this.images = json.images.map((image: any) => new ImageModel(image));
  }
}
