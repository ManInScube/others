import {Model, Table, Column } from "sequelize-typescript";


@Table
export class Product extends Model {
    @Column
    name: string;

    @Column
    manufacturer: string;

    @Column
    size: string; //enum?

    @Column({defaultValue: 0})
    price: number;

    @Column
    description: string;

    @Column
    color: string;

    @Column
    images: string;

    @Column({defaultValue: 0})
    in_stock: number;

    @Column
    vendor_code: string;

    @Column({defaultValue: false})
    new: boolean

    @Column({defaultValue: false})
    bestseller: boolean
}