import { Component, OnInit } from "@angular/core";
import { AuthorsService } from "./authors.service";

@Component({
  selector: "authors",
  templateUrl: "./authors.component.html",
  styleUrls: ["./authors.component.scss"],
})
export class AuthorsComponent implements OnInit {
  constructor(public authorService: AuthorsService) {}

  authors;

  ngOnInit() {
    this.authors = this.authorService.getAuthors();
  }
}
