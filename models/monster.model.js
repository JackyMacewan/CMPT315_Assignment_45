import mongoose from "mongoose";

const geoSchema = new mongoose.Schema( 
    {
        lat: { type: String, required: true},
        lng: { type: String, required: true}
    }
);

const addressSchema = new mongoose.Schema(
    {
        street: {type: String, required: true},
        suite: {type: String, required: true},
        city: {type: String, required: true}, 
        zipcode: {type: String, required: true},
        geo: { type: geoSchema, required: true}
    }
);

const companySchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        catchPhrase: {type: String, required: true},
        bs: {type: String, required: true}
    }
);

const MonsterSchema = new mongoose.Schema( 
    {
        id: {type: Number, required: true },
        name: { type: String, required: true},
        username: { type: String, required: true}, 
        email: {type: String, required: true},
        address: {type: [addressSchema], required: true},
        phone: {type: String, required: true},
        website: {type: String, required: true},
        company: {type:[companySchema], required: true},
        image_url: {type: String, required: true}
    }
);

const Monster = mongoose.model("Monster", MonsterSchema);

export default Monster;
