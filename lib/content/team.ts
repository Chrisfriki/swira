export type TeamMember = {
  id: string
  name: string
  role?: string
  initials: string
  color: string
  image?: string
}

export const TEAM: TeamMember[] = [
  { id: 'zhang', name: 'Zhang', role: 'Comercial', initials: 'ZH', color: '#b6d1c3' },
  { id: 'wil', name: 'Wil', role: 'Director de estrategia', initials: 'WI', color: '#adc1dd' },
  { id: 'rafa', name: 'Rafa', initials: 'RA', color: '#d7c3a6' },
  { id: 'clara', name: 'Clara', role: 'Contabilidad y atención al cliente', initials: 'CL', color: '#c9bddc' },
  { id: 'eva', name: 'Eva', role: 'Fotógrafa y filmmaker', initials: 'EV', color: '#e4bca7' },
  { id: 'cristina', name: 'Cristina', role: 'Modelo e influencer', initials: 'CR', color: '#b1cdd4' },
  { id: 'marta', name: 'Marta', role: 'Modelo e influencer', initials: 'MA', color: '#d9cf9c' },
]
