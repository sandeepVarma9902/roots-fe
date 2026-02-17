export interface MenuItem {
    id: string;
    providerId: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    rating: number;
    isVeg: boolean;
    mealType: 'breakfast' | 'lunch' | 'snacks' | 'dinner';
    availableFor: string[];
    availableDates?: string[];
    chef?: string;
    cuisine?: string;
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
    label?: string;
  }