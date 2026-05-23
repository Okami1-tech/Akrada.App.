// constants/categories.ts
export const CATEGORIES = [
  { id: 'restaurants', name: 'Restaurants', icon: '🍽️' },
  { id: 'hostels', name: 'Hostels', icon: '🏠' },
  { id: 'lecture_halls', name: 'Lecture Halls', icon: '🎓' },
  { id: 'libraries', name: 'Libraries', icon: '📚' },
  { id: 'clinics', name: 'Clinics', icon: '🏥' },
  { id: 'departments', name: 'Departments', icon: '🏢' },
  { id: 'gates', name: 'Gates', icon: '🚪' },
  { id: 'cafeterias', name: 'Cafeterias', icon: '☕' },
  { id: 'banks', name: 'Banks', icon: '🏦' },
  { id: 'atms', name: 'ATMs', icon: '🏧' },
] as const;

export type CategoryId = typeof CATEGORIES[number]['id'];