export default {
  routes: [
    {
      method: "GET",
      path: "/custom/getPageByPathname",
      handler: "custom.getPageByPathname",
    },
    {
      method: "GET",
      path: "/custom/getProjects",
      handler: "custom.getProjects",
    },
    {
      method: "GET",
      path: "/custom/findProjectBySlug",
      handler: "custom.findProjectBySlug",
    },
  ],
};
