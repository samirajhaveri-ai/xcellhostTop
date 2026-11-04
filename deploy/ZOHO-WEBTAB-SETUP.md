# Zoho Customer Portal checkout recognition

The website receives Customer Portal Web Tab JWTs in `zoho-webtab-auth.js`, validates them in
`api/zoho-webtab-session.php`, loads the matching Zoho Billing customer, and fills matching checkout
fields across the Angular application and its same-origin checkout frames.

## Server environment variables

Configure these as Plesk environment variables or server secrets. Never add their real values to the
repository or frontend files.

```text
XCELLHOST_ZOHO_ORGANIZATION_ID=60028262636
XCELLHOST_ZOHO_WEBTAB_SECRETS={"1818279000018410001":"TALLY_WEB_TAB_SECRET","RMM_TAB_ID":"RMM_WEB_TAB_SECRET"}
XCELLHOST_ZOHO_CLIENT_ID=Zoho OAuth client ID
XCELLHOST_ZOHO_CLIENT_SECRET=Zoho OAuth client secret
XCELLHOST_ZOHO_REFRESH_TOKEN=Zoho OAuth refresh token
```

The OAuth grant needs the `ZohoSubscriptions.customers.READ` scope. The server refreshes short-lived
access tokens through the India data centre and never sends OAuth credentials to the browser.

For a single Web Tab, `XCELLHOST_ZOHO_WEBTAB_ID` and `XCELLHOST_ZOHO_WEBTAB_SECRET` can be used instead
of `XCELLHOST_ZOHO_WEBTAB_SECRETS`. Use the JSON mapping when more than one checkout is exposed in the
Customer Portal.

## Add another checkout Web Tab

1. Add or edit the Customer Portal Web Tab and point it at the website checkout URL. Use **Insert
   Placeholders** to append the customer/contact ID as `customer_id`; this lets contact persons resolve
   their parent customer record. The server verifies that relationship before returning any details.
2. Enable JWT Authentication and create a unique secret of at least 32 characters.
3. Add its Web Tab ID and secret to `XCELLHOST_ZOHO_WEBTAB_SECRETS` on the server.
4. Deploy the website build. No per-cart authentication code is required when the cart uses the common
   account and billing field names already recognized by `zoho-webtab-auth.js`.

The website accepts Web Tab messages only from `billing.zoho.in` and `billing.zohosecure.in`. The server
also verifies the HS256 signature, expiry, token type, organization ID, and approved Web Tab ID before
it reads or returns customer details.
