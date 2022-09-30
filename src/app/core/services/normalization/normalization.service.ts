import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap,toArray } from 'rxjs/operators';

import { StrapiEntry } from 'src/app/core/models/StrapiEntry';
import { StrapiSingleEntryData } from 'src/app/core/models/StrapiSingleEntryData';
import { StrapiMultiEntryData } from 'src/app/core/models/StrapiMultiEntryData';

@Injectable({
  providedIn: 'root'
})
export class NormalizationService {

  constructor() { }

  restructureAttributes(nestedAttribute?: string): (source$: Observable<StrapiSingleEntryData>) => Observable<any> {
    return source$ => source$.pipe(
      map(v => this.restructuredNestedAttributes(v.data,nestedAttribute)),
    );
  }

  restructuredArrayedAttributes(nestedAttribute?: string) :(source$: Observable<StrapiMultiEntryData>) => Observable<any> {
    return source$ => source$.pipe(
      map(v => v.data),
      switchMap(v => v),
      map(v => this.restructuredNestedAttributes(v, nestedAttribute)),
      toArray())
  }

  private restructuredNestedAttributes(v: StrapiEntry, nestedAttribute?: string) {
    if(nestedAttribute) {
      v.attributes[nestedAttribute] = v.attributes[nestedAttribute].data.map((nv: StrapiEntry) => ({id: nv.id, ...nv.attributes}));
    }
    return { id: v.id,...v.attributes}
  }
}
