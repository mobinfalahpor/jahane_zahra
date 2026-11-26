import { create } from 'zustand';
import { loadUniverseState, saveUniverseState, saveUniverseStateSyncMirror } from './db';
import { normalizeGraphicsQuality } from './graphicsProfile';
import { MUSIC_TRACKS_CONFIG } from '../config/musicConfig';
import {
  ALL_UNLOCKED_MANSION_KINDS,
  CATALOG_BY_KIND,
  DEFAULT_MANSION_ITEMS,
  clampScaleForKind,
  getCatalogMeta,
} from '../worlds/HomeDesigner/mansionCatalog';
import { POT_STYLES_INFO } from './plantCatalog';
import type {
  AquariumDecor,
  AquariumDecorKind,
  AquariumFish,
  AquariumState,
  AudioSettings,
  CatStage,
  CatState,
  CatToyItemId,
  EnvironmentSettings,
  FishSpecies,
  FloorMaterialId,
  FurnitureKind,
  GreenhouseState,
  HomeDesignPreset,
  HomeState,
  HomeTimeMode,
  PlacedFurniture,
  PlantSpecies,
  PotStyle,
  RoomType,
  SeasonType,
  StarColorHex,
  SurfaceKind,
  UniversePersistedState,
  WishCategory,
  WishItem,
  WorldId,
  WorldMeta,
} from './types';

export const WORLDS_META: WorldMeta[] = [
  {
    id: 'museum',
    title: 'موزه خیال',
    subtitle: 'تالار قاب‌های هنری و نورهای شاعرانه',
    accentColor: '#D6B875',
    islandPosition: [-6.8, 1.35, -3.5],
  },
  {
    id: 'music',
    title: 'اتاق موسیقی',
    subtitle: 'گرامافون قدیمی و نوای باران',
    accentColor: '#D9A9C5',
    islandPosition: [-5.5, 1.25, 4.2],
  },
  {
    id: 'cat',
    title: 'گربه نارنجی من',
    subtitle: 'همبازی پشمالو و دوست‌داشتنی',
    accentColor: '#F1DCCB',
    islandPosition: [0.2, 1.3, 6.2],
  },
  {
    id: 'home',
    title: 'خانه رؤیایی ما',
    subtitle: 'چیدمان خانه‌ای گرم با گربه‌مان',
    accentColor: '#D9A9C5',
    islandPosition: [0.0, 1.55, 0.2],
  },
  {
    id: 'wishes',
    title: 'آسمان آرزوها',
    subtitle: 'آرزوهایی که ستاره می‌شوند',
    accentColor: '#7771A8',
    islandPosition: [6.2, 1.4, -3.8],
  },
  {
    id: 'greenhouse',
    title: 'گلخانه جادویی',
    subtitle: 'کاشت و پرورش گل‌های کمیاب',
    accentColor: '#A6BBAA',
    islandPosition: [6.4, 1.25, 3.4],
  },
  {
    id: 'cafe',
    title: 'کافه روی ابرها',
    subtitle: 'عطر قهوه و هات‌چاکلت میان ابرها',
    accentColor: '#D6B875',
    islandPosition: [-1.8, 1.45, -6.5],
  },
  {
    id: 'aquarium',
    title: 'دنیای زیر آب',
    subtitle: 'آکواریوم مرجانی و رقص ماهی‌ها',
    accentColor: '#A6BBAA',
    islandPosition: [4.2, 0.85, 6.4],
  },
  {
    id: 'observatory',
    title: 'رصدخانه ستاره‌ها',
    subtitle: 'تلسکوپ و تماشای صورت‌های فلکی',
    accentColor: '#7771A8',
    islandPosition: [2.6, 1.9, -6.2],
  },
];

const INITIAL_WISHES: WishItem[] = [
  {
    id: 'w-init-1',
    title: 'شب‌های پرستاره کنار هم',
    text: 'آرزو می‌کنم همیشه آسمان بالای سرمان پر از آرامش، لبخند و ستاره‌هایی باشد که با هم می‌شماریم.',
    category: 'love',
    color: '#D6B875',
    createdAt: Date.now() - 86400000 * 3,
    position: [-8, 7, -14],
  },
  {
    id: 'w-init-2',
    title: 'سفر به شهرهای بارانی',
    text: 'یک صبح بارانی در کافه‌ای دنج، دو فنجان هات‌چاکلت داغ و قدم‌زدن بدون عجله زیر چتر.',
    category: 'travel',
    color: '#D9A9C5',
    createdAt: Date.now() - 86400000 * 2,
    position: [9, 9, -16],
  },
  {
    id: 'w-init-3',
    title: 'خانه‌ای پر از گل و نور',
    text: 'خانه‌ای گرم با پنجره‌های بزرگ، گلدان‌های شمعدانی و گربه‌ای که روی مبل خوابیده باشد.',
    category: 'dreams',
    color: '#A6BBAA',
    createdAt: Date.now() - 86400000,
    position: [0, 11, -18],
  },
];

const DEFAULT_HOME_ITEMS: PlacedFurniture[] = DEFAULT_MANSION_ITEMS;

