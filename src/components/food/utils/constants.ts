import type { MenuItem } from "../../common/types/food";

export interface ProviderMenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    category: 'breakfast' | 'lunch' | 'dinner' | 'snacks' | 'beverages';
    isVeg: boolean;
    isSpicy?: boolean;
    isPopular?: boolean;
    image?: string;
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
    menu: ProviderMenuItem[];
  }
  
  export const foodProviders: FoodProvider[] = [
    {
      id: 'purab-pakwan',
      name: 'Purab Pakwan',
      cuisine: 'North Indian | Bihari Cuisine',
      description: 'Experience the authentic flavors of Eastern India',
      chef: 'Mithlesh Singh',
      rating: 3.7,
      distance: '5.2 km',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80',
      deliveryTime: '30-40 mins',
      minOrder: 200,
      menu: [
        { id: 'pp1', name: 'Litti Chokha', description: 'Traditional Bihari whole wheat balls with mashed vegetables', price: 120, category: 'lunch', isVeg: true, isPopular: true, image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=400&q=80' },
        { id: 'pp2', name: 'Sattu Paratha', description: 'Stuffed flatbread with roasted gram flour', price: 80, category: 'breakfast', isVeg: true, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80' },
        { id: 'pp3', name: 'Dal Puri with Aloo Sabzi', description: 'Fried lentil bread with potato curry', price: 100, category: 'breakfast', isVeg: true, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80' },
        { id: 'pp4', name: 'Champaran Mutton', description: 'Slow-cooked mutton in earthen pot', price: 280, category: 'lunch', isVeg: false, isSpicy: true, image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80' },
        { id: 'pp5', name: 'Khaja', description: 'Crispy layered sweet delicacy', price: 60, category: 'snacks', isVeg: true, image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&q=80' }
      ]
    },
    {
      id: 'maggies-kitchen',
      name: "Maggie's Kitchen",
      cuisine: 'North Indian | Chinese Cuisine',
      description: 'The place for real food!',
      chef: 'Sukanya',
      rating: 3.7,
      distance: '5.3 km',
      image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&q=80',
      deliveryTime: '25-35 mins',
      minOrder: 150,
      menu: [
        { id: 'mk1', name: 'Schezwan Noodles', description: 'Spicy stir-fried noodles with vegetables', price: 140, category: 'lunch', isVeg: true, isSpicy: true, image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&q=80' },
        { id: 'mk2', name: 'Manchurian Gravy', description: 'Vegetable balls in Indo-Chinese sauce', price: 160, category: 'dinner', isVeg: true, isPopular: true, image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=400&q=80' },
        { id: 'mk3', name: 'Paneer Chilli Dry', description: 'Cottage cheese tossed with peppers', price: 180, category: 'snacks', isVeg: true, isSpicy: true, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80' },
        { id: 'mk4', name: 'Hakka Noodles', description: 'Classic stir-fried noodles', price: 120, category: 'lunch', isVeg: true, image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&q=80' }
      ]
    },
    {
      id: 'rayars-home',
      name: "Rayar's Home Cooked",
      cuisine: 'South Indian | Tamil Nadu',
      description: 'Home style goodness of Tamil Nadu\'s finest',
      chef: 'Premila',
      rating: 4.1,
      distance: '5.9 km',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=80',
      deliveryTime: '35-45 mins',
      minOrder: 180,
      menu: [
        { id: 'rh1', name: 'Kothu Parotta', description: 'Shredded parotta tossed with eggs and spices', price: 140, category: 'dinner', isVeg: false, isSpicy: true, isPopular: true, image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&q=80' },
        { id: 'rh2', name: 'Chettinad Chicken Curry', description: 'Aromatic chicken in Chettinad spices', price: 220, category: 'lunch', isVeg: false, isSpicy: true, isPopular: true, image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80' },
        { id: 'rh3', name: 'Meen Kuzhambu with Rice', description: 'Tangy fish curry with steamed rice', price: 200, category: 'lunch', isVeg: false, isSpicy: true, image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80' },
        { id: 'rh4', name: 'Pongal with Sambhar', description: 'Rice and lentil porridge with vegetable stew', price: 100, category: 'breakfast', isVeg: true, image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80' },
        { id: 'rh5', name: 'Paruppu Rasam', description: 'Tangy lentil soup with tomatoes', price: 80, category: 'lunch', isVeg: true, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80' },
        { id: 'rh6', name: 'Kootu with Rice', description: 'Mixed vegetable and lentil stew', price: 120, category: 'lunch', isVeg: true, image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80' },
        { id: 'rh7', name: 'Appam with Stew', description: 'Rice pancakes with coconut milk curry', price: 130, category: 'breakfast', isVeg: true, image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&q=80' },
        { id: 'rh8', name: 'Mutton Kola Urundai', description: 'Spiced mutton meatballs', price: 250, category: 'snacks', isVeg: false, isSpicy: true, image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80' }
      ]
    },
    {
      id: 'lazeez-kitchen',
      name: 'Lazeez Kitchen',
      cuisine: 'Contemporary Indian | North Indian',
      description: 'Comfort food for the modern palate',
      chef: 'Tasmiya Banu',
      rating: 3.6,
      distance: '5.5 km',
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80',
      deliveryTime: '30-40 mins',
      minOrder: 220,
      menu: [
        { id: 'lk1', name: 'Butter Chicken', description: 'Creamy tomato-based chicken curry', price: 240, category: 'lunch', isVeg: false, isPopular: true, image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80' },
        { id: 'lk2', name: 'Paneer Tikka Masala', description: 'Grilled cottage cheese in rich gravy', price: 200, category: 'dinner', isVeg: true, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80' },
        { id: 'lk3', name: 'Biryani Rice Bowl', description: 'Fragrant rice with your choice of protein', price: 180, category: 'lunch', isVeg: false, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80' },
        { id: 'lk4', name: 'Dal Makhani', description: 'Creamy black lentils slow-cooked overnight', price: 150, category: 'lunch', isVeg: true, image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&q=80' }
      ]
    },
    {
      id: 'nithya-home',
      name: 'Nithya home foods',
      cuisine: 'North Indian | South Indian',
      description: 'Make your kitchen the heart of your home',
      chef: 'Kowshalya K N',
      rating: 3.8,
      distance: '3.8 km',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=80',
      deliveryTime: '20-30 mins',
      minOrder: 160,
      menu: [
        { id: 'nh1', name: 'Mini Tiffin Box', description: 'Idli, Vada, Pongal with sambar and chutneys', price: 140, category: 'breakfast', isVeg: true, isPopular: true, image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&q=80' },
        { id: 'nh2', name: 'Chapati with Dal Tadka', description: 'Whole wheat bread with tempered lentils', price: 120, category: 'lunch', isVeg: true, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80' },
        { id: 'nh3', name: 'Sambar Rice', description: 'Rice mixed with lentil and vegetable stew', price: 100, category: 'lunch', isVeg: true, image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80' },
        { id: 'nh4', name: 'Curd Rice', description: 'Cooling yogurt rice with tempering', price: 80, category: 'lunch', isVeg: true, image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=400&q=80' }
      ]
    },
    {
      id: 'lychee-foods',
      name: 'Lychee Foods',
      cuisine: 'North Indian | South Indian',
      description: 'A Mix of Karnataka, Kerala with combination',
      chef: 'Dhanalakshmi Dayalan',
      rating: 3.8,
      distance: '5.6 km',
      image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=80',
      deliveryTime: '35-45 mins',
      minOrder: 200,
      menu: [
        { id: 'lf1', name: 'Bisi Bele Bath', description: 'Karnataka-style rice, lentils and vegetables', price: 130, category: 'lunch', isVeg: true, isPopular: true, image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80' },
        { id: 'lf2', name: 'Kerala Parotta with Kurma', description: 'Flaky layered bread with mixed vegetable curry', price: 110, category: 'dinner', isVeg: true, image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&q=80' },
        { id: 'lf3', name: 'Appam with Kadala Curry', description: 'Rice pancakes with black chickpea curry', price: 120, category: 'breakfast', isVeg: true, image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&q=80' },
        { id: 'lf4', name: 'Masala Dosa', description: 'Crispy rice crepe with spiced potato filling', price: 90, category: 'breakfast', isVeg: true, image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&q=80' }
      ]
    },
    {
      id: 'annapurna-mess',
      name: 'Annapurna Mess',
      cuisine: 'South Indian | Karnataka',
      description: 'Authentic Udupi and Mangalorean delicacies',
      chef: 'Raghavendra Pai',
      rating: 4.3,
      distance: '4.2 km',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80',
      deliveryTime: '25-35 mins',
      minOrder: 150,
      menu: [
        { id: 'am1', name: 'Neer Dosa with Chicken Ghee Roast', description: 'Thin rice crepes with spicy coastal chicken', price: 240, category: 'lunch', isVeg: false, isSpicy: true, isPopular: true, image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80' },
        { id: 'am2', name: 'Mangalorean Fish Curry', description: 'Tangy coconut-based fish curry', price: 220, category: 'lunch', isVeg: false, isSpicy: true, image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80' },
        { id: 'am3', name: 'Goli Baje', description: 'Crispy fried fritters from Mangalore', price: 70, category: 'snacks', isVeg: true, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80' },
        { id: 'am4', name: 'Kane Rava Fry', description: 'Semolina coated fried lady fish', price: 200, category: 'lunch', isVeg: false, image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80' },
        { id: 'am5', name: 'Kori Roti', description: 'Crispy rice wafers with chicken curry', price: 180, category: 'lunch', isVeg: false, isSpicy: true, image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80' },
        { id: 'am6', name: 'Pathrode', description: 'Steamed colocasia leaf rolls', price: 90, category: 'snacks', isVeg: true, image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=400&q=80' },
        { id: 'am7', name: 'Udupi Sambar Rice', description: 'Traditional temple-style sambar with rice', price: 110, category: 'lunch', isVeg: true, image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80' },
        { id: 'am8', name: 'Rava Kesari', description: 'Semolina sweet pudding with saffron', price: 60, category: 'snacks', isVeg: true, image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&q=80' }
      ]
    },
    {
      id: 'kerala-kitchen',
      name: 'Kerala Kitchen',
      cuisine: 'South Indian | Kerala',
      description: 'God\'s own flavors from Kerala',
      chef: 'Lakshmi Menon',
      rating: 4.2,
      distance: '6.1 km',
      image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=800&q=80',
      deliveryTime: '40-50 mins',
      minOrder: 200,
      menu: [
        { id: 'kk1', name: 'Kerala Sadya', description: 'Traditional feast with 15+ vegetarian dishes', price: 350, category: 'lunch', isVeg: true, isPopular: true, image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&q=80' },
        { id: 'kk2', name: 'Karimeen Pollichathu', description: 'Pearl spot fish wrapped in banana leaf', price: 280, category: 'lunch', isVeg: false, isPopular: true, image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80' },
        { id: 'kk3', name: 'Malabar Parotta with Beef Fry', description: 'Layered bread with spicy beef stir-fry', price: 200, category: 'dinner', isVeg: false, isSpicy: true, image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&q=80' },
        { id: 'kk4', name: 'Puttu with Kadala Curry', description: 'Steamed rice cylinders with chickpea curry', price: 100, category: 'breakfast', isVeg: true, image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80' },
        { id: 'kk5', name: 'Avial', description: 'Mixed vegetables in coconut and yogurt gravy', price: 120, category: 'lunch', isVeg: true, image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80' },
        { id: 'kk6', name: 'Erissery', description: 'Pumpkin and red beans in coconut gravy', price: 110, category: 'lunch', isVeg: true, image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=400&q=80' },
        { id: 'kk7', name: 'Thoran', description: 'Stir-fried vegetables with coconut', price: 90, category: 'lunch', isVeg: true, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80' },
        { id: 'kk8', name: 'Olan', description: 'White pumpkin in coconut milk', price: 100, category: 'lunch', isVeg: true, image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=400&q=80' },
        { id: 'kk9', name: 'Payasam', description: 'Sweet pudding with vermicelli and milk', price: 70, category: 'snacks', isVeg: true, image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&q=80' }
      ]
    },
    {
      id: 'andhra-spice',
      name: 'Andhra Spice House',
      cuisine: 'South Indian | Andhra Pradesh',
      description: 'Fiery flavors from the land of spices',
      chef: 'Venkateswara Rao',
      rating: 4.0,
      distance: '5.8 km',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80',
      deliveryTime: '35-45 mins',
      minOrder: 180,
      menu: [
        { id: 'as1', name: 'Gongura Mutton', description: 'Mutton cooked with tangy sorrel leaves', price: 280, category: 'lunch', isVeg: false, isSpicy: true, isPopular: true, image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80' },
        { id: 'as2', name: 'Andhra Chicken Curry', description: 'Spicy chicken in traditional Andhra style', price: 220, category: 'lunch', isVeg: false, isSpicy: true, image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80' },
        { id: 'as3', name: 'Pesarattu', description: 'Green gram dosa with ginger chutney', price: 90, category: 'breakfast', isVeg: true, image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&q=80' },
        { id: 'as4', name: 'Guttivankaya Kura', description: 'Stuffed eggplant curry', price: 140, category: 'lunch', isVeg: true, isSpicy: true, image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80' },
        { id: 'as5', name: 'Royyala Iguru', description: 'Prawns in spicy onion tomato gravy', price: 260, category: 'lunch', isVeg: false, isSpicy: true, image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80' },
        { id: 'as6', name: 'Bendakaya Pulusu', description: 'Okra in tangy tamarind gravy', price: 130, category: 'lunch', isVeg: true, image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=400&q=80' },
        { id: 'as7', name: 'Bobbatlu', description: 'Sweet flatbread stuffed with lentils', price: 80, category: 'snacks', isVeg: true, image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&q=80' },
        { id: 'as8', name: 'Ulava Charu', description: 'Horse gram soup', price: 100, category: 'lunch', isVeg: true, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80' }
      ]
    },
    {
      id: 'hyderabadi-bawarchi',
      name: 'Hyderabadi Bawarchi',
      cuisine: 'South Indian | Telangana',
      description: 'Royal flavors from the Nizams kitchen',
      chef: 'Mohammed Khaleel',
      rating: 4.4,
      distance: '7.2 km',
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80',
      deliveryTime: '45-55 mins',
      minOrder: 250,
      menu: [
        { id: 'hb1', name: 'Hyderabadi Dum Biryani', description: 'Aromatic rice layered with marinated meat', price: 280, category: 'lunch', isVeg: false, isPopular: true, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80' },
        { id: 'hb2', name: 'Haleem', description: 'Slow-cooked meat and lentil stew', price: 180, category: 'dinner', isVeg: false, image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80' },
        { id: 'hb3', name: 'Mirchi Ka Salan', description: 'Chilli peppers in peanut sesame gravy', price: 140, category: 'lunch', isVeg: true, isSpicy: true, image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=400&q=80' },
        { id: 'hb4', name: 'Bagara Baingan', description: 'Baby eggplants in rich peanut gravy', price: 150, category: 'lunch', isVeg: true, image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80' },
        { id: 'hb5', name: 'Dum Ka Murgh', description: 'Slow-cooked chicken in Hyderabadi style', price: 240, category: 'lunch', isVeg: false, image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80' },
        { id: 'hb6', name: 'Lukhmi', description: 'Savory minced meat pastry', price: 100, category: 'snacks', isVeg: false, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80' },
        { id: 'hb7', name: 'Double Ka Meetha', description: 'Bread pudding with dried fruits', price: 90, category: 'snacks', isVeg: true, image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&q=80' },
        { id: 'hb8', name: 'Qubani Ka Meetha', description: 'Apricot sweet dessert', price: 80, category: 'snacks', isVeg: true, image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&q=80' }
      ]
    },
    {
      id: 'amma-unavagam',
      name: 'Amma Unavagam',
      cuisine: 'South Indian | Tamil Nadu',
      description: 'Comfort food like Amma makes',
      chef: 'Kannamma',
      rating: 4.1,
      distance: '3.5 km',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=80',
      deliveryTime: '20-30 mins',
      minOrder: 140,
      menu: [
        { id: 'au1', name: 'Meals - Full', description: 'Rice, sambar, rasam, kootu, poriyal, curd', price: 150, category: 'lunch', isVeg: true, isPopular: true, image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&q=80' },
        { id: 'au2', name: 'Idli Sambhar (4 pcs)', description: 'Steamed rice cakes with lentil stew', price: 60, category: 'breakfast', isVeg: true, image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&q=80' },
        { id: 'au3', name: 'Medu Vada (4 pcs)', description: 'Crispy lentil donuts', price: 70, category: 'breakfast', isVeg: true, image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80' },
        { id: 'au4', name: 'Podi Dosa', description: 'Crispy dosa with spicy powder', price: 80, category: 'breakfast', isVeg: true, image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&q=80' },
        { id: 'au5', name: 'Rava Dosa', description: 'Crispy semolina crepe', price: 90, category: 'breakfast', isVeg: true, image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&q=80' },
        { id: 'au6', name: 'Ghee Roast Dosa', description: 'Crispy dosa roasted in ghee', price: 100, category: 'breakfast', isVeg: true, image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&q=80' },
        { id: 'au7', name: 'Onion Uttapam', description: 'Thick rice pancake with onions', price: 85, category: 'breakfast', isVeg: true, image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80' },
        { id: 'au8', name: 'Filter Coffee', description: 'South Indian style decoction coffee', price: 30, category: 'beverages', isVeg: true, image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&q=80' }
      ]
    },
    {
      id: 'idli-factory',
      name: 'The Idli Factory',
      cuisine: 'South Indian | Breakfast Specialist',
      description: 'Steamed perfection in every bite',
      chef: 'Murugan',
      rating: 4.2,
      distance: '2.8 km',
      image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=80',
      deliveryTime: '15-25 mins',
      minOrder: 120,
      menu: [
        { id: 'if1', name: 'Mini Idli (20 pcs)', description: 'Bite-sized soft idlis', price: 80, category: 'breakfast', isVeg: true, isPopular: true, image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80' },
        { id: 'if2', name: 'Button Idli', description: 'Small idlis in sambar', price: 90, category: 'breakfast', isVeg: true, image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80' },
        { id: 'if3', name: 'Rava Idli (3 pcs)', description: 'Semolina idlis with vegetables', price: 70, category: 'breakfast', isVeg: true, image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80' },
        { id: 'if4', name: 'Ghee Karam Idli', description: 'Idlis tossed with ghee and spice powder', price: 100, category: 'breakfast', isVeg: true, image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80' },
        { id: 'if5', name: 'Sambar Idli', description: 'Idlis dunked in hot sambar', price: 80, category: 'breakfast', isVeg: true, image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80' },
        { id: 'if6', name: 'Thatte Idli (2 pcs)', description: 'Large flat idlis from Karnataka', price: 90, category: 'breakfast', isVeg: true, image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80' },
        { id: 'if7', name: 'Idli Manchurian', description: 'Idlis in Indo-Chinese sauce', price: 110, category: 'snacks', isVeg: true, image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=400&q=80' }
      ]
    },
    {
      id: 'dosa-plaza',
      name: 'Dosa Plaza',
      cuisine: 'South Indian | Dosa Specialist',
      description: '108 varieties of dosas',
      chef: 'Rajendran',
      rating: 4.1,
      distance: '4.5 km',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=80',
      deliveryTime: '30-40 mins',
      minOrder: 150,
      menu: [
        { id: 'dp1', name: 'Spring Dosa', description: 'Dosa filled with vegetables and noodles', price: 130, category: 'breakfast', isVeg: true, isPopular: true, image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&q=80' },
        { id: 'dp2', name: 'Cheese Burst Dosa', description: 'Dosa loaded with molten cheese', price: 150, category: 'breakfast', isVeg: true, image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&q=80' },
        { id: 'dp3', name: 'Schezwan Dosa', description: 'Spicy Indo-Chinese dosa', price: 140, category: 'breakfast', isVeg: true, isSpicy: true, image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&q=80' },
        { id: 'dp4', name: 'Chocolate Dosa', description: 'Sweet dosa with chocolate filling', price: 100, category: 'snacks', isVeg: true, image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&q=80' },
        { id: 'dp5', name: 'Paneer Dosa', description: 'Dosa stuffed with spiced paneer', price: 120, category: 'breakfast', isVeg: true, image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&q=80' },
        { id: 'dp6', name: 'Mysore Sada Dosa', description: 'Plain dosa with red chutney', price: 90, category: 'breakfast', isVeg: true, image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&q=80' },
        { id: 'dp7', name: 'Paper Dosa', description: 'Extra thin crispy dosa', price: 110, category: 'breakfast', isVeg: true, image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&q=80' }
      ]
    },
    {
      id: 'biryani-blues',
      name: 'Biryani Blues',
      cuisine: 'South Indian | Biryani Specialist',
      description: 'Rice & spice & everything nice',
      chef: 'Abdul Rahman',
      rating: 4.3,
      distance: '6.9 km',
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80',
      deliveryTime: '45-55 mins',
      minOrder: 240,
      menu: [
        { id: 'bb1', name: 'Ambur Biryani', description: 'Seeraga samba rice with succulent meat', price: 260, category: 'lunch', isVeg: false, isPopular: true, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80' },
        { id: 'bb2', name: 'Thalassery Biryani', description: 'Malabar-style biryani with kaima rice', price: 280, category: 'lunch', isVeg: false, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80' },
        { id: 'bb3', name: 'Dindigul Biryani', description: 'Tangy biryani with small grain rice', price: 250, category: 'lunch', isVeg: false, isSpicy: true, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80' },
        { id: 'bb4', name: 'Vegetable Biryani', description: 'Fragrant rice with mixed vegetables', price: 180, category: 'lunch', isVeg: true, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80' },
        { id: 'bb5', name: 'Egg Biryani', description: 'Biryani with boiled eggs', price: 160, category: 'lunch', isVeg: false, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80' },
        { id: 'bb6', name: 'Prawns Biryani', description: 'Coastal style prawn biryani', price: 300, category: 'lunch', isVeg: false, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80' }
      ]
    }
  ];

  export const getProviderMenuItems = (providerId: string): MenuItem[] => {
    const southIndianItems: MenuItem[] = [
      {
        id: '1',
        providerId,
        name: 'Idli Sambar',
        description: 'Soft steamed rice cakes served with lentil-based vegetable stew and coconut chutney',
        price: 80,
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500',
        category: 'Breakfast',
        rating: 4.7,
        isVeg: true,
        mealType: 'breakfast',
        availableFor: ['breakfast'],
        availableDates: ['today', 'tomorrow', 'all']
      },
      {
        id: '2',
        providerId,
        name: 'Masala Dosa',
        description: 'Crispy rice crepe filled with spiced potato masala, served with sambar and chutney',
        price: 120,
        image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500',
        category: 'Breakfast',
        rating: 4.9,
        isVeg: true,
        mealType: 'breakfast',
        availableFor: ['breakfast', 'snacks'],
        availableDates: ['today', 'tomorrow', 'all']
      },
      {
        id: '3',
        providerId,
        name: 'Medu Vada',
        description: 'Crispy deep-fried lentil donuts, served with sambar and coconut chutney',
        price: 70,
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500',
        category: 'Breakfast',
        rating: 4.6,
        isVeg: true,
        mealType: 'breakfast',
        availableFor: ['breakfast', 'snacks'],
        availableDates: ['today', 'tomorrow', 'all']
      },
      {
        id: '4',
        providerId,
        name: 'Plain Dosa',
        description: 'Thin, crispy rice and lentil crepe served with sambar and assorted chutneys',
        price: 90,
        image: 'https://images.unsplash.com/photo-1694159887284-afa72df0a815?w=500',
        category: 'Breakfast',
        rating: 4.5,
        isVeg: true,
        mealType: 'breakfast',
        availableFor: ['breakfast', 'snacks'],
        availableDates: ['today', 'tomorrow', 'all']
      },
      {
        id: '5',
        providerId,
        name: 'Uttapam',
        description: 'Thick rice pancake topped with onions, tomatoes, and green chilies',
        price: 110,
        image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=500',
        category: 'Breakfast',
        rating: 4.4,
        isVeg: true,
        mealType: 'breakfast',
        availableFor: ['breakfast', 'snacks'],
        availableDates: ['today', 'tomorrow', 'all']
      },
      {
        id: '6',
        providerId,
        name: 'Rava Idli',
        description: 'Steamed semolina cakes with mustard seeds, curry leaves, and cashews',
        price: 85,
        image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=500',
        category: 'Breakfast',
        rating: 4.3,
        isVeg: true,
        mealType: 'breakfast',
        availableFor: ['breakfast'],
        availableDates: ['today', 'tomorrow', 'all']
      },
      {
        id: '7',
        providerId,
        name: 'Pongal',
        description: 'Savory rice and lentil dish tempered with black pepper, cumin, and ghee',
        price: 95,
        image: 'https://images.unsplash.com/photo-1645696261929-a86d3be02f7f?w=500',
        category: 'Breakfast',
        rating: 4.6,
        isVeg: true,
        mealType: 'breakfast',
        availableFor: ['breakfast'],
        availableDates: ['today', 'tomorrow', 'all']
      },
      {
        id: '8',
        providerId,
        name: 'Upma',
        description: 'Savory semolina porridge with vegetables, curry leaves, and roasted cashews',
        price: 75,
        image: 'https://images.unsplash.com/photo-1665561969028-1c46b2e0d5fd?w=500',
        category: 'Breakfast',
        rating: 4.2,
        isVeg: true,
        mealType: 'breakfast',
        availableFor: ['breakfast'],
        availableDates: ['today', 'tomorrow', 'all']
      },
      {
        id: '9',
        providerId,
        name: 'Hyderabadi Biryani',
        description: 'Aromatic basmati rice layered with tender meat, saffron, and authentic spices',
        price: 280,
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500',
        category: 'Main Course',
        rating: 4.9,
        isVeg: false,
        mealType: 'lunch',
        availableFor: ['lunch', 'dinner'],
        availableDates: ['today', 'tomorrow', 'all']
      },
      {
        id: '10',
        providerId,
        name: 'Curd Rice',
        description: 'Cooling rice mixed with yogurt, tempered with mustard seeds and curry leaves',
        price: 80,
        image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500',
        category: 'Rice',
        rating: 4.5,
        isVeg: true,
        mealType: 'lunch',
        availableFor: ['lunch', 'dinner'],
        availableDates: ['today', 'tomorrow', 'all']
      },
      {
        id: '11',
        providerId,
        name: 'Bisi Bele Bath',
        description: 'Traditional Karnataka rice dish with lentils, vegetables, and special spice blend',
        price: 140,
        image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=500',
        category: 'Main Course',
        rating: 4.7,
        isVeg: true,
        mealType: 'lunch',
        availableFor: ['lunch', 'dinner'],
        availableDates: ['today', 'tomorrow', 'all']
      },
      {
        id: '12',
        providerId,
        name: 'Chicken Chettinad',
        description: 'Spicy chicken curry from Chettinad with freshly ground masala',
        price: 240,
        image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2fb0c2?w=500',
        category: 'Main Course',
        rating: 4.8,
        isVeg: false,
        mealType: 'lunch',
        availableFor: ['lunch', 'dinner'],
        availableDates: ['today', 'all']
      },
      {
        id: '13',
        providerId,
        name: 'Fish Curry',
        description: 'Tangy and spicy fish curry cooked in tamarind and coconut gravy',
        price: 260,
        image: 'https://images.unsplash.com/photo-1626845812960-f8912d6488bb?w=500',
        category: 'Main Course',
        rating: 4.6,
        isVeg: false,
        mealType: 'lunch',
        availableFor: ['lunch', 'dinner'],
        availableDates: ['today', 'all']
      },
      {
        id: '14',
        providerId,
        name: 'Lemon Rice',
        description: 'Tangy rice tempered with mustard seeds, peanuts, and turmeric',
        price: 90,
        image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500',
        category: 'Rice',
        rating: 4.4,
        isVeg: true,
        mealType: 'lunch',
        availableFor: ['lunch', 'dinner'],
        availableDates: ['today', 'tomorrow', 'all']
      },
      {
        id: '15',
        providerId,
        name: 'Tamarind Rice',
        description: 'Tangy rice flavored with tamarind, peanuts, and South Indian spices',
        price: 95,
        image: 'https://images.unsplash.com/photo-1645696261929-a86d3be02f7f?w=500',
        category: 'Rice',
        rating: 4.5,
        isVeg: true,
        mealType: 'lunch',
        availableFor: ['lunch', 'dinner'],
        availableDates: ['today', 'tomorrow', 'all']
      },
      {
        id: '16',
        providerId,
        name: 'Pesarattu',
        description: 'Andhra-style green gram dosa, crispy and nutritious',
        price: 100,
        image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500',
        category: 'Breakfast',
        rating: 4.6,
        isVeg: true,
        mealType: 'breakfast',
        availableFor: ['breakfast'],
        availableDates: ['tomorrow', 'all']
      },
      {
        id: '17',
        providerId,
        name: 'Appam with Stew',
        description: 'Soft rice pancakes served with coconut milk-based vegetable or chicken stew',
        price: 130,
        image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=500',
        category: 'Breakfast',
        rating: 4.7,
        isVeg: true,
        mealType: 'breakfast',
        availableFor: ['breakfast', 'dinner'],
        availableDates: ['today', 'tomorrow', 'all']
      },
      {
        id: '18',
        providerId,
        name: 'Puttu with Kadala Curry',
        description: 'Steamed rice cylinders served with spicy black chickpea curry',
        price: 110,
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500',
        category: 'Breakfast',
        rating: 4.5,
        isVeg: true,
        mealType: 'breakfast',
        availableFor: ['breakfast'],
        availableDates: ['today', 'tomorrow', 'all']
      },
      {
        id: '19',
        providerId,
        name: 'Rasam',
        description: 'Tangy and spicy South Indian soup made with tamarind and tomatoes',
        price: 60,
        image: 'https://images.unsplash.com/photo-1626845812960-f8912d6488bb?w=500',
        category: 'Soup',
        rating: 4.6,
        isVeg: true,
        mealType: 'lunch',
        availableFor: ['lunch', 'dinner'],
        availableDates: ['today', 'tomorrow', 'all']
      },
      {
        id: '20',
        providerId,
        name: 'Filter Coffee',
        description: 'Traditional South Indian filter coffee with milk and chicory',
        price: 40,
        image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=500',
        category: 'Beverages',
        rating: 4.9,
        isVeg: true,
        mealType: 'breakfast',
        availableFor: ['breakfast', 'snacks'],
        availableDates: ['today', 'tomorrow', 'all']
      }
    ];
  
    return southIndianItems;
  };