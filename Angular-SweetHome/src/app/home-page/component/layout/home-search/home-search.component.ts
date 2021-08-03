import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../../../service/category.service";

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.css']
})
export class HomeSearchComponent implements OnInit {

  categories!: string;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  getCategory() {

  }

}
