import { Component, OnInit } from '@angular/core';
import { Students } from 'src/app/model/students';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-viewlist',
  templateUrl: './viewlist.component.html',
  styleUrls: ['./viewlist.component.css']
})
export class ViewlistComponent implements OnInit {

  studentsList: Students[] = []

  deleteCurrnt(id:number){
    this.studSer.deleteStudent(id).subscribe(deletedUser =>{
      // console.log(deletedUser)
      if(deletedUser){
        location.reload()
      }
    })
  }
  constructor(private studSer:StudentsService) { }


  ngOnInit(): void {
    this.studSer.getStudentsList().subscribe(result =>{
      this.studentsList = result
    
      // console.log(this.studentsList)
    })
  }


}
