// ---------------------------------------------------------------------------
// Projects shown in the "Projects" section of the home page.
//
// To add a project:
//   1. Put a screenshot in /public/images/  (e.g. public/images/my-project.png)
//      A landscape image around 1200x675 (16:9) looks best; others are cropped.
//   2. Copy the TEMPLATE block below into the `projects` array and fill it in.
//   3. Projects render in the order they appear in this array (newest first).
// ---------------------------------------------------------------------------

export type Project = {
  /** Project name shown as the card heading. */
  title: string;
  /** One or two sentences about what it is / what you did. */
  description: string;
  /** Path under /public, e.g. "/images/my-project.png". */
  image: string;
  /** Optional: repo or live demo URL. The card becomes clickable when set. */
  link?: string;
  /** Optional: tools/tech used, shown as small tags. */
  tags?: string[];
  /** Optional: free text such as "Jan 2024". */
  date?: string;
};

/*
TEMPLATE — copy into the array below:

  {
    title: "Project Name",
    description: "Short description of the project.",
    image: "/images/my-project.png",
    link: "https://github.com/raav3n/my-project",
    tags: ["Tool", "Tool"],
    date: "Month Year",
  },
*/

export const projects: Project[] = [
  {
    title: "Real Time Chat Application",
    description:
      "Web app for real time chat rooms. Deploys to AWS through a CI/CD pipeline on GitLab.",
    image: "/images/realtime-chat.png",
    link: "https://gitlab.com/raaven/realtime-chat-fullstack",
    tags: ["React.js", "Node.js", "Socket.io", "Terraform", "GitLab", "AWS"],
    date: "Jan 2024",
  },
  {
    title: "Campustalk",
    description:
      "University student web forum for a CSULB senior group project. Deployed to a Google Cloud VM with Docker containers for nginx, client, and backend.",
    image: "/images/campustalk.png",
    tags: ["React.js", "Node.js", "GCP", "MySQL", "Docker"],
    date: "Dec 2023",
  },
];
