import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GrilleComponent } from './grille/grille.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { InnerPanelComponent } from './inner-panel/inner-panel.component';
import { SplitterPipe } from './inner-panel/splitter.pipe';
import { CaseFixPipe } from './case/case-fix.pipe';
import { CaseComponent } from './case/case.component';

@NgModule({
  declarations: [
    AppComponent,
    GrilleComponent,
    UpgradeComponent,
    InnerPanelComponent,
    SplitterPipe,
    CaseFixPipe,
    CaseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
