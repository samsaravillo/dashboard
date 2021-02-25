import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.scss"],
})
export class CoursesComponent implements OnInit {
  constructor() {}

  title = "List of courses";
  courses = ["couse1", "couse2", "couse3"];

  ngOnInit() {}
}
