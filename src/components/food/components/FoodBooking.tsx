import { Clock, MapPin, ChevronLeft, ChevronRight, Check, Minus, Plus, ShoppingCart, Trash2, User, Phone, Mail, CreditCard } from "lucide-react";
import React, { useState } from "react";
import type { CartItem, DeliveryInfo, MenuItem, TimeSlot } from "../../common/types/food";
import type { FoodProvider } from "../types";

interface FoodBookingProps {
  provider: FoodProvider;
  menuItems: MenuItem[];
}

const FoodBookingFlow: React.FC<FoodBookingProps> = ({ provider, menuItems }) => {
    const [activeStep, setActiveStep] = useState(1);
    const [cart, setCart] = useState<CartItem[]>([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [orderTiming, setOrderTiming] = useState<'now' | 'later'>('now');
    const [selectedMealType, setSelectedMealType] = useState<'breakfast' | 'lunch' | 'snacks' | 'dinner'>('lunch');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
    const [showTimeSlotModal, setShowTimeSlotModal] = useState(false);
    const [deliveryInfo, setDeliveryInfo] = useState<DeliveryInfo>({
      name: '',
      phone: '',
      email: '',
      address: '',
      landmark: '',
      deliveryTime: 'ASAP'
    });
  
    // Generate time slots based on meal type
    const getTimeSlots = (mealType: string): TimeSlot[] => {
      const slots: Record<string, TimeSlot[]> = {
        breakfast: [
          { time: '07:30 AM', available: true },
          { time: '08:00 AM', available: true },
          { time: '08:30 AM', available: true },
          { time: '09:00 AM', available: true },
          { time: '09:30 AM', available: false },
          { time: '10:00 AM', available: true }
        ],
        lunch: [
          { time: '11:30 AM', available: true },
          { time: '12:00 PM', available: true },
          { time: '12:30 PM', available: true },
          { time: '01:00 PM', available: true },
          { time: '01:30 PM', available: false },
          { time: '02:00 PM', available: true }
        ],
        snacks: [
          { time: '04:00 PM', available: true },
          { time: '04:30 PM', available: true },
          { time: '05:00 PM', available: true },
          { time: '05:30 PM', available: true },
          { time: '06:00 PM', available: false },
          { time: '06:30 PM', available: true }
        ],
        dinner: [
          { time: '07:00 PM', available: true },
          { time: '07:30 PM', available: true },
          { time: '08:00 PM', available: true },
          { time: '08:30 PM', available: true },
          { time: '09:00 PM', available: false },
          { time: '09:30 PM', available: true }
        ]
      };
      return slots[mealType] || [];
    };
  
    // Generate calendar dates (14 days from today)
    const generateCalendarDates = () => {
      const dates = [];
      const today = new Date();
      for (let i = 0; i < 14; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        dates.push(date);
      }
      return dates;
    };
  
    const calendarDates = generateCalendarDates();
  
    const formatDate = (date: Date) => {
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      return {
        day: days[date.getDay()],
        date: date.getDate()
      };
    };
  
    const isToday = (date: Date) => {
      const today = new Date();
      return date.toDateString() === today.toDateString();
    };
  
    const isTomorrow = (date: Date) => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      return date.toDateString() === tomorrow.toDateString();
    };
  
    const isSameDate = (date1: Date, date2: Date) => {
      return date1.toDateString() === date2.toDateString();
    };
  
    // Check if item is available on selected date
    const isItemAvailableOnDate = (item: MenuItem) => {
      if (!item.availableDates) return true;
      
      if (item.availableDates.includes('all')) return true;
      if (isToday(selectedDate) && item.availableDates.includes('today')) return true;
      if (isTomorrow(selectedDate) && item.availableDates.includes('tomorrow')) return true;
      
      return false;
    };
  
    const categories = ['All', ...Array.from(new Set(menuItems.map(item => item.category)))];
  
    // Cart Functions
    const addToCart = (item: MenuItem) => {
      if (orderTiming === 'later' && !selectedTimeSlot) {
        setShowTimeSlotModal(true);
        return;
      }
  
      const timeSlot = orderTiming === 'now' ? 'ASAP' : selectedTimeSlot;
      
      const existingItem = cart.find(cartItem => 
        cartItem.id === item.id && 
        cartItem.selectedDate === selectedDate.toDateString() &&
        cartItem.selectedMealType === selectedMealType &&
        cartItem.selectedTimeSlot === timeSlot
      );
      
      if (existingItem) {
        setCart(cart.map(cartItem =>
          cartItem.id === item.id && 
          cartItem.selectedDate === selectedDate.toDateString() &&
          cartItem.selectedMealType === selectedMealType &&
          cartItem.selectedTimeSlot === timeSlot
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        ));
      } else {
        setCart([...cart, { 
          ...item, 
          quantity: 1,
          selectedDate: selectedDate.toDateString(),
          selectedMealType: selectedMealType,
          selectedTimeSlot: timeSlot
        }]);
      }
    };
  
    const updateQuantity = (id: string, selectedDate: string, selectedMealType: string, selectedTimeSlot: string, delta: number) => {
      setCart(cart.map(item =>
        item.id === id && 
        item.selectedDate === selectedDate && 
        item.selectedMealType === selectedMealType &&
        item.selectedTimeSlot === selectedTimeSlot
          ? { ...item, quantity: Math.max(0, item.quantity + delta) }
          : item
      ).filter(item => item.quantity > 0));
    };
  
    const removeFromCart = (id: string, selectedDate: string, selectedMealType: string, selectedTimeSlot: string) => {
      setCart(cart.filter(item => 
        !(item.id === id && 
          item.selectedDate === selectedDate && 
          item.selectedMealType === selectedMealType &&
          item.selectedTimeSlot === selectedTimeSlot)
      ));
    };
  
    const getTotalPrice = () => {
      return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };
  
    const getTotalItems = () => {
      return cart.reduce((total, item) => total + item.quantity, 0);
    };
  
    const handleCheckout = () => {
      if (cart.length === 0) return;
      setActiveStep(3);
    };
  
    const handlePlaceOrder = () => {
      if (!deliveryInfo.name || !deliveryInfo.phone || !deliveryInfo.address) {
        alert('Please fill all required fields');
        return;
      }
      setActiveStep(4);
    };
  
    // Menu View
    const MenuView = () => {
      const filteredItems = menuItems.filter(item => {
        const categoryMatch = selectedCategory === 'All' || item.category === selectedCategory;
        const mealTypeMatch = item.availableFor.includes(selectedMealType);
        const dateAvailability = isItemAvailableOnDate(item);
        return categoryMatch && mealTypeMatch && dateAvailability;
      });
  
      return (
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-xl mb-6">
            <h1 className="text-3xl font-bold mb-2">Homemade Delights</h1>
            <p className="text-base opacity-90">Fresh, healthy, and delicious homemade food</p>
            <div className="flex gap-4 mt-3 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>30-40 mins</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Free delivery above ₹300</span>
              </div>
            </div>
          </div>
  
          <div className="flex gap-3 mb-6">
            <button
              onClick={() => {
                setOrderTiming('now');
                setSelectedDate(new Date());
                setSelectedTimeSlot('');
              }}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                orderTiming === 'now'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
              }`}
            >
              <Clock className="w-5 h-5" />
              {selectedMealType.charAt(0).toUpperCase() + selectedMealType.slice(1)} now
            </button>
            <button
              onClick={() => setOrderTiming('later')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                orderTiming === 'later'
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-green-50 border border-gray-200'
              }`}
            >
              <Clock className="w-5 h-5" />
              For later
            </button>
          </div>
  
          {orderTiming === 'later' && (
            <div className="mb-6 bg-white rounded-xl p-4 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-800">Select Date</h3>
                <div className="flex gap-2">
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {calendarDates.map((date, index) => {
                  const dateInfo = formatDate(date);
                  const selected = isSameDate(date, selectedDate);
                  const today = isToday(date);
                  
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedDate(date);
                        setSelectedTimeSlot('');
                      }}
                      className={`flex-shrink-0 flex flex-col items-center justify-center w-16 h-20 rounded-lg transition-all ${
                        selected
                          ? 'bg-green-600 text-white shadow-lg scale-105'
                          : today
                          ? 'bg-blue-50 text-blue-600 border-2 border-blue-200'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span className="text-xs font-medium mb-1">{dateInfo.day}</span>
                      <span className="text-xl font-bold">{dateInfo.date}</span>
                      {today && !selected && (
                        <span className="text-xs mt-1">Today</span>
                      )}
                    </button>
                  );
                })}
              </div>
  
              <div className="mt-4 pt-4 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3">Select Delivery Time</h4>
                <div className="grid grid-cols-3 gap-2">
                  {getTimeSlots(selectedMealType).map((slot, index) => (
                    <button
                      key={index}
                      onClick={() => slot.available && setSelectedTimeSlot(slot.time)}
                      disabled={!slot.available}
                      className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                        selectedTimeSlot === slot.time
                          ? 'bg-green-600 text-white shadow-md'
                          : slot.available
                          ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          : 'bg-gray-50 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {slot.time}
                    </button>
                  ))}
                </div>
                {selectedTimeSlot && (
                  <p className="text-sm text-green-600 mt-3 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    Delivery scheduled for {selectedTimeSlot} on {selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </p>
                )}
              </div>
            </div>
          )}
  
          <div className="mb-6 bg-white rounded-xl p-2 shadow-md">
            <div className="grid grid-cols-4 gap-2">
              {(['breakfast', 'lunch', 'snacks', 'dinner'] as const).map((mealType) => (
                <button
                  key={mealType}
                  onClick={() => {
                    setSelectedMealType(mealType);
                    setSelectedTimeSlot('');
                  }}
                  className={`py-3 px-4 rounded-lg font-medium transition-all capitalize ${
                    selectedMealType === mealType
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {mealType}
                </button>
              ))}
            </div>
          </div>
  
          <div className="mb-6 flex gap-3">
            <button className="px-5 py-2 rounded-full bg-white text-gray-700 border border-gray-300 font-medium hover:bg-gray-50 transition-all">
              ⭐ Top Rated
            </button>
            <button className="px-5 py-2 rounded-full bg-white text-gray-700 border border-gray-300 font-medium hover:bg-gray-50 transition-all">
              🟢 Pure Veg
            </button>
          </div>
  
          <div className="mb-6 overflow-x-auto">
            <div className="flex gap-3">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
  
          <div className="mb-4 flex items-center justify-between">
            <p className="text-gray-600">
              {filteredItems.length} items available
              {orderTiming === 'later' && ` for ${selectedMealType} on ${selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`}
            </p>
            {orderTiming === 'later' && selectedTimeSlot && (
              <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
                🕐 {selectedTimeSlot}
              </span>
            )}
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">
                  No items available for {selectedMealType}
                  {orderTiming === 'later' && ` on ${selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`}
                </p>
              </div>
            ) : (
              filteredItems.map(item => {
                const cartItem = cart.find(c => 
                  c.id === item.id && 
                  c.selectedDate === selectedDate.toDateString() &&
                  c.selectedMealType === selectedMealType &&
                  c.selectedTimeSlot === (orderTiming === 'now' ? 'ASAP' : selectedTimeSlot)
                );
                return (
                    <div 
  key={item.id} 
  className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
>
  {/* Image Section with Overlay */}
  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
    <img 
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
      src={item.image}
      alt={item.name}
    />
    {/* Veg/Non-Veg Badge - Floating on Image */}
    <div className="absolute top-3 right-3">
      <div className={`px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md shadow-lg ${
        item.isVeg 
          ? 'bg-green-500/90 text-white' 
          : 'bg-red-500/90 text-white'
      }`}>
        {item.isVeg ? '🌱 Veg' : '🍖 Non-Veg'}
      </div>
    </div>
    {/* Rating Badge - Floating on Image */}
    <div className="absolute top-3 left-3">
      <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
        <span className="text-yellow-500 text-sm">⭐</span>
        <span className="text-sm font-bold text-gray-800">{item.rating}</span>
      </div>
    </div>
  </div>

  {/* Content Section */}
  <div className="p-5">
    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
      {item.name}
    </h3>
    
    <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed">
      {item.description}
    </p>
    
    {item.chef && (
      <div className="flex items-center gap-2 mb-4 text-xs text-gray-500 bg-gray-50 rounded-lg px-3 py-2">
        <span>👨‍🍳</span>
        <span className="font-medium">{item.chef}</span>
        <span>•</span>
        <span className="italic">{item.cuisine}</span>
      </div>
    )}

    {/* Price and Add to Cart Section */}
    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
      <div>
        <p className="text-xs text-gray-500 mb-1">Price</p>
        <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          ₹{item.price}
        </span>
      </div>
      
      {cartItem ? (
        <div className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl px-4 py-2.5 shadow-lg shadow-blue-500/30">
          <button 
            onClick={() => updateQuantity(
              item.id, 
              selectedDate.toDateString(), 
              selectedMealType, 
              orderTiming === 'now' ? 'ASAP' : selectedTimeSlot,
              -1
            )} 
            className="hover:scale-125 transition-transform active:scale-95"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="font-bold w-8 text-center text-lg">{cartItem.quantity}</span>
          <button 
            onClick={() => updateQuantity(
              item.id, 
              selectedDate.toDateString(), 
              selectedMealType,
              orderTiming === 'now' ? 'ASAP' : selectedTimeSlot,
              1
            )} 
            className="hover:scale-125 transition-transform active:scale-95"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <button
          onClick={() => addToCart(item)}
          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 active:scale-95"
        >
          <Plus className="w-5 h-5" />
          Add to Cart
        </button>
      )}
    </div>
  </div>
</div>
                );
              })
            )}
          </div>
  
          {cart.length > 0 && (
            <div className="fixed bottom-6 right-6 z-50">
              <button
                onClick={() => setActiveStep(2)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-3 font-bold text-lg transition-all hover:scale-105"
              >
                <ShoppingCart className="w-6 h-6" />
                <span>{getTotalItems()} Items | ₹{getTotalPrice()}</span>
              </button>
            </div>
          )}
  
  {showTimeSlotModal && (
  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
    <div 
      className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl transform animate-scaleIn"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Icon Header */}
      <div className="flex justify-center mb-6">
        <div className="relative">
          <div className="absolute inset-0 bg-blue-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
          <div className="relative bg-gradient-to-br from-blue-500 to-blue-700 p-4 rounded-full shadow-lg">
            <Clock className="w-10 h-10 text-white" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          Select Delivery Time
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Please select a delivery time slot before adding items to your cart.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button
          onClick={() => setShowTimeSlotModal(false)}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
        >
          <span>OK, Got it</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </button>
        
        <button
          onClick={() => setShowTimeSlotModal(false)}
          className="w-full text-gray-600 hover:text-gray-800 py-3 rounded-xl font-medium transition-colors hover:bg-gray-100"
        >
          Close
        </button>
      </div>

      {/* Close Button (X) */}
      <button
        onClick={() => setShowTimeSlotModal(false)}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-2 rounded-lg transition-all hover:scale-110 active:scale-95"
        aria-label="Close modal"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
)}
        </div>
      );
    };
  
    // Cart View
    const CartView = () => {
      const deliveryFee = getTotalPrice() >= 300 ? 0 : 40;
      const finalTotal = getTotalPrice() + deliveryFee;
  
      type GroupedCartType = Record<string, { date: string; mealType: string; timeSlot: string; items: CartItem[] }>;
  
      const groupedCart = cart.reduce((acc: GroupedCartType, item) => {
        const key = `${item.selectedDate}-${item.selectedMealType}-${item.selectedTimeSlot}`;
        if (!acc[key]) {
          acc[key] = {
            date: item.selectedDate,
            mealType: item.selectedMealType,
            timeSlot: item.selectedTimeSlot,
            items: []
          };
        }
        acc[key].items.push(item);
        return acc;
      }, {});
  
      return (
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-800">Your Cart</h2>
              <button
                onClick={() => setActiveStep(1)}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                ← Continue Shopping
              </button>
            </div>
  
            {cart.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🛒</div>
                <p className="text-gray-500 text-lg">Your cart is empty</p>
              </div>
            ) : (
              <>
               <div className="space-y-6 mb-6">
  {Object.values(groupedCart).map((group, groupIndex) => (
    <div 
      key={groupIndex} 
      className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
    >
      {/* Group Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-blue-600 rounded-xl shadow-lg">
            <Clock className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg text-gray-900 capitalize">{group.mealType}</h3>
            <p className="text-sm text-gray-600 flex items-center gap-2">
              <span>📅</span>
              {new Date(group.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
              <span className="text-gray-400">•</span>
              <span className="text-green-600 font-semibold">🕒 {group.timeSlot}</span>
            </p>
          </div>
          <div className="bg-white px-4 py-2 rounded-full shadow-md">
            <span className="text-sm font-semibold text-gray-700">
              {group.items.length} {group.items.length === 1 ? 'item' : 'items'}
            </span>
          </div>
        </div>
      </div>
      
      {/* Items List */}
      <div className="p-4 space-y-3">
        {group.items.map(item => (
          <div 
            key={`${item.id}-${item.selectedDate}-${item.selectedMealType}-${item.selectedTimeSlot}`} 
            className="group flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300"
          >
            {/* Item Image */}
            <div className="relative flex-shrink-0">
              <img 
                className="w-20 h-20 object-cover rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300" 
                src={item.image}
                alt={item.name}
              />
              <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                ×{item.quantity}
              </div>
            </div>
            
            {/* Item Details */}
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors truncate">
                {item.name}
              </h3>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm text-gray-600">₹{item.price}</span>
                <span className="text-gray-300">•</span>
                <span className="text-sm font-medium text-gray-500">each</span>
              </div>
              {item.chef && (
                <div className="flex items-center gap-1 text-xs text-gray-500 bg-white rounded-md px-2 py-1 inline-block">
                  <span>👨‍🍳</span>
                  <span>{item.chef}</span>
                </div>
              )}
            </div>
            
            {/* Quantity Controls */}
            <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-2.5 shadow-sm hover:shadow-md transition-all">
              <button 
                onClick={() => updateQuantity(item.id, item.selectedDate, item.selectedMealType, item.selectedTimeSlot, -1)} 
                className="text-blue-600 hover:bg-blue-50 rounded-lg p-1 hover:scale-110 transition-all active:scale-95"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="font-bold text-gray-900 w-8 text-center text-lg">{item.quantity}</span>
              <button 
                onClick={() => updateQuantity(item.id, item.selectedDate, item.selectedMealType, item.selectedTimeSlot, 1)} 
                className="text-blue-600 hover:bg-blue-50 rounded-lg p-1 hover:scale-110 transition-all active:scale-95"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            
            {/* Total Price */}
            <div className="flex-shrink-0 w-28 text-right">
              <p className="text-xs text-gray-500 mb-1">Total</p>
              <p className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ₹{item.price * item.quantity}
              </p>
            </div>
            
            {/* Delete Button */}
            <button
              onClick={() => removeFromCart(item.id, item.selectedDate, item.selectedMealType, item.selectedTimeSlot)}
              className="flex-shrink-0 text-red-500 hover:bg-red-50 p-2.5 rounded-lg hover:scale-110 transition-all active:scale-95"
              title="Remove item"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>
  
                <div className="border-t border-gray-200 pt-4 space-y-3">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span className="font-medium">₹{getTotalPrice()}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Delivery Fee</span>
                    <span className="font-medium">
                      {deliveryFee === 0 ? (
                        <span className="text-green-600">FREE</span>
                      ) : (
                        `₹${deliveryFee}`
                      )}
                    </span>
                  </div>
                  {getTotalPrice() < 300 && (
                    <p className="text-sm text-blue-600">
                      Add ₹{300 - getTotalPrice()} more for free delivery!
                    </p>
                  )}
                  <div className="flex justify-between text-xl font-bold text-gray-800 pt-3 border-t border-gray-200">
                    <span>Total</span>
                    <span>₹{finalTotal}</span>
                  </div>
                </div>
  
                <button
                  onClick={handleCheckout}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-bold text-lg mt-6 transition-colors"
                >
                  Proceed to Checkout
                </button>
              </>
            )}
          </div>
        </div>
      );
    };
  
    // Checkout View
    const CheckoutView = () => {
      return (
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-800">Checkout</h2>
              <button
                onClick={() => setActiveStep(2)}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                ← Back to Cart
              </button>
            </div>
  
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Delivery Information</h3>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={deliveryInfo.name}
                    onChange={(e) => setDeliveryInfo({...deliveryInfo, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    placeholder="Enter your name"
                  />
                </div>
  
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={deliveryInfo.phone}
                    onChange={(e) => setDeliveryInfo({...deliveryInfo, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    placeholder="Enter your phone number"
                  />
                </div>
  
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email
                  </label>
                  <input
                    type="email"
                    value={deliveryInfo.email}
                    onChange={(e) => setDeliveryInfo({...deliveryInfo, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    placeholder="Enter your email"
                  />
                </div>
  
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    <MapPin className="w-4 h-4 inline mr-2" />
                    Delivery Address *
                  </label>
                  <textarea
                    value={deliveryInfo.address}
                    onChange={(e) => setDeliveryInfo({...deliveryInfo, address: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    placeholder="Enter complete address"
                    rows={3}
                  />
                </div>
  
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Landmark</label>
                  <input
                    type="text"
                    value={deliveryInfo.landmark}
                    onChange={(e) => setDeliveryInfo({...deliveryInfo, landmark: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    placeholder="Nearby landmark"
                  />
                </div>
              </div>
  
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h3>
                <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                  {cart.map(item => (
                    <div key={`${item.id}-${item.selectedDate}-${item.selectedMealType}-${item.selectedTimeSlot}`} className="flex justify-between text-sm">
                      <div>
                        <span className="text-gray-700">{item.name} x {item.quantity}</span>
                        <p className="text-xs text-gray-500 capitalize">{item.selectedMealType} - {new Date(item.selectedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
                      </div>
                      <span className="font-medium">₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                  
                  <div className="border-t border-gray-200 pt-4 space-y-2">
                    <div className="flex justify-between text-gray-700">
                      <span>Subtotal</span>
                      <span className="font-medium">₹{getTotalPrice()}</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Delivery Fee</span>
                      <span className="font-medium">
                        {getTotalPrice() >= 300 ? (
                          <span className="text-green-600">FREE</span>
                        ) : (
                          '₹40'
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between text-xl font-bold text-gray-800 pt-2 border-t border-gray-200">
                      <span>Total</span>
                      <span>₹{getTotalPrice() + (getTotalPrice() >= 300 ? 0 : 40)}</span>
                    </div>
                  </div>
  
                  <div className="pt-4">
                    <div className="flex items-center gap-2 mb-3">
                      <CreditCard className="w-5 h-5 text-gray-600" />
                      <span className="font-medium text-gray-800">Payment Method</span>
                    </div>
                    <div className="space-y-2">
                      <label className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50">
                        <input type="radio" name="payment" defaultChecked className="text-blue-600" />
                        <span className="text-gray-700">Cash on Delivery</span>
                      </label>
                      <label className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50">
                        <input type="radio" name="payment" className="text-blue-600" />
                        <span className="text-gray-700">Online Payment</span>
                      </label>
                    </div>
                  </div>
  
                  <button
                    onClick={handlePlaceOrder}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-bold text-lg mt-6 transition-colors"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
  
    // Success View
    const SuccessView = () => {
      return (
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-12 h-12 text-green-600" />
            </div>
            
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Order Placed Successfully!</h2>
            <p className="text-gray-600 text-lg mb-2">Thank you for your order, {deliveryInfo.name}!</p>
            <p className="text-gray-500 mb-8">Your delicious homemade food will be delivered to you soon.</p>
            
            <div className="bg-blue-50 rounded-lg p-6 mb-8 text-left">
              <h3 className="font-bold text-gray-800 mb-4">Order Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Order Number:</span>
                  <span className="font-medium">#ORD{Math.floor(Math.random() * 10000)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Amount:</span>
                  <span className="font-medium">₹{getTotalPrice() + (getTotalPrice() >= 300 ? 0 : 40)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Address:</span>
                  <span className="font-medium text-right max-w-xs">{deliveryInfo.address}</span>
                </div>
              </div>
            </div>
  
            <div className="flex gap-4">
              <button
                onClick={() => {
                  setActiveStep(1);
                  setCart([]);
                  setDeliveryInfo({
                    name: '',
                    phone: '',
                    email: '',
                    address: '',
                    landmark: '',
                    deliveryTime: 'ASAP'
                  });
                }}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors"
              >
                Order More
              </button>
              <button
                onClick={() => alert('Track Order feature coming soon!')}
                className="flex-1 bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 py-3 rounded-lg font-medium transition-colors"
              >
                Track Order
              </button>
            </div>
          </div>
        </div>
      );
    };
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 p-4 md:p-8">
        <div className="max-w-4xl mx-auto mb-8">
         
        </div>
  
        {activeStep === 1 && <MenuView />}
        {activeStep === 2 && <CartView />}
        {activeStep === 3 && <CheckoutView />}
        {activeStep === 4 && <SuccessView />}
      </div>
    );
  };
  
  export default FoodBookingFlow;
  