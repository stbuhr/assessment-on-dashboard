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
  selector: 'app-competence-development-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './competence-development-preview.component.html',
  styleUrls: [
    './competence-development-preview.component.scss',
    '../module-preview.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompetenceDevelopmentPreviewComponent {
  assessmentLoader = inject(AssessmentLoaderService);

  private _assessmentId = '';
  assessmentId = input<string>(this._assessmentId);
  private _infoId = '';
  competenceDevelopmentInfo = this.assessmentLoader.competenceDevelopmentInfo;
  isLoading = computed(() => this.competenceDevelopmentInfo().content === '');

  @Output() stateChanged = new EventEmitter<boolean>();

  constructor() {
    effect(() => {
      if (this.assessmentId() !== this._assessmentId) {
        this._assessmentId = this.assessmentId();
        this.assessmentLoader.loadCompetenceDevelopmentInfo(
          this.assessmentId()
        );
      }
      if (this._infoId !== this.competenceDevelopmentInfo().assessmentId) {
        this._infoId = this.competenceDevelopmentInfo().assessmentId;
        this.stateChanged.emit(true);
      }
    });
  }
}
