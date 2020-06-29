import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Andrew' },
    { id: 3, name: 'Max' },
    { id: 4, name: 'Mosh' },
    { id: 5, name: 'Mike' },
    { id: 6, name: 'Ed' },
  ];
  constructor() {}
}
