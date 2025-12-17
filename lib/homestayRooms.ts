export const homestayRooms = {
  "family-room": {
    name: "Family Room",
    price: 12000,
    guests: 4,
    images: ["/rooms/family.jpg", "/rooms/family-2.jpg", "/rooms/family-3.jpg"],
    description:
      "Spacious luxury family room surrounded by paddy fields, offering comfort, privacy, and peaceful village views.",
  },
  "double-room": {
    name: "Double Room",
    price: 9000,
    guests: 2,
    images: ["/rooms/double.jpg", "/rooms/double-2.jpg"],
    description:
      "Elegant double room ideal for couples seeking a tranquil safari retreat near Udawalawe National Park.",
  },
  "triple-room": {
    name: "Triple Room",
    price: 10000,
    guests: 3,
    images: ["/rooms/triple.jpg", "/rooms/triple-2.jpg"],
    description:
      "Comfortable triple room perfect for friends or small families, blending nature, luxury, and privacy.",
  },
} as const;
