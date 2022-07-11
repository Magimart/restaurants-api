import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"


@Schema()
export class Location{
    
      @Prop({type: String, enum: ['Point']})
      type: string
      @Prop({index: '2dsphere'})
      coordinates: Number[]
      formattedAddress: string
      city:string
      state: string
      zipCode: string
      country: string
}



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

    @Prop({type: Object, ref: 'Location'})
          location?: Location
    //    location: Location

}


export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);








