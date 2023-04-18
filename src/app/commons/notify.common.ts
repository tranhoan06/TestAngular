import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class NotifyCommon {

    constructor() {

    }

    openSnackBar(message: string, duration: number = 5000) {
        // this.snackBar.open(message, 'Đóng', {
        //     duration: duration,
        // });
    }

}
