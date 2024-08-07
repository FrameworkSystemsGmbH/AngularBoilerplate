import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IErrorBoxData } from '@app/components/errorbox/errorbox-data.interface';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  standalone: true,
  selector: 'my-errorbox',
  templateUrl: './errorbox.component.html',
  styleUrl: './errorbox.component.scss',
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatButtonModule
  ]
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
