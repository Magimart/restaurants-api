import { Location } from "../restaurants/schemas/restaurant.schema";
const NodeGeoCoder = require("node-geocoder");


export default class GeoApiFeatures{

    static async Location(address) {

    try {

                const options ={
                    provider: process.env.GEOCODER_PROVIDER,
                    httpAdapter:"https",
                    apiKey: process.env.MAPBOX_APIKEY, 
                    formatter: null,
                }


                const geoCoder = NodeGeoCoder(options) 
                

               const loc = await geoCoder.geocode(address) ;
                //  const loc = await geoCoder.geocode('29 champs elysée paris');

                const location: Location = {
                    type: 'Point',
                    coordinates: [loc[0].longitude, loc[0].latitude],
                    formattedAddress: loc[0].formattedAddress,
                    city:loc[0].city,
                    state: loc[0].stateCode,
                    zipCode: loc[0].zipcode,
                    country: loc[0].countryCode
                    
                }
                //    console.log(location)
            return location;


    } catch (error) {
        console.log(error.message)
        
    }
    
    }
}


