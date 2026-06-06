console.log("MY SERVER FILE IS RUNNING");

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/* ==========================
   MONGODB CONNECTION
========================== */

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log("❌ MongoDB Connection Error");
    console.log(err.message);
  });

/* ==========================
   USER SCHEMA
========================== */

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
      unique: true
    },

    username: {
      type: String,
      required: true,
      unique: true
    },

    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema);

/* ==========================
   LEAD SCHEMA
========================== */

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true
    },

    source: {
      type: String,
      default: ""
    },

    notes: {
      type: String,
      default: ""
    },

    status: {
      type: String,
      enum: ["New", "Contacted", "Converted"],
      default: "New"
    }
  },
  {
    timestamps: true
  }
);

const Lead = mongoose.model("Lead", leadSchema);

/* ==========================
   USER SIGNUP
========================== */

app.post("/api/signup", async (req, res) => {
  try {
    const { name, email, username, password } = req.body;

    const existingUser = await User.findOne({
      $or: [
        { email },
        { username }
      ]
    });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    const user = new User({
      name,
      email,
      username,
      password
    });

    await user.save();

    res.status(201).json({
      message: "Account Created Successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});


app.get("/api/test", (req, res) => {
    res.send("API TEST WORKING");
});
/* ==========================
   USER LOGIN
========================== */

app.post("/api/login", async (req, res) => {

    try {

        const { username, password } = req.body;

        const user = await User.findOne({
            username,
            password
        });

        if (!user) {

            return res.status(401).json({
                message: "Invalid Credentials"
            });

        }

        res.json({
            message: "Login Successful",
            user
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

/* ==========================
   GET ALL LEADS
========================== */

app.get("/api/leads", async (req, res) => {
  try {

    const leads = await Lead.find()
      .sort({ createdAt: -1 });

    res.json(leads);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});

/* ==========================
   ADD LEAD
========================== */

app.post("/api/leads", async (req, res) => {
  try {

    const lead = new Lead(req.body);

    const savedLead =
      await lead.save();

    res.status(201).json(savedLead);

  } catch (error) {

    res.status(400).json({
      message: error.message
    });

  }
});

/* ==========================
   UPDATE LEAD
========================== */

app.put("/api/leads/:id", async (req, res) => {
  try {

    const updatedLead =
      await Lead.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.json(updatedLead);

  } catch (error) {

    res.status(400).json({
      message: error.message
    });

  }
});

/* ==========================
   DELETE LEAD
========================== */

app.delete("/api/leads/:id", async (req, res) => {
  try {

    await Lead.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message:
        "Lead Deleted Successfully"
    });

  } catch (error) {

    res.status(400).json({
      message: error.message
    });

  }
});

/* ==========================
   TEST ROUTE
========================== */


app.get("/api/test", (req, res) => {
    res.json({
        message: "Backend Working"
    });
});

/* ==========================
   START SERVER
========================== */

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `🚀 Server running on port ${PORT}`
  );
});