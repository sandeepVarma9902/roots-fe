export interface MenuItem {
  id: number;
  name: string;
  price: number;
  veg: boolean;
}

export interface Provider {
  id: number;
  name: string;
  community: string;
  distance: string;
  rating: number;
  reviews: number;
  photo: string;
  cover: string;
  story: string;
  cuisine: string;
  isVeg: boolean;
  availableToday: boolean;
  menu: MenuItem[];
}
  
export type Providers = Provider[];
export type Screen = 'home' | 'detail' | 'datetime' | 'menu' | 'request' | 'confirmation';
export type FilterType = 'community' | 'cuisine' | 'distance' | 'veg' | 'today';
export type OrderStatus = 'pending' | 'accepted' | 'rejected';

export interface Filters {
    events: string[];
    cuisines: string[];
    dietary: string[];
    priceRange: string[];
    community: FilterType[];
  }
  

  export interface FoodProvider {
    id: string;
    name: string;
    cuisine: string;
    description: string;
    chef: string;
    rating: number;
    distance: string;
    image: string;
    deliveryTime: string;
    minOrder: number;
  }

  
  export interface CartItem extends MenuItem {
    quantity: number;
    selectedDate: string;
    selectedMealType: string;
    selectedTimeSlot: string;
  }
  
  export interface DeliveryInfo {
    name: string;
    phone: string;
    email: string;
    address: string;
    landmark: string;
    deliveryTime: string;
  }
  
  export interface TimeSlot {
    time: string;
    available: boolean;
  }