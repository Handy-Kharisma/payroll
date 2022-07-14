const router = require("express").Router();
const DetailRecord = require("../models/DetailRecord");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

//CREATE
router.post("/", verifyToken, async (req, res) => {
  const newDetailRecord = new DetailRecord(req.body);
  try {
    const savedDetailRecord = await newDetailRecord.save();
    res.status(200).json(savedDetailRecord);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedDetailRecord = await DetailRecord.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedDetailRecord);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await DetailRecord.findByIdAndDelete(req.params.id);
    res.status(200).json("DetailRecord has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER DETAIL RECORD
router.get("/find/:userId", verifyToken, async (req, res) => {
  try {
    const detailRecord = await DetailRecord.find({
      userId: req.params.userId,
    });
    res.status(200).json(detailRecord);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL DETAIL RECORD
router.get("/", async (req, res) => {
  try {
    const detailRecord = await DetailRecord.find();
    res.status(200).json(detailRecord);
  } catch (err) {
    res.status(500).json(err);
  }
});

// //GET MONTHLY INCOME

// router.get("/income", verifyTokenAndAdmin, async (req, res) => {
//   const date = new Date();
//   const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
//   const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

//   try {
//     const income = await Order.aggregate([
//       { $match: { createdAt: { $gte: previousMonth } } },
//       {
//         $project: {
//           month: { $month: "$createdAt" },
//           sales: "$amount",
//         },
//       },
//       {
//         $group: {
//           _id: "$month",
//           total: { $sum: "$sales" },
//         },
//       },
//     ]);
//     res.status(200).json(income);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
