import { Component, Input } from '@angular/core';
import { IUser } from '../../interfaces/User/user.interface';

@Component({
  selector: 'app-user-details',
  standalone: false,
  templateUrl: './user-details.html',
  styleUrl: './user-details.scss'
})
export class UserDetails {

  @Input({alias: 'user', required: true}) user = {  } as IUser;

}
