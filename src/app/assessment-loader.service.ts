import { Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  AssessmentInfo,
  AssessmentModuleInfo,
} from './assessment-preview/assessment-preview.component';
import { from, of } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';

const assessmentInfo: AssessmentInfo = {
  id: '1',
  title: 'Kompetenzcheck Floyd Finanz',
  subtitle: 'Selbsteinschätzung vom 21.01.2024',
  modules: [
    {
      title: 'Kompetenzprofil',
      type: 'CompetenceProfile',
    },
    {
      title: 'Kompetenzatlas',
      type: 'CompetenceAtlas',
    },
    {
      title: 'Teamrollen',
      type: 'Teamrole',
    },
    {
      title: 'Kompetenzentwicklung',
      type: 'CompetenceDevelopment',
    },
    {
      title: 'Stärken',
      type: 'Strengths',
    },
  ],
};

const defaultAssessmentInfo: AssessmentInfo = {
  id: '',
  title: '',
  subtitle: '',
  modules: [],
};

@Injectable({
  providedIn: 'root',
})
export class AssessmentLoaderService {
  private assessmentInfo$ = from([assessmentInfo]).pipe(
    concatMap((info) => of(info).pipe(delay(1000)))
  );

  assessmentInfo = toSignal(this.assessmentInfo$, {
    initialValue: defaultAssessmentInfo,
  });
}
