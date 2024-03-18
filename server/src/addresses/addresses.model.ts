import {Model, Table, Column } from "sequelize-typescript";


@Table
export class Address extends Model {
    @Column
    userId: string;

    @Column
    city: string;

    @Column
    street: string;

    @Column
    house: string;

    @Column
    apartment: string;
}