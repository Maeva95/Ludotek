import { Injectable, inject } from "@angular/core";
import { GetAllBooksInfra } from "./books.infra";
import { Observable, shareReplay } from "rxjs";
import { Books } from "../models";

@Injectable({
    providedIn: "root"
})
export class GetAllBooksApplication {
    private readonly api = inject(GetAllBooksInfra)
    private readonly getAllBooks$ = this.api.getAll().pipe(shareReplay(1))

    getAll(): Observable<Books> {
        return this.api.getAll()
    }
}