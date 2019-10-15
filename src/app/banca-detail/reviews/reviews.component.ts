import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { BancasService } from '../../bancas/bancas.service'

import { Observable } from 'rxjs'

@Component({
  selector: 'otk-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

//PIPE ASSINC
reviews: Observable<any>

  constructor( private bancasService: BancasService,
							 private route: ActivatedRoute) { }

  ngOnInit() {
			this.reviews = this.bancasService.ReviewsOfBanca(this.route.parent.snapshot.params['id'])
  }

}