export const DEFAULT_UNIVERSE_STATE: UniversePersistedState = {
  hasEntered: false,
  starsCurrency: 260,
  cat: {
    adopted: true,
    name: 'نارنگی',
    breed: 'honey',
    catOrangeMigrated: true,
    accessory: 'rose_bow',
    hunger: 84,
    happiness: 88,
    energy: 86,
    cleanliness: 85,
    affection: 78,
    affectionXp: 35,
    stage: 'young',
    personality: 'مهربان و بازیگوش',
    unlockedItems: ['yarn_ball', 'velvet_cushion'],
    lastUpdatedAt: Date.now(),
  },
  home: {
    schemaVersion: 2,
    updatedAt: 0,
    activeRoom: 'courtyard',
    wallColor: '#e9dcc8',
    floorMaterial: 'walnut',
    season: 'spring',
    lightWarmth: 0.78,
    timeMode: 'day',
    snapToGrid: true,
    mansionMigrated: true,
    unlockedKinds: ALL_UNLOCKED_MANSION_KINDS,
    items: DEFAULT_HOME_ITEMS,
    savedPresets: [
      {
        id: 'preset-persian-mansion-default',
        name: 'عمارت اصیل ایرانی (پیش‌فرض)',
        wallColor: '#e9dcc8',
        floorMaterial: 'walnut',
        season: 'spring',
        lightWarmth: 0.78,
        timeMode: 'day',
        items: DEFAULT_HOME_ITEMS,
        savedAt: Date.now(),
      },
    ],
    activePresetId: 'preset-persian-mansion-default',
  },
  wishes: INITIAL_WISHES,
  greenhouse: {
    theme: 'sunny',
    slots: [
      {
        slotIndex: 0,
        species: 'dream_rose',
        potStyle: 'rose_ceramic',
        plantedAt: Date.now() - 600000,
        hydration: 85,
        growthProgress: 92,
        lastWateredAt: Date.now() - 120000,
      },
      {
        slotIndex: 1,
        species: 'moon_lavender',
        potStyle: 'terracotta',
        plantedAt: Date.now() - 300000,
        hydration: 72,
        growthProgress: 60,
        lastWateredAt: Date.now() - 180000,
      },
      {
        slotIndex: 2,
        species: null,
        potStyle: 'gold_trimmed',
        plantedAt: 0,
        hydration: 100,
        growthProgress: 0,
        lastWateredAt: 0,
      },
      {
        slotIndex: 3,
        species: null,
        potStyle: 'mossy_stone',
        plantedAt: 0,
        hydration: 100,
        growthProgress: 0,
        lastWateredAt: 0,
      },
      {
        slotIndex: 4,
        species: 'crystal_lotus',
        potStyle: 'gold_trimmed',
        plantedAt: Date.now() - 450000,
        hydration: 68,
        growthProgress: 42,
        lastWateredAt: Date.now() - 240000,
      },
      {
        slotIndex: 5,
        species: null,
        potStyle: 'rose_ceramic',
        plantedAt: 0,
        hydration: 100,
        growthProgress: 0,
        lastWateredAt: 0,
      },
    ],
  },
  aquarium: {
    waterClarity: 92,
    lightMode: 'lagoon',
    fish: [
      { id: 'fish-1', species: 'clown', name: 'مرجان', size: 1 },
      { id: 'fish-2', species: 'angelfish', name: 'طلا', size: 1.1 },
      { id: 'fish-3', species: 'betta', name: 'نیلوفر', size: 1 },
      { id: 'fish-4', species: 'neon', name: 'ستاره', size: 0.85 },
      { id: 'fish-5', species: 'turtle', name: 'صدف', size: 1.15 },
    ],
    decor: [
      { id: 'dec-1', kind: 'coral_pink', position: [-2.2, -1.6, -0.6], rotationY: 0.4, scale: 1 },
      { id: 'dec-2', kind: 'coral_lavender', position: [2.0, -1.6, 0.3], rotationY: -0.6, scale: 1.1 },
      { id: 'dec-3', kind: 'shell_pearl', position: [0.2, -1.65, 0.6], rotationY: 0.1, scale: 1 },
      { id: 'dec-4', kind: 'kelp_clump', position: [-3.1, -1.7, 0.8], rotationY: 0, scale: 1.2 },
      { id: 'dec-5', kind: 'kelp_clump', position: [3.0, -1.7, -0.8], rotationY: 1.2, scale: 1.1 },
      { id: 'dec-6', kind: 'sea_rock', position: [-0.8, -1.7, -1.0], rotationY: 0.5, scale: 1 },
    ],
  },
  audio: {
    muted: false,
    volume: 0.65,
    activeTrackId: MUSIC_TRACKS_CONFIG[0]?.id ?? 'rainy-night-dream',
    ambientMode: 'none',
  },
  environment: {
    quality: 'balanced',
    reducedMotion: false,
    timeOfDay: 'twilight',
    cafeTheme: 'rose_romantic',
    cafeWeather: 'sunny',
    cafeTime: 'sunset',
  },
};

function computeCatStage(xp: number): CatStage {
  if (xp >= 120) return 'adult';
  if (xp >= 30) return 'young';
  return 'kitten';
}

function computePersonality(cat: CatState): string {
  if (cat.affection >= 85 && cat.happiness >= 80) return 'بسیار مهربان و بغلی';
  if (cat.happiness > 82 && cat.energy > 65) return 'پرانرژی و بازیگوش';
  if (cat.energy < 42) return 'خواب‌آلود و آرام';
  return 'کنجکاو و دوست‌داشتنی';
}

interface UniverseStore extends UniversePersistedState {
  hydrated: boolean;
  activeWorld: WorldId;
  enteringTransition: boolean;
  hydrate: () => Promise<void>;
  setHasEntered: (entered: boolean) => void;
  setActiveWorld: (world: WorldId) => void;
  setEnteringTransition: (active: boolean) => void;
  addStars: (amount: number) => void;

  // Cat actions
  updateCatProfile: (patch: Partial<Pick<CatState, 'name' | 'breed' | 'customFurColor' | 'accessory' | 'adopted'>>) => void;
  interactWithCat: (
    action: 'feed' | 'drink' | 'pet' | 'play' | 'bath' | 'sleep' | 'stretch' | 'yawn' | 'lick_paw' | 'groom' | 'call'
  ) => void;
  unlockCatItem: (item: CatToyItemId, cost: number) => boolean;
  tickCatNeeds: () => void;

  // Home actions
  homeUndoStack: PlacedFurniture[][];
  setActiveRoom: (room: RoomType) => void;
  setHomeStyle: (patch: Partial<Pick<HomeState, 'wallColor' | 'floorMaterial' | 'season' | 'lightWarmth' | 'timeMode' | 'snapToGrid'>>) => void;
  pushHomeUndoSnapshot: () => void;
  undoHomeChange: () => boolean;
  placeFurniture: (
    kind: FurnitureKind,
    room: RoomType,
    position: [number, number, number],
    color: string,
    extra?: Partial<Pick<PlacedFurniture, 'scale' | 'surface' | 'rotationY' | 'plantSpecies' | 'potStyle' | 'greenhouseSlotIndex'>>
  ) => string;
  updateFurnitureTransform: (
    uid: string,
    patch: Partial<Pick<PlacedFurniture, 'position' | 'rotationY' | 'scale' | 'room' | 'color' | 'plantSpecies' | 'potStyle'>>,
    recordUndo?: boolean,
    persist?: boolean
  ) => void;
  flushPersist: () => void;
  moveFurniture: (uid: string, position: [number, number, number]) => void;
  rotateFurniture: (uid: string, deltaRad?: number) => void;
  scaleFurniture: (uid: string, nextScale: number) => void;
  duplicateFurniture: (uid: string) => string | null;
  removeFurniture: (uid: string) => void;
  resetHomeLayout: () => void;
  revertLastSavedHome: () => boolean;
  saveHomePreset: (name: string) => void;
  loadHomePreset: (id: string) => void;
  unlockFurnitureKind: (kind: FurnitureKind, cost: number) => boolean;
  placeGreenhousePlantInHome: (slotIndex: number, room: RoomType, position: [number, number, number]) => string | null;

