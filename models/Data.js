import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      trim: true,
    },
    value: {
      type: Number,
      required: true,
    },
    
  },
  { timestamps: true }
);
DataSchema.index({ category: 1, value: -1 });
const Data = mongoose.model('Data', DataSchema);
Data.init().then(() => {
  console.log('Data model initialized and index created');
}).catch((error) => { 
  console.error('Error initializing Data model:', error);
});
export default Data;
