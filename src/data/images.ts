/**
 * Production-ready public image paths.
 * These images reside in /public/images/ and are copied to /dist/images/ upon build,
 * ensuring they are correctly served by Nginx or static file servers without 404s.
 */
export const IMAGES = {
  hero: '/images/rcc_hero.jpg',
  heroTimestamped: '/images/rcc_hero_construction_cafe_1790579355983.jpg',
  
  excavator: '/images/rcc_excavator.jpg',
  excavatorTimestamped: '/images/rcc_excavator_action_1790579366601.jpg',
  
  cafe: '/images/rcc_cafe.jpg',
  cafeTimestamped: '/images/rcc_cafe_interior_lifestyle_1790579379113.jpg',
  
  corporate: '/images/rcc_corporate.jpg',
  corporateTimestamped: '/images/rcc_corporate_team_event_1790579391246.jpg',
  
  fleet: '/images/rcc_fleet.jpg',
  fleetTimestamped: '/images/rcc_fleet_lineup_studio_1790579402164.jpg',
} as const;
