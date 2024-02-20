import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AssessmentModulePreviewComponent } from '../assessment-module-preview/assessment-module-preview.component';
import { AssessmentLoaderService } from '../assessment-loader.service';

@Component({
  selector: 'app-assessment-preview',
  standalone: true,
  imports: [CommonModule, AssessmentModulePreviewComponent, MatIconModule],
  templateUrl: './assessment-preview.component.html',
  styleUrl: './assessment-preview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssessmentPreviewComponent {
  assessmentLoader = inject(AssessmentLoaderService);

  assessmentId = input<string>('123');
  assessmentInfo = this.assessmentLoader.assessmentInfo;
  title = signal('Auswertung wird geladen ...');
  isLoaded = computed(() => this.assessmentInfo().modules.length > 0);
  infoNotYetRead = signal(true);

  openInfo() {
    this.infoNotYetRead.set(false);
  }
}
