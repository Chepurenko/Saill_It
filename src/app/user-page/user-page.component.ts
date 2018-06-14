import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProfileService} from '../core/profile-service.service';
import {UserProfileModel} from '../core/user.model';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
  })
export class UserPageComponent {
  userChangeForm = new FormGroup({
    username: new FormControl('', Validators.required),
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    avatar: new FormControl(''),
    location: new FormControl(''),
    color_scheme: new FormControl(''),
    language: new FormControl('')
  });
  user: UserProfileModel;
  constructor(private profileService: ProfileService) {
    this.profileService.getUser().subscribe((user) => { this.user = user; } );
  }
  onSubmit(event: UserProfileModel) {
    this.profileService.updateProfile(event).subscribe();
  }
}
