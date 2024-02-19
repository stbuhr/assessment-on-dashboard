import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AssessmentPreviewComponent } from './assessment-preview/assessment-preview.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AssessmentPreviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'assessment-on-dashboard';
}
