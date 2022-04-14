import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IErrorBoxData } from '@app/components/errorbox/errorbox-data.interface';
import { faExclamationCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'my-errorbox',
  templateUrl: './errorbox.component.html',
  styleUrls: ['./errorbox.component.scss']
})
export class ErrorBoxComponent {

  public iconExclamation: IconDefinition = faExclamationCircle;

  public title: string;
  public message: string;
  public stackTrace?: string;
  public showStackTrace: boolean = false;

  private readonly _dialogRef: MatDialogRef<ErrorBoxComponent>;

  public constructor(
    dialogRef: MatDialogRef<ErrorBoxComponent>,
    @Inject(MAT_DIALOG_DATA) data: IErrorBoxData
  ) {
    this._dialogRef = dialogRef;

    this.title = data.title;
    this.message = data.message;
    this.stackTrace = data.stackTrace;
  }

  public onDetailsClick(): void {
    this.showStackTrace = !this.showStackTrace;
  }

  public onOkClick(): void {
    this._dialogRef.close();
  }
}
