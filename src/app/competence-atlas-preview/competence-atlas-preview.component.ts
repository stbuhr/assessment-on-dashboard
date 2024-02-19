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
  selector: 'app-competence-atlas-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './competence-atlas-preview.component.html',
  styleUrl: './competence-atlas-preview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompetenceAtlasPreviewComponent {
  assessmentLoader = inject(AssessmentLoaderService);

  private _assessmentId = '';
  assessmentId = input<string>(this._assessmentId);
  private _infoId = '';
  competenceAtlasInfo = this.assessmentLoader.competenceAtlasInfo;
  isLoading = computed(() => this.competenceAtlasInfo().content === '');

  @Output() stateChanged = new EventEmitter<boolean>();

  constructor() {
    effect(() => {
      if (this.assessmentId() !== this._assessmentId) {
        this._assessmentId = this.assessmentId();
        this.assessmentLoader.loadCompetenceAtlasInfo(this.assessmentId());
      }
      if (this._infoId !== this.competenceAtlasInfo().assessmentId) {
        this._infoId = this.competenceAtlasInfo().assessmentId;
        this.stateChanged.emit(true);
      }
    });
  }
}
