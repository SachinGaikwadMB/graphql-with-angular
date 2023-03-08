import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'graphql-demo-ui';
  books : any = [];

  constructor(private apollo : Apollo) {}

 
  ngOnInit(): void {
    this.apollo.watchQuery({
      query : gql`
      query  {
        getBooks {
            title
        }
    }
    `
    }).valueChanges.subscribe((resp) => {
      this.books = resp.data;

      console.log(this.books);
      console.log(this.books['getBooks'][0].title);
      
    });
  }
}
