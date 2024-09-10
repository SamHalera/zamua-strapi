/**
 * A set of functions called "actions" for `custom`
 */
import populate from "../services/populate.json";
export default {
  async getPageByPathname(ctx) {
    console.log("hello");
    try {
      const { pathname } = ctx.request.query;

      // {
      //   populate: {
      //     musicFeatures: {
      //       populate: {
      //         musicFeaturesSingle: {
      //           populate: {
      //             image: true,
      //           },
      //         },
      //       },
      //     },
      //   },
      // },
      console.log("pathname==>", pathname);

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
                cta: true,
              },
            },
          },
        }
      );
      const page = pages[0];

      console.log(page);
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
