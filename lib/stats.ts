/**
 * Single source of truth for the headline numbers shown in both the hero
 * strip and the stats band, so the two never drift apart.
 */
export const STAT_TARGETS = {
  projects: 30,
  years: 4,
  stacks: 5,
  satisfaction: 100,
} as const
