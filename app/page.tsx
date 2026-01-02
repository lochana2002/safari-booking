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
    {description}{" "}
    <a
      href={link || "/wildlife"}
      className="text-green-800 font-semibold hover:underline"
    >
      View more →
    </a>
  </p>
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
              className="px-8 py-3 mt-4 bg-green-900 hover:bg-green-700 text-white text-lg font-medium rounded-full shadow-lg transition"
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
            image="https://srilankatravelpages.com/my_content/uploads/2023/01/Safari-at-Udawalawe-National-Park.jpg"
            link="https://www.google.com/search?num=12&sca_esv=7a0616c681a8c1ce&biw=1536&bih=730&sxsrf=AE3TifNwVPeLpnHTGxNjgkpvuhQMifynFw:1765871192286&q=asian+elephants+udawalawe+national+park&source=lnms&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIeoJTKjrFjVxydQWqI2NcOhZS8MA-siX0k7PIasuZieEw14M7UD0tohisAhRzHKZKbhzIR_nHYiQKQ5uSxMY0LmduGcinHTimiZZ5rqafr57YJLiXaxJso7_ydGLdROecWj22Tn-o6hBASyKjiDOK9lcUSvB2UASJPOSzqxPjEMD0zNIwjA&sa=X&ved=2ahUKEwiPoorpzsGRAxX3bfUHHfb1LusQ0pQJegQIEhAB"
          />

          <AnimalSection
            title="Sri Lankan Leopards"
            description="Leopards are rare but unforgettable. These elusive predators roam Udawalawe’s dense bushes and rocky areas. Early morning safaris give you the best chance to spot one."
            image="https://lakpura.com/cdn/shop/products/LK60400100-04-E-1280-720.jpg?v=1624589437&width=1445"
            reverse
            link="/wildlife/leopards"
          />

          <AnimalSection
            title="Mugger Crocodiles"
            description="Udawalawe’s lakes and waterholes are populated by mugger crocodiles. You’ll often spot them sunbathing on riverbanks or gliding silently through the water."
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLg77HAMako-whhLCagzzTbnKYXASlnRt49Q&s"
            link="https://www.google.com/search?q=umugger+crocodiles+in+udawalawe+national+park&oq=uMugger+Crocodiles+in+U&gs_lcrp=EgZjaHJvbWUqCQgBECEYChigATIGCAAQRRg5MgkIARAhGAoYoAEyCQgCECEYChigATIJCAMQIRgKGKABMgcIBBAhGI8CMgcIBRAhGI8C0gEIODI4MWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8"
          />

          <AnimalSection
            title="Spotted Deer"
            description="Graceful spotted deer are commonly seen grazing in open fields or wandering through forest patches. Their elegant movements make them a favorite among wildlife enthusiasts."
            image="https://lakpura.com/cdn/shop/products/LK50A01000-05-E_6d95534e-1e1b-4755-ad7a-2123c7f55aef.jpg?v=1647864879&width=1445"
            reverse
            link="/wildlife/deer"
          />

          <AnimalSection
            title="Over 200 Bird Species"
            description="Udawalawe is a paradise for bird lovers with eagles, owls, bee-eaters, kingfishers, and many migratory species filling the skies and trees."
            image="https://www.srilankabirdwatchingtours.com/images/bird-watching-sites-in-sri-lanka/udawalawe-national-park/03.jpg"
            link="https://www.google.com/search?sca_esv=7a0616c681a8c1ce&sxsrf=AE3TifPCNsNEsirKqCKeg3GqBNN0TdoNqg:1765871367364&q=udawalawe+national+park+birds&source=lnms&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIeuYzzFkfneXafNx6OMdA4MTXyu5H4ujQUk9NJfWNLZkpoIVdtbbGRl_5hUmh4qcft-7jZjAizP-oICnEdG9KwdFzJb3c8brhzc-5i4IQHyDOgRHbUFUt3Yazy85Z0Ub47_6h4C3tH7uzHru2eVDXw83556AkbTUwlei5H9mmd2VC7yLUPg&sa=X&ved=2ahUKEwjbnci8z8GRAxXXnK8BHYVPHbcQ0pQJegQIERAB"
          />

           <AnimalSection
            title="Monkeys"
            description="Graceful spotted deer are commonly seen grazing in open fields or wandering through forest patches. Their elegant movements make them a favorite among wildlife enthusiasts."
            image="https://cdn.audleytravel.com/1050/750/79/16027168-family-of-tufted-gray-langurs-udawalawe-national-park.webp"
            reverse
            link="/wildlife/deer"
          />

        <p className="text-center text-lg text-gray-600 max-w-10xl mx-auto mb-12">
  In addition to these iconic animals, Udawalawe National Park is also home to
  wild buffaloes, sambar deer, jackals, monkeys, snakes, tortoises, monitor
  lizards, and many other reptiles and mammals that thrive in its diverse
  habitats.
