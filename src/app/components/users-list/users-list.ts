import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../interfaces/User/user.interface';
import { UsersList } from '../../data/users-list';

@Component({
  selector: 'app-users-list',
  standalone: false,
  templateUrl: './users-list.html',
  styleUrl: './users-list.scss'
})
export class UsersListComponent {

  displayedColumns: string[] = ['name', 'date', 'status'];

  @Input({alias: 'userList', required: true}) usersList: IUser[] = [];


  @Output('userSelected') userSelectedEmitt = new EventEmitter<IUser>();

  onUserSelected(user: IUser) {
    console.log('user', user);
    
    this.userSelectedEmitt.emit(user);
  }


}
