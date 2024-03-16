import mongoose, { Schema } from "mongoose";
import mongooseAggreatedPageination from "mongoose-paginate-v2";

const VideoSchema = new Schema(
  {
    videoFile: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    views: {
        type: Number,
        defaultValue:0
    },
    isPublished:{
        type:Boolean,
        required:true,
        default:false
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

VideoSchema.plugin(mongooseAggreatedPageination)
export const Video = mongoose.model("Video", VideoSchema);
