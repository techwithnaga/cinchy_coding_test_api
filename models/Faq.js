import mongoose from "mongoose";

const { Schema } = mongoose;

const faqSchema = new Schema({
  topic: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  shortInfo: {
    type: String,
    required: true,
  },
  longInfo: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Faq", faqSchema);
