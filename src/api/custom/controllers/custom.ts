/**
 * A set of functions called "actions" for `custom`
 */

export default {
  async getPageByPathname(ctx) {
    try {
      const { pathname } = ctx.request.query;

      const pages = await strapi.entityService.findMany(
        "api::page-public.page-public",
        {
          filters: {
            path: `${pathname}`,
          },

          populate: {
            dynamicZone: {
              populate: {
                image: true,
                optionsHero: true,
                ctaOptions: true,
                musicFeatures: true,
                musicFeatureSingle: {
                  populate: {
                    image: true,
                    cta: true,
                  },
                },
                ctaSection: {
                  populate: {
                    cta: true,
                  },
                },
                cta: true,
                Media: true,
                projectSection: true,
              },
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

  async getProjects() {
    const projects = await strapi.entityService.findMany(
      "api::project.project",
      {
        publicationState: "live",
        populate: {
          imageCover: true,
          project_members: true,
        },
      }
    );

    return projects;
  },
  async findProjectBySlug(ctx) {
    const { slug } = ctx.query;

    const project = await strapi.db.query("api::project.project").findOne({
      where: {
        slug,
      },
      populate: {
        imageCover: true,
        project_members: true,
        Gallery: {
          populate: {
            image: true,
          },
        },
      },
    });

    return project;
  },

  async findPlayLists() {
    const playlist = await strapi.entityService.findMany(
      "api::playlist.playlist",
      {
        publicationState: "live",
        populate: {
          imageCover: true,
        },
      }
    );

    return playlist;
  },
  async findPlayListBySlug(ctx) {
    const { slug } = ctx.query;

    const playlist = await strapi.db.query("api::playlist.playlist").findOne({
      where: {
        slug,
      },
      populate: {
        imageCover: true,
      },
    });

    return playlist;
  },
};
