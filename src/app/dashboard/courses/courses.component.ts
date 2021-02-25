import { Component, OnInit } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
  selector: "courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.scss"],
})
export class CoursesComponent implements OnInit {
  constructor(public coursesService: CoursesService) {}

  title = "List of courses";
  courses;
  ngOnInit() {
    this.courses = this.coursesService.getCourses();
  }
}
