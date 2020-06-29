import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user: { id: number; name: string };
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.user = {
      // To get the parameters of current route
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    };
    this.route.params.subscribe((params: Params) => {
      this.user.id = params['id'];
      this.user.name = params['name'];
    });
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    // For dynamic change use
    // this.route.queryParams.subscribe()
    // this.route.fragment.subscribe()
  }
}
