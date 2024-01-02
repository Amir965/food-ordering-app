import mongoose from "mongoose";

const ExtraPriceSchema = new mongoose.Schema({
    name: String,
    price:Number,
})

const MenuItemSchema = new mongoose.Schema({
    image: { type: String },
    description: { type: String },
    name: { type: String },
    basePrice: { type: Number },
    category: { type: mongoose.Types.ObjectId },
    sizes: { type: [ExtraPriceSchema] },
    extraIngredientPrice:{type:[ExtraPriceSchema]},
}, { timestamps: true })

const MenuItem = mongoose.models?.MenuItem || mongoose.model('MenuItem', MenuItemSchema)

export default MenuItem