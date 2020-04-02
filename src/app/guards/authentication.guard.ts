import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DiscourseDataService } from '../services/data/discourse-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(
    private router: Router,
    private dataService: DiscourseDataService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      if(this.dataService.isLoggedIn) {
        return true;
      } else {
        this.router.navigate(['/login'], {queryParams: {callbackURL: state.url}});
        return false;
      }
  }

}
