import type { Project } from "../interfaces/project";
import { app, db } from "./firebaseConfig";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";

const projectCollection = collection(db, "projects");

export async function fsGetProjects(): Promise<Project[] | string> {
  let projectsToGet: Project[] = [];
  try {
    const projectDocs = await getDocs(projectCollection);
    projectDocs.forEach((projectDoc) => {
      let projectToGet = {} as Project;
      if (projectDoc.exists()) {
        Object.assign(projectToGet, projectDoc.data());
      }
      projectsToGet.push(projectToGet);
    });
  } catch (err: unknown) {
    return getErrorMessage(err);
  }

  return projectsToGet;
}

export async function fsAddProject(
  inputProject: Project
): Promise<Project | string> {
  try {
    const docRef = await addDoc(projectCollection, inputProject);
  } catch (err: unknown) {
    return getErrorMessage(err);
  }

  return inputProject;
}

export async function fsGetProjectById(id: string): Promise<Project | string> {
  let projectToGet = {} as Project;
  try {
    const docRef = doc(db, "projects", id);
    const projectDoc = await getDoc(docRef);
    if (projectDoc.exists()) {
      Object.assign(projectToGet, projectDoc.data());
    }
  } catch (err: unknown) {
    return getErrorMessage(err);
  }

  return projectToGet;
}

export async function fsUpdateProject(
  projectToUpdate: Project,
  id: string
): Promise<Project | string> {
  try {
    await setDoc(doc(db, "projects", id), projectToUpdate);
  } catch (err: unknown) {
    return getErrorMessage(err);
  }

  return projectToUpdate;
}

export async function fsDeleteProject(
  id: string
): Promise<undefined | string | Error> {
  try {
    const docRef = doc(db, "projects", id);
    const projectDoc = await getDoc(docRef);
    if (!projectDoc.exists()) {
      const errNotFound = new Error();
      errNotFound.name = "errNotFound";
      errNotFound.message = "error: project not found";
      return errNotFound;
    }

    await deleteDoc(doc(db, "projects", id));
  } catch (err: unknown) {
    return getErrorMessage(err);
  }

  return undefined;
}

// helper to handle errors
function getErrorMessage(err: unknown): string {
  if (err instanceof Error) {
    return err.message;
  }
  return String(err);
}
