import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { allIcons, HeroIconModule} from 'ng-heroicon';
import { ShellComponent } from './shell/shell.component';

const components:any[] = [
  ShellComponent
];
const modules = [
   CommonModule, 
    HeroIconModule.forRoot({
    ...allIcons,},
    { 
      defaultHostDisplay: 'inlineBlock'
    }
  ),
];

@NgModule({
  declarations: [...components],
  imports: [
    ...modules,
  ],
  exports: [...components,
   ...modules,
  ]
})
export class SharedModule { }
