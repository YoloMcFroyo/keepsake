/**
 * Keepsake Design Language v1 — starter tokens
 */

export const tokens = {
  colors: {
    // Signature and emphasis
    electricBlue: '#147BB5',
    actionTextBlue: '#0A6797', // stronger contrast on mineralWhite
    luminousCyan: '#55C5FF', // effects only, not small text
    beaconCore: '#FFFFFF',

    // Light-mode interface
    background: '#FAFAF7',
    surface: '#FFFFFF',
    atlasInk: '#142A3D',
    textMuted: '#526675',
    border: '#DFE6EB',

    // On-map surfaces and semantic colors
    deepOcean: '#0C2235',
    success: '#24745C',
    danger: '#C43D3D',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    base: 16,
    lg: 24,
    xl: 32,
  },
  radius: {
    input: 8,
    card: 12,
    panel: 18,
  },
  typography: {
    screenTitle: 26,
    memoryTitle: 22,
    sectionTitle: 18,
    body: 16,
    secondary: 14,
    overline: 12,
  },
  layout: {
    screenGutter: 16,
    minTouchTarget: 44,
    inputBorderWidth: 1,
  },
  beacon: {
    defaultType: 'signalHalo',
    selectedType: 'skyPillar',
  },
  map: {
    // A proposed initial map default; users can switch in the app.
    initialType: 'satellite',
    alternateType: 'standard',
  },
} as const;
