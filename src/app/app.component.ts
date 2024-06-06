import { Component } from '@angular/core';
import { PhotoListComponent } from './photo-list/photo-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [PhotoListComponent],
})
export class AppComponent {
  title = 'Santender Frontend Test';
}
