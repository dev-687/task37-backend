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

export default Data;
