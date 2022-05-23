
import { Category } from "../schemas/restaurant.schema"

// import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"



export class UpdateRestaurantDto {
  readonly  name: string
  readonly  description: string
  readonly  email: string
  readonly phoneNo: number
  readonly address: string
  readonly category: Category
  readonly imagesOfRestaurant?: object[]

}
















