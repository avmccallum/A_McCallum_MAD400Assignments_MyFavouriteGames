import { Injectable } from '@angular/core';
import {SwUpdate} from "@angular/service-worker";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class LogUpdateService {

  constructor(private updates: SwUpdate, private snackbar: MatSnackBar) { }

  public init() {
    this.updates.versionUpdates.subscribe(event => {
      switch (event.type) {
        case "VERSION_DETECTED":
          this.snackbar.open("Downloading an update", "OK");
          break;
        case "VERSION_READY":
          let snackBarRef = this.snackbar.open("An update is available", "Install");
          snackBarRef.onAction().subscribe(() => {
            this.updates.activateUpdate().then(() => document.location.reload());
          })
          break;
      }
    })
  }
}
