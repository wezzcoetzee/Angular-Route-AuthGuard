import {Injectable} from '@angular/core';
import {CanActivate, CanActivateChild} from '@angular/router';
// import {} from '';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor() {}

  CanActivate() {
    this.isAuthenticated();
    return this._authService.isAuthenticated();
  }

  private isAuthenticated(): void {
    // Check if user is authenticated, if they are not, then authenticate them
  }
}
