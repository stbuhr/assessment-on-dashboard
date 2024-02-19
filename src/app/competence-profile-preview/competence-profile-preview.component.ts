import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';
import { AssessmentLoaderService } from '../assessment-loader.service';

@Component({
  selector: 'app-competence-profile-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './competence-profile-preview.component.html',
  styleUrl: './competence-profile-preview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompetenceProfilePreviewComponent implements OnInit {
  assessmentLoader = inject(AssessmentLoaderService);

  assessmentId = input<string>('');
  competenceProfileInfo = this.assessmentLoader.competenceProfileInfo;
  isLoading = computed(() => this.competenceProfileInfo().content === '');

  // TODO: Load on change of assessmentId
  ngOnInit(): void {
    this.assessmentLoader.loadCompetenceProfileInfo(this.assessmentId());
  }
}
