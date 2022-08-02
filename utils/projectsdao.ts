import type { Project } from "../interfaces/project";
import { app, db } from "./firebaseConfig";
import { collection, doc, getDocs, addDoc } from "firebase/firestore";

const projectCollection = collection(db, "projects");

export async function fsGetProjects(): Promise<Project[] | string> {
  let projects: Project[] = [];
  try {
    const projectDocs = await getDocs(projectCollection);
    projectDocs.forEach((projectDoc) => {
      let projectData = projectDoc.data();
      let project: Project = {
        id: projectData.id,
        name: projectData.name,
        imageUrl: projectData.imageUrl,
        technologies: projectData.technologies,
        description: projectData.description,
      };
      projects.push(project);
    });
  } catch (err: unknown) {
    return getErrorMessage(err);
  }

  return projects;
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
  try {
  } catch (err: unknown) {}

  return "";
}

export async function fsUpdateProject(id: string): Promise<string | undefined> {
  return undefined;
}

export async function fsDeleteProject(id: string): Promise<string | undefined> {
  return undefined;
}

// helper to handle errors
function getErrorMessage(err: unknown): string {
  if (err instanceof Error) {
    return err.message;
  }
  return String(err);
}
