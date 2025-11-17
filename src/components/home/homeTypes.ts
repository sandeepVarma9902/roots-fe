export interface Event {
    id: string;
    title: string;
    images: string[];
    description: string;
    price: string;
    location: string;
    rating: number;
    category: string;
  }

  export interface CalendarEvent {
    date: number;
    type: 'live' | 'booked' | 'upcoming';
    title: string;
    time: string;
    location: string;
  }
  