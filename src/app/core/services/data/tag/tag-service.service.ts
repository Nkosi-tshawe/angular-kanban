import { Injectable } from '@angular/core';
import { HttpClient ,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NormalizationService } from 'src/app/core/services/normalization/normalization.service';

import { Tag } from 'src/app/core/models/Tag';
import { StrapiResponse } from 'src/app/core/models/StrapiResponse';

@Injectable({
  providedIn: 'root'
})
export class TagServiceService {
  private url = `${environment.strapiUrl}/tags`;
  private populateQuestionsParam = { params: new HttpParams().set('populate',"*") };
  
  constructor(private http: HttpClient, private ns: NormalizationService) { }

  getTags(): Observable<Tag[]> {
    return this.http.get<StrapiResponse>(this.url,this.populateQuestionsParam).pipe(
      this.ns.restructuredArrayedAttributes('tags')
    )
  }

}
