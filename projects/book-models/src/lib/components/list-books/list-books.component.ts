import { Component, inject } from '@angular/core';
import { GetAllBooksApplication } from '../../services/books.application';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-list-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-books.component.html',
  styleUrl: './list-books.component.css'
})
export class ListBooksComponent {
  books$ = inject(GetAllBooksApplication).getAll()
}
