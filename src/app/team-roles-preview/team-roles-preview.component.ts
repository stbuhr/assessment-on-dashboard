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
  selector: 'app-team-roles-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-roles-preview.component.html',
  styleUrls: ['./team-roles-preview.component.scss', '../module-preview.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamRolesPreviewComponent {
  assessmentLoader = inject(AssessmentLoaderService);

  private _assessmentId = '';
  assessmentId = input<string>(this._assessmentId);
  private _infoId = '';
  teamRolesInfo = this.assessmentLoader.teamRolesInfo;
  isLoading = computed(() => this.teamRolesInfo().content === '');

  @Output() stateChanged = new EventEmitter<boolean>();

  constructor() {
    effect(() => {
      if (this.assessmentId() !== this._assessmentId) {
        this._assessmentId = this.assessmentId();
        this.assessmentLoader.loadTeamRolesInfo(this.assessmentId());
      }
      if (this._infoId !== this.teamRolesInfo().assessmentId) {
        this._infoId = this.teamRolesInfo().assessmentId;
        this.stateChanged.emit(true);
      }
    });
  }
}
