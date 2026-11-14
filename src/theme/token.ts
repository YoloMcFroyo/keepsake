/**
 * Keepsake Design Language
 * Shared visual values used throughout the app.
 */

export const tokens = {
  colors: {
    // Brand colors
    electricBlue: '#147BB5',
    actionTextBlue: '#0A6797',
    luminousCyan: '#55C5FF',
    beaconCore: '#FFFFFF',

    // Interface colors
    background: '#FAFAF7',
    surface: '#FFFFFF',
    atlasInk: '#142A3D',
    textMuted: '#526675',
    border: '#DFE6EB',

    // Additional colors
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
    sm: 8,
    md: 12,
    lg: 18,
  },

  typography: {
    screenTitle: 26,
    memoryTitle: 22,
    sectionTitle: 18,
    body: 16,
    secondary: 14,
    small: 12,
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
    initialType: 'satellite',
    alternateType: 'standard',
  },
} as const;
