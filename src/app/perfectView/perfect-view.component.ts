import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import * as moment from "moment";
@Component({
  selector: 'app-perfect-view',
  templateUrl: './perfect-view.component.html',
  styleUrls: ['./perfect-view.component.scss']
})
export class PerfectViewComponent implements OnInit {
  viewForm: FormGroup;
  viewClass='container';
  _view=true;
  type: any[] = ['Maintenance', 'Service', 'Upgrade'];
  subType: any[] = ['Plant Regular Checkup', 'Service at home'];
  paymentStatus: any[] = ['open', 'paid', 'pending'];
  typeSelected = true;
  selectedDropDownValue='Material Order';
  scheduledDate="9/09/2020";
  errObj = { _error: false, message: "Maintenance Type not Available" };
  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.viewForm = this.fb.group({
      type: ['', Validators.required],
      subType: [{ value: '', disabled: this.typeSelected }, [Validators.required, this.checkVal]],
      paymentStatus: ['', Validators.required],
      assignedTo: ['', Validators.required],
      description: ['']
    })
  }
  checkVal(control: FormControl) {
    const valid = control.value === 'Maintenance';
    return valid ? { valid: true } : null
  }
  checkSubType(): void {
    this.typeSelected = false;
    this.viewForm.controls.subType.reset({ value: '', disabled: false })
  }

  checkUpdate(): void {
    if(this.viewForm.value.type === 'Maintenance'){
      this.errObj._error=true;
      this.viewForm.controls.type.reset();
    }
    else{
      this.errObj._error=false;
      this.viewForm.reset();
    }
  }
  onDateChange(ev){
    this.scheduledDate = moment(ev.value).format('D/MM/YYYY');
    console.log("PerfectViewComponent -> onDateChange -> ev.value", ev.value)
    console.log("PerfectViewComponent -> onDateChange -> this.scheduledDate", this.scheduledDate)
  }
  setDropDownValue(val){
    this.selectedDropDownValue = val;
  }
  changeTheme(){
    this._view = !this._view;
    if(this._view){
      this.viewClass = 'container';
    }
    else{
      this.viewClass = 'dark-container'
    }
  }
}
