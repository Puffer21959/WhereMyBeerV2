import axios from "axios"

const BASE_URL="https://maps.googleapis.com/maps/api/place"
const API_KEY="AIzaSyAfKmEHsgxwQ3IbErdzuFZHK8978U4VJPA"

//TODO: optimize the nearbysearch api so we get a better result

const nearByPlace=(lat, lng)=>axios.get(BASE_URL+
    "/nearbysearch/json?" +
    "&location=" + lat + "," + lng + "&radius=10000" +
    "&key=" + API_KEY +
    "&keyword=craft%20beer") /*place api call */

const detailPlace=(id)=>axios.get(BASE_URL+
    '/details/json?' +
    'place_id=' + id + 
    '&key=' + API_KEY)

export default {
    nearByPlace,
    detailPlace
}