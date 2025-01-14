import { Injectable } from "@angular/core";
import { Observable, delay, of } from "rxjs";
import { Books } from "../models";

export interface GetAllBooks {
    getAll(): Observable<Books>
}

export const inMemoryGetAllBooks: GetAllBooks = {
    getAll: () => {
        const table: Books = [{
            id: 1,
            title: 'Dune',
            author: {
                name: 'Franck Herbert'
            }
        }]
        return of(table).pipe(delay(1500))
    }
}

export const mockingFactory = () => inMemoryGetAllBooks

@Injectable({
    providedIn: "root",
    useFactory: mockingFactory
})
export class GetAllBooksInfra {
    getAll(): Observable<Books> {
        throw new Error("Method not implemented")
    }
}