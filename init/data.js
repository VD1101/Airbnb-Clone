// const sampleListings = [
//     {
//       title: "Cozy Beachfront Cottage",
//       description:
//         "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 1500,
//       location: "Malibu",
//       country: "United States",
//     },
//     {
//       title: "Modern Loft in Downtown",
//       description:
//         "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 1200,
//       location: "New York City",
//       country: "United States",
//     },
//     {
//       title: "Mountain Retreat",
//       description:
//         "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 1000,
//       location: "Aspen",
//       country: "United States",
//     },
//     {
//       title: "Historic Villa in Tuscany",
//       description:
//         "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 2500,
//       location: "Florence",
//       country: "Italy",
//     },
//     {
//       title: "Secluded Treehouse Getaway",
//       description:
//         "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 800,
//       location: "Portland",
//       country: "United States",
//     },
//     {
//       title: "Beachfront Paradise",
//       description:
//         "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 2000,
//       location: "Cancun",
//       country: "Mexico",
//     },
//     {
//       title: "Rustic Cabin by the Lake",
//       description:
//         "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 900,
//       location: "Lake Tahoe",
//       country: "United States",
//     },
//     {
//       title: "Luxury Penthouse with City Views",
//       description:
//         "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 3500,
//       location: "Los Angeles",
//       country: "United States",
//     },
//     {
//       title: "Ski-In/Ski-Out Chalet",
//       description:
//         "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 3000,
//       location: "Verbier",
//       country: "Switzerland",
//     },
//     {
//       title: "Safari Lodge in the Serengeti",
//       description:
//         "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 4000,
//       location: "Serengeti National Park",
//       country: "Tanzania",
//     },
//     {
//       title: "Historic Canal House",
//       description:
//         "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 1800,
//       location: "Amsterdam",
//       country: "Netherlands",
//     },
//     {
//       title: "Private Island Retreat",
//       description:
//         "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 10000,
//       location: "Fiji",
//       country: "Fiji",
//     },
//     {
//       title: "Charming Cottage in the Cotswolds",
//       description:
//         "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 1200,
//       location: "Cotswolds",
//       country: "United Kingdom",
//     },
//     {
//       title: "Historic Brownstone in Boston",
//       description:
//         "Step back in time in this elegant historic brownstone located in the heart of Boston.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 2200,
//       location: "Boston",
//       country: "United States",
//     },
//     {
//       title: "Beachfront Bungalow in Bali",
//       description:
//         "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 1800,
//       location: "Bali",
//       country: "Indonesia",
//     },
//     {
//       title: "Mountain View Cabin in Banff",
//       description:
//         "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 1500,
//       location: "Banff",
//       country: "Canada",
//     },
//     {
//       title: "Art Deco Apartment in Miami",
//       description:
//         "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
//       image: {
//         filename: "listingimage",
//         url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 1600,
//       location: "Miami",
//       country: "United States",
//     },
//     {
//       title: "Tropical Villa in Phuket",
//       description:
//         "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 3000,
//       location: "Phuket",
//       country: "Thailand",
//     },
//     {
//       title: "Historic Castle in Scotland",
//       description:
//         "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 4000,
//       location: "Scottish Highlands",
//       country: "United Kingdom",
//     },
//     {
//       title: "Desert Oasis in Dubai",
//       description:
//         "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 5000,
//       location: "Dubai",
//       country: "United Arab Emirates",
//     },
//     {
//       title: "Rustic Log Cabin in Montana",
//       description:
//         "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 1100,
//       location: "Montana",
//       country: "United States",
//     },
//     {
//       title: "Beachfront Villa in Greece",
//       description:
//         "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 2500,
//       location: "Mykonos",
//       country: "Greece",
//     },
//     {
//       title: "Eco-Friendly Treehouse Retreat",
//       description:
//         "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 750,
//       location: "Costa Rica",
//       country: "Costa Rica",
//     },
//     {
//       title: "Historic Cottage in Charleston",
//       description:
//         "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 1600,
//       location: "Charleston",
//       country: "United States",
//     },
//     {
//       title: "Modern Apartment in Tokyo",
//       description:
//         "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 2000,
//       location: "Tokyo",
//       country: "Japan",
//     },
//     {
//       title: "Lakefront Cabin in New Hampshire",
//       description:
//         "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 1200,
//       location: "New Hampshire",
//       country: "United States",
//     },
//     {
//       title: "Luxury Villa in the Maldives",
//       description:
//         "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 6000,
//       location: "Maldives",
//       country: "Maldives",
//     },
//     {
//       title: "Ski Chalet in Aspen",
//       description:
//         "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 4000,
//       location: "Aspen",
//       country: "United States",
//     },
//     {
//       title: "Secluded Beach House in Costa Rica",
//       description:
//         "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 1800,
//       location: "Costa Rica",
//       country: "Costa Rica",
//     },
//   ];
const sampleListings = [
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: [
      {
        filename: "beachfront_cottage",
        url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      {
        filename: "downtown_loft",
        url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
    ],
    price: 1800,
    location: "Guanacaste, Costa Rica",
    country: "Costa Rica",
    reviews: [],
    owner: null,
    amenities: ["Wi-Fi", "Kitchen", "Ocean view", "BBQ grill"],
    contact: {
      email: "info@beachhousecr.com",
      phone: "+506 555-0199",
    },
    geometry :   {
      type: "Point",
      coordinates: [-85.850013, 10.299736], // Guanacaste, Costa Rica
    },
    categories : 'Trending',
  },

  {
    title: "Luxury Apartment in Paris",
    description:
      "Experience the charm of Paris in this luxurious apartment with stunning views of the Eiffel Tower.",
    image: [
      {
        filename: "paris_apartment_exterior",
        url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      {
        filename: "paris_apartment_interior",
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
    ],
    price: 250,
    location: "Paris, France",
    country: "France",
    reviews: [],
    owner: null,
    amenities: ["Wi-Fi", "Air conditioning", "Breakfast included", "Balcony"],
    contact: {
      email: "contact@luxuryparis.com",
      phone: "+33 1 42 68 53 00",
    },
    geometry :      {
      type: "Point",
      coordinates: [2.352222, 48.856613], // Paris, France
    },
    categories: 'Trending',

  },
  {
    title: "Modern Villa in Bali",
    description:
      "Relax in this stunning modern villa surrounded by lush gardens and a private infinity pool.",
    image: [
      {
        filename: "bali_villa_exterior",
        url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      {
        filename: "bali_villa_interior",
        url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      {
        filename: "bali_villa_pool",
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
    ],
    price: 350,
    location: "Ubud, Bali",
    country: "Indonesia",
    reviews: [],
    owner: null,
    amenities: ["Wi-Fi", "Private pool", "Spa services", "Free breakfast"],
    contact: {
      email: "info@bali-villa.com",
      phone: "+62 361 123 4567",
    },
    geometry :   {
      type: "Point",
      coordinates: [115.262477, -8.506926], // Ubud, Bali, Indonesia
    },
    categories: 'Trending',

  },
  {
    title: "Mountain Cabin in Colorado",
    description:
      "Enjoy the serene beauty of the Rockies in this cozy mountain cabin with breathtaking views.",
    image: [
      {
        filename: "colorado_cabin_exterior",
        url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      {
        filename: "colorado_cabin_interior",
        url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
    ],
    price: 300,
    location: "Aspen, Colorado",
    country: "USA",
    reviews: [],
    owner: null,
    amenities: ["Wi-Fi", "Fireplace", "Ski access", "BBQ grill"],
    contact: {
      email: "stay@coloradocabin.com",
      phone: "+1 970-555-0198",
    },
    geometry :    {
      type: "Point",
      coordinates: [-106.820485, 39.191098], // Aspen, Colorado, USA
    },
    categories: 'Arctic',

  },
  {
    title: "Beachfront Villa in Mykonos",
    description:
      "Indulge in luxury at this beautiful beachfront villa with stunning sea views and private beach access.",
    image: [
      {
        filename: "mykonos_villa_exterior",
        url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      {
        filename: "mykonos_villa_interior",
        url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      {
        filename: "mykonos_villa_view",
        url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
    ],
    price: 500,
    location: "Mykonos, Greece",
    country: "Greece",
    reviews: [],
    owner: null,
    amenities: ["Wi-Fi", "Private beach", "Jacuzzi", "Concierge service"],
    contact: {
      email: "info@mykonosvilla.com",
      phone: "+30 22890 12345",
    },
    geometry :  {
      type: "Point",
      coordinates: [25.396900, 37.445016], // Mykonos, Greece
    },
    categories: 'Trending',
  
  },
  // newlisting 


  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: [
      {
        filename: "beachfront_cottage",
        url: "https://cdn.pixabay.com/photo/2020/10/13/13/28/ameland-5651866_1280.jpg",
      },
      {
        filename: "downtown_loft",
        url: "https://cdn.pixabay.com/photo/2023/02/26/20/02/bornrif-7816848_1280.jpg",
      },
    ],
    price: 1800,
    location: "Guanacaste, Costa Rica",
    country: "Costa Rica",
    reviews: [],
    owner: null,
    amenities: ["Wi-Fi", "Kitchen", "Ocean view", "BBQ grill"],
    contact: {
      email: "info@beachhousecr.com",
      phone: "+506 555-0199",
    },
    geometry: {
      type: "Point",
      coordinates: [-85.850013, 10.299736], // Guanacaste, Costa Rica
    },
    categories: 'Trending',
  },
  {
    title: "Charming Tiny House in the Woods",
    description:
      "Experience the charm of tiny living in a cozy tiny house nestled in the woods. Perfect for a peaceful retreat.",
    image: [
      {
        filename: "tiny_house",
        url: "https://cdn.pixabay.com/photo/2015/08/25/14/16/small-wooden-house-906912_1280.jpg",
      },
    ],
    price: 150,
    location: "Asheville, North Carolina",
    country: "USA",
    reviews: [],
    owner: null,
    amenities: ["Wi-Fi", "Kitchen", "Fireplace"],
    contact: {
      email: "info@tinyhouseasheville.com",
      phone: "+1 828-555-0199",
    },
    geometry: {
      type: "Point",
      coordinates: [-82.5345, 35.5951], // Asheville, NC
    },
    categories: 'Tinyhomes',
  },
  {
    title: "Stunning Infinity Pool Villa",
    description:
      "Enjoy luxury living in this stunning villa with an infinity pool and breathtaking ocean views.",
    image: [
      {
        filename: "infinity_pool_villa",
        url: "https://cdn.pixabay.com/photo/2023/11/07/13/44/house-8372418_1280.jpg",
      },
      {
        filename: "infinity_pool_villa-2",
        url: "https://cdn.pixabay.com/photo/2019/10/17/02/39/villa-4555818_1280.jpg",
      },
    ],
    price: 3500,
    location: "Malibu, California",
    country: "USA",
    reviews: [],
    owner: null,
    amenities: ["Wi-Fi", "Infinity pool", "Ocean view", "BBQ grill"],
    contact: {
      email: "info@malibuvilla.com",
      phone: "+1 310-555-0199",
    },
    geometry: {
      type: "Point",
      coordinates: [-118.6682, 34.0259], // Malibu, CA
    },
    categories: 'Amazingpools',
  },
  {
    title: "Ski-In/Ski-Out Mountain Cabin",
    description:
      "This cozy mountain cabin is perfect for ski enthusiasts with direct access to the slopes.",
    image: [
      {
        filename: "ski_cabin",
        url: "https://cdn.pixabay.com/photo/2024/02/17/13/38/cabin-8579310_1280.jpg",
        
      },
      {
        filename: "ski_cabin",
        url: "https://cdn.pixabay.com/photo/2017/11/18/19/58/cabin-2961098_1280.jpg",

      },
      {
        filename: "ski_cabin",
        url: "https://cdn.pixabay.com/photo/2024/08/06/11/07/cabin-8949074_1280.jpg",

      },
    ],
    price: 500,
    location: "Aspen, Colorado",
    country: "USA",
    reviews: [],
    owner: null,
    amenities: ["Wi-Fi", "Kitchen", "Ski-in/Ski-out"],
    contact: {
      email: "info@aspen-cabin.com",
      phone: "+1 970-555-0199",
    },
    geometry: {
      type: "Point",
      coordinates: [-106.8175, 39.1925], // Aspen, CO
    },
    categories: 'Ski-in/out',
  },
  {
    title: "Luxurious Beachfront Villa",
    description:
      "Relax in this luxurious villa located right on the beach, perfect for a family getaway.",
    image: [
      {
        filename: "beachfront_villa",
        url: "https://cdn.pixabay.com/photo/2021/04/05/18/02/villa-balbiano-6154200_1280.jpg",
      },
    ],
    price: 4200,
    location: "Bali, Indonesia",
    country: "Indonesia",
    reviews: [],
    owner: null,
    amenities: ["Wi-Fi", "Private pool", "Beach access"],
    contact: {
      email: "info@bali-villa.com",
      phone: "+62 21-555-0199",
    },
    geometry: {
      type: "Point",
      coordinates: [115.1695, -8.4095], // Bali, Indonesia
    },
    categories: 'Beach',
  },
  {
    title: "Beautiful Campsite in the Woods",
    description:
      "Enjoy nature at this beautiful campsite surrounded by trees, with amenities for a comfortable stay.",
    image: [
      {
        filename: "campsite",
        url: "https://cdn.pixabay.com/photo/2022/01/27/16/32/construction-machine-6972531_1280.jpg",
      },
    ],
    price: 75,
    location: "Lake Tahoe, California",
    country: "USA",
    reviews: [],
    owner: null,
    amenities: ["Firepit", "Restroom facilities", "Picnic area"],
    contact: {
      email: "info@tahoecampsite.com",
      phone: "+1 530-555-0199",
    },
    geometry: {
      type: "Point",
      coordinates: [-120.0353, 39.0968], // Lake Tahoe, CA
    },
    categories: 'Camping',
  },
  {
    title: "Cozy Houseboat on the Water",
    description:
      "Experience life on the water in this cozy houseboat, perfect for relaxing and fishing.",
    image: [
      {
        filename: "houseboat",
        url: "https://cdn.pixabay.com/photo/2020/03/21/20/03/real-estate-4955087_1280.jpg",
      },
    ],
    price: 200,
    location: "Seattle, Washington",
    country: "USA",
    reviews: [],
    owner: null,
    amenities: ["Wi-Fi", "Kitchen", "Fishing gear"],
    contact: {
      email: "info@seattlehouseboat.com",
      phone: "+1 206-555-0199",
    },
    geometry: {
      type: "Point",
      coordinates: [-122.3352, 47.6062], // Seattle, WA
    },
    categories: 'Boat',
  },
  {
    title: "Stunning Tower House",
    description:
      "Live like royalty in this stunning tower house with panoramic views and luxurious amenities.",
    image: [
      {
        filename: "tower_house",
        url: "https://cdn.pixabay.com/photo/2017/07/28/00/03/thuringia-germany-2547256_1280.jpg",
      },
    ],
    price: 3000,
    location: "New York, New York",
    country: "USA",
    reviews: [],
    owner: null,
    amenities: ["Wi-Fi", "Roof terrace", "Panoramic views"],
    contact: {
      email: "info@towerhouse.com",
      phone: "+1 212-555-0199",
    },
    geometry: {
      type: "Point",
      coordinates: [-74.0060, 40.7128], // New York, NY
    },
    categories: 'Tower',
  },
  {
    title: "Eco-Friendly Earth Home",
    description:
      "Stay in this eco-friendly earth home built with sustainable materials, offering comfort and nature.",
    image: [
      {
        filename: "earth_home",
        url: "https://cdn.pixabay.com/photo/2022/01/26/04/47/house-6967908_1280.jpg",
      },
      {
        filename: "earth_home",
        url: "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
      },
    ],
    price: 220,
    location: "Sedona, Arizona",
    country: "USA",
    reviews: [],
    owner: null,
    amenities: ["Wi-Fi", "Kitchen", "Garden"],
    contact: {
      email: "info@earthhome.com",
      phone: "+1 928-555-0199",
    },
    geometry: {
      type: "Point",
      coordinates: [-111.7610, 34.8697], // Sedona, AZ
    },
    categories: 'EarthHomes',
  },
  {
    title: "Unique Arctic Cabin Experience",
    description:
      "Experience the unique Arctic cabin life with stunning views and the possibility of seeing the Northern Lights.",
    image: [
      {
        filename: "arctic_cabin",
        url: "https://cdn.pixabay.com/photo/2016/11/19/14/30/aurora-borealis-1839582_1280.jpg",
      },
    ],
    price: 500,
    location: "Reykjavik, Iceland",
    country: "Iceland",
    reviews: [],
    owner: null,
    amenities: ["Wi-Fi", "Heating", "Sauna"],
    contact: {
      email: "info@arcticcabin.com",
      phone: "+354 555-0199",
    },
    geometry: {
      type: "Point",
      coordinates: [-21.8277, 64.1355], // Reykjavik, Iceland
    },
    categories: 'Arctic',
  },
];

module.exports = { data: sampleListings };
