export const homestayRooms = {
  "family-room": {
    name: "Family Room",
    price: 12000,
    guests: 4,
    images: ["/images/family.jpg", "/images/bath.avif", "/images/garden1.jpg"],
    description: `Spacious luxury family room surrounded by beautiful paddy fields, offering a peaceful and relaxing village atmosphere.

This room is designed for families who want both comfort and privacy while enjoying nature. Large windows provide stunning garden and countryside views, creating a calm and refreshing environment.

Perfect for guests looking to unwind after a safari, the room includes modern amenities, comfortable bedding, and easy access to outdoor spaces where you can enjoy fresh air and scenic surroundings.`,
  },

  "double-room": {
    name: "Double Room",
    price: 9000,
    guests: 2,
    images: ["/images/double.webp", "/images/bathroom.jpg", "/images/balc.jpg"],
    description: `Elegant and cozy double room designed for couples seeking a peaceful safari getaway near Udawalawe National Park.

The room features a comfortable bed, private bathroom, and a relaxing atmosphere ideal for unwinding after a day of adventure. Enjoy quiet mornings and serene evenings with beautiful natural surroundings.

It is the perfect choice for travelers looking for a romantic and tranquil stay close to nature.`,
  },

  "triple-room": {
    name: "Triple Room",
    price: 10000,
    guests: 3,
    images: ["/images/triple.jpg", "/images/bathrooms.jpg", "/images/balcany.jpg"],
    description: `Comfortable and spacious triple room ideal for small families or groups of friends traveling together.

The room combines modern comfort with a natural setting, offering a relaxing space after exploring the nearby wildlife and safari experiences. Guests can enjoy peaceful views and fresh air from the surrounding greenery.

A perfect balance of affordability, comfort, and convenience for a memorable stay.`,
  },
} as const;