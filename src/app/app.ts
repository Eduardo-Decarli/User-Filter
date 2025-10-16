import { Component, OnInit, signal } from '@angular/core';
import { IUser } from './interfaces/User/user.interface';
import { UsersList } from './data/users-list';
import { IFilterOption } from './interfaces/filter-options.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App implements OnInit{
  usersList: IUser[] = [];

  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false ;

  // Função provinda da interface OnInit que é acionado quando o componente carrega
  ngOnInit(): void {
    setTimeout(()=> {
      this.usersList = UsersList;
    }, 1000)
  }

  onUserSelected(user: IUser) {
    this.userSelected = user;
    this.showUserDetails = true;
  }

  onFilter(filter: IFilterOption) {
    
  }

}
