// models/FaqModels.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IFaq extends Document {
  question: string;
  answer: string;
}

const faqSchema: Schema<IFaq> = new Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true }
});

// Using `mongoose.models` to avoid overwriting the model
const Faq = mongoose.models.Faq || mongoose.model<IFaq>('Faq', faqSchema);

export default Faq;
