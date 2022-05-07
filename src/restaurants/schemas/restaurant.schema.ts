import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';

// export type CatDocument = Cat & Document;
export enum Catergory {
            FAST_FOOD = 'Fast food',
            CAFE =' Cafe',
            FINE_DINING ='Fine Dinning',
 }

@Schema()
export class Restaurant {
                            @Prop()
                            name: string;

                            @Prop()
                            description: string;

                            @Prop()
                            email: string;

                            @Prop()
                            address: string;

                            @Prop()
                            telephoneNo: number;

                            @Prop()
                            category: Catergory;

                            @Prop()
                            images?: object[];

}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
