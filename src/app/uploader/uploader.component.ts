import { Component } from '@angular/core';
import { UploaderService } from './uploader.service';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styles: ['input[type=file] { font-size: 1.2rem; margin-top: 1rem; display: block; }'],
  providers: [ UploaderService ]
})
export class UploaderComponent {
  message = '';

  constructor(private uploaderService: UploaderService) {}

  onPicked(input: HTMLInputElement) {
    const file = input.files?.[0];
    if (file) {
      this.uploaderService.upload(file).subscribe(
        msg => {
          input.value = '';
          this.message = msg;
        }
      );
    }
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/