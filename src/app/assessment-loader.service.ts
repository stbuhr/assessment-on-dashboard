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
  content: `<p>Über dein Kompetenzprofil erhälst du Aufschluss über deine 4 Basiskompetenzen</p>`,
};

const competenceAtlasInfo: CompetenceAtlasInfo = {
  assessmentId: '123',
  content: `<p>Der Kompetenzatlas zeigt dir, wie du deine Kompetenzen in verschiedenen Bereichen einsetzen kannst.</p>`,
};

const teamRolesInfo: TeamRolesInfo = {
  assessmentId: '123',
  content: `<p>Deine Teamrollen zeigen dir, wie du dich in einem Team verhälst.</p>`,
};

const competenceDevelopmentInfo: CompetenceProfileInfo = {
  assessmentId: '123',
  content: `<p>Deine Kompetenzentwicklung zeigt dir, wie du dich weiterentwickeln kannst.</p>`,
};

const strengthsInfo: CompetenceProfileInfo = {
  assessmentId: '123',
  content: `<p>Deine Stärken zeigen dir, was du besonders gut kannst.</p>`,
};

@Injectable({
  providedIn: 'root',
})
export class AssessmentLoaderService {
  private getRandomDelay(): number {
    //return 100;
    return Math.random() * 3000 + 2000;
  }

  private assessmentInfo$ = from([assessmentInfo]).pipe(
    // concatMap((info) => of(info).pipe(delay(this.getRandomDelay())))
    concatMap((info) => of(info).pipe(delay(100)))
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
      .pipe(concatMap((info) => of(info).pipe(delay(this.getRandomDelay()))))
      .subscribe((info) => this.competenceProfileInfo$.next(info));
  }

  competenceAtlasInfo$: Subject<CompetenceAtlasInfo> = new Subject();

  competenceAtlasInfo = toSignal(this.competenceAtlasInfo$, {
    initialValue: defaultCompetenceAtlasInfo,
  });

  loadCompetenceAtlasInfo(assessmentId: string) {
    from([competenceAtlasInfo])
      .pipe(concatMap((info) => of(info).pipe(delay(this.getRandomDelay()))))
      .subscribe((info) => this.competenceAtlasInfo$.next(info));
  }

  teamRolesInfo$: Subject<TeamRolesInfo> = new Subject();

  teamRolesInfo = toSignal(this.teamRolesInfo$, {
    initialValue: { assessmentId: '', content: '' },
  });

  loadTeamRolesInfo(assessmentId: string) {
    from([teamRolesInfo])
      .pipe(concatMap((info) => of(info).pipe(delay(this.getRandomDelay()))))
      .subscribe((info) => this.teamRolesInfo$.next(info));
  }

  competenceDevelopmentInfo$: Subject<CompetenceProfileInfo> = new Subject();

  competenceDevelopmentInfo = toSignal(this.competenceDevelopmentInfo$, {
    initialValue: { assessmentId: '', content: '' },
  });

  loadCompetenceDevelopmentInfo(assessmentId: string) {
    from([competenceDevelopmentInfo])
      .pipe(concatMap((info) => of(info).pipe(delay(this.getRandomDelay()))))
      .subscribe((info) => this.competenceDevelopmentInfo$.next(info));
  }

  strengthsInfo$: Subject<CompetenceProfileInfo> = new Subject();

  strengthsInfo = toSignal(this.strengthsInfo$, {
    initialValue: { assessmentId: '', content: '' },
  });

  loadStrengthsInfo(assessmentId: string) {
    from([strengthsInfo])
      .pipe(concatMap((info) => of(info).pipe(delay(this.getRandomDelay()))))
      .subscribe((info) => this.strengthsInfo$.next(info));
  }
}
