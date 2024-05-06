import { Router } from "express";
import * as notesController from "../controllers/notes";

const notesRouter = Router();

notesRouter.get("/", notesController.getNotes);

notesRouter.get("/:noteId", notesController.getNoteById);

notesRouter.post("/", notesController.createNote);

export default notesRouter;
