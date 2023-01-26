import * as mongoose from 'mongoose';

export const JuiceSchema = new mongoose.Schema({
  name: String,
  ingredients: String,
  price: Number,
  available: Boolean
});
