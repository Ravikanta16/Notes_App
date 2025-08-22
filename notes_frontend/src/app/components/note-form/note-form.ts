import { Component } from '@angular/core';
import { NotesService } from '../../services/notes';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-note-form',
  imports: [FormsModule],
  templateUrl: './note-form.html',
  styleUrl: './note-form.css'
})
export class NoteForm {
  title='';
  description='';

  constructor(private notesService: NotesService) {}

  addNote() {
      this.notesService.addNote(this.title, this.description).subscribe();
      this.title = '';
      this.description = '';
    }
}
