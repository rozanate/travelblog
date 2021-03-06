const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const BlogSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: "public"
  },
  allowComments: {
    type: Boolean,
    default: true
  },
  comments: [
    {
      commentBody: {
        type: String,
        required: true
      },
      commentDate: {
        type: Date,
        default: Date.now
      },
      commentUser: {
        type: Schema.Types.ObjectId,
        ref: "users"
      }
    }
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  date: {
    type: Date,
    default: Date.now
  },
  score: {
    type: Number,
    default: 0
  },
  scoreStatus: [
    {
      voteUser: {
        type: Schema.Types.ObjectId,
        ref: "users"
      },
      vote: {
        type: String,
        default: "none"
      }
    }
  ],
  coverImage: {
    data: Buffer,
    contentType: String
  }
});

// Create Collection and add Schema

mongoose.model("blogs", BlogSchema);
