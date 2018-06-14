export class UserProfileModel {
  /**
   * User picture avatar
   * for update - POST or PATCH jpg, jpeg, png or gif file in base64
   * on GET - returns url string
   * */
  avatar: string | null;
  /**
   * User color scheme
   * acceptable types:
   * '#RRGGBB'
   * 'rgb(rrr, ggg, bbb)'
   * 'rgba(rrr, ggg, bbb, opacity)'
   * 'hsl(hue, saturation, lightness)'
   * 'hsla(hue, saturation, lightness, alpha)'
   * */
  color_scheme: string | null;
  email: string;
  first_name: string;
  id: number;
  language: string | null;
  last_name: string;
  location: {name: string} | null;
  username: string;
}
export class User {
  id: number;
  username: string;
  email: string;
  first_name?: string;
  last_name?: string;
  avatar?: string;
  location?: string;
  color_scheme?: string;
  language?: string;

  constructor(json: any) {
    this.id = json.id;
    this.username = json.username;
    this.email = json.email;
    this.first_name = json.first_name;
    this.last_name = json.last_name;
    this.avatar = json.avatar;
    this.location = json.location;
    this.color_scheme = json.color_scheme;
    this.language = json.language;
  }
}
