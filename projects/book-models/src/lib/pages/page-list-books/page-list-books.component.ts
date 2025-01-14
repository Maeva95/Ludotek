import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBooksComponent } from '../../../public-api';

@Component({
  selector: 'dtbc-page-list-books',
  standalone: true,
  imports: [
    CommonModule,
    ListBooksComponent],
  templateUrl: './page-list-books.component.html',
  styleUrl: './page-list-books.component.sass'
})
export class PageListBooksComponent {

}
