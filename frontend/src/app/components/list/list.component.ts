import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../issue.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private isseService: IssueService) { }

  ngOnInit() {
    this.isseService.getIssues().subscribe(issues => {
      console.log(issues);
    })
  }

}
