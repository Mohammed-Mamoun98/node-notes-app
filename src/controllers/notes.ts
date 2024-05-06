import { CustomError } from "./../constants/types";
import { RequestHandler } from "express";
import { Note, NotesModel } from "../models/note";
import { CustomRequestHandler } from "../constants/types";
import { winstonLogger } from "../utils/loggers";
import mongoose from "mongoose";
import createHttpError, { isHttpError } from "http-errors";

const getNotes: RequestHandler = async (req, res, next) => {
  try {
    const notes = await NotesModel.find().exec();
    res.status(200).success(notes);
  } catch (error) {
    return next(error);
  }
};

const getNoteById: RequestHandler = async (req, res, next) => {
  try {
    const noteId = req.params.noteId;
    if (!noteId) throw createHttpError(400, "note id should be passed");

    if (!mongoose.Types.ObjectId.isValid(noteId))
      throw createHttpError(400, "Invalid note id");

    const note = await NotesModel.findById(noteId);
    if (!note) throw createHttpError(404, "No note was found for this id");

    res.success(note, 200);
  } catch (error) {
    next(error);
  }
};

const createNote: RequestHandler = async (req, res, next) => {
  try {
    const { body } = req;
    const { title, text } = body as Note;

    if (!title)
      throw createHttpError(400, "Title is required for creating note");

    const newNoteBody = { title, text };

    try {
      await NotesModel.validate(newNoteBody);
    } catch (error) {
      //@ts-ignore
      throw createHttpError(400, error);
    }

    const newNote = await NotesModel.create(newNoteBody);

    res.success(newNote, 201);
  } catch (error) {
    return next(error);
  }
};

export { getNotes, getNoteById, createNote };
