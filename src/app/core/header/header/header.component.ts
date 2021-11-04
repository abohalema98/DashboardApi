import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Students } from 'src/app/model/students';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  studentsList: Students[] = []

  deleteCurrnt(id: number) {
    this.studSer.deleteStudent(id).subscribe(deletedUser => {
      if (deletedUser) {
        location.reload()
      }
    })
  }

  constructor(private studSer: StudentsService) { }

  ngOnInit(): void {
    this.studSer.getStudentsList().subscribe(result => {
      this.studentsList = result
      // console.log(this.studentsList)
    })
  

  } //ngOnInit


}
