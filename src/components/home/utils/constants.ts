import type { CalendarEvent, Event } from "../homeTypes";

export const sidebarSlides = [
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400',
    'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400',
    'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=400',
  ];


  export   const events: Event[] = [
    {
      id: '1',
      title: 'Sunset Yoga Retreat',
      images: [
        'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800',
        'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800',
        'https://images.unsplash.com/photo-1545389336-cf090694435e?w=800',
      ],
      description: 'Join us for a peaceful sunset yoga session by the beach',
      price: '1,500',
      location: 'Chennai Beach',
      rating: 4.8,
      category: 'Wellness',
    },
    {
      id: '2',
      title: 'Cooking Masterclass',
      images: [
        'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800',
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
        'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800',
      ],
      description: 'Learn authentic South Indian cuisine from expert chefs',
      price: '2,000',
      location: 'T Nagar',
      rating: 4.9,
      category: 'Food & Drink',
    },
    {
      id: '3',
      title: 'Photography Walk',
      images: [
        'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800',
        'https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=800',
        'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800',
      ],
      description: 'Explore historic streets and capture stunning moments',
      price: '800',
      location: 'Mylapore',
      rating: 4.7,
      category: 'Arts & Culture',
    },
    {
      id: '4',
      title: 'Live Music Concert',
      images: [
        'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800',
        'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800',
      ],
      description: 'Experience an evening of soul-stirring melodies',
      price: '1,200',
      location: 'Express Avenue',
      rating: 4.6,
      category: 'Music',
    },
  ];


  export   const calendarEvents: CalendarEvent[] = [
    { date: 5, type: 'live', title: 'Yoga Session', time: '6:00 PM', location: 'Beach' },
    { date: 12, type: 'booked', title: 'Cooking Class', time: '10:00 AM', location: 'T Nagar' },
    { date: 18, type: 'upcoming', title: 'Photo Walk', time: '5:00 PM', location: 'Mylapore' },
    { date: 22, type: 'live', title: 'Dance Workshop', time: '7:00 PM', location: 'Anna Nagar' },
    { date: 25, type: 'upcoming', title: 'Music Concert', time: '8:00 PM', location: 'Express Avenue' },
  ];