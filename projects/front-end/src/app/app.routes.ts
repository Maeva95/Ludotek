import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'books',
        loadChildren: () => import('book-models').then(item => item.booksRoutes),
        data: {preload: true}
    },
];
