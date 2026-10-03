// Bundles and licence prices from the supplied cPanel Servers HTML.
export const CPANEL_SERVER_BUNDLES = {
  "bundles": [
    {
      "best": false,
      "cap": 5,
      "k": "vps4",
      "n": "Cloud VPS 4",
      "p": 1199
    },
    {
      "best": true,
      "cap": 30,
      "k": "vps8",
      "n": "Cloud VPS 8",
      "p": 2399
    },
    {
      "best": false,
      "cap": 100,
      "k": "vdsl",
      "n": "Cloud VDS L",
      "p": 7499
    },
    {
      "best": false,
      "cap": 200,
      "k": "ded12",
      "n": "AMD EPYC 12-core dedicated",
      "p": 15999
    }
  ],
  "licences": [
    {
      "d": 1,
      "k": "solo",
      "n": "cPanel Solo",
      "p": 2699
    },
    {
      "d": 5,
      "k": "admin",
      "n": "cPanel Admin",
      "p": 3199
    },
    {
      "d": 30,
      "k": "pro",
      "n": "cPanel Pro",
      "p": 4799
    },
    {
      "d": 100,
      "k": "premier",
      "n": "cPanel Premier",
      "p": 6199
    }
  ],
  "extraAccountPrice": 45
} as const;
