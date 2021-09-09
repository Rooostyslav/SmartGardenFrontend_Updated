import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateUser } from 'src/models/users/create.user';
import { UpdateUser } from 'src/models/users/update.user';
import { User } from 'src/models/users/user';
import { SMART_GARDEN_API } from 'src/app/app-injection-tokents';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userApiUrl: string = this.baseApiUrl + '/api/users'; 

  constructor(
    private http: HttpClient,
    @Inject(SMART_GARDEN_API) private baseApiUrl: string
  ) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.userApiUrl);
  }

  getById(userId: number): Observable<User> {
    return this.http.get<User>(this.userApiUrl + '/' + userId);
  }

  getMyUser(): Observable<User> {
    return this.http.get<User>(this.userApiUrl + '/my');
  }

  create(user: CreateUser): Observable<User> {
    return this.http.post<User>(this.userApiUrl, user);
  }

  update(user: UpdateUser): Observable<User> {
    return this.http.put<User>(this.userApiUrl, user);
  }

  delete(userId: number): Observable<User> {
    return this.http.delete<User>(this.userApiUrl + '/' + userId);
  }
}
