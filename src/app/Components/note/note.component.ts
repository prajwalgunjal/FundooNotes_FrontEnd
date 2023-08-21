import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NoteService } from 'src/app/Services/note/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  display:boolean=true;
  
  constructor(private noteServices:NoteService) { }
  ngOnInit(): void {
  }
  noteForm = new FormGroup(
    {
      title : new FormControl(''),
      takeANote : new FormControl('')
    }
  )

  onSubmit(){
    console.log(this.noteForm);
    let reqData = {
      title : this.noteForm.value.title,
      takeANote : this.noteForm.value.takeANote
    }
    this.noteServices.AddNote(reqData).subscribe((res:any) => {
      console.log(res.message)
    })
  }
}
