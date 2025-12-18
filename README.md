# Shopify Mobile App Boilerplate

This is a comprehensive boilerplate for an Expo React Native mobile application designed as a frontend client for a Shopify store.

## Features

- **User Authentication**: Login, signup, password reset, guest checkout with Shopify customer accounts API, social logins (Google, Apple).
- **Product Browsing**: Home screen with featured products, categories, search with autocomplete, infinite scrolling grid/list views.
- **Product Details**: Carousel images, descriptions, variants selectors, add-to-cart.
- **Cart Management**: View items, update quantities, remove items, apply discounts, persist across sessions.
- **Checkout Process**: Multi-step checkout with address validation, payment integration (Stripe/Shopify Payments), order review.
- **Order History**: List past orders with status tracking, re-order functionality.
- **Wishlist/Favorites**: Add/remove products, synced with Shopify metafields.
- **Push Notifications**: Order updates, promotions, abandoned cart reminders.
- **Search and Filters**: Advanced search with price, categories, tags, ratings, sorting.
- **Reviews and Ratings**: Product reviews with ratings, comments.
- **Social Sharing**: Share products/orders via Expo Sharing.
- **Offline Support**: Cached products/cart with Apollo Cache and Redux Persist.
- **Analytics**: Event tracking with Expo Analytics.
- **Multi-Language**: English and Spanish support with i18n.
- **Profile Management**: Edit details, addresses, payment methods.
- **Admin Dashboard**: Basic analytics and order management stubs.
- **Error Handling**: Global boundaries, loading states, toast notifications.
- **Performance**: Memoization, lazy loading, image optimization.
- **Testing**: Unit tests with Jest and React Native Testing Library.
- **CI/CD**: GitHub Actions for linting, testing, Expo builds.

## Tech Stack

- **Framework**: Expo SDK 54+, React Native 0.81, React 19
- **Language**: TypeScript
- **State Management**: Redux Toolkit with Redux Persist
- **GraphQL**: Apollo Client for Shopify Storefront API
- **Navigation**: React Navigation (Stack, Tab, Drawer)
- **Styling**: React Native styles with theme support
- **Authentication**: Expo AuthSession, SecureStore
- **Other**: i18n-js, react-native-reanimated, react-native-toast-message, etc.

## Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/shopify-mobile-app.git
   cd shopify-mobile-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Variables**:
   - Copy `.env.example` to `.env`
   - Fill in your Shopify store details:
     - `SHOPIFY_STORE_URL`: Your Shopify store URL (e.g., `your-store.myshopify.com`)
     - `SHOPIFY_ACCESS_TOKEN`: Storefront access token
     - `SHOPIFY_ADMIN_API_KEY`: Admin API key (for advanced features)
     - `GOOGLE_CLIENT_ID`: For Google login
     - `APPLE_CLIENT_ID`: For Apple login
     - `STRIPE_PUBLISHABLE_KEY`: For Stripe payments
     - `FIREBASE_API_KEY`: For analytics

4. **Run the app**:
   - Start Expo development server:
     ```bash
     npm start
     ```
   - For iOS (macOS only):
     ```bash
     npm run ios
     ```
   - For Android:
     ```bash
     npm run android
     ```
   - For Web:
     ```bash
     npm run web
     ```

5. **Testing**:
   ```bash
   npm run test
   ```

## Deployment

### Expo EAS Build

1. Install EAS CLI:
   ```bash
   npm install -g @expo/eas-cli
   ```

2. Login to Expo:
   ```bash
   eas login
   ```

3. Configure EAS (create `eas.json` if needed):
   ```json
   {
     "build": {
       "development": {
         "developmentClient": true,
         "distribution": "internal"
       },
       "preview": {
         "distribution": "internal"
       },
       "production": {}
     }
   }
   ```

4. Build for production:
   ```bash
   eas build --platform ios
   eas build --platform android
   ```

5. Submit to stores:
   ```bash
   eas submit --platform ios
   eas submit --platform android
   ```

## Project Structure

```
src/
├── api/                 # Shopify API client and queries
├── components/          # Reusable UI components
├── constants/           # App constants (colors, fonts, sizes)
├── hooks/               # Custom React hooks
├── navigation/          # Navigation configuration
├── screens/             # Screen components
├── store/               # Redux store, slices, and types
├── types/               # TypeScript type definitions
└── utils/               # Utility functions (i18n, helpers)
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## License

This project is licensed under the MIT License.