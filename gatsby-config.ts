import type {GatsbyConfig} from 'gatsby'
import path from 'path'

const config: GatsbyConfig = {
  flags: {
    DEV_SSR: true,
    PARALLEL_SOURCING: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    FAST_DEV: true
  },
  siteMetadata: {
    title: `ballons-and-ballons`,
    siteUrl: `https://www.yourdomain.tld`
  },
  jsxRuntime: 'automatic',
  plugins: [
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    {
      resolve: '@snek-at/gatsby-theme-shopify',
      options: {
        productPageTemplate: path.resolve(
          'src/templates/ProductPageTemplate.tsx'
        ),
        productsPageTemplate: path.resolve(
          'src/templates/ProductsPageTemplate.tsx'
        )
      }
    },
    {
      resolve: `gatsby-plugin-jaen`,

      options: {
        pylonUrl: 'https://pylons.cronit.io/jaen/graphql',
        remote: {
          repository: 'ballonsballons-at/ballons-jaen'
        },
        zitadel: {
          organizationId: '270250197911609348',
          clientId: '270250453697110020@website',
          authority: 'https://accounts2.cronit.io',
          redirectUri:
            process.env.NODE_ENV === 'production'
              ? 'https://ballons-ballons.at'
              : 'http://localhost:8000',
          projectIds: ['270250070505431044']
        },
        googleAnalytics: {
          trackingIds: ['G-M58K75M9PG']
        },
        sentry: {
          org: 'cronit',
          project: 'ballons-ballons',
          dsn: 'https://54a9a5aade750c06d1d703087f5ce690@sentry.cronit.io/2'
        }
      }
    },
    {
      resolve: `gatsby-jaen-mailpress`,
      options: {
        pylonUrl: 'https://mwko8k4o8sks048w8ok88kgk.cronit.io/graphql',
      }
    }
    // 'gatsby-plugin-webpack-bundle-analyser-v2'
  ]
}

export default config