</p>
        </section>

          {/* 🏡 BUNGALOWS SECTION */}   
      <section id="bungalows" className="max-w-7xl mx-auto px-6 py-20 space-y-20">

          <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
            Stay Inside Udawalawe National Park
          </h2>

          <AnimalSection
            title="Gonawiddagala Bungalow"
            description="Experience a peaceful stay inside Udawalawe National Park. These official wildlife bungalows offer the closest possible connection to nature — surrounded by elephants, birds, and breathtaking sunrise views. Ideal for families, photographers, and nature lovers looking for an unforgettable stay."
            image="https://www.lankatravelguide.com/wp-content/uploads/2024/11/gonawiddagala-bungalow-udawalawe.jpg"
            link="https://www.google.com/search?q=gonawiddagala+bungalow+at+udawalawe+national+park&sca_esv=7a0616c681a8c1ce&sxsrf=AE3TifNOLZygOvPSg4LV8WG-jj6_VnjZIQ%3A1765871544109&ei=uA9BacmtBrjq1e8PqMLi2Aw&oq=Gonawiddagala+Bungalow&gs_lp=Egxnd3Mtd2l6LXNlcnAiFkdvbmF3aWRkYWdhbGEgQnVuZ2Fsb3cqAggBMgYQABgWGB4yCBAAGKIEGIkFMggQABiABBiiBDIIEAAYgAQYogQyCBAAGIAEGKIEMgUQABjvBUjQOlDgGFjgGHACeAGQAQCYAeMCoAHjAqoBAzMtMbgBAcgBAPgBAfgBApgCA6ACmgOoAhDCAgoQABiwAxjWBBhHwgINECMYgAQYJxiKBRjqAsICBxAjGCcY6gLCAhAQIxjwBRiABBgnGIoFGOoCwgINECMY8AUYJxjJAhjqAsICExAjGPAFGIAEGCcYyQIYigUY6gLCAhcQABiABBiRAhi0AhjnBhiKBRjqAtgBAcICIBAuGIAEGJECGLQCGOcGGMcBGMgDGIoFGOoCGK8B2AEBmAMk8QXp74t9GBPfVYgGAZAGCLoGBggBEAEYAZIHBTIuMy0xoAfhA7IHAzMtMbgH6wLCBwcyLTIuMC4xyAcngAgA&sclient=gws-wiz-serp"
          />

          <AnimalSection
            title="Thibiriyamankada Bungalow"
            description="Enjoy comfort with nature at the river-view eco lodge, located deep inside the forest edge. Watch wildlife from your private veranda while listening to the calming sounds of the river."
            image="https://www.lankatravelguide.com/wp-content/uploads/2024/11/thimbiriyamankada-bungalow-.jpg"
            link="https://www.google.com/search?q=Thibiriyamankada+Bungalow++at+udawalawe+national+park&sca_esv=7a0616c681a8c1ce&sxsrf=AE3TifNdVMvZCoBF1E3CNZmvisK2FwLPgA%3A1765871613420&ei=_Q9BabWpGe27vr0Poo3gyQ8&ved=2ahUKEwj1m_Kx0MGRAxXtna8BHaIGOPkQ4dUDegQIBRAN&uact=5&oq=Thibiriyamankada+Bungalow++at+udawalawe+national+park&gs_lp=Egxnd3Mtd2l6LXNlcnAiNVRoaWJpcml5YW1hbmthZGEgQnVuZ2Fsb3cgIGF0IHVkYXdhbGF3ZSBuYXRpb25hbCBwYXJrMggQABiABBiiBDIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBDIFEAAY7wVIvD1QlAFYijBwAXgBkAEBmAHKAqAB_h2qAQYyLTE0LjG4AQPIAQD4AQH4AQKYAgagApMLwgIKEAAYsAMY1gQYR5gDAIgGAZAGApIHBzEuMC40LjGgB4U_sgcFMi00LjG4B4wLwgcFMC4xLjXIBxuACAA&sclient=gws-wiz-serp"
          />

            <AnimalSection
            title="Pokunuthenna Bungalow"
            description="Enjoy comfort with nature at the river-view eco lodge, located deep inside the forest edge. Watch wildlife from your private veranda while listening to the calming sounds of the river."
            image="https://www.lankatravelguide.com/wp-content/uploads/2024/11/pokunuthenna-bungalow-udawa.jpg"
            link="https://www.google.com/search?q=pokunuthenna+bungalow+at+udawalawe+national+park&sca_esv=7a0616c681a8c1ce&sxsrf=AE3TifPg50lYzbkUe6GY0AIrfAq4ED6pPA%3A1765871580084&ei=3A9BaaHmBL6h1e8PqYHI-Q0&ved=2ahUKEwihxP-h0MGRAxW-UPUHHakAMt8Q4dUDegQIBRAN&uact=5&oq=pokunuthenna+bungalow+at+udawalawe+national+park&gs_lp=Egxnd3Mtd2l6LXNlcnAiMHBva3VudXRoZW5uYSBidW5nYWxvdyBhdCB1ZGF3YWxhd2UgbmF0aW9uYWwgcGFyazIIEAAYgAQYogQyCBAAGIAEGKIEMgUQABjvBTIIEAAYgAQYogQyBRAAGO8FSNNgUJIDWN1PcAF4AZABAJgBjgOgAfwjqgEGMi0xMy40uAEDyAEA-AEBmAIKoAKQE8ICChAAGLADGNYEGEfCAgcQIxiwAhgnmAMAiAYBkAYIkgcHMS4wLjcuMqAHzj6yBwUyLTcuMrgHhhPCBwQyLTEwyAcqgAgA&sclient=gws-wiz-serp"
          />

          <AnimalSection
            title="Senuggala Bungalow"
            description="A premium stay option for travelers who want both comfort and wilderness. Private rooms, air-conditioning, guided night walks, and exclusive viewing decks."
            image="https://i.ytimg.com/vi/adRQZW-iVAE/maxresdefault.jpg"
            link="https://www.google.com/search?q=Senuggala+Bungalow+at+udawalawe+national+park&sca_esv=7a0616c681a8c1ce&sxsrf=AE3TifPmPzgpqzQA135rgdf9Zub62dXMcw%3A1765871660027&ei=LBBBadS2AYqfvr0PnNSwoAs&ved=2ahUKEwjU_I7I0MGRAxWKj68BHRwqDLQQ4dUDegQIBRAN&uact=5&oq=Senuggala+Bungalow+at+udawalawe+national+park&gs_lp=Egxnd3Mtd2l6LXNlcnAiLVNlbnVnZ2FsYSBCdW5nYWxvdyBhdCB1ZGF3YWxhd2UgbmF0aW9uYWwgcGFyazIIEAAYgAQYogQyCBAAGIAEGKIEMgUQABjvBTIIEAAYgAQYogQyCBAAGIAEGKIESKHSAVCKvAFYw8UBcAJ4AZABAJgBiQKgAesHqgEDMi00uAEDyAEA-AEB-AECmAIGoAKgCMICChAAGLADGNYEGEfCAgoQABgFGAcYChgewgIIEAAYBRgHGB7CAgsQABiABBiGAxiKBcICBhAAGAcYHsICCBAAGAcYChgemAMAiAYBkAYIkgcFMi4wLjSgB-EUsgcDMi00uAeMCMIHBTItNC4yyAclgAgA&sclient=gws-wiz-serp"
          />
        </section>

               
        <section id="other" className="max-w-7xl mx-auto px-6 py-20">
             <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
               Other Places to Visit
             </h2>

  <div className="grid md:grid-cols-3 gap-10">

    {[
      {
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/2b/cb/f3/after-milk-feed.jpg?w=900&h=500&s=1",
        title: "Elephant Transit Home",
        text: "A sanctuary for orphaned baby elephants where visitors can watch feeding sessions.",
        link: "https://www.dwc.gov.lk/elephant-transit-home" 
      },
      {
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjK1Nt-whOELt10h59GDtBxWPMUpe0lbqY4uMeccfn-WFo4oeJpYc3vmkyR_cPo-5Vkgg4KnHNLi48-BWASm7DVFRgy-cay_rpVS8zRDDcDK8GG6E-6kNuavZpvGg0vT8ukx0uHpeOiYpc9_URxODHjvs_9SqafyxtwOSBXOJJlusdekK8zpmW_rURC7w/s719/01.jpg",
        title: "Udawalawe Reservoir",
        text: "A beautiful scenic spot perfect for photography and calm sunsets.",
        link: "https://en.wikipedia.org/wiki/Udawalawe_Reservoir" 
      },
      {
        img: "https://www.udawalawewildsafaritours.com/wp-content/uploads/2021/04/2092_Sankapala-Rajamaha-Viharaya-Pallebedda-2.jpg",
        title: "Sankhapala Viharaya",
        text: "An ancient cave temple with historical and spiritual importance.",
        link: "https://lakpura.com/sankhapala-raja-maha-viharaya" 
      },
      {
        img: "https://rtb.sgp1.cdn.digitaloceanspaces.com/media/6TxBTrB71AII3XiEdZKYGxSdbWEUyqLGQrIsGoGJ.jpg",
        title: "Madunagala Hot Springs",
        text: "Natural hot springs — a relaxing stop after a safari adventure.",
        link: "https://www.lovesrilanka.org/madunagala-hot-springs/" 
      },
      {
        img: "https://bmkltsly13vb.compat.objectstorage.ap-singapore-1.oraclecloud.com/cdn.sg.dailymirror.lk/assets/uploads/image_4c66ed9d0c.jpg",
        title: "Lanka Sugar Factory Sevanagala",
        text: "A historic colonial-era mansion with unique architecture.",
        link: "http://www.lankasugar.lk/sevenagala/" 
      },
      {
        img: "https://srilankatravelpages.com/my_content/uploads/2021/09/Waulpane-limestone-cave.jpg",
        title: "Waulpane Limestone Cave",
        text: "A stunning limestone cave with ancient formations.",
        link: "https://amazinglanka.com/wp/waulpane-cave/" 
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

 {/* Homestay */}
         <section id="homestay" className="relative text-center px-6 py-20
             bg-gradient-to-b from-green-50 to-white"
>
  <div className="max-w-4xl mx-auto space-y-4">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
      Our Homestay
    </h2>

    <p className="text-gray-600 text-lg leading-relaxed">
      You can also stay in our exclusive private home stay with rooms,
      located just from Udawalawe National Park.
    </p>

    <a
      href="/homestay"
      className="inline-block mt-6 px-8 py-3 bg-green-800 text-white
                 font-semibold rounded-full shadow-lg
                 hover:bg-green-700 transition"
    >
      View Our Homestay
    </a>
  </div>

  {/* IMAGES ROW */}
  <div className="max-w-6xl mx-auto mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
    {[
      "data:image/jpeg;base64,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",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSayKw3BG95wun1-UeIHtrYWTgc404K4KlZ7Q&s",
      "data:image/jpeg;base64,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",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/623605945.jpg?k=7f654e381189e7f21818f6cb6eb9c2c3ae00fc7e7398319763181efde6896776&o=",
    ].map((img, i) => (
      <div
        key={i}
        className="overflow-hidden rounded-2xl shadow-lg group"
      >
        <img
          src={img}
          alt="Homestay"
          className="w-full h-44 md:h-52 object-cover
                     group-hover:scale-110 transition duration-700"
          loading="lazy"
        />
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
        img: "https://q-xx.bstatic.com/xdata/images/hotel/max500/286368429.jpg?k=c3c9bbec4ee9bb438249e4a10e0ffb1e343f2ba1610ea543f396da0c3cefa235&o=",
        title: "Centauria Wild",
        link: "https://www.centauriahotels.com/centauriawild/" // official
      },
      {
        img: "https://images.trvl-media.com/lodging/16000000/15830000/15821000/15820942/84a63899.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
        title: "Grand Udawalawe Safari Resort",
        link: "https://www.grandudawalawe.com/" // official
      },
      {
        img: "https://www.kalushideaway.com/images/uploads/404/262kalus_hideaway_udawalawa__2_.jpg",
        title: "Kalu's Hideaway",
        link: "https://kalushideaway.com/" // official
      },
      {
        img: "https://images.trvl-media.com/lodging/13000000/12040000/12031000/12030945/aa9be539.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
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
          >
            Show More
          </a>
        </div>
      </div>
    ))}

  </div>
</section>
      </main>
    );
  }
