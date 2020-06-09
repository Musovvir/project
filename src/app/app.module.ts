import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { TrendsComponent } from './second-page/res/view/trends/trends.component';
import { YouJobComponent } from './second-page/res/view/you-job/you-job.component';
import { FirmComponent } from './second-page/res/view/firm/firm.component';
import { SimilarComponent } from './second-page/res/view/similar/similar.component';
import { NewTalentComponent } from './second-page/res/view/new-talent/new-talent.component';
import { ProvideComponent } from './second-page/res/view/provide/provide.component';
import { ShowcaseComponent } from './second-page/res/view/showcase/showcase.component';
import { AnnounceComponent } from './second-page/res/view/announce/announce.component';
import { HighlightComponent } from './second-page/res/view/highlight/highlight.component';
import { TestingComponent } from './testing/testing.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    TrendsComponent,
    YouJobComponent,
    FirmComponent,
    SimilarComponent,
    NewTalentComponent,
    ProvideComponent,
    ShowcaseComponent,
    AnnounceComponent,
    HighlightComponent,
    TestingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
