import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: `https://${process.env.SHOPIFY_STORE_URL}/api/2023-10/graphql.json`,
  headers: {
    'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN,
  },
  cache: new InMemoryCache(),
});

export const GET_PRODUCTS = gql`
  query GetProducts($first: Int) {
    products(first: $first) {
      edges {
        node {
          id
          title
          handle
          description
          images(first: 1) {
            edges {
              node {
                url
                altText
              }
            }
          }
          variants(first: 1) {
            edges {
              node {
                id
                price {
                  amount
                  currencyCode
                }
                compareAtPrice {
                  amount
                  currencyCode
                }
                availableForSale
              }
            }
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
            maxVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`;

export const GET_PRODUCT = gql`
  query GetProduct($handle: String!) {
    product(handle: $handle) {
      id
      title
      description
      images(first: 10) {
        edges {
          node {
            url
            altText
          }
        }
      }
      variants(first: 10) {
        edges {
          node {
            id
            title
            price {
              amount
              currencyCode
            }
            availableForSale
            selectedOptions {
              name
              value
            }
          }
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
    }
  }
`;

export default client;