import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  computed,
  effect,
  inject,
  input,
} from '@angular/core';
import { AssessmentLoaderService } from '../assessment-loader.service';

@Component({
  selector: 'app-competence-profile-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './competence-profile-preview.component.html',
  styleUrls: [
    './competence-profile-preview.component.scss',
    '../module-preview.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompetenceProfilePreviewComponent {
  assessmentLoader = inject(AssessmentLoaderService);

  private _assessmentId = '';
  assessmentId = input<string>(this._assessmentId);
  private _infoId = '';
  competenceProfileInfo = this.assessmentLoader.competenceProfileInfo;
  isLoading = computed(() => this.competenceProfileInfo().content === '');

  @Output() stateChanged = new EventEmitter<boolean>();

  constructor() {
    effect(() => {
      if (this.assessmentId() !== this._assessmentId) {
        this._assessmentId = this.assessmentId();
        this.assessmentLoader.loadCompetenceProfileInfo(this.assessmentId());
      }
      if (this._infoId !== this.competenceProfileInfo().assessmentId) {
        this._infoId = this.competenceProfileInfo().assessmentId;
        this.stateChanged.emit(true);
      }
    });
  }
}
