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
  customUsersList: IUser[] = [];

  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false ;

  // Função provinda da interface OnInit que é acionado quando o componente carrega
  ngOnInit(): void {
    setTimeout(()=> {
      this.usersList = UsersList;
      this.customUsersList = UsersList;
    }, 1000)
  }

  onUserSelected(user: IUser) {
    this.userSelected = user;
    this.showUserDetails = true;
  }

  onFilter(filter: IFilterOption) {
    this.customUsersList = this.filterUsersList(filter, this.usersList);
  }

  filterUsersList(filter: IFilterOption, usersList: IUser[]): IUser[] {
    let filteredList: IUser[] = [];

    filteredList = this.filterUserListByName(filter.name, usersList);
    filteredList = this.filterUserListByStatus(filter.status, usersList);

    return filteredList;
  }
  
  filterUserListByStatus(status: boolean | undefined, usersList: IUser[]): IUser[] {
    if(status === null || status === undefined) {
      return usersList;
    }

    const customUsersList = usersList.filter((user) => user.ativo === status);
    return customUsersList;
  }

  filterUserListByName(name: string | undefined, usersList: IUser[]): IUser[] {
    const NAME_NOT_TYPPED = name === undefined;

    if(NAME_NOT_TYPPED) {
      return usersList
    }

    const filteredList = usersList.filter((user) => user.nome.toLowerCase().includes(name.toLowerCase()));
    return filteredList;
  }
}
