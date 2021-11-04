import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-editstudents',
  templateUrl: './editstudents.component.html',
  styleUrls: ['./editstudents.component.css']
})
export class EditstudentsComponent implements OnInit {
  currentId!: number;
  currentName!: string;
  currentAge!: number;
  editForm!: FormGroup;
  constructor(private route: ActivatedRoute, private StudentsService: StudentsService , private Router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.currentId = param['id']
    })

    this.StudentsService.getStudentbyId(this.currentId).subscribe(result => {
      // console.log(result)
      // this.currentName = result.name
      // this.currentAge = result.age
    })

    this.editForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'age': new FormControl(null, Validators.required),
    })

  }

  getCurrentStudent() {
    this.StudentsService.getStudentbyId(this.currentId).subscribe(result => {
      console.log(result)
    })
  }

  get name() {
    return this.editForm.value['name']
  }
  get age() {
    return this.editForm.value['age']
  }
  get id(){
    return  this.route.snapshot.paramMap.get('id');
  }

  OnSubmit() {
    if (!this.editForm.valid) {
      return;
    }
    let formData = {
      id:this.currentId,
      name:this.name,
      age:this.age
    }
    this.StudentsService.editStudent(formData).subscribe(result =>{
      this.Router.navigate(["/viewList"]);
    })
  }

}
