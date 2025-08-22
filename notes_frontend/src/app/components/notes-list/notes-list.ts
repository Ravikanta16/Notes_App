import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotesService } from '../../services/notes';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notes-list',
  imports: [CommonModule],
  templateUrl: './notes-list.html',
  styleUrl: './notes-list.css'
})
export class NotesList implements OnInit, OnDestroy {
  notes:any[]=[];
  private notesSubscription!: Subscription;

  constructor(private notesService: NotesService) {}

  ngOnInit(){
    this.loadNotes();
    this.notesSubscription = this.notesService.notesUpdated.subscribe(() => {
      this.loadNotes();
    });
  }

   ngOnDestroy() {
    this.notesSubscription.unsubscribe();
   }
  
  loadNotes() {
    this.notesService.getNotes().subscribe(data => this.notes = data);
  }

  markDone(id: number) {
    this.notesService.markDone(id).subscribe(() => {
      this.loadNotes();
    });
  }
}
