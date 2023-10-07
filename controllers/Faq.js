import Faq from "../models/Faq.js";

export const addFaq = async (req, res) => {
  let newFaq = new Faq(req.body);
  try {
    const savedFaq = await newFaq.save();
    res.status(200).json(savedFaq);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getFaqs = async (req, res) => {
  try {
    const faqs = await Faq.find();
    res.status(200).json(faqs);
  } catch (err) {
    res.status(500).json(err);
  }
};
