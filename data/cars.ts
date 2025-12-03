// Definisi Tipe Data (Biar TypeScript gak marah)
export interface Car {
  id: string;
  name: string;
  tagline: string;
  image: string; // Path ke gambar di folder public
  category: string;
  specs: {
    hp: string;
    acceleration: string;
    topSpeed: string;
    engine: string;
    price: string;
  };
  description: string;
}

// Data Lengkap (Dikelompokkan per Kategori)
export const porscheModels: Record<string, Car[]> = {
  "911": [
    {
      id: "911-carrera",
      name: "911 Carrera",
      tagline: "Gasoline RWD Automatic",
      image: "/cars/911-carrera.avif",
      category: "911",
      specs: { hp: "394 HP", acceleration: "4.1 s", topSpeed: "294 km/h", engine: "3.0L flat-6 twin-turbo", price: "$132,300" },
      description: "The silhouette: iconic. The design: timeless. The technology: inspired by great racing victories."
    },
    {
      id: "911-carrera-t",
      name: "911 Carrera T",
      tagline: "Gasoline RWD Manual",
      image: "/cars/911-carrera-t.avif",
      category: "911",
      specs: { hp: "394 HP", acceleration: "4.5 s", topSpeed: "295 km/h", engine: "3.0L flat-6 twin-turbo", price: "$135,995" },
      description: "Motorsport technology meets the road. The 911 GT3 RS is designed for maximum performance."
    },
    {
      id: "911-carrera-s",
      name: "911 Carrera S",
      tagline: "Gasoline RWD Automatic",
      image: "/cars/911-carrera-s.avif",
      category: "911",
      specs: { hp: "473 HP", acceleration: "3.5 s", topSpeed: "308 km/h", engine: "3.0 L twin-turbo flat-6 (PDK)", price: "$148,395" },
      description: "Motorsport technology meets the road. The 911 GT3 RS is designed for maximum performance."
    },
    {
      id: "911-carrera-4s",
      name: "911 Carrera 4S",
      tagline: "Gasoline AWD Automatic",
      image: "/cars/911-carrera-4s.avif",
      category: "911",
      specs: { hp: " HP", acceleration: "3.5 s", topSpeed: "308 km/h", engine: "3.0 L twin-turbo flat-6", price: "-" },
      description: "Motorsport technology meets the road. The 911 GT3 RS is designed for maximum performance."
    },
    {
      id: "911-carrera-gts",
      name: "911 Carrera GTS",
      tagline: "Gasoline RWD Automatic",
      image: "/cars/911-carrera-gts.avif",
      category: "911",
      specs: { hp: "480 HP", acceleration: "3.0 s", topSpeed: "312 km/h", engine: "3.0 L twin-turbo flat-6", price: "$166,895" },
      description: "Motorsport technology meets the road. The 911 GT3 RS is designed for maximum performance."
    },
    {
      id: "911-carrera-4-gts",
      name: "911 Carrera 4 GTS",
      tagline: "Gasoline AWD Automatic",
      image: "/cars/911-carrera-4gts.avif",
      category: "911",
      specs: { hp: "480 HP", acceleration: "3.0 s", topSpeed: "312 km/h", engine: "3.0 L twin-turbo flat-6", price: "$174,695" },
      description: "Motorsport technology meets the road. The 911 GT3 RS is designed for maximum performance."
    },
    {
      id: "911-carrera-cabriolet",
      name: "911 Carrera Cabriolet",
      tagline: "Gasoline RWD Automatic",
      image: "/cars/911-carrera-cabriolet.avif",
      category: "911",
      specs: { hp: "394 HP", acceleration: "4.3 s", topSpeed: "291 km/h", engine: "3.0 L twin-turbo flat-6", price: "$133,400" },
      description: "Motorsport technology meets the road. The 911 GT3 RS is designed for maximum performance."
    },
    {
      id: "911-carrera-t-cabriolet",
      name: "911 Carrera T Cabriolet",
      tagline: "Gasoline RWD Manual",
      image: "/cars/911-carrera-t-cabriolet.avif",
      category: "911",
      specs: { hp: "394 HP", acceleration: "4.7 s", topSpeed: "293 km/h", engine: "3.0 L twin-turbo flat-6", price: "$154,150" },
      description: "Motorsport technology meets the road. The 911 GT3 RS is designed for maximum performance."
    },
    {
      id: "911-carrera-s-cabriolet",
      name: "911 Carrera S Cabriolet",
      tagline: "Gasoline RWD Automatic",
      image: "/cars/911-carrera-s-cabriolet.avif",
      category: "911",
      specs: { hp: "473 HP", acceleration: "3.7 s", topSpeed: "308 km/h", engine: "3.0 L twin-turbo flat-6", price: "$161,850" },
      description: "Motorsport technology meets the road. The 911 GT3 RS is designed for maximum performance."
    },
    {
      id: "911-carrera-4s-cabriolet",
      name: "911 Carrera 4S Cabriolet",
      tagline: "Gasoline AWD Automatic",
      image: "/cars/911-carrera-4s-cabriolet.avif",
      category: "911",
      specs: { hp: "473 HP", acceleration: "3.7 s", topSpeed: "308 km/h", engine: "3.0 L twin-turbo flat-6", price: "$167,400" },
      description: "Motorsport technology meets the road. The 911 GT3 RS is designed for maximum performance."
    },
    {
      id: "911-carrera-gts-cabriolet",
      name: "911 Carrera GTS Cabriolet",
      tagline: "Gasoline RWD Automatic",
      image: "/cars/911-carrera-gts-cabriolet.avif",
      category: "911",
      specs: { hp: "478 HP", acceleration: "3.1 s", topSpeed: "312 km/h", engine: "3.6 L flat-6 boxer turbocharged", price: "$178,200" },
      description: "Motorsport technology meets the road. The 911 GT3 RS is designed for maximum performance."
    },
    {
      id: "911-carrera-4-gts-cabriolet",
      name: "911 Carrera 4 GTS Cabriolet",
      tagline: "Gasoline AWD Automatic",
      image: "/cars/",
      category: "911",
      specs: { hp: " HP", acceleration: " s", topSpeed: " km/h", engine: "", price: "" },
      description: "Motorsport technology meets the road. The 911 GT3 RS is designed for maximum performance."
    },
    {
      id: "",
      name: "",
      tagline: "",
      image: "/cars/",
      category: "911",
      specs: { hp: " HP", acceleration: " s", topSpeed: " km/h", engine: "", price: "" },
      description: "Motorsport technology meets the road. The 911 GT3 RS is designed for maximum performance."
    },
    {
      id: "",
      name: "",
      tagline: "",
      image: "/cars/",
      category: "911",
      specs: { hp: " HP", acceleration: " s", topSpeed: " km/h", engine: "", price: "" },
      description: "Motorsport technology meets the road. The 911 GT3 RS is designed for maximum performance."
    },
    {
      id: "",
      name: "",
      tagline: "",
      image: "/cars/",
      category: "911",
      specs: { hp: " HP", acceleration: " s", topSpeed: " km/h", engine: "", price: "" },
      description: "Motorsport technology meets the road. The 911 GT3 RS is designed for maximum performance."
    },
    {
      id: "",
      name: "",
      tagline: "",
      image: "/cars/",
      category: "911",
      specs: { hp: " HP", acceleration: " s", topSpeed: " km/h", engine: "", price: "" },
      description: "Motorsport technology meets the road. The 911 GT3 RS is designed for maximum performance."
    },
    {
      id: "",
      name: "",
      tagline: "",
      image: "/cars/",
      category: "911",
      specs: { hp: " HP", acceleration: " s", topSpeed: " km/h", engine: "", price: "" },
      description: "Motorsport technology meets the road. The 911 GT3 RS is designed for maximum performance."
    },
    {
      id: "",
      name: "",
      tagline: "",
      image: "/cars/",
      category: "911",
      specs: { hp: " HP", acceleration: " s", topSpeed: " km/h", engine: "", price: "" },
      description: "Motorsport technology meets the road. The 911 GT3 RS is designed for maximum performance."
    },
    {
      id: "",
      name: "",
      tagline: "",
      image: "/cars/",
      category: "911",
      specs: { hp: " HP", acceleration: " s", topSpeed: " km/h", engine: "", price: "" },
      description: "Motorsport technology meets the road. The 911 GT3 RS is designed for maximum performance."
    },
    {
      id: "",
      name: "",
      tagline: "",
      image: "/cars/",
      category: "911",
      specs: { hp: " HP", acceleration: " s", topSpeed: " km/h", engine: "", price: "" },
      description: "Motorsport technology meets the road. The 911 GT3 RS is designed for maximum performance."
    },
    {
      id: "",
      name: "",
      tagline: "",
      image: "/cars/",
      category: "911",
      specs: { hp: " HP", acceleration: " s", topSpeed: " km/h", engine: "", price: "" },
      description: "Motorsport technology meets the road. The 911 GT3 RS is designed for maximum performance."
    }
  ],
  "718": [
    {
      id: "718-cayman",
      name: "718 Cayman",
      tagline: "Mid-Engine Spirit.",
      image: "/cars/718-bgg.avif",
      category: "718",
      specs: { hp: "300 HP", acceleration: "4.9 s", topSpeed: "275 km/h", engine: "2.0L Turbo Flat-4", price: "$68,300" },
      description: "The 718 models were made for the sport of it. They are mid-engined roadsters that unite the sporting spirit."
    },
    {
      id: "718-gt4-rs",
      name: "718 Cayman GT4 RS",
      tagline: "Perfect Balance.",
      image: "/cars/718-bgg.avif", // Placeholder
      category: "718",
      specs: { hp: "493 HP", acceleration: "3.2 s", topSpeed: "315 km/h", engine: "4.0L NA Flat-6", price: "$160,700" },
      description: "A razor-sharp track tool designed for maximum driving pleasure and lap times."
    }
  ],
  "taycan": [
    {
      id: "taycan-4s",
      name: "Taycan 4S",
      tagline: "Soul, Electrified.",
      image: "/cars/taycan-bg.avif",
      category: "Taycan",
      specs: { hp: "536 HP", acceleration: "3.8 s", topSpeed: "250 km/h", engine: "Dual Electric Motors", price: "$118,500" },
      description: "The first all-electric sports car with the soul of a Porsche."
    },
    {
      id: "taycan-turbo-gt",
      name: "Taycan Turbo GT",
      tagline: "Electric Fury.",
      image: "/cars/taycan-bg.avif", // Placeholder
      category: "Taycan",
      specs: { hp: "1019 HP", acceleration: "2.1 s", topSpeed: "305 km/h", engine: "Dual Electric Motors", price: "$230,000" },
      description: "The most powerful series-production Porsche of all time."
    }
  ],
  "panamera": [
    {
      id: "panamera-turbo",
      name: "Panamera Turbo E-Hybrid",
      tagline: "Choose Boldly.",
      image: "/cars/panamera-bg.avif",
      category: "Panamera",
      specs: { hp: "670 HP", acceleration: "3.0 s", topSpeed: "315 km/h", engine: "4.0L V8 Hybrid", price: "$196,400" },
      description: "Ideally, a sports car should have a mid-mounted engine. But for four people?"
    },
    {
      id: "panamera-4",
      name: "Panamera 4",
      tagline: "Sport Limousine.",
      image: "/cars/panamera-bg.avif", // Placeholder
      category: "Panamera",
      specs: { hp: "348 HP", acceleration: "4.8 s", topSpeed: "270 km/h", engine: "2.9L V6 Turbo", price: "$109,800" },
      description: "A sports car for four. Uncompromising performance with luxury comfort."
    }
  ],
  "macan": [
    {
      id: "macan-gts",
      name: "Macan GTS",
      tagline: "Dare Forward.",
      image: "/cars/macan-bg.avif",
      category: "Macan",
      specs: { hp: "434 HP", acceleration: "4.3 s", topSpeed: "272 km/h", engine: "2.9L V6 Twin-Turbo", price: "$89,000" },
      description: "The sports car of compact SUVs. Sharper, sportier, and more intense than ever."
    },
    {
      id: "macan-electric",
      name: "Macan 4 Electric",
      tagline: "Keep Your Essence.",
      image: "/cars/macan-bg.avif", // Placeholder
      category: "Macan",
      specs: { hp: "402 HP", acceleration: "4.9 s", topSpeed: "220 km/h", engine: "Electric Motors", price: "$78,800" },
      description: "All-electric. All Porsche. The new Macan sets standards in its class."
    }
  ],
  "cayenne": [
    {
      id: "cayenne-turbo-gt",
      name: "Cayenne Turbo GT",
      tagline: "Further Together.",
      image: "/cars/cayene-bg.jpeg",
      category: "Cayenne",
      specs: { hp: "650 HP", acceleration: "3.1 s", topSpeed: "305 km/h", engine: "4.0L V8 Twin-Turbo", price: "$196,300" },
      description: "A supersports car in SUV form. Setting lap records on the Nürburgring Nordschleife."
    },
    {
      id: "cayenne-e-hybrid",
      name: "Cayenne E-Hybrid",
      tagline: "E-Performance.",
      image: "/cars/cayene-bg.jpeg", // Placeholder
      category: "Cayenne",
      specs: { hp: "463 HP", acceleration: "4.6 s", topSpeed: "254 km/h", engine: "3.0L V6 Hybrid", price: "$97,200" },
      description: "The perfect balance of sustainability and driving dynamics."
    }
  ]
};