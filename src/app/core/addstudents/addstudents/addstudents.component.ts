import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-addstudents',
  templateUrl: './addstudents.component.html',
  styleUrls: ['./addstudents.component.css']
})
export class AddstudentsComponent implements OnInit {
  addForm!: FormGroup;

  constructor(private studentsService:StudentsService,private router:Router) { }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'age': new FormControl('', Validators.required)
    })
  }

  
  onSubmit() {
    if(!this.addForm.valid){
      return;
    }
    this.studentsService.addNewStudents(this.addForm.value).subscribe(result =>{
      this.router.navigate([''])
      console.warn(result)
    })
  }

}
