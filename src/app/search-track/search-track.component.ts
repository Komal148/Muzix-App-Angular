import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MuzixHttpService } from '../muzix-http.service';

@Component({
  selector: 'app-search-track',
  templateUrl: './search-track.component.html',
  styleUrls: ['./search-track.component.css']
})
export class SearchTrackComponent implements OnInit {

  trackname: string;
  constructor(private _route: ActivatedRoute, private router: Router, public muzixservice: MuzixHttpService ) { }

  ngOnInit() {
  }
  search(): any {
    console.log('trackname : ' + this.trackname);
    this.router.navigate(['/searchtrack', this.trackname]);
  }
  // const m = this.muzixservice.searchTrack(this.trackname).subscribe(
  //   data1 => {
  //     console.log(data1);
  //     this.router.navigate(['/myplaylist']);
  //   }
  //  );
  //  console.log(m);
  // },
  // error => {
  //   console.log('some error occured');
  //   console.log(error.errorMessage);
  // }

}
