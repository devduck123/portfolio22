// NOTE: `id` and `name` should be same
export type Project = {
  id: string;
  name: string;
  imageUrl: string;
  technologies: string;
  description: string;
};

const ErrorNotFound: Error = {
  name: "ErrorNotFound",
  message: "error: project not found",
};
