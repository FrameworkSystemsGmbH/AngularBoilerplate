import { EnvironmentProviders, ErrorHandler, NgZone, Provider, importProvidersFrom } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogService } from '@app/services/dialog.service';
import { ErrorService } from '@app/services/error.service';

const errorProvider: Provider = {
  provide: ErrorHandler,
  useFactory: (zone: NgZone, dialogService: DialogService): ErrorService => new ErrorService(zone, dialogService),
  deps: [
    NgZone,
    DialogService
  ]
};

export const APP_PROVIDERS: Array<EnvironmentProviders | Provider> = [
  errorProvider,
  importProvidersFrom(MatDialogModule)
];
