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
import { CompetenceAtlasPreviewComponent } from '../competence-atlas-preview/competence-atlas-preview.component';
import { TeamRolesPreviewComponent } from '../team-roles-preview/team-roles-preview.component';

@Component({
  selector: 'app-assessment-module-preview',
  standalone: true,
  imports: [
    CommonModule,
    CompetenceProfilePreviewComponent,
    CompetenceAtlasPreviewComponent,
    TeamRolesPreviewComponent,
  ],
  templateUrl: './assessment-module-preview.component.html',
  styleUrl: './assessment-module-preview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssessmentModulePreviewComponent {
  assessmentId = input<string>('');
  moduleInfo = input<AssessmentModuleInfo>(defaultAssessmentModuleInfo);
  title = computed(() => this.moduleInfo().title);
  isLoading = signal(true);

  stateChanged($event: boolean) {
    // Don't change a state inside an effect handler
    setTimeout(() => {
      this.isLoading.set(false);
    }, 100);
  }
}
