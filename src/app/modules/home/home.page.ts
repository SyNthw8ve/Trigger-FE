import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { getUsers } from '../../core/graphql/queries/users.query';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  private querySubscription: Subscription;
  users = [];

  constructor(private apollo: Apollo) { }

  ngOnInit() {

    this.querySubscription = this.apollo.watchQuery<any>({ query: getUsers }).valueChanges
      .subscribe(({ data, loading }) => {
       
        this.users = data.getUsers;
        console.log(this.users)
      });
  }
}
