import { Injectable, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  AssessmentInfo,
  CompetenceProfileInfo,
  defaultAssessmentInfo,
  defaultCompetenceProfileInfo,
} from './assessment-info';
import { Observable, Subject, from, of } from 'rxjs';
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

const competenceProfileInfo: CompetenceProfileInfo = {
  content: `<p>Über dein <strong>KODE® Kompetenzprofil</strong> erhälst du Aufschluss über deine 4 Basiskompetenzen</p>`,
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

  competenceProfileInfo$: Subject<CompetenceProfileInfo> = new Subject();

  competenceProfileInfo = toSignal(this.competenceProfileInfo$, {
    initialValue: defaultCompetenceProfileInfo,
  });

  loadCompetenceProfileInfo(assessmentId: string) {
    from([competenceProfileInfo])
      .pipe(concatMap((info) => of(info).pipe(delay(1000))))
      .subscribe((info) => this.competenceProfileInfo$.next(info));
  }
}
