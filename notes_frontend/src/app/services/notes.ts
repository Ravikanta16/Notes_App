import { HttpClient } from '@angular/common/http';
import { EventEmitter,Injectable } from '@angular/core';
import { map, switchMap, take} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private apiUrl = 'http://localhost:3000/notes';
  public notesUpdated = new EventEmitter<void>();

  constructor(private http:HttpClient) {};

  getNotes() {
    return this.http.get<any[]>(`${this.apiUrl}/all`).pipe(
      map(notes => notes.map(n => ({...n, status: n.status.toUpperCase()})))
    );
  }

  getNote(id: number) {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      map(note => ({...note, status: note.status.toUpperCase()}))
    );
  }

  addNote(title: string, description: string) {
    return this.http.post<any>(`${this.apiUrl}/create`, { title, description }).pipe(
      switchMap(() => this.getNotes()),
      map(notes => {
        this.notesUpdated.emit(); // Emit event after successful addition
        return notes;
      })
    );
  }

  markDone(id: number){
    return this.http.patch<any>(`${this.apiUrl}/${id}/markdone`, {}).pipe(
      take(1)
    );
  } 
}
