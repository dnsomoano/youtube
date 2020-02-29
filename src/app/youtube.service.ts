import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class YoutubeService {
  private videos = [];

  constructor(private httpClient: HttpClient) {}
  getSearchResults(query: string) {
    this.httpClient
      .get(
        "https://www.googleapis.com/youtube/v3/search?key=AIzaSyD9fHvfgBDHDjrrCAsw3bMyF94HmENmDUM&part=snippet&type=video&q=" +
          query
      )
      .toPromise()
      .then(result => {
        this.videos.push(result);
      })
      .catch(err => {
        console.log(err);
      });
    return this.videos;
  }
}
