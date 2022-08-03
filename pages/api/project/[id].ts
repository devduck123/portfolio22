import type { NextApiRequest, NextApiResponse } from "next";
import type { Project } from "../../../interfaces/project";
import {
  fsGetProjectById,
  fsUpdateProject,
  fsDeleteProject,
} from "../../../utils/projectsdao";
import { isValid } from "../projects";

const ErrorUpdating: Error = {
  name: "ErrorUpdating",
  message: "error: could not parse project to update",
};
const ErrorRoute: Error = {
  name: "ErrorRoute",
  message: "error: could not recognize route",
};

export default function projectHandler(
  req: NextApiRequest,
  res: NextApiResponse<Project | Error | undefined>
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
    res.status(400).json(ErrorRoute);
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
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

// handlers call projectsdao -> firestore logic
async function getProjectById(
  req: NextApiRequest,
  res: NextApiResponse<Project | Error>,
  id: string
) {
  // check fs for project
  let project: Project | string = await fsGetProjectById(id);
  if (typeof project === "string") {
    const ErrorFs: Error = {
      name: "ErrorFs",
      message: project,
    };
    res.status(500).json(ErrorFs);
    return;
  }

  if (!project.id) {
    const ErrorNotFound: Error = {
      name: "ErrorNotFound",
      message: "error: project id was not found",
    };
    res.status(404).json(ErrorNotFound);
    return;
  }

  res.status(200).json(project);
}

async function updateProject(
  req: NextApiRequest,
  res: NextApiResponse<Project | Error>,
  id: string
) {
  let projectToUpdate = {} as Project;

  // validate and parse projectToUpdate
  if (!isValid(req.body)) {
    res.status(400).json(ErrorUpdating);
    return;
  }
  Object.assign(projectToUpdate, req.body);

  // update the project in fs
  let result: Project | string = await fsUpdateProject(projectToUpdate, id);
  if (typeof result === "string") {
    const ErrorFs: Error = {
      name: "ErrorFs",
      message: result,
    };
    res.status(500).json(ErrorFs);
    return;
  }

  res.status(200).json(result);
}

async function deleteProject(
  req: NextApiRequest,
  res: NextApiResponse<undefined | Error>,
  id: string
) {
  // delete the project in fs
  let result: undefined | string | Error = await fsDeleteProject(id);

  if (result instanceof Error) {
    res.status(404).json(result);
    return;
  }
  
  if (typeof result === "string") {
    const ErrorFs: Error = {
      name: "ErrorFs",
      message: result,
    };
    res.status(500).json(ErrorFs);
    return;
  }

  res.status(200).json(undefined);
}
