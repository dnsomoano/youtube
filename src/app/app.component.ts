import { Component } from "@angular/core";
import { YoutubeService } from "./youtube.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [YoutubeService]
})
export class AppComponent {
  title = "youtube";
  videos: object[];
  constructor(private youtubeService: YoutubeService) {}
  getSearchResults(): void {
    this.youtubeService.getSearchResults("dog");
  }
}
