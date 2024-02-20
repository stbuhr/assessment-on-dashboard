import { Injectable, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  AssessmentInfo,
  CompetenceAtlasInfo,
  CompetenceProfileInfo,
  TeamRolesInfo,
  defaultAssessmentInfo,
  defaultCompetenceAtlasInfo,
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
      type: 'TeamRoles',
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
  assessmentId: '123',
  content: `<p>Über dein <strong>KODE® Kompetenzprofil</strong> erhälst du Aufschluss über deine 4 Basiskompetenzen</p>`,
};

const competenceAtlasInfo: CompetenceAtlasInfo = {
  assessmentId: '123',
  content: `<p>Der <strong>KODE® Kompetenzatlas</strong> zeigt dir, wie du deine Kompetenzen in verschiedenen Bereichen einsetzen kannst.</p>`,
};

const teamRolesInfo: TeamRolesInfo = {
  assessmentId: '123',
  content: `<p>Deine <strong>Teamrollen</strong> zeigen dir, wie du dich in einem Team verhälst.</p>`,
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
    const randomDelay = Math.random() * 5000;
    from([competenceProfileInfo])
      .pipe(concatMap((info) => of(info).pipe(delay(randomDelay))))
      .subscribe((info) => this.competenceProfileInfo$.next(info));
  }

  competenceAtlasInfo$: Subject<CompetenceAtlasInfo> = new Subject();

  competenceAtlasInfo = toSignal(this.competenceAtlasInfo$, {
    initialValue: defaultCompetenceAtlasInfo,
  });

  loadCompetenceAtlasInfo(assessmentId: string) {
    const randomDelay = Math.random() * 5000;
    from([competenceAtlasInfo])
      .pipe(concatMap((info) => of(info).pipe(delay(randomDelay))))
      .subscribe((info) => this.competenceAtlasInfo$.next(info));
  }

  teamRolesInfo$: Subject<TeamRolesInfo> = new Subject();

  teamRolesInfo = toSignal(this.teamRolesInfo$, {
    initialValue: { assessmentId: '', content: '' },
  });

  loadTeamRolesInfo(assessmentId: string) {
    const randomDelay = Math.random() * 5000;
    from([teamRolesInfo])
      .pipe(concatMap((info) => of(info).pipe(delay(randomDelay))))
      .subscribe((info) => this.teamRolesInfo$.next(info));
  }
}
