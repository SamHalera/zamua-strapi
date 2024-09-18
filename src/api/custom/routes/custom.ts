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
    {
      method: "GET",
      path: "/custom/findPlayLists",
      handler: "custom.findPlayLists",
    },
    {
      method: "GET",
      path: "/custom/findPlayListBySlug",
      handler: "custom.findPlayListBySlug",
    },
  ],
};
