import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LegalEntityComponent } from "./UserComponents/StartupComponent"
import { BasicDetailsComponent } from "./UserComponents/AddressComponent"
import { upgradeAdapter } from "./upgrade_adapter";



@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [
        LegalEntityComponent,
        //upgradeAdapter.upgradeNg1Component('infoPanel')
        upgradeAdapter.upgradeNg1Component('dtcreditratings'),
        BasicDetailsComponent
    ],
    providers: [],
    bootstrap: []
})
export class AppModule {
    ngDoBootstrap() { }
}