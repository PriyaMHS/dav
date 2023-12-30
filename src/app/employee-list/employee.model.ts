import { Injectable } from "@angular/core";

@Injectable()
export class Employee {
    public id: number;
    public name: string;
    public project: string;
    public phone: string;
    public position: string; 
}