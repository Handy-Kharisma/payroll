const mongoose = require("mongoose");

const DetailRecordSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    date: { type: String, format: "date", required: true },
    startTime: { type: String, format: "time", required: true },
    finishTime: { type: String, format: "time", required: true },
    outside: { type: Boolean, default: false },
    client: { type: Number },
    jobCode: { type: Number },
    program: { type: Number },
    Description: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("DetailRecord", DetailRecordSchema);
