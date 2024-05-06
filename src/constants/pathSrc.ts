import { Router } from "express";
import notesRouter from "../routes/notes";
import { API_BASE_PATH } from "./shared";

type Routes = "notes";

type pathInfo = {
  path: string;
  router: Router;
};

export const routersSrc: Record<Routes, pathInfo> = {
  notes: {
    path: `${API_BASE_PATH}/notes`,
    router: notesRouter,
  },
};
