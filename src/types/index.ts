// Shopify Storefront API types

export interface Product {
  id: string;
  title: string;
  handle: string;
  description: string;
  images: {
    id: string;
    url: string;
    altText: string;
  }[];
  variants: Variant[];
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
    maxVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  metafields: Metafield[];
}

export interface Variant {
  id: string;
  title: string;
  price: {
    amount: string;
    currencyCode: string;
  };
  compareAtPrice: {
    amount: string;
    currencyCode: string;
  } | null;
  availableForSale: boolean;
  sku: string;
  selectedOptions: {
    name: string;
    value: string;
  }[];
}

export interface Metafield {
  key: string;
  value: string;
}

export interface Cart {
  id: string;
  lines: CartLine[];
  cost: {
    subtotalAmount: {
      amount: string;
      currencyCode: string;
    };
    totalAmount: {
      amount: string;
      currencyCode: string;
    };
    totalTaxAmount: {
      amount: string;
      currencyCode: string;
    };
  };
  totalQuantity: number;
}

export interface CartLine {
  id: string;
  quantity: number;
  merchandise: Variant;
  cost: {
    totalAmount: {
      amount: string;
      currencyCode: string;
    };
  };
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface Order {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  totalPrice: {
    amount: string;
    currencyCode: string;
  };
  lineItems: {
    edges: {
      node: {
        title: string;
        quantity: number;
        variant: Variant;
      };
    }[];
  };
  fulfillmentStatus: string;
}

export interface Review {
  id: string;
  rating: number;
  comment: string;
  author: string;
  createdAt: string;
}