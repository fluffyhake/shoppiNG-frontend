import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavService } from './sidenav/sidenav.service';
import { DefaultSidenavComponent } from './sidenav/default-sidenav/default-sidenav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(
    public sidenavService: SidenavService,
    private cdr: ChangeDetectorRef
  ) {}
  title = 'shoppiNG';
  opened: boolean = true;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.sidenavService.push(DefaultSidenavComponent);
    this.cdr.detectChanges();
  }

  ngOnDestroy(): void {
    this.sidenavService.pop();
  }
}
