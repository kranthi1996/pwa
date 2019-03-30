import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import {NewsletterService} from './services/newsletter.service';
import { ConfirmationModalComponent } from './modals/confirmation-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pwa-notifications';
  readonly VAPID_PUBLIC_KEY = "BJY8DLPBfj7rQLpACWriXJDA8X6JJj-LKkOyeywQBJhxK1FHSeMGwYEkmUNX9ryS7PY8QtnJXE93TMnMQY86z-8";
  constructor(public dialog:MatDialog,private swPush: SwPush,private modalService: NgbModal,
    private newsletterService: NewsletterService){
       this.swPush.requestSubscription({
          serverPublicKey: this.VAPID_PUBLIC_KEY
      })
      .then((sub )=> this.newsletterService.addPushSubscriber(sub).subscribe())
      .catch(err => console.error("Could not subscribe to notifications", err));
    }
    subscribeToNotifications() {
      // this.swPush.requestSubscription({
      //     serverPublicKey: this.VAPID_PUBLIC_KEY
      // })
      // .then((sub )=> this.newsletterService.addPushSubscriber(sub).subscribe())
      // .catch(err => console.error("Could not subscribe to notifications", err));
  }
  dialogBox() {
    const modalRef = this.modalService.open(ConfirmationModalComponent, { size: 'sm', centered: true });
    modalRef.componentInstance.message = 'Are you sure want to Create Placement ?';
    modalRef.result.then(value => {
      if (value === true) {
        // modalRef.componentInstance.message = 'Please wait , while admin confirms the placement';
        //this.createPlacement();
      } else {
      }
    }, err => { });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmationModalComponent,{
      height: '200px',
      width: '300px',
      
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }
  login(){
    const dialogRef = this.dialog.open(ConfirmationModalComponent,{
      height: '200px',
      width: '1000px',
  
      
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }
}
