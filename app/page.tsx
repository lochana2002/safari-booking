  import HeroCarousel from "../components/HeroCarousel";

  export default function Home() {

    // Reusable wildlife section component
    const AnimalSection = ({ title, description, image, reverse, link }) => {
      return (
        <div
          className={`grid md:grid-cols-2 gap-16 items-center ${
            reverse ? "md:[direction:rtl]" : ""
          }`}
        >
          {/* Text */}
          <div className="space-y-6 [direction:ltr]">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {title}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {description}
            </p>

            {/* View More button */}
            <a
              href={link || "/wildlife"}
              className="inline-block px-8 py-3 bg-[#899b22] hover:bg-[#70841a] text-white font-semibold rounded-full shadow-lg transition"
            >
              View More
            </a>
          </div>

          {/* Image */}
          <div>
           <img
  src={image}
  alt={title}
  className="
    w-full 
    h-[220px] 
    md:h-[260px] 
    object-cover 
    rounded-xl 
    shadow-lg
  "
  loading="lazy"
/>

          </div>
        </div>
      );
    };

    return (
      <main className="bg-white min-h-screen w-full">

        {/* FULLSCREEN HERO */}
        <section className="w-full h-screen bg-white">
          <HeroCarousel />
        </section>

        {/* INTRO */}
       <section className="relative text-center space-y-3 px-6 py-20
                   bg-gradient-to-b from-green-50 to-white">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Book Your Wildlife Adventure
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Discover Sri Lanka’s incredible wildlife sanctuary. Witness majestic
            elephants, exotic birds, crocodiles, and the stunning grasslands of
            Udawalawe — guided by local experts who know the park best.
          </p>

          <div className="flex justify-center">
            <a
              href="/safari-packages"
              className="px-8 py-3 mt-4 bg-green-600 hover:bg-green-700 text-white text-lg font-medium rounded-full shadow-lg transition"
            >
              View Safari Packages
            </a>
          </div>
        </section>

        {/* WILDLIFE SECTIONS */}
        <section className="max-w-7xl mx-auto px-6 py-20 space-y-10">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
            Wildlife You Will See in Udawalawe
          </h2>

          <AnimalSection 
            title="Asian Elephants"
            description="Udawalawe is home to over 600 wild elephants, making it one of the best places in the world to witness them in natural herds. Visitors often see mothers with calves, playful juveniles, and majestic adults roaming the grasslands."
            image="/ele.jpg"
            link="/wildlife/elephants"
          />

          <AnimalSection
            title="Sri Lankan Leopards"
            description="Leopards are rare but unforgettable. These elusive predators roam Udawalawe’s dense bushes and rocky areas. Early morning safaris give you the best chance to spot one."
            image="/leo.jpg"
            reverse
            link="/wildlife/leopards"
          />

          <AnimalSection
            title="Mugger Crocodiles"
            description="Udawalawe’s lakes and waterholes are populated by mugger crocodiles. You’ll often spot them sunbathing on riverbanks or gliding silently through the water."
            image="/cro.jpg"
            link="/wildlife/crocodiles"
          />

          <AnimalSection
            title="Spotted Deer"
            description="Graceful spotted deer are commonly seen grazing in open fields or wandering through forest patches. Their elegant movements make them a favorite among wildlife enthusiasts."
            image="/deer.jpg"
            reverse
            link="/wildlife/deer"
          />

          <AnimalSection
            title="Over 200 Bird Species"
            description="Udawalawe is a paradise for bird lovers with eagles, owls, bee-eaters, kingfishers, and many migratory species filling the skies and trees."
            image="/bird.jpg"
            link="/wildlife/birds"
          />

           <AnimalSection
            title="Monkeys"
            description="Graceful spotted deer are commonly seen grazing in open fields or wandering through forest patches. Their elegant movements make them a favorite among wildlife enthusiasts."
            image="/mon.jpg"
            reverse
            link="/wildlife/deer"
          />

          <AnimalSection
            title="Wild Buffalo "
            description="Graceful spotted deer are commonly seen grazing in open fields or wandering through forest patches. Their elegant movements make them a favorite among wildlife enthusiasts."
            image="/b.jpg"
            link="/wildlife/deer"
          />
        </section>
          {/* 🏡 BUNGALOWS SECTION */}
          
      <section id="bungalows" className="max-w-7xl mx-auto px-6 py-20 space-y-20">

          <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
            Stay Inside Udawalawe National Park
          </h2>

          <AnimalSection
            title="Gonawiddagala Bungalow"
            description="Experience a peaceful stay inside Udawalawe National Park. These official wildlife bungalows offer the closest possible connection to nature — surrounded by elephants, birds, and breathtaking sunrise views. Ideal for families, photographers, and nature lovers looking for an unforgettable stay."
            image="/gonawiddagala-bungalow-udawalawe.jpg"
            link="/bungalows/park-bungalows"
          />

          <AnimalSection
            title="Thibiriyamankada Bungalow"
            description="Enjoy comfort with nature at the river-view eco lodge, located deep inside the forest edge. Watch wildlife from your private veranda while listening to the calming sounds of the river."
            image="/thimbiriyamankada-bungalow-.jpg"
            link="/bungalows/eco-lodge"
          />

            <AnimalSection
            title="Pokunuthenna Bungalow"
            description="Enjoy comfort with nature at the river-view eco lodge, located deep inside the forest edge. Watch wildlife from your private veranda while listening to the calming sounds of the river."
            image="/pokunuthenna-bungalow-udawa.jpg"
            link="/bungalows/eco-lodge"
          />

          <AnimalSection
            title="Senuggala Bungalow"
            description="A premium stay option for travelers who want both comfort and wilderness. Private rooms, air-conditioning, guided night walks, and exclusive viewing decks."
            image="/senuggala.jpg"
            link="/bungalows/luxury-cottage"
          />
        </section>

        <section id="other" className="max-w-7xl mx-auto px-6 py-20">
  <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
    Other Places to Visit
  </h2>

  <div className="grid md:grid-cols-3 gap-10">

    {[
      {
        img: "/orp.jpg",
        title: "Elephant Transit Home",
        text: "A sanctuary for orphaned baby elephants where visitors can watch feeding sessions.",
        link: "https://www.dwc.gov.lk/elephant-transit-home" // <-- ADD OFFICIAL URL
      },
      {
        img: "/dam.jpg",
        title: "Udawalawe Reservoir",
        text: "A beautiful scenic spot perfect for photography and calm sunsets.",
        link: "https://en.wikipedia.org/wiki/Udawalawe_Reservoir" // <-- Replace with real URL
      },
      {
        img: "/san.jpg",
        title: "Sankhapala Viharaya",
        text: "An ancient cave temple with historical and spiritual importance.",
        link: "https://lakpura.com/sankhapala-raja-maha-viharaya" // <-- Replace if needed
      },
      {
        img: "/hot.jpg",
        title: "Madunagala Hot Springs",
        text: "Natural hot springs — a relaxing stop after a safari adventure.",
        link: "https://www.lovesrilanka.org/madunagala-hot-springs/" // <-- Replace if needed
      },
      {
        img: "/madu.webp",
        title: "Maduwanwela Walawwa",
        text: "A historic colonial-era mansion with unique architecture.",
        link: "https://amazinglanka.com/wp/maduwanwela-walawwa/" // <-- Replace if needed
      },
      {
        img: "/waw.jpg",
        title: "Waulpane Limestone Cave",
        text: "A stunning limestone cave with ancient formations.",
        link: "https://amazinglanka.com/wp/waulpane-cave/" // <-- Replace if needed
      },
    ].map((place, i) => (
      <div
        key={i}
        className="relative bg-white shadow-lg rounded-2xl overflow-hidden group"
      >
        {/* Image */}
        <img
          src={place.img}
          alt={place.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
        />

        {/* Hover Overlay */}
        <div
          className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 
                     flex items-center justify-center transition duration-500"
        >
          <a
            href={place.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-white text-gray-900 font-semibold rounded-full shadow-lg 
                       hover:bg-gray-200 transition"
          >
            Show More
          </a>
        </div>

        {/* Text */}
        <div className="p-6 space-y-3">
          <h3 className="text-xl text-gray-800 font-semibold">{place.title}</h3>
          <p className="text-gray-600">{place.text}</p>
        </div>
      </div>
    ))}
  </div>
</section>
{/* 🏨 HOTELS SECTION */}
<section id="hotels" className="max-w-7xl mx-auto px-6 py-20">

  <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
    Hotels in Udawalawe
  </h2>

  <p className="text-center text-gray-600 mb-12">
    There are many hotels in Udawalawe. Below are some of the best.
  </p>

  <div className="grid md:grid-cols-2 gap-12">

    {[
      {
        img: "/cent.jpg",
        title: "Centauria Wild",
        link: "https://www.centauriahotels.com/centauriawild/" // official
      },
      {
        img: "/grand.webp",
        title: "Grand Udawalawe Safari Resort",
        link: "https://www.grandudawalawe.com/" // official
      },
      {
        img: "/kalus.jpg",
        title: "Kalu's Hideaway",
        link: "https://kalushideaway.com/" // official
      },
      {
        img: "/trail.webp",
        title: "Elephant Trail",
        link: "https://www.elephanttrail.lk/" // official
      }
    ].map((hotel, i) => (
      <div
        key={i}
        className="relative rounded-2xl overflow-hidden shadow-xl group"
      >
        {/* Image */}
        <img
          src={hotel.img}
          alt={hotel.title}
          className="w-full h-[350px] object-cover group-hover:scale-105 transition duration-700"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-500"></div>

        {/* Hotel Name */}
        <h3 className="absolute bottom-6 left-6 text-3xl font-semibold text-white drop-shadow-lg">
          {hotel.title}
        </h3>

        {/* Show More Button on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
          <a
            href={hotel.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-white text-gray-900 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition"
          >
            Show More
          </a>
        </div>
      </div>
    ))}

  </div>
</section>

{/* Floating WhatsApp Button */}
<a
  href="https://wa.me/94770443323"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white 
             w-14 h-14 rounded-full flex items-center justify-center shadow-xl 
             animate-bounce"
>
  <img src="/wa.png" alt="WhatsApp" className="w-8 h-8" />
</a>



      </main>
    );
  }