  // Wishes
  addWish: (title: string, text: string, category: WishCategory, color: StarColorHex) => WishItem;
  removeWish: (id: string) => void;

  // Greenhouse
  plantSeed: (slotIndex: number, species: PlantSpecies) => void;
  waterPlant: (slotIndex: number) => void;
  changePotStyle: (slotIndex: number, potStyle: PotStyle) => void;
  clearPlantSlot: (slotIndex: number) => void;
  setGreenhouseTheme: (theme: GreenhouseState['theme']) => void;
  tickGreenhouseGrowth: () => void;

  // Aquarium
  addFish: (species: FishSpecies, name: string) => void;
  removeFish: (id: string) => void;
  addAquariumDecor: (kind: AquariumDecorKind, position: [number, number, number]) => void;
  moveAquariumDecor: (id: string, position: [number, number, number]) => void;
  removeAquariumDecor: (id: string) => void;
  cleanAquarium: () => void;
  setAquariumLight: (mode: AquariumState['lightMode']) => void;

  // Audio & Environment
  setAudioSettings: (patch: Partial<AudioSettings>) => void;
  setEnvironmentSettings: (patch: Partial<EnvironmentSettings>) => void;
}

const VALID_ROOMS = new Set<RoomType>([
  'courtyard',
  'eyvan',
  'hall',
  'living',
  'bedroom',
  'library',
  'kitchen',
  'cat_room',
  'bathroom',
]);
const VALID_FLOOR_MATERIALS = new Set<FloorMaterialId>(['oak', 'cream_tile', 'marble', 'walnut']);
const VALID_SEASONS = new Set<SeasonType>(['spring', 'summer', 'autumn', 'winter']);
const VALID_TIME_MODES = new Set<HomeTimeMode>(['day', 'sunset', 'night']);
const VALID_SURFACES = new Set<SurfaceKind>(['floor', 'rug', 'table', 'wall', 'garden']);
const VALID_PLANT_SPECIES = new Set<PlantSpecies>([
  'dream_rose',
  'moon_lavender',
  'crystal_lotus',
  'golden_sun',
  'night_orchid',
  'star_cactus',
]);
const VALID_POT_STYLES = new Set<PotStyle>([
  'terracotta',
  'rose_ceramic',
  'gold_trimmed',
  'mossy_stone',
]);

function sanitizePlacedFurnitureList(
  rawItems: unknown,
  fallbackItems: PlacedFurniture[]
): PlacedFurniture[] {
  if (!Array.isArray(rawItems)) {
    return fallbackItems.map((item) => ({
      ...item,
      position: [...item.position] as [number, number, number],
    }));
  }

  const seenUids = new Set<string>();
  const sanitized: PlacedFurniture[] = [];

  for (let i = 0; i < rawItems.length; i++) {
    const entry = rawItems[i];
    if (!entry || typeof entry !== 'object' || Array.isArray(entry)) continue;
    const raw = entry as Partial<PlacedFurniture>;
    if (typeof raw.kind !== 'string' || !(raw.kind in CATALOG_BY_KIND)) continue;
    const kind = raw.kind as FurnitureKind;

    const uid =
      typeof raw.uid === 'string' && raw.uid.trim().length > 0
        ? raw.uid.trim()
        : `f-recovered-${i}-${kind}`;
    if (seenUids.has(uid)) continue;
    seenUids.add(uid);

    const meta = getCatalogMeta(kind);
    const room: RoomType =
      typeof raw.room === 'string' && VALID_ROOMS.has(raw.room as RoomType)
        ? (raw.room as RoomType)
        : 'courtyard';

    const rawPos = Array.isArray(raw.position) ? raw.position : [0, 0, 0];
    const px = typeof rawPos[0] === 'number' && Number.isFinite(rawPos[0]) ? Math.max(-14.5, Math.min(14.5, rawPos[0])) : 0;
    const py = typeof rawPos[1] === 'number' && Number.isFinite(rawPos[1]) ? Math.max(-0.5, Math.min(5.0, rawPos[1])) : 0;
    const pz = typeof rawPos[2] === 'number' && Number.isFinite(rawPos[2]) ? Math.max(-16.5, Math.min(7.5, rawPos[2])) : 0;

    const rotationY =
      typeof raw.rotationY === 'number' && Number.isFinite(raw.rotationY) ? raw.rotationY : 0;
    const color =
      typeof raw.color === 'string' && /^#[0-9a-fA-F]{3,8}$/.test(raw.color)
        ? raw.color
        : meta.defaultColor;
    const rawScale =
      typeof raw.scale === 'number' && Number.isFinite(raw.scale) ? raw.scale : meta.defaultScale;
    const scale = clampScaleForKind(kind, rawScale);
    const surface: SurfaceKind =
      typeof raw.surface === 'string' && VALID_SURFACES.has(raw.surface as SurfaceKind)
        ? (raw.surface as SurfaceKind)
        : meta.surface;

    sanitized.push({
      uid,
      kind,
      room,
      position: [px, py, pz],
      rotationY,
      color,
      scale,
      surface,
      variantSeed:
        typeof raw.variantSeed === 'number' && Number.isFinite(raw.variantSeed)
          ? raw.variantSeed
          : undefined,
      plantSpecies:
        typeof raw.plantSpecies === 'string' && VALID_PLANT_SPECIES.has(raw.plantSpecies as PlantSpecies)
          ? (raw.plantSpecies as PlantSpecies)
          : undefined,
      potStyle:
        typeof raw.potStyle === 'string' && VALID_POT_STYLES.has(raw.potStyle as PotStyle)
          ? (raw.potStyle as PotStyle)
          : undefined,
      greenhouseSlotIndex:
        typeof raw.greenhouseSlotIndex === 'number' && Number.isFinite(raw.greenhouseSlotIndex)
          ? raw.greenhouseSlotIndex
          : undefined,
    });
  }

  return sanitized;
}

