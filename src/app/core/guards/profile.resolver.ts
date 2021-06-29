import { UsersService } from './../services/users/users.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { EMPTY, Observable, of } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class ProfileResolver implements Resolve<any>{
    constructor(private usersService: UsersService) { }
    resolve(next: ActivatedRouteSnapshot): Observable<any> {
        const id = next.paramMap.get('id');
        return id ? this.usersService.profile(id).pipe(
            catchError(() => {
                return of('No Data')
            })
        ): EMPTY
    }
}