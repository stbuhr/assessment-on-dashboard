import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from '@angular/core';
import {
  AssessmentModuleInfo,
  defaultAssessmentModuleInfo,
} from '../assessment-info';
import { CompetenceProfilePreviewComponent } from '../competence-profile-preview/competence-profile-preview.component';

@Component({
  selector: 'app-assessment-module-preview',
  standalone: true,
  imports: [CommonModule, CompetenceProfilePreviewComponent],
  templateUrl: './assessment-module-preview.component.html',
  styleUrl: './assessment-module-preview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssessmentModulePreviewComponent {
  assessmentId = input<string>('');
  moduleInfo = input<AssessmentModuleInfo>(defaultAssessmentModuleInfo);
  title = computed(() => this.moduleInfo().title);
}
