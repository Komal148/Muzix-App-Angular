import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MuzixHttpService {

  public lastfmUrl= 'http://ws.audioscrobbler.com/2.0';
  public apiKey = '90ebae51dd0a12839cf71e8ed95cb7cd';

  public mongodbUrl = 'http://localhost:8083/api/v1/';
  public tracks;

  constructor(private httpclient: HttpClient) { }

  public searchTrack(track): any {
    this.tracks = this.httpclient.get(this.lastfmUrl + '/?method=track.search&track=' + track +
     '&api_key=' + this.apiKey + '&format=json');
    return this.tracks;
  }

  public saveTrack(trackinfo): any {
    console.log('HERE : ');
    console.log(trackinfo);
    const saveTrack = this.httpclient.post(this.mongodbUrl + 'track', trackinfo);
    return saveTrack;
  }

  public findtrack(mid): any {
    console.log("Find Track")
    console.log(mid);
    const trackinfo = this.httpclient.get(this.lastfmUrl + '/?method=track.getInfo&api_key=' + this.apiKey + '&mbid=' +
    mid + '&format=json');
    return trackinfo;
  }

  public getAllTracks(): any {
    const tracks = this.httpclient.get(this.mongodbUrl + 'tracks');
    return tracks;
  }

  public deleteTrack(mid): any {
    console.log('HERE : ' + mid);
    const track = this.httpclient.delete(this.mongodbUrl + 'track/' + mid);
    return track;
  }

  public updateTrack(trackinfo): any {
     //console.log('Id : ' + mid + 'Comment : ' + comment);
     console.log( trackinfo );
    const track = this.httpclient.put(this.mongodbUrl + 'track', trackinfo);
    return track;
  }
}