function sanitizeHomePresets(
  rawPresets: unknown,
  fallbackPresets: HomeDesignPreset[]
): HomeDesignPreset[] {
  if (!Array.isArray(rawPresets)) {
    return fallbackPresets.map((p) => ({
      ...p,
      items: p.items.map((i) => ({ ...i, position: [...i.position] as [number, number, number] })),
    }));
  }

  const seenIds = new Set<string>();
  const cleaned: HomeDesignPreset[] = [];
  for (let i = 0; i < rawPresets.length; i++) {
    const p = rawPresets[i];
    if (!p || typeof p !== 'object' || Array.isArray(p)) continue;
    const raw = p as Partial<HomeDesignPreset>;
    const id =
      typeof raw.id === 'string' && raw.id.trim().length > 0
        ? raw.id.trim()
        : `preset-recovered-${i}`;
    if (seenIds.has(id)) continue;
    seenIds.add(id);

    cleaned.push({
      id,
      name: typeof raw.name === 'string' && raw.name.trim() ? raw.name.trim() : 'چیدمان ذخیره‌شده',
      wallColor:
        typeof raw.wallColor === 'string' && /^#[0-9a-fA-F]{3,8}$/.test(raw.wallColor)
          ? raw.wallColor
          : DEFAULT_UNIVERSE_STATE.home.wallColor,
      floorMaterial:
        typeof raw.floorMaterial === 'string' && VALID_FLOOR_MATERIALS.has(raw.floorMaterial as FloorMaterialId)
          ? (raw.floorMaterial as FloorMaterialId)
          : DEFAULT_UNIVERSE_STATE.home.floorMaterial,
      season:
        typeof raw.season === 'string' && VALID_SEASONS.has(raw.season as SeasonType)
          ? (raw.season as SeasonType)
          : DEFAULT_UNIVERSE_STATE.home.season,
      lightWarmth:
        typeof raw.lightWarmth === 'number' && Number.isFinite(raw.lightWarmth)
          ? Math.max(0, Math.min(1, raw.lightWarmth))
          : DEFAULT_UNIVERSE_STATE.home.lightWarmth,
      timeMode:
        typeof raw.timeMode === 'string' && VALID_TIME_MODES.has(raw.timeMode as HomeTimeMode)
          ? (raw.timeMode as HomeTimeMode)
          : 'day',
      items: sanitizePlacedFurnitureList(raw.items, DEFAULT_HOME_ITEMS),
      savedAt: typeof raw.savedAt === 'number' && Number.isFinite(raw.savedAt) ? raw.savedAt : Date.now(),
    });
  }

  return cleaned.length > 0 ? cleaned.slice(0, 8) : fallbackPresets;
}

function sanitizeHomeState(rawHome: unknown): { home: HomeState; repaired: boolean } {
  if (!rawHome || typeof rawHome !== 'object' || Array.isArray(rawHome)) {
    return {
      home: { ...DEFAULT_UNIVERSE_STATE.home, updatedAt: Date.now() },
      repaired: true,
    };
  }

  const saved = rawHome as Partial<HomeState>;
  const needsMansionMigration = !saved.mansionMigrated;
  const presets = sanitizeHomePresets(saved.savedPresets, DEFAULT_UNIVERSE_STATE.home.savedPresets);

  if (needsMansionMigration) {
    const migratedPresets = [
      ...DEFAULT_UNIVERSE_STATE.home.savedPresets,
      ...presets.filter(
        (p) => p.id !== 'preset-cozy-default' && p.id !== 'preset-persian-mansion-default'
      ),
    ].slice(0, 8);
    return {
      home: {
        ...DEFAULT_UNIVERSE_STATE.home,
        savedPresets: migratedPresets,
        mansionMigrated: true,
        schemaVersion: 2,
        updatedAt: Date.now(),
      },
      repaired: true,
    };
  }

  const sanitizedItems = sanitizePlacedFurnitureList(saved.items, DEFAULT_HOME_ITEMS);
  const itemsHadInvalidEntries =
    !Array.isArray(saved.items) || sanitizedItems.length !== saved.items.length;

  return {
    home: {
      schemaVersion: 2,
      updatedAt:
        typeof saved.updatedAt === 'number' && Number.isFinite(saved.updatedAt)
          ? saved.updatedAt
          : Date.now(),
      activeRoom:
        typeof saved.activeRoom === 'string' && VALID_ROOMS.has(saved.activeRoom as RoomType)
          ? (saved.activeRoom as RoomType)
          : DEFAULT_UNIVERSE_STATE.home.activeRoom,
      wallColor:
        typeof saved.wallColor === 'string' && /^#[0-9a-fA-F]{3,8}$/.test(saved.wallColor)
          ? saved.wallColor
          : DEFAULT_UNIVERSE_STATE.home.wallColor,
      floorMaterial:
        typeof saved.floorMaterial === 'string' &&
        VALID_FLOOR_MATERIALS.has(saved.floorMaterial as FloorMaterialId)
          ? (saved.floorMaterial as FloorMaterialId)
          : DEFAULT_UNIVERSE_STATE.home.floorMaterial,
      season:
        typeof saved.season === 'string' && VALID_SEASONS.has(saved.season as SeasonType)
          ? (saved.season as SeasonType)
          : DEFAULT_UNIVERSE_STATE.home.season,
      lightWarmth:
        typeof saved.lightWarmth === 'number' && Number.isFinite(saved.lightWarmth)
          ? Math.max(0, Math.min(1, saved.lightWarmth))
          : DEFAULT_UNIVERSE_STATE.home.lightWarmth,
      timeMode:
        typeof saved.timeMode === 'string' && VALID_TIME_MODES.has(saved.timeMode as HomeTimeMode)
          ? (saved.timeMode as HomeTimeMode)
          : 'day',
      snapToGrid: typeof saved.snapToGrid === 'boolean' ? saved.snapToGrid : true,
      mansionMigrated: true,
      unlockedKinds: Array.from(
        new Set([
          ...(Array.isArray(saved.unlockedKinds) ? saved.unlockedKinds : []),
          ...ALL_UNLOCKED_MANSION_KINDS,
        ])
      ),
      items: sanitizedItems,
      savedPresets: presets,
      activePresetId:
        typeof saved.activePresetId === 'string' || saved.activePresetId === null
          ? saved.activePresetId
          : DEFAULT_UNIVERSE_STATE.home.activePresetId,
    },
    repaired: itemsHadInvalidEntries || saved.schemaVersion !== 2,
  };
}

