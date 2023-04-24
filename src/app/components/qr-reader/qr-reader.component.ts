import { Component } from '@angular/core';
import { QuarComponent } from '@altack/quar/public-api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qr-reader',
  templateUrl: './qr-reader.component.html',
  styleUrls: ['./qr-reader.component.css']
})
export class QrReaderComponent {

  router!: Router;

  constructor(router: Router) {
    this.router = router;
  }

  onSuccess(event: any) {
    console.log(event);
    alert(event);
    this.router.navigate(['/home'])

  }

  onError(event: any) {
    console.log(event);
    this.router.navigate(['/home'])
  }


}
