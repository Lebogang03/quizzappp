import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'results', loadChildren: './page/results/results.module#ResultsPageModule' },
  { path: 'homepage', loadChildren: './page/homepage/homepage.module#HomepagePageModule' },
  { path: 'secondquizz', loadChildren: './page/secondquizz/secondquizz.module#SecondquizzPageModule' },
  { path: 'thirdqiuz', loadChildren: './page/thirdqiuz/thirdqiuz.module#ThirdqiuzPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
