import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

export enum Category {
     FAST_FOODS = "Fast Foods",
     CAFE = "Cafe",
     FINE_DINNER = "Fine dinner"
}


@Schema()
export class Restaurant {

    @Prop()
    name: string

    @Prop()
    description: string

    @Prop()
    email: string

    @Prop()
    phoneNo: number

    @Prop()
    address: string

    @Prop()
    category: Category

    @Prop()
    imagesOfRestaurant?: object[]

    // @Prop()
    // user: string
}


export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);








