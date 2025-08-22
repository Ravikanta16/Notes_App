import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NoteForm } from './components/note-form/note-form';
import { NotesList } from './components/notes-list/notes-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NoteForm, NotesList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('notes_frontend');
}
