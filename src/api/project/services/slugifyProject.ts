export const slugifyProject = async (event) => {
  const project = event.result;

  const slug = project.main_title.replace(" ", "_").toLowerCase();

  const updatedProject = await strapi.entityService.update(
    "api::project.project",
    project.id,
    {
      data: {
        slug,
      },
    }
  );
  return updatedProject;
};
