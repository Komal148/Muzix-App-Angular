import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MuzixHttpService } from '../muzix-http.service';

@Component({
  selector: 'app-get-all-tracks',
  templateUrl: './get-all-tracks.component.html',
  styleUrls: ['./get-all-tracks.component.css']
})
export class GetAllTracksComponent implements OnInit {
  public tracks;
  constructor(private _route: ActivatedRoute, private router: Router, public muzixservice: MuzixHttpService) { }

  public artist: string;
  public mbid1: string;
  public track: string;
  public image: string; 

  public trackinfo = {
    trackID : this.mbid1,
    trackName: this.track,
    trackComments : this.artist,
    imgUrl : this.image
  };

  ngOnInit() {
      this.muzixservice.getAllTracks().subscribe((data) => this.tracks = data);
    }
}
