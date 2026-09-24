export interface GpuWorkload {
  name: string;
  icon: string;
}

const CREATIVE_GPU_WORKLOADS: readonly GpuWorkload[] = [
  { name: 'Autodesk Revit', icon: 'M4 21V8l8-5 8 5v13M8 21v-7h8v7M8 10h.01M12 10h.01M16 10h.01' },
  { name: '3ds Max', icon: 'm12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Zm0 9 8-4.5M12 12 4 7.5m8 4.5v9' },
  { name: 'Maya', icon: 'M4 19V5l8 8 8-8v14M8 15V9l4 4 4-4v6' },
  { name: 'SolidWorks', icon: 'M5 8h8a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h10M16 7l3-3m-1 6 3-1m-5 5 3 3' },
  { name: 'CATIA', icon: 'M12 3v18M3 12h18m-4.5-4.5-9 9m0-9 9 9M12 6a6 6 0 1 1 0 12 6 6 0 0 1 0-12Z' },
  { name: 'V-Ray', icon: 'm3 6 7 13 4-8 2 4 5-9M7 6l3 6 3-6' },
  { name: 'Enscape', icon: 'M3 18 9 8l4 6 2-3 6 7H3Zm2-12h.01' },
  { name: 'Twinmotion', icon: 'M4 5h16v14H4zM10 9l5 3-5 3V9Zm-6-2h16' },
  { name: 'KeyShot', icon: 'M12 3a9 9 0 1 0 9 9M12 3v9l7.8-4.5M12 12l7.8 4.5M12 12l-7.8 4.5' },
  { name: 'Blender', icon: 'M4 9h9l-3-3m3 3-3 3m3-3a6 6 0 1 1-5.2 9M14 12a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z' },
  { name: 'Unreal Engine', icon: 'm12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Zm-4 7v5l4 2 4-2v-5' },
  { name: 'DaVinci Resolve', icon: 'M4 6h16v12H4zM9 6v12m6-12v12M4 10h5m6 0h5m-16 4h5m6 0h5' },
  { name: 'Adobe Premiere', icon: 'M4 4h16v16H4zM8 16V8h4a2.5 2.5 0 0 1 0 5H8m8-2v5m0-3c.8-1.3 2-2 3-2' },
  { name: 'PyTorch', icon: 'M12 3v4m0 0a7 7 0 1 0 6.2 3.7M15.5 4.5l1 1' },
];

export const CREATIVE_GPU_WORKLOAD_LOOP: readonly GpuWorkload[] = [
  ...CREATIVE_GPU_WORKLOADS,
  ...CREATIVE_GPU_WORKLOADS,
];
