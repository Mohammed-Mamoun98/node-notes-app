import { Schema, InferSchemaType, model } from "mongoose";

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 3,
      error: "Title is Required!",
    },
    text: {
      type: String,
      require: false,
    },
  },
  { timestamps: true }
);

export type Note = InferSchemaType<typeof noteSchema>;

export const NotesModel = model<Note>("note", noteSchema);
