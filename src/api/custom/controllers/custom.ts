/**
 * A set of functions called "actions" for `custom`
 */

export default {
  async getPageByPathname(ctx) {
    console.log("hello");
    try {
      const { pathname } = ctx.request.query;

      const pages = await strapi.entityService.findMany(
        "api::page-public.page-public",
        {
          filters: {
            path: `/${pathname}/`,
          },
          populate: {
            dynamicZone: {
              populate: "*",
            },
          },
        }
      );
      const page = pages[0];

      return page;
    } catch (err) {
      ctx.body = err;
    }
  },
};
