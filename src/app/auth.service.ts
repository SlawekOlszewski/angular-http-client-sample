import { Injectable } from '@angular/core';

/** Mock client-side authentication/authorization service */
@Injectable()
export class AuthService {
  getAuthorizationToken() {
    return 'some-auth-token';
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/