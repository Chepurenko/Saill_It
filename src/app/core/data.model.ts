import {ImageModel} from './image.model';
import {User} from './user.model';

export class DataModel {
  public id: number;
  public theme: string;
  public images: any;
  public owner?: User;
  public text?: string;
  public price?: number;
  constructor(json: any) {
    this.id = json.pk;
    this.theme = json.theme;
    this.images = json.images.map((image: any) => new ImageModel(image));
  }
}

export class DataOwner extends DataModel {
  constructor(json: any) {
    super(json);
    this.owner = new User(json.owner);
    this.text = json.text;
    this.price = json.price;
  }
}