function buildPersistedSnapshot(s: UniverseStore): UniversePersistedState {
  const now = Date.now();
  return {
    schemaVersion: 2,
    updatedAt: now,
    hasEntered: s.hasEntered,
    starsCurrency: s.starsCurrency,
    cat: s.cat,
    home: {
      ...s.home,
      schemaVersion: 2,
      updatedAt: s.home.updatedAt ?? now,
    },
    wishes: s.wishes,
    greenhouse: s.greenhouse,
    aquarium: s.aquarium,
    audio: s.audio,
    environment: s.environment,
  };
}

let persistTimer: number | null = null;
let latestGetter: (() => UniverseStore) | null = null;
let unloadHooksRegistered = false;

function ensureUnloadFlushHooks() {
  if (unloadHooksRegistered || typeof window === 'undefined') return;
  unloadHooksRegistered = true;
  const flushSync = () => {
    if (!latestGetter) return;
    if (persistTimer) {
      window.clearTimeout(persistTimer);
      persistTimer = null;
    }
    const snapshot = buildPersistedSnapshot(latestGetter());
    saveUniverseStateSyncMirror(snapshot);
    void saveUniverseState(snapshot);
  };
  window.addEventListener('pagehide', flushSync);
  window.addEventListener('beforeunload', flushSync);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') flushSync();
  });
}

function schedulePersist(getState: () => UniverseStore, immediate = false) {
  if (typeof window === 'undefined') return;
  latestGetter = getState;
  ensureUnloadFlushHooks();

  const snapshot = buildPersistedSnapshot(getState());
  // Always keep synchronous mirror up-to-date so reloads within milliseconds never lose changes
  saveUniverseStateSyncMirror(snapshot);

  if (persistTimer) {
    window.clearTimeout(persistTimer);
    persistTimer = null;
  }

  if (immediate) {
    void saveUniverseState(snapshot);
    return;
  }

  persistTimer = window.setTimeout(() => {
    persistTimer = null;
    const latest = buildPersistedSnapshot(getState());
    void saveUniverseState(latest);
  }, 160);
}

