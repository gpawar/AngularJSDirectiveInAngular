import { Component, Input, Output } from '@angular/core'
import { upgradeAdapter } from "../upgrade_adapter";


@Component({
    selector: 'basic-details',
    template: `<div><h1>Address</h1>{{address}}</div>`
})
export class BasicDetailsComponent {
    address = "Flat 14";
}
