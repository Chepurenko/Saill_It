import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProfileService} from '../core/profile-service.service';
import {UserProfileModel} from '../core/user.model';
import {UserInterface} from '../core/user-interface.model';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
  })
export class UserPageComponent {
  reader = new FileReader();
  userChangeForm = new FormGroup({
    username: new FormControl('', Validators.required),
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    avatar: new FormControl(''),
    location: new FormControl(''),
    color_scheme: new FormControl(''),
    language: new FormControl('')
  });
  user: UserInterface;
  constructor(private profileService: ProfileService) {
    this.profileService.getUser().subscribe((user) => { this.user = user; } );
  }
  onSubmit(event: UserInterface) {
    this.profileService.updateProfile(event).subscribe();
  }
  changAvatar(event) {
    console.log(event);
  }
  changeColor(event) {
    const file = event.target.file[0];
    this.reader.readAsDataURL(file);
    this.reader.onloadend = (() => {
      console.log(event);
    });
    // console.log(event);
  }
}
