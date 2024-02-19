import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-assessment-module-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assessment-module-preview.component.html',
  styleUrl: './assessment-module-preview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssessmentModulePreviewComponent {
  title = signal('Modul wird geladen');
}
