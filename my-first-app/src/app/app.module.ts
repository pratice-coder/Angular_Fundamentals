import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent, // Custom Component. Only AppComponent can be bootstraped. But not other compoenents.
                    // So, other components have to be declared in app.module.ts
    WarningAlertComponent, 
    SuccessAlertComponent
  ],
  imports: [
    BrowserModule,
    /**
     * For Two-Way-Binding, you need to enable the ngModel directive. This is done by adding the FormsModule to the imports[] array in the
     * AppModule.
     * At the same time, you need to add the import from @angular/forms in the app.module.ts file.
     */
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
