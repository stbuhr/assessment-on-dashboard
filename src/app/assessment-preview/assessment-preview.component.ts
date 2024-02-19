import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';
import { AssessmentModulePreviewComponent } from '../assessment-module-preview/assessment-module-preview.component';
import { AssessmentLoaderService } from '../assessment-loader.service';

export type AssessmentModuleType =
  | 'CompetenceProfile'
  | 'CompetenceAtlas'
  | 'Teamrole'
  | 'CompetenceDevelopment'
  | 'Strengths';

export interface AssessmentModuleInfo {
  title: string;
  type: AssessmentModuleType;
}

export interface AssessmentInfo {
  id: string;
  title: string;
  subtitle: string;
  modules: AssessmentModuleInfo[];
}

@Component({
  selector: 'app-assessment-preview',
  standalone: true,
  imports: [CommonModule, AssessmentModulePreviewComponent],
  templateUrl: './assessment-preview.component.html',
  styleUrl: './assessment-preview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssessmentPreviewComponent {
  assessmentLoader = inject(AssessmentLoaderService);

  assessmentId = input<string>('');
  assessmentInfo = this.assessmentLoader.assessmentInfo;
  title = signal('Auswertung wird geladen ...');
  isLoaded = computed(() => this.assessmentInfo().modules.length > 0);
}