export const useUniverseStore = create<UniverseStore>((set, get) => ({
  ...DEFAULT_UNIVERSE_STATE,
  hydrated: false,
  activeWorld: 'island',
  enteringTransition: false,
  homeUndoStack: [],

  hydrate: async () => {
    latestGetter = get;
    ensureUnloadFlushHooks();
    const saved = await loadUniverseState();
    if (saved) {
      const needsOrangeMigration = !saved.cat?.catOrangeMigrated;
      const { home: nextHome, repaired: homeRepaired } = sanitizeHomeState(saved.home);
      const rawQuality = saved.environment?.quality as string | undefined;
      const normalizedQuality = normalizeGraphicsQuality(rawQuality);
      const needsQualityMigration = rawQuality !== normalizedQuality;
      set({
        ...DEFAULT_UNIVERSE_STATE,
        ...saved,
        hasEntered: typeof saved.hasEntered === 'boolean' ? saved.hasEntered : false,
        starsCurrency:
          typeof saved.starsCurrency === 'number' && Number.isFinite(saved.starsCurrency)
            ? saved.starsCurrency
            : DEFAULT_UNIVERSE_STATE.starsCurrency,
        cat: {
          ...DEFAULT_UNIVERSE_STATE.cat,
          ...(saved.cat && typeof saved.cat === 'object' ? saved.cat : {}),
          breed: needsOrangeMigration ? 'honey' : (saved.cat?.breed ?? 'honey'),
          catOrangeMigrated: true,
          affection: saved.cat?.affection ?? DEFAULT_UNIVERSE_STATE.cat.affection,
          unlockedItems: Array.isArray(saved.cat?.unlockedItems)
            ? saved.cat.unlockedItems
            : DEFAULT_UNIVERSE_STATE.cat.unlockedItems,
        },
        home: nextHome,
        wishes: Array.isArray(saved.wishes) ? saved.wishes : DEFAULT_UNIVERSE_STATE.wishes,
        greenhouse: {
          ...DEFAULT_UNIVERSE_STATE.greenhouse,
          ...(saved.greenhouse && typeof saved.greenhouse === 'object' ? saved.greenhouse : {}),
        },
        aquarium: {
          ...DEFAULT_UNIVERSE_STATE.aquarium,
          ...(saved.aquarium && typeof saved.aquarium === 'object' ? saved.aquarium : {}),
        },
        audio: {
          ...DEFAULT_UNIVERSE_STATE.audio,
          ...(saved.audio && typeof saved.audio === 'object' ? saved.audio : {}),
        },
        environment: {
          ...DEFAULT_UNIVERSE_STATE.environment,
          ...(saved.environment && typeof saved.environment === 'object' ? saved.environment : {}),
          quality: normalizedQuality,
        },
        hydrated: true,
      });
      get().tickCatNeeds();
      if (needsOrangeMigration || homeRepaired || needsQualityMigration) {
        schedulePersist(get, true);
      }
    } else {
      set({ hydrated: true });
    }
  },

  setHasEntered: (entered) => {
    set({ hasEntered: entered });
    schedulePersist(get);
  },

  setActiveWorld: (world) => set({ activeWorld: world }),
  setEnteringTransition: (active) => set({ enteringTransition: active }),

  addStars: (amount) => {
    set((s) => ({ starsCurrency: Math.max(0, s.starsCurrency + amount) }));
    schedulePersist(get);
  },

  updateCatProfile: (patch) => {
    set((s) => {
      const nextCat = { ...s.cat, ...patch, lastUpdatedAt: Date.now() };
      return { cat: nextCat };
    });
    schedulePersist(get);
  },

  interactWithCat: (action) => {
    set((s) => {
      const c = { ...s.cat };
      let starReward = 5;
      switch (action) {
        case 'feed':
          c.hunger = Math.min(100, c.hunger + 26);
          c.happiness = Math.min(100, c.happiness + 8);
          c.affection = Math.min(100, c.affection + 5);
          c.affectionXp += 10;
          break;
        case 'drink':
          c.hunger = Math.min(100, c.hunger + 12);
          c.energy = Math.min(100, c.energy + 10);
          c.happiness = Math.min(100, c.happiness + 6);
          c.affection = Math.min(100, c.affection + 4);
          c.affectionXp += 6;
          break;
        case 'pet':
          c.happiness = Math.min(100, c.happiness + 18);
          c.affection = Math.min(100, c.affection + 14);
          c.affectionXp += 14;
          break;
        case 'play':
          c.happiness = Math.min(100, c.happiness + 24);
          c.energy = Math.max(10, c.energy - 12);
          c.cleanliness = Math.max(15, c.cleanliness - 5);
          c.affection = Math.min(100, c.affection + 10);
          c.affectionXp += 16;
          starReward = 10;
          break;
        case 'bath':
          c.cleanliness = 100;
          c.happiness = Math.min(100, c.happiness + 10);
          c.affection = Math.min(100, c.affection + 6);
          c.affectionXp += 8;
          break;
        case 'sleep':
          c.energy = Math.min(100, c.energy + 35);
          c.hunger = Math.max(15, c.hunger - 5);
          c.affection = Math.min(100, c.affection + 4);
          c.affectionXp += 6;
          break;
        case 'stretch':
          c.energy = Math.min(100, c.energy + 8);
          c.happiness = Math.min(100, c.happiness + 8);
          c.affectionXp += 4;
          starReward = 3;
          break;
        case 'yawn':
          c.energy = Math.min(100, c.energy + 6);
          c.happiness = Math.min(100, c.happiness + 4);
          starReward = 2;
          break;
        case 'lick_paw':
        case 'groom':
          c.cleanliness = Math.min(100, c.cleanliness + 14);
          c.happiness = Math.min(100, c.happiness + 6);
          c.affectionXp += 4;
          starReward = 3;
          break;
        case 'call':
          c.happiness = Math.min(100, c.happiness + 7);
          c.affection = Math.min(100, c.affection + 6);
          c.affectionXp += 5;
          starReward = 3;
          break;
      }
      c.stage = computeCatStage(c.affectionXp);
      c.personality = computePersonality(c);
      c.lastUpdatedAt = Date.now();
      return { cat: c, starsCurrency: s.starsCurrency + starReward };
    });
    schedulePersist(get);
  },

  unlockCatItem: (item, cost) => {
    const s = get();
    if (s.cat.unlockedItems.includes(item)) return true;
    if (s.starsCurrency < cost) return false;
    set({
      starsCurrency: s.starsCurrency - cost,
      cat: {
        ...s.cat,
        unlockedItems: [...s.cat.unlockedItems, item],
        happiness: Math.min(100, s.cat.happiness + 10),
        affection: Math.min(100, s.cat.affection + 8),
        lastUpdatedAt: Date.now(),
      },
    });
    schedulePersist(get);
    return true;
  },

  tickCatNeeds: () => {
    set((s) => {
      const now = Date.now();
      const hoursElapsed = Math.max(0, (now - s.cat.lastUpdatedAt) / 3600000);
      if (hoursElapsed < 0.015) return s;

      // Gentle, fair decay: ~2.5 pts/hour, capped at max 32 pts drop even after many days!
      const gentleLoss = Math.min(32, hoursElapsed * 2.5);
      const c = {
        ...s.cat,
        hunger: Math.max(28, Math.round(s.cat.hunger - gentleLoss)),
        happiness: Math.max(32, Math.round(s.cat.happiness - gentleLoss * 0.75)),
        energy: Math.max(30, Math.round(s.cat.energy - gentleLoss * 0.6)),
        cleanliness: Math.max(35, Math.round(s.cat.cleanliness - gentleLoss * 0.5)),
        affection: Math.max(40, Math.round(s.cat.affection - gentleLoss * 0.35)),
        lastUpdatedAt: now,
      };
      c.personality = computePersonality(c);
      return { cat: c };
    });
    schedulePersist(get);
  },

  setActiveRoom: (room) => {
    set((s) => ({ home: { ...s.home, activeRoom: room, updatedAt: Date.now() } }));
    schedulePersist(get, true);
  },

  setHomeStyle: (patch) => {
    set((s) => ({ home: { ...s.home, ...patch, updatedAt: Date.now() } }));
    schedulePersist(get, true);
  },

  pushHomeUndoSnapshot: () => {
    set((s) => ({
      homeUndoStack: [
        s.home.items.map((item) => ({ ...item, position: [...item.position] as [number, number, number] })),
        ...s.homeUndoStack,
      ].slice(0, 25),
    }));
  },

  undoHomeChange: () => {
    const s = get();
    if (s.homeUndoStack.length === 0) return false;
    const [prevItems, ...rest] = s.homeUndoStack;
    set({
      homeUndoStack: rest,
      home: {
        ...s.home,
        items: prevItems.map((i) => ({ ...i, position: [...i.position] as [number, number, number] })),
        updatedAt: Date.now(),
      },
    });
    schedulePersist(get, true);
    return true;
  },

  placeFurniture: (kind, room, position, color, extra) => {
    const meta = getCatalogMeta(kind);
    const uid = `f-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
    const newItem: PlacedFurniture = {
      uid,
      kind,
      room,
      position,
      rotationY: extra?.rotationY ?? 0,
      color,
      scale: extra?.scale ?? meta.defaultScale,
      surface: extra?.surface ?? meta.surface,
      variantSeed: Math.floor(Math.random() * 1000),
      plantSpecies: extra?.plantSpecies,
      potStyle: extra?.potStyle,
      greenhouseSlotIndex: extra?.greenhouseSlotIndex,
    };
    get().pushHomeUndoSnapshot();
    set((s) => ({
      home: { ...s.home, items: [...s.home.items, newItem], updatedAt: Date.now() },
    }));
    schedulePersist(get, true);
    return uid;
  },

  updateFurnitureTransform: (uid, patch, recordUndo = false, persist = true) => {
    if (recordUndo) {
      get().pushHomeUndoSnapshot();
    }
    set((s) => ({
      home: {
        ...s.home,
        updatedAt: Date.now(),
        items: s.home.items.map((item) => {
          if (item.uid !== uid) return item;
          const nextScale =
            patch.scale !== undefined ? clampScaleForKind(item.kind, patch.scale) : item.scale;
          return {
            ...item,
            ...patch,
            scale: nextScale,
          };
        }),
      },
    }));
    if (persist) {
      schedulePersist(get, true);
    }
  },

  flushPersist: () => {
    set((s) => ({ home: { ...s.home, updatedAt: Date.now() } }));
    schedulePersist(get, true);
  },

  moveFurniture: (uid, position) => {
    set((s) => ({
      home: {
        ...s.home,
        updatedAt: Date.now(),
        items: s.home.items.map((item) => (item.uid === uid ? { ...item, position } : item)),
      },
    }));
    schedulePersist(get, false);
  },

  rotateFurniture: (uid, deltaRad = Math.PI / 6) => {
    get().pushHomeUndoSnapshot();
    set((s) => ({
      home: {
        ...s.home,
        updatedAt: Date.now(),
        items: s.home.items.map((item) =>
          item.uid === uid ? { ...item, rotationY: (item.rotationY + deltaRad) % (Math.PI * 2) } : item
        ),
      },
    }));
    schedulePersist(get, true);
  },

  scaleFurniture: (uid, nextScale) => {
    get().pushHomeUndoSnapshot();
    set((s) => ({
      home: {
        ...s.home,
        updatedAt: Date.now(),
        items: s.home.items.map((item) =>
          item.uid === uid ? { ...item, scale: clampScaleForKind(item.kind, nextScale) } : item
        ),
      },
    }));
    schedulePersist(get, true);
  },

  duplicateFurniture: (uid) => {
    const s = get();
    const target = s.home.items.find((i) => i.uid === uid);
    if (!target) return null;
    const meta = getCatalogMeta(target.kind);
    if (!meta.allowMultiple) return null;
    const copyUid = `f-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
    const copy: PlacedFurniture = {
      ...target,
      uid: copyUid,
      position: [
        Number((target.position[0] + 0.65).toFixed(3)),
        target.position[1],
        Number((target.position[2] + 0.45).toFixed(3)),
      ],
      variantSeed: Math.floor(Math.random() * 1000),
    };
    get().pushHomeUndoSnapshot();
    set({
      home: {
        ...s.home,
        updatedAt: Date.now(),
        items: [...s.home.items, copy],
      },
    });
    schedulePersist(get, true);
    return copyUid;
  },

  removeFurniture: (uid) => {
    get().pushHomeUndoSnapshot();
    set((s) => ({
      home: {
        ...s.home,
        updatedAt: Date.now(),
        items: s.home.items.filter((item) => item.uid !== uid),
      },
    }));
    schedulePersist(get, true);
  },

  resetHomeLayout: () => {
    get().pushHomeUndoSnapshot();
    set((s) => ({
      home: {
        ...s.home,
        updatedAt: Date.now(),
        wallColor: DEFAULT_UNIVERSE_STATE.home.wallColor,
        floorMaterial: DEFAULT_UNIVERSE_STATE.home.floorMaterial,
        season: DEFAULT_UNIVERSE_STATE.home.season,
        lightWarmth: DEFAULT_UNIVERSE_STATE.home.lightWarmth,
        items: DEFAULT_HOME_ITEMS.map((i) => ({ ...i, position: [...i.position] as [number, number, number] })),
      },
    }));
    schedulePersist(get, true);
  },

  revertLastSavedHome: () => {
    const s = get();
    const target =
      s.home.savedPresets.find((p) => p.id === s.home.activePresetId) ?? s.home.savedPresets[0];
    if (!target) return false;
    get().pushHomeUndoSnapshot();
    set({
      home: {
        ...s.home,
        updatedAt: Date.now(),
        wallColor: target.wallColor,
        floorMaterial: target.floorMaterial,
        season: target.season,
        lightWarmth: target.lightWarmth,
        timeMode: (target.timeMode as HomeTimeMode | undefined) ?? s.home.timeMode ?? 'day',
        items: target.items.map((i) => ({ ...i, position: [...i.position] as [number, number, number] })),
        activePresetId: target.id,
      },
    });
    schedulePersist(get, true);
    return true;
  },

  saveHomePreset: (name) => {
    const trimmed = name.trim() || 'چیدمان دلخواه عمارت';
    set((s) => {
      const now = Date.now();
      const preset: HomeDesignPreset = {
        id: `preset-${now}`,
        name: trimmed,
        wallColor: s.home.wallColor,
        floorMaterial: s.home.floorMaterial,
        season: s.home.season,
        lightWarmth: s.home.lightWarmth,
        timeMode: s.home.timeMode ?? 'day',
        items: s.home.items.map((i) => ({ ...i, position: [...i.position] as [number, number, number] })),
        savedAt: now,
      };
      return {
        home: {
          ...s.home,
          updatedAt: now,
          savedPresets: [preset, ...s.home.savedPresets].slice(0, 8),
          activePresetId: preset.id,
        },
      };
    });
    schedulePersist(get, true);
  },

  loadHomePreset: (id) => {
    get().pushHomeUndoSnapshot();
    set((s) => {
      const found = s.home.savedPresets.find((p) => p.id === id);
      if (!found) return s;
      return {
        home: {
          ...s.home,
          updatedAt: Date.now(),
          wallColor: found.wallColor,
          floorMaterial: found.floorMaterial,
          season: found.season,
          lightWarmth: found.lightWarmth,
          timeMode: (found.timeMode as HomeTimeMode | undefined) ?? s.home.timeMode ?? 'day',
          items: found.items.map((i) => ({ ...i, position: [...i.position] as [number, number, number] })),
          activePresetId: found.id,
        },
      };
    });
    schedulePersist(get, true);
  },

  placeGreenhousePlantInHome: (slotIndex, room, position) => {
    const s = get();
    const slot = s.greenhouse.slots.find((sl) => sl.slotIndex === slotIndex);
    if (!slot || !slot.species) return null;
    const potColor = POT_STYLES_INFO.find((p) => p.id === slot.potStyle)?.color ?? '#c46f4a';
    return get().placeFurniture('greenhouse_planter', room, position, potColor, {
      plantSpecies: slot.species,
      potStyle: slot.potStyle,
      greenhouseSlotIndex: slot.slotIndex,
      surface: 'garden',
      scale: 1.05,
    });
  },

  unlockFurnitureKind: (kind, cost) => {
    const s = get();
    if (s.home.unlockedKinds.includes(kind)) return true;
    if (s.starsCurrency < cost) return false;
    set({
      starsCurrency: s.starsCurrency - cost,
      home: {
        ...s.home,
        updatedAt: Date.now(),
        unlockedKinds: [...s.home.unlockedKinds, kind],
      },
    });
    schedulePersist(get, true);
    return true;
  },

  addWish: (title, text, category, color) => {
    const angle = (Math.random() - 0.5) * Math.PI * 0.9;
    const radius = 12 + Math.random() * 7;
    const y = 3.5 + Math.random() * 8.5;
    const wish: WishItem = {
      id: `wish-${Date.now()}`,
      title: title.trim(),
      text: text.trim(),
      category,
      color,
      createdAt: Date.now(),
      position: [Math.sin(angle) * radius, y, -Math.cos(angle) * radius],
    };
    set((s) => ({
      wishes: [wish, ...s.wishes],
      starsCurrency: s.starsCurrency + 15,
    }));
    schedulePersist(get);
    return wish;
  },

  removeWish: (id) => {
    set((s) => ({ wishes: s.wishes.filter((w) => w.id !== id) }));
    schedulePersist(get);
  },

  plantSeed: (slotIndex, species) => {
    const now = Date.now();
    set((s) => ({
      greenhouse: {
        ...s.greenhouse,
        slots: s.greenhouse.slots.map((slot) =>
          slot.slotIndex === slotIndex
            ? {
                ...slot,
                species,
                plantedAt: now,
                hydration: 95,
                growthProgress: 12,
                lastWateredAt: now,
              }
            : slot
        ),
      },
    }));
    schedulePersist(get);
  },

  waterPlant: (slotIndex) => {
    const now = Date.now();
    set((s) => ({
      starsCurrency: s.starsCurrency + 6,
      greenhouse: {
        ...s.greenhouse,
        slots: s.greenhouse.slots.map((slot) =>
          slot.slotIndex === slotIndex && slot.species
            ? {
                ...slot,
                hydration: 100,
                growthProgress: Math.min(100, slot.growthProgress + 18),
                lastWateredAt: now,
              }
            : slot
        ),
      },
    }));
    schedulePersist(get);
  },

  changePotStyle: (slotIndex, potStyle) => {
    set((s) => ({
      greenhouse: {
        ...s.greenhouse,
        slots: s.greenhouse.slots.map((slot) =>
          slot.slotIndex === slotIndex ? { ...slot, potStyle } : slot
        ),
      },
    }));
    schedulePersist(get);
  },

  clearPlantSlot: (slotIndex) => {
    set((s) => ({
      greenhouse: {
        ...s.greenhouse,
        slots: s.greenhouse.slots.map((slot) =>
          slot.slotIndex === slotIndex
            ? { ...slot, species: null, growthProgress: 0, plantedAt: 0 }
            : slot
        ),
      },
    }));
    schedulePersist(get);
  },

  setGreenhouseTheme: (theme) => {
    set((s) => ({ greenhouse: { ...s.greenhouse, theme } }));
    schedulePersist(get);
  },

  tickGreenhouseGrowth: () => {
    const now = Date.now();
    set((s) => ({
      greenhouse: {
        ...s.greenhouse,
        slots: s.greenhouse.slots.map((slot) => {
          if (!slot.species) return slot;
          const minsSinceWater = Math.max(0, (now - slot.lastWateredAt) / 60000);
          const hydration = Math.max(20, Math.round(100 - minsSinceWater * 1.4));
          const ageMins = Math.max(0, (now - slot.plantedAt) / 60000);
          const passiveGrowth = Math.min(100, slot.growthProgress + Math.min(1.5, ageMins * 0.03));
          return {
            ...slot,
            hydration,
            growthProgress: Math.max(slot.growthProgress, Math.round(passiveGrowth)),
          };
        }),
      },
    }));
  },

  addFish: (species, name) => {
    const fish: AquariumFish = {
      id: `fish-${Date.now()}-${Math.random().toString(36).slice(2, 5)}`,
      species,
      name: name.trim() || 'ماهی کوچولو',
      size: 0.9 + Math.random() * 0.3,
    };
    set((s) => ({
      aquarium: { ...s.aquarium, fish: [...s.aquarium.fish, fish] },
      starsCurrency: s.starsCurrency + 5,
    }));
    schedulePersist(get);
  },

  removeFish: (id) => {
    set((s) => ({
      aquarium: { ...s.aquarium, fish: s.aquarium.fish.filter((f) => f.id !== id) },
    }));
    schedulePersist(get);
  },

  addAquariumDecor: (kind, position) => {
    const dec: AquariumDecor = {
      id: `dec-${Date.now()}-${Math.random().toString(36).slice(2, 5)}`,
      kind,
      position,
      rotationY: Math.random() * Math.PI * 2,
      scale: 0.95 + Math.random() * 0.25,
    };
    set((s) => ({
      aquarium: { ...s.aquarium, decor: [...s.aquarium.decor, dec] },
    }));
    schedulePersist(get);
  },

  moveAquariumDecor: (id, position) => {
    set((s) => ({
      aquarium: {
        ...s.aquarium,
        decor: s.aquarium.decor.map((d) => (d.id === id ? { ...d, position } : d)),
      },
    }));
    schedulePersist(get);
  },

  removeAquariumDecor: (id) => {
    set((s) => ({
      aquarium: { ...s.aquarium, decor: s.aquarium.decor.filter((d) => d.id !== id) },
    }));
    schedulePersist(get);
  },

  cleanAquarium: () => {
    set((s) => ({
      aquarium: { ...s.aquarium, waterClarity: 100 },
      starsCurrency: s.starsCurrency + 8,
    }));
    schedulePersist(get);
  },

  setAquariumLight: (lightMode) => {
    set((s) => ({ aquarium: { ...s.aquarium, lightMode } }));
    schedulePersist(get);
  },

  setAudioSettings: (patch) => {
    set((s) => ({ audio: { ...s.audio, ...patch } }));
    schedulePersist(get);
  },

  setEnvironmentSettings: (patch) => {
    set((s) => ({ environment: { ...s.environment, ...patch } }));
    schedulePersist(get);
  },
}));
