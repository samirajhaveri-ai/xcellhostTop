// Pricing and configuration data imported from the supplied Windows Servers reference.
export const WINDOWS_SERVER_DATA = {
  "plans": [
    {
      "id": "ryz-9700x",
      "series": "ryzen",
      "cpu": "AMD Ryzen 7 9700X",
      "brand": "AMD",
      "sockets": 1,
      "cores": 8,
      "threads": 16,
      "ram": 64,
      "ramt": "DDR5",
      "storage": "2 × 960 GB M.2 NVMe",
      "stype": "NVMe",
      "bw": "10 TB",
      "port": 1,
      "inr": 18399,
      "strike": 21199,
      "deploy": 24,
      "hot": false
    },
    {
      "id": "ryz-9950x",
      "series": "ryzen",
      "cpu": "AMD Ryzen 9 9950X",
      "brand": "AMD",
      "sockets": 1,
      "cores": 16,
      "threads": 32,
      "ram": 128,
      "ramt": "DDR5",
      "storage": "2 × 1.92 TB M.2 NVMe",
      "stype": "NVMe",
      "bw": "10 TB",
      "port": 1,
      "inr": 26499,
      "strike": 30499,
      "deploy": 24,
      "hot": true
    },
    {
      "id": "gold-6244",
      "series": "gold",
      "cpu": "Intel Xeon Gold 6244",
      "brand": "Intel",
      "sockets": 1,
      "cores": 8,
      "threads": 16,
      "ram": 64,
      "ramt": "DDR4 ECC",
      "storage": "2 × 960 GB NVMe SSD",
      "stype": "NVMe",
      "bw": "10 TB",
      "port": 1,
      "inr": 21899,
      "strike": 25199,
      "deploy": 24,
      "hot": false
    },
    {
      "id": "gold-2x6244",
      "series": "gold",
      "cpu": "2 × Intel Xeon Gold 6244",
      "brand": "Intel",
      "sockets": 2,
      "cores": 16,
      "threads": 32,
      "ram": 128,
      "ramt": "DDR4 ECC",
      "storage": "2 × 960 GB NVMe SSD",
      "stype": "NVMe",
      "bw": "10 TB",
      "port": 1,
      "inr": 25299,
      "strike": 29099,
      "deploy": 48,
      "hot": false
    },
    {
      "id": "gold-6254",
      "series": "gold",
      "cpu": "Intel Xeon Gold 6254",
      "brand": "Intel",
      "sockets": 1,
      "cores": 18,
      "threads": 36,
      "ram": 128,
      "ramt": "DDR4 ECC",
      "storage": "2 × 960 GB U.2 NVMe",
      "stype": "NVMe",
      "bw": "10 TB",
      "port": 1,
      "inr": 24499,
      "strike": 28199,
      "deploy": 24,
      "hot": true
    },
    {
      "id": "gold-2x6254",
      "series": "gold",
      "cpu": "2 × Intel Xeon Gold 6254",
      "brand": "Intel",
      "sockets": 2,
      "cores": 36,
      "threads": 72,
      "ram": 256,
      "ramt": "DDR4 ECC",
      "storage": "2 × 1.92 TB U.2 NVMe",
      "stype": "NVMe",
      "bw": "10 TB",
      "port": 1,
      "inr": 32699,
      "strike": 37599,
      "deploy": 48,
      "hot": false
    },
    {
      "id": "epyc-9124",
      "series": "epyc",
      "cpu": "AMD EPYC 9124 (Genoa)",
      "brand": "AMD",
      "sockets": 1,
      "cores": 16,
      "threads": 32,
      "ram": 128,
      "ramt": "DDR5 ECC",
      "storage": "2 × 960 GB U.3 NVMe",
      "stype": "NVMe",
      "bw": "25 TB",
      "port": 1,
      "inr": 46199,
      "strike": 53099,
      "deploy": 24,
      "hot": false
    },
    {
      "id": "epyc-2x9124",
      "series": "epyc",
      "cpu": "2 × AMD EPYC 9124 (Genoa)",
      "brand": "AMD",
      "sockets": 2,
      "cores": 32,
      "threads": 64,
      "ram": 256,
      "ramt": "DDR5 ECC",
      "storage": "2 × 1.92 TB U.3 NVMe",
      "stype": "NVMe",
      "bw": "25 TB",
      "port": 1,
      "inr": 68899,
      "strike": 79199,
      "deploy": 48,
      "hot": false
    },
    {
      "id": "epyc-9334",
      "series": "epyc",
      "cpu": "AMD EPYC 9334 (Genoa)",
      "brand": "AMD",
      "sockets": 1,
      "cores": 32,
      "threads": 64,
      "ram": 128,
      "ramt": "DDR5 ECC",
      "storage": "2 × 960 GB U.3 NVMe",
      "stype": "NVMe",
      "bw": "25 TB",
      "port": 1,
      "inr": 51399,
      "strike": 59099,
      "deploy": 24,
      "hot": true
    },
    {
      "id": "epyc-2x9334",
      "series": "epyc",
      "cpu": "2 × AMD EPYC 9334 (Genoa)",
      "brand": "AMD",
      "sockets": 2,
      "cores": 64,
      "threads": 128,
      "ram": 256,
      "ramt": "DDR5 ECC",
      "storage": "2 × 1.92 TB U.3 NVMe",
      "stype": "NVMe",
      "bw": "25 TB",
      "port": 1,
      "inr": 79199,
      "strike": 90999,
      "deploy": 48,
      "hot": false
    },
    {
      "id": "epyc-9554",
      "series": "epyc",
      "cpu": "AMD EPYC 9554 (Genoa)",
      "brand": "AMD",
      "sockets": 1,
      "cores": 64,
      "threads": 128,
      "ram": 128,
      "ramt": "DDR5 ECC",
      "storage": "2 × 1.92 TB U.3 NVMe",
      "stype": "NVMe",
      "bw": "25 TB",
      "port": 1,
      "inr": 56799,
      "strike": 65299,
      "deploy": 24,
      "hot": false
    },
    {
      "id": "epyc-2x9554",
      "series": "epyc",
      "cpu": "2 × AMD EPYC 9554 (Genoa)",
      "brand": "AMD",
      "sockets": 2,
      "cores": 128,
      "threads": 256,
      "ram": 256,
      "ramt": "DDR5 ECC",
      "storage": "2 × 3.84 TB U.3 NVMe",
      "stype": "NVMe",
      "bw": "25 TB",
      "port": 1,
      "inr": 90299,
      "strike": 103799,
      "deploy": 48,
      "hot": false
    },
    {
      "id": "epyc-7313",
      "series": "epyc",
      "cpu": "AMD EPYC 7313 (Milan)",
      "brand": "AMD",
      "sockets": 1,
      "cores": 16,
      "threads": 32,
      "ram": 64,
      "ramt": "DDR4 ECC",
      "storage": "2 × 960 GB NVMe",
      "stype": "NVMe",
      "bw": "15 TB",
      "port": 1,
      "inr": 33499,
      "strike": 38499,
      "deploy": 24,
      "hot": false
    },
    {
      "id": "epyc-2x7313",
      "series": "epyc",
      "cpu": "2 × AMD EPYC 7313 (Milan)",
      "brand": "AMD",
      "sockets": 2,
      "cores": 32,
      "threads": 64,
      "ram": 128,
      "ramt": "DDR4 ECC",
      "storage": "2 × 960 GB NVMe",
      "stype": "NVMe",
      "bw": "15 TB",
      "port": 1,
      "inr": 39299,
      "strike": 45199,
      "deploy": 48,
      "hot": false
    },
    {
      "id": "epyc-2x7543",
      "series": "epyc",
      "cpu": "2 × AMD EPYC 7543 (Milan)",
      "brand": "AMD",
      "sockets": 2,
      "cores": 64,
      "threads": 128,
      "ram": 256,
      "ramt": "DDR4 ECC",
      "storage": "2 × 1.92 TB NVMe",
      "stype": "NVMe",
      "bw": "15 TB",
      "port": 1,
      "inr": 55899,
      "strike": 64299,
      "deploy": 48,
      "hot": false
    },
    {
      "id": "epyc-7543",
      "series": "epyc",
      "cpu": "AMD EPYC 7543 (Milan)",
      "brand": "AMD",
      "sockets": 1,
      "cores": 32,
      "threads": 64,
      "ram": 384,
      "ramt": "DDR4 ECC",
      "storage": "2 × 3.84 TB NVMe",
      "stype": "NVMe",
      "bw": "15 TB",
      "port": 1,
      "inr": 63899,
      "strike": 73399,
      "deploy": 24,
      "hot": false
    },
    {
      "id": "epyc-7763",
      "series": "epyc",
      "cpu": "AMD EPYC 7763 (Milan)",
      "brand": "AMD",
      "sockets": 1,
      "cores": 64,
      "threads": 128,
      "ram": 128,
      "ramt": "DDR4 ECC",
      "storage": "2 × 1.92 TB NVMe",
      "stype": "NVMe",
      "bw": "15 TB",
      "port": 1,
      "inr": 45699,
      "strike": 52499,
      "deploy": 24,
      "hot": false
    },
    {
      "id": "epyc-2x7763",
      "series": "epyc",
      "cpu": "2 × AMD EPYC 7763 (Milan)",
      "brand": "AMD",
      "sockets": 2,
      "cores": 128,
      "threads": 256,
      "ram": 256,
      "ramt": "DDR4 ECC",
      "storage": "2 × 3.84 TB NVMe",
      "stype": "NVMe",
      "bw": "15 TB",
      "port": 1,
      "inr": 67099,
      "strike": 77099,
      "deploy": 48,
      "hot": false
    },
    {
      "id": "leg-2667",
      "series": "legacy",
      "cpu": "Intel Xeon E5-2667 v4",
      "brand": "Intel",
      "sockets": 1,
      "cores": 8,
      "threads": 16,
      "ram": 32,
      "ramt": "DDR4 ECC",
      "storage": "2 × 480 GB SSD",
      "stype": "SSD",
      "bw": "10 TB",
      "port": 1,
      "inr": 12399,
      "strike": 14299,
      "deploy": 24,
      "hot": false
    },
    {
      "id": "leg-2x2667",
      "series": "legacy",
      "cpu": "2 × Intel Xeon E5-2667 v4",
      "brand": "Intel",
      "sockets": 2,
      "cores": 16,
      "threads": 32,
      "ram": 64,
      "ramt": "DDR4 ECC",
      "storage": "2 × 480 GB SSD",
      "stype": "SSD",
      "bw": "10 TB",
      "port": 1,
      "inr": 12999,
      "strike": 14899,
      "deploy": 48,
      "hot": false
    },
    {
      "id": "leg-2680",
      "series": "legacy",
      "cpu": "Intel Xeon E5-2680 v4",
      "brand": "Intel",
      "sockets": 1,
      "cores": 14,
      "threads": 28,
      "ram": 128,
      "ramt": "DDR4 ECC",
      "storage": "2 × 480 GB SSD",
      "stype": "SSD",
      "bw": "10 TB",
      "port": 1,
      "inr": 12899,
      "strike": 14799,
      "deploy": 24,
      "hot": false
    },
    {
      "id": "leg-2x2680",
      "series": "legacy",
      "cpu": "2 × Intel Xeon E5-2680 v4",
      "brand": "Intel",
      "sockets": 2,
      "cores": 28,
      "threads": 56,
      "ram": 256,
      "ramt": "DDR4 ECC",
      "storage": "2 × 960 GB SSD",
      "stype": "SSD",
      "bw": "10 TB",
      "port": 1,
      "inr": 15499,
      "strike": 17799,
      "deploy": 48,
      "hot": false
    }
  ],
  "series": [
    [
      "ryzen",
      "Ryzen",
      "AMD Ryzen dedicated servers",
      "Highest single-thread speed with DDR5 and M.2 NVMe — for game servers, trading, CI and busy web stacks."
    ],
    [
      "gold",
      "Intel Gold",
      "Intel Xeon Gold dedicated servers",
      "Proven Xeon Scalable platform with ECC memory and NVMe — for ERP, databases and Windows workloads."
    ],
    [
      "epyc",
      "AMD EPYC",
      "AMD EPYC dedicated servers",
      "Up to 128 cores and 25 TB transfer on Genoa and Milan — for virtualisation, analytics and high-density compute."
    ],
    [
      "legacy",
      "Legacy",
      "Budget Xeon E5 dedicated servers",
      "Entry-level dual-socket Xeon with RAID and IPMI — the lowest-cost way onto dedicated hardware."
    ]
  ],
  "os": [
    [
      "Ubuntu 24.04 LTS",
      0
    ],
    [
      "AlmaLinux 9",
      0
    ],
    [
      "Rocky Linux 9",
      0
    ],
    [
      "Debian 12",
      0
    ],
    [
      "Proxmox VE 8",
      0
    ],
    [
      "Windows Server 2022 Standard",
      "win"
    ],
    [
      "Windows Server 2025 Standard",
      "win"
    ],
    [
      "Windows Server 2019 Standard",
      "win"
    ],
    [
      "Windows Server 2025 Datacenter",
      "quote"
    ],
    [
      "CentOS Stream 9",
      0
    ]
  ],
  "panels": [
    [
      "No control panel",
      0
    ],
    [
      "cPanel / WHM",
      "quote"
    ],
    [
      "Plesk",
      "quote"
    ],
    [
      "DirectAdmin",
      "quote"
    ]
  ],
  "add": {
    "ip": 200,
    "win_per_2c": 800,
    "managed": 4999,
    "backup_gb": 2,
    "bw_unmetered": 4999
  },
  "terms": [
    [
      "m",
      "Monthly",
      0
    ],
    [
      "q",
      "Quarterly",
      3
    ],
    [
      "h",
      "Half-yearly",
      5
    ],
    [
      "y",
      "Annual",
      10
    ]
  ],
  "dcs": [
    [
      "dc1",
      "Mumbai DC-1",
      "BOM-1"
    ],
    [
      "dc2",
      "Mumbai DC-2",
      "BOM-2"
    ],
    [
      "dc3",
      "Pune DC-3",
      "PNQ-3"
    ]
  ],
  "rate": 88,
  "defOs": 6,
  "winTable": true,
  "logos": {
    "AMD": "/assets/images/windows-servers/7f331fc622a5.svg",
    "Intel": "/assets/images/windows-servers/1aaabc290721.svg"
  }
} as const;
