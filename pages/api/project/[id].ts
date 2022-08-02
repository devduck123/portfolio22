import type { NextApiRequest, NextApiResponse } from "next";
import type { Project } from "../../../interfaces/project";
import {
  fsGetProjectById,
  fsUpdateProject,
  fsDeleteProject,
} from "../../../utils/projectsdao";

export default function projectHandler(
  req: NextApiRequest,
  res: NextApiResponse<Project | undefined>
) {
  const {
    query: { id, name },
    method,
  } = req;

  // REVIEW:
  // idk typescript like that loool but...
  // req.query.id : string | string[] | undefined
  // i ONLY want it to be a string !!!
  if (id == null || Array.isArray(id)) {
    res.status(400).json(undefined);
    return;
  }

  switch (method) {
    case "GET":
      // Get data from your database
      getProjectById(req, res, id);
      break;
    case "PUT":
      // Update or create data in your database
      updateProject(req, res, id);
      break;
    case "DELETE":
      deleteProject(req, res, id);
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

// these handlers should call projectsdao
function getProjectById(
  req: NextApiRequest,
  res: NextApiResponse<Project | Error>,
  id: string
) {
  let project: Project | Error;
  project = fsGetProjectById(id);
  res.status(200).json(project);
}

function updateProject(
  req: NextApiRequest,
  res: NextApiResponse<Project>,
  id: string
) {
  let project: Project = {
    id: id,
    name: "updateProject",
    imageUrl: "someUrl",
    technologies: "html,css,javascript",
    description: "some description",
  };
  res.status(200).json(project);
}

function deleteProject(
  req: NextApiRequest,
  res: NextApiResponse<Project | undefined>,
  id: string
) {
  let project: Project = {
    id: id,
    name: "deleteProject",
    imageUrl: "someUrl",
    technologies: "html,css,javascript",
    description: "some description",
  };
  res.status(200).json(project);
}
