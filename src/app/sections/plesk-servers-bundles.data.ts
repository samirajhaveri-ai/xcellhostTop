// Bundles and licence prices from the supplied Plesk Servers HTML.
export const PLESK_SERVER_BUNDLES = {
  "bundles": [
    {
      "best": false,
      "ed": "admin",
      "k": "vps4",
      "n": "Cloud VPS 4",
      "p": 1099
    },
    {
      "best": false,
      "ed": "admin",
      "k": "vpsp4",
      "n": "Cloud VPS Plus 4",
      "p": 1499
    },
    {
      "best": true,
      "ed": "pro",
      "k": "vdsm",
      "n": "Cloud VDS M",
      "p": 5499
    },
    {
      "best": false,
      "ed": "host",
      "k": "ded24",
      "n": "AMD EPYC 24-core dedicated",
      "p": 19999
    }
  ],
  "licences": [
    {
      "d": 10,
      "k": "admin",
      "n": "Web Admin",
      "p": 1249
    },
    {
      "d": 30,
      "k": "pro",
      "n": "Web Pro",
      "p": 1699
    },
    {
      "d": 0,
      "k": "host",
      "n": "Web Host",
      "p": 2799
    }
  ],
  "windows": 2499
} as const;
