import { Component, Input, Output } from '@angular/core'
import { upgradeAdapter } from "../upgrade_adapter";
import { BasicDetailsComponent } from "./AddressComponent"


@Component({
    selector: 'startup-component',
    template: ` <div>
                    <basic-details></basic-details>
                </div>
                <div>
                    <dtcreditratings [title]="name"></dtcreditratings>
                </div>
               `
})
export class LegalEntityComponent {
   name = "GaneshPawar";
}

//@Component({
//    selector: 'root-panel',
//    template: `<div>
//                <b>From NG2</b>
//                <info-panel></info-panel>
//                </div>`,
//})
//export class StartupComponent {
//}