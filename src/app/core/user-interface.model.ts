export interface UserInterface {
  username: string;
  first_name: string;
  last_name: string;
  avatar: string | null;
  location: {name: string} | null;
  color_scheme: string | null;
  language: string | null;
}
