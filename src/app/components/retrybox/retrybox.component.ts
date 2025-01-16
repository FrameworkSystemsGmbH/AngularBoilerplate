import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IRetryBoxData } from '@app/components/retrybox/retrybox-data.interface';
import { RetryBoxResult } from '@app/components/retrybox/retrybox-result';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'my-retrybox',
    templateUrl: './retrybox.component.html',
    styleUrl: './retrybox.component.scss',
    imports: [
        CommonModule,
        FontAwesomeModule,
        MatButtonModule
    ]
})
export class RetryBoxComponent implements AfterViewInit {

  @ViewChild('footer', { static: true })
  public footer: ElementRef<HTMLDivElement> | null = null;

  public iconExclamation: IconDefinition = faExclamationCircle;

  public title: string;
  public message: string;
  public stackTrace?: string;
  public showStackTrace: boolean = false;

  private readonly _dialogRef: MatDialogRef<RetryBoxComponent, RetryBoxResult>;

  public constructor(
    dialogRef: MatDialogRef<RetryBoxComponent, RetryBoxResult>,
    @Inject(MAT_DIALOG_DATA) data: IRetryBoxData
  ) {
    this._dialogRef = dialogRef;

    this.title = data.title;
    this.message = data.message;
    this.stackTrace = data.stackTrace;
  }

  public ngAfterViewInit(): void {
    if (this.footer != null) {
      this.footer.nativeElement.focus();
    }
  }

  public onDetailsClick(): void {
    this.showStackTrace = !this.showStackTrace;
  }

  public onAbortClick(): void {
    this._dialogRef.close(RetryBoxResult.Abort);
  }

  public onRetryClick(): void {
    this._dialogRef.close(RetryBoxResult.Retry);
  }
}
