# Payments and Subscriptions

Stripe integration will handle subscription plans, following Chapter 5 of the Makerkit course. Implementation is not yet complete in this starter, but the planned approach is:

1. Create Stripe products and prices for subscription tiers.
2. Use Stripe Checkout or Customer Portal to manage billing.
3. Store the Stripe customer ID on the user record in Supabase.
4. Protect premium routes using role-based checks defined in `lib/auth/permissions.ts`.

Future commits will add the necessary server actions and webhooks to keep Supabase in sync with Stripe.
