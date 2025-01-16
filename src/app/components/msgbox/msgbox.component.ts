import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MsgBoxButtons } from '@app/components/msgbox/msgbox-buttons';
import { IMsgBoxData } from '@app/components/msgbox/msgbox-data.interface';
import { MsgBoxIcon } from '@app/components/msgbox/msgbox-icon';
import { MsgBoxResult } from '@app/components/msgbox/msgbox-result';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faExclamationCircle, faExclamationTriangle, faInfoCircle, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'my-msgbox',
    templateUrl: './msgbox.component.html',
    styleUrl: './msgbox.component.scss',
    imports: [
        CommonModule,
        FontAwesomeModule,
        MatButtonModule
    ]
})
export class MsgBoxComponent implements AfterViewInit {

  @ViewChild('footer', { static: true })
  public footer: ElementRef<HTMLDivElement> | null = null;

  public iconExclamationCircle: IconDefinition = faExclamationCircle;
  public iconExclamationTriangle: IconDefinition = faExclamationTriangle;
  public iconInfoCircle: IconDefinition = faInfoCircle;
  public iconQuestionCircle: IconDefinition = faQuestionCircle;

  public title: string;
  public message: string;
  public icon: MsgBoxIcon;
  public iconType: typeof MsgBoxIcon = MsgBoxIcon;
  public buttons: MsgBoxButtons;
  public buttonsType: typeof MsgBoxButtons = MsgBoxButtons;

  private readonly _dialogRef: MatDialogRef<MsgBoxComponent, MsgBoxResult>;

  public constructor(
    dialogRef: MatDialogRef<MsgBoxComponent, MsgBoxResult>,
    @Inject(MAT_DIALOG_DATA) data: IMsgBoxData
  ) {

    this._dialogRef = dialogRef;

    this.title = data.title;
    this.message = data.message;
    this.icon = data.icon;
    this.buttons = data.buttons;
  }

  public ngAfterViewInit(): void {
    if (this.footer != null) {
      this.footer.nativeElement.focus();
    }
  }

  public onYesClick(): void {
    this._dialogRef.close(MsgBoxResult.Yes);
  }

  public onNoClick(): void {
    this._dialogRef.close(MsgBoxResult.No);
  }

  public onOkClick(): void {
    this._dialogRef.close(MsgBoxResult.Ok);
  }

  public onAbortClick(): void {
    this._dialogRef.close(MsgBoxResult.Abort);
  }

  public onRetryClick(): void {
    this._dialogRef.close(MsgBoxResult.Retry);
  }

  public onIgnoreClick(): void {
    this._dialogRef.close(MsgBoxResult.Ignore);
  }

  public onCancelClick(): void {
    this._dialogRef.close(MsgBoxResult.Cancel);
  }
}
