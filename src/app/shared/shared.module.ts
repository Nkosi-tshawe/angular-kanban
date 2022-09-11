import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { allIcons, HeroIconModule} from 'ng-heroicon';


const components:any[] = [
  
];
const modules = [
  CommonModule, 
  HeroIconModule.forRoot({
    ...allIcons
  })
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
