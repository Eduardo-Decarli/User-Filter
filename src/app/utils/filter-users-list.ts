import { isWithinInterval } from "date-fns";
import { IUser } from "../interfaces/User/user.interface";
import { IFilterOption } from "../interfaces/filter-options.interface";

function filterUsersList(filter: IFilterOption, usersList: IUser[]): IUser[] {
    let filteredList: IUser[] = [];

    filteredList = filterUserListByName(filter.name, usersList);
    filteredList = filterUserListByDate(filter.startDate, filter.endDate, filteredList);
    filteredList = filterUserListByStatus(filter.status, filteredList);


    return filteredList;
}

function filterUserListByName(name: string | undefined, usersList: IUser[]): IUser[] {
    const NAME_NOT_TYPPED = name === undefined;

    if (NAME_NOT_TYPPED) {
        return usersList
    }

    const filteredList = usersList.filter((user) => user.nome.toLowerCase().includes(name.toLowerCase()));
    return filteredList;
}

function filterUserListByStatus(status: boolean | undefined, usersList: IUser[]): IUser[] {
    if (status === null || status === undefined) {
        return usersList;
    }

    const customUsersList = usersList.filter((user) => user.ativo === status);
    return customUsersList;
}

function filterUserListByDate(startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] {
    if (startDate === undefined || endDate === undefined) {
        return usersList;
    }

    const listFiltered = usersList.filter((user) => isWithinInterval(new Date(user.dataCadastro), {
        start: startDate,
        end: endDate
    }));

    return listFiltered;
}

export { filterUsersList };