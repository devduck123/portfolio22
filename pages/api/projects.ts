import type { NextApiRequest, NextApiResponse } from "next";
import type { Project } from "../../interfaces/project";

export default function projectsHandler(
  req: NextApiRequest,
  res: NextApiResponse<Project[] | Project>
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
      createProject(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

// these handlers should call projectsdao
function getProjects(req: NextApiRequest, res: NextApiResponse<Project[]>) {
  let projects: Project[] = [
    {
      id: "1",
      name: "foo",
      imageUrl: "someUrl",
      technologies: "html,css,javascript",
      description: "some description",
    },
    {
      id: "2",
      name: "getProjects",
      imageUrl: "someUrl",
      technologies: "html,css,javascript",
      description: "some description",
    },
  ];
  res.status(200).json(projects);
}

function createProject(req: NextApiRequest, res: NextApiResponse<Project>) {
  let project: Project = {
    id: "abc",
    name: "createProject",
    imageUrl: "someUrl",
    technologies: "html,css,javascript",
    description: "some description",
  };
  res.status(200).json(project);
}
