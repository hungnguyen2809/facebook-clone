import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IDProfileService implements Resolve<any> {

  constructor(private dataProfileService: IDProfileService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let id  = route.paramMap.get('id');
    return id;
  }
}
