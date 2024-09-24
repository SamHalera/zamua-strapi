export const slugifyProject = async (
  str: string,
  uid: string,
  entityId: number
) => {
  const slug = str.replace(" ", "_").toLowerCase();

  const entityName =
    uid === "api::playlist.playlist"
      ? "api::playlist.playlist"
      : "api::project.project";
  const updatedProject = await strapi.entityService.update(
    entityName,
    entityId,
    {
      data: {
        slug,
      },
    }
  );
  return updatedProject;
};
