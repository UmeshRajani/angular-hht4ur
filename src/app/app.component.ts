import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, FormArray, FormBuilder } from "@angular/forms";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  formGroup: FormGroup;
  addressConfigList: AddressConfig[] = [];
  constructor(
    private _formBuilder: FormBuilder
  ) {
     this.formGroup = this._formBuilder.group({
      person: this._formBuilder.array([])
  });
  }
createItem(addressFieldName): FormGroup {
    return this._formBuilder.group({
        name: ["", Validators.required]
      });
}
addNewControl(addressFieldName): void {
    const control = < FormArray > this.formGroup.controls["person"];
    control.push(this.createItem(addressFieldName));
  }

addConfigControl(fieldName) {
  this.addressConfigList.push({ name: fieldName, label: fieldName, value: "", type: "text"});
}

}

export interface AddressConfig {
  name: string;
  label: string;
  value: string;
  type: string;
}
