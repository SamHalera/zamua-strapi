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
};

// populate: {
//   dynamicZone: {
//     populate: {
//       hero: {
//         populate: {
//           optionsHero: true,
//         },
//       },
//       musicFeatures: {
//         populate: {
//           image: true,
//           musicFeaturesSingle: true,
//         },
//       },
//     },
//   },
// },
// {
//   dynamicZone: {
//     populate: "*",
//     musicFeatures: {
//       populate: {
//         musicFeatureSingle: {
//           populate: {
//             image: true,
//           },
//         },
//       },
//     },
//   },
// },
