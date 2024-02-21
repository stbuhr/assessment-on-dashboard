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
  selector: 'app-strengths-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './strengths-preview.component.html',
  styleUrls: ['./strengths-preview.component.scss', '../module-preview.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StrengthsPreviewComponent {
  assessmentLoader = inject(AssessmentLoaderService);

  private _assessmentId = '';
  assessmentId = input<string>(this._assessmentId);
  private _infoId = '';
  strengthsInfo = this.assessmentLoader.strengthsInfo;
  isLoading = computed(() => this.strengthsInfo().content === '');

  @Output() stateChanged = new EventEmitter<boolean>();

  constructor() {
    effect(() => {
      if (this.assessmentId() !== this._assessmentId) {
        this._assessmentId = this.assessmentId();
        this.assessmentLoader.loadStrengthsInfo(this.assessmentId());
      }
      if (this._infoId !== this.strengthsInfo().assessmentId) {
        this._infoId = this.strengthsInfo().assessmentId;
        this.stateChanged.emit(true);
      }
    });
  }
}
