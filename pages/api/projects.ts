import type { NextApiRequest, NextApiResponse } from "next";
import type { Project } from "../../interfaces/project";
import { fsGetProjects, fsAddProject } from "../../utils/projectsdao";

const ErrorAdding: Error = {
  name: "ErrorAdding",
  message: "error: could not parse project to add",
};

export default async function projectsHandler(
  req: NextApiRequest,
  res: NextApiResponse<Project[] | Project | Error>
) {
  const {
    query: { name },
    method,
  } = req;

  switch (method) {
    case "GET":
      // Get data from your database
      getProjects(req, res);
      break;
    case "POST":
      // Update or create data in your database
      addProject(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

// these handlers should call projectsdao
async function getProjects(
  req: NextApiRequest,
  res: NextApiResponse<Project[] | Error>
) {
  let projects: Project[] | string = await fsGetProjects();
  if (typeof projects === "string") {
    const ErrorFs: Error = {
      name: "ErrorFs",
      message: projects,
    };
    res.status(500).json(ErrorFs);
    return;
  }

  res.status(200).json(projects);
}

async function addProject(
  req: NextApiRequest,
  res: NextApiResponse<Project | Error>
) {
  let projectToCreate = {} as Project;

  // validate and parse projectToCreate
  if (!isValid(req.body)) {
    res.status(400).json(ErrorAdding);
    return;
  }
  Object.assign(projectToCreate, req.body);

  // add the project in fs
  let createdProject: string | Project = await fsAddProject(projectToCreate);
  if (typeof createdProject === "string") {
    const ErrorFs: Error = {
      name: "ErrorFs",
      message: createdProject,
    };
    res.status(500).json(ErrorFs);
    return;
  }

  res.status(200).json(createdProject);
}

function isValid(body: any): boolean {
  if (
    !body.id ||
    !body.name ||
    !body.technologies ||
    !body.description ||
    !body.hasOwnProperty("id") ||
    !body.hasOwnProperty("name") ||
    !body.hasOwnProperty("technologies") ||
    !body.hasOwnProperty("description")
  ) {
    return false;
  }
  return true;
}
