import express from "express";

import { getFaqs, addFaq } from "../controllers/Faq.js";

const router = express.Router();

router.get("/", getFaqs);
router.post("/", addFaq);

export default router;
