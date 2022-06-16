
import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsPhoneNumber, IsString } from "class-validator"
import { Category } from "../schemas/restaurant.schema"

// import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"


export class CreateRestaurantDto {
  
  @IsNotEmpty({message:"name field must be filled"})
  @IsString()
  @IsOptional()
  readonly  name: string

  @IsNotEmpty({message:" please give a small description about your restaurant"})
  @IsString()
  @IsOptional()
  readonly  description: string

  @IsNotEmpty()
  @IsEmail({message: "please enter the correct email address"})
  @IsOptional()
  readonly  email: string

  @IsNotEmpty()
  // @IsPhoneNumber('DE')
  @IsPhoneNumber()
  @IsOptional()
  readonly phoneNo: number

  @IsNotEmpty()
  @IsOptional()
  @IsString()
  readonly address: string

  @IsNotEmpty()
  @IsOptional()
  @IsEnum(Category, {message: "kindly enter the correct specified categories"})
  readonly category: Category
  
  readonly imagesOfRestaurant?: object[]

}


// export class CreateRestaurantDto {

//   readonly  name: string
//   readonly  description: string
//   readonly  email: string
//   readonly phoneNo: number
//   readonly address: string
//   readonly category: Category
//   readonly imagesOfRestaurant?: object[]

// }
















