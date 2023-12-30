import { Component, Input, inject, Output, EventEmitter } from '@angular/core';
import { Employee } from '../employee.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {
  @Input() editEmployeeData: Employee;
  @Input() randata: string;
  @Output() emitEmployee = new EventEmitter();
  formBuilder: FormBuilder = inject(FormBuilder);
  editEmployeeForm : FormGroup;

  ngOnInit() {
    this.editEmployeeForm = this.formBuilder.group({
      id: [this.editEmployeeData.id, Validators.required],
      name: [this.editEmployeeData.name, Validators.required],
      project: [this.editEmployeeData.project, Validators.required],
      phone: [this.editEmployeeData.phone, Validators.required],
      position: [this.editEmployeeData.position, Validators.required]
    })
  }

  saveEmployee(formData) {
    this.randata= "Siya";
    if(this.editEmployeeForm.valid) {
      this.emitEmployee.emit(formData.value);
    } else {
      alert("Form is not valid.");
    }
  }

  resetForm() {
    this.editEmployeeForm.reset();
  }

  ngOnDestroy() {
    console.log("destroy called");
    // if(this.editEmployeeForm.invalid) {
    // }
  }

}
