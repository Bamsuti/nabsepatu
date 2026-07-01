const nabsepatuData = {
  brand: {
    label: "Brand",
    subcategories: {
      adidas: {
        label: "Adidas",
        products: [
          { id: "adidas-1", name: "Adidas Ultraboost 25", price: 1850000, emoji: "👟", description: "Sepatu lari dengan teknologi Boost terbaru untuk kenyamanan maksimal." },
          { id: "adidas-2", name: "Adidas Stan Smith", price: 1250000, emoji: "👞", description: "Iconic sneakers kasual dengan desain timeless." },
          { id: "adidas-3", name: "Adidas Samba OG", price: 1150000, emoji: "👟", description: "Classic indoor shoe dengan gaya retro yang ikonik." },
          { id: "adidas-4", name: "Adidas Forum Low", price: 1350000, emoji: "👟", description: "Sepatu basket inspirasi 80-an dengan gaya街头." },
          { id: "adidas-5", name: "Adidas NMD R1", price: 1650000, emoji: "👟", description: "Sepatu lifestyle dengan midsole Boost yang stylish." },
          { id: "adidas-6", name: "Adidas Gazelle", price: 1100000, emoji: "👟", description: "Sepatu vintage dengan suede premium." },
          { id: "adidas-7", name: "Adidas Superstar", price: 1200000, emoji: "👟", description: "Sepatu dengan shell toe iconic sepanjang masa." },
          { id: "adidas-8", name: "Adidas Yeezy Boost 350", price: 3200000, emoji: "👟", description: "Collaboration shoe dengan desain avant-garde." },
          { id: "adidas-9", name: "Adidas Predator Edge", price: 2100000, emoji: "⚽", description: "Sepatu bola dengan kontrol dan akurasi tinggi." }
        ]
      },
      nike: {
        label: "Nike",
        products: [
          { id: "nike-1", name: "Nike Air Max 270", price: 1950000, emoji: "👟", description: "Sepatu dengan unit Air besar untuk bantalan maksimal." },
          { id: "nike-2", name: "Nike Revolution 6", price: 850000, emoji: "👟", description: "Sepatu lari nyaman dengan harga terjangkau." },
          { id: "nike-3", name: "Nike Air Force 1", price: 1450000, emoji: "👟", description: "Iconic sneakers dengan desain klasik." },
          { id: "nike-4", name: "Nike Dunk Low", price: 1550000, emoji: "👟", description: "Sepatu skateboard yang populer di kalangan anak muda." },
          { id: "nike-5", name: "Nike Pegasus 40", price: 1750000, emoji: "👟", description: "Sepatu lari serbaguna dengan responsive cushioning." },
          { id: "nike-6", name: "Nike Blazer Mid", price: 1250000, emoji: "👟", description: "Sepatu high-top dengan gaya retro klasik." },
          { id: "nike-7", name: "Nike Zoom Mercurial", price: 2250000, emoji: "⚽", description: "Sepatu bola ringan untuk kecepatan maksimal." },
          { id: "nike-8", name: "Nike LeBron XX", price: 2750000, emoji: "🏀", description: "Sepatu basket performa tinggi untuk pemain elite." },
          { id: "nike-9", name: "Nike Air Jordan 1", price: 2450000, emoji: "👟", description: "Legenda sneakers yang tak pernah mati." }
        ]
      },
      vans: {
        label: "Vans",
        products: [
          { id: "vans-1", name: "Vans Old Skool", price: 750000, emoji: "👟", description: "Classic skate shoe dengan side stripe ikonik." },
          { id: "vans-2", name: "Vans Authentic", price: 650000, emoji: "👟", description: "Sepatu kanvas ringan dengan gaya minimalis." },
          { id: "vans-3", name: "Vans Sk8-Hi", price: 850000, emoji: "👟", description: "High-top skate shoe dengan ankle support." },
          { id: "vans-4", name: "Vans Slip-On", price: 700000, emoji: "👟", description: "Sepatu tanpa tali yang praktis dan stylish." },
          { id: "vans-5", name: "Vans Era", price: 680000, emoji: "👟", description: "Sepatu skate dengan padded collar." },
          { id: "vans-6", name: "Vans Half Cab", price: 900000, emoji: "👟", description: "Sepatu skate mid-top legendaris." },
          { id: "vans-7", name: "Vans UltraRange", price: 950000, emoji: "👟", description: "Sepatu lifestyle dengan sol ComfyCush." },
          { id: "vans-8", name: "Vans Style 36", price: 780000, emoji: "👟", description: "Versi复古 dari Old Skool yang lebih ramping." },
          { id: "vans-9", name: "Vans MTE-1", price: 1050000, emoji: "👟", description: "Sepatu tahan cuaca untuk segala kondisi." }
        ]
      },
      "air work": {
        label: "Air Work",
        products: [
          { id: "airwork-1", name: "Air Work Pro Safety", price: 450000, emoji: "🥾", description: "Sepatu safety dengan pelindung baja di ujung." },
          { id: "airwork-2", name: "Air Work Hiking Boot", price: 550000, emoji: "🥾", description: "Sepatu gunung dengan sol anti-slip." },
          { id: "airwork-3", name: "Air Work Industrial", price: 480000, emoji: "🥾", description: "Sepatu industri tahan minyak dan bahan kimia." },
          { id: "airwork-4", name: "Air Work Flex", price: 380000, emoji: "👟", description: "Sepatu kerja ringan dengan fleksibilitas tinggi." },
          { id: "airwork-5", name: "Air Work Steel Toe", price: 520000, emoji: "🥾", description: "Sepatu proyek dengan steel toe cap." },
          { id: "airwork-6", name: "Air Work Outdoor", price: 420000, emoji: "🥾", description: "Sepatu outdoor tangguh untuk medan berat." },
          { id: "airwork-7", name: "Air Work Waterproof", price: 580000, emoji: "🥾", description: "Sepatu anti air untuk pekerja lapangan." },
          { id: "airwork-8", name: "Air Work Casual SAFE", price: 350000, emoji: "👟", description: "Sepatu safety dengan tampilan kasual." },
          { id: "airwork-9", name: "Air Work Elite Pro", price: 650000, emoji: "🥾", description: "Sepatu safety premium dengan teknologi anti-fatigue." }
        ]
      },
      "new balance": {
        label: "New Balance",
        products: [
          { id: "nb-1", name: "New Balance 990v6", price: 2350000, emoji: "👟", description: "Sepatu buatan AS dengan kualitas premium." },
          { id: "nb-2", name: "New Balance 574", price: 1250000, emoji: "👟", description: "Classic sneakers dengan desain timeless." },
          { id: "nb-3", name: "New Balance 2002R", price: 1650000, emoji: "👟", description: "Sepatu lifestyle dengan midsole ABZORB." },
          { id: "nb-4", name: "New Balance Fresh Foam 1080", price: 1950000, emoji: "👟", description: "Sepatu lari premium dengan bantalan maksimal." },
          { id: "nb-5", name: "New Balance 327", price: 1150000, emoji: "👟", description: "Sepatu retro dengan oversized N logo." },
          { id: "nb-6", name: "New Balance 9060", price: 1850000, emoji: "👟", description: "Sepatu chunky dengan gaya futuristik." },
          { id: "nb-7", name: "New Balance FuelCell Propel", price: 1450000, emoji: "👟", description: "Sepatu lari dengan teknologi FuelCell responsif." },
          { id: "nb-8", name: "New Balance 550", price: 1350000, emoji: "👟", description: "Sepatu basket low-top vintage." },
          { id: "nb-9", name: "New Balance Hierro v7", price: 1750000, emoji: "🥾", description: "Sepatu trail running tangguh." }
        ]
      },
      puma: {
        label: "Puma",
        products: [
          { id: "puma-1", name: "Puma Suede Classic", price: 850000, emoji: "👟", description: "Iconic suede shoe dengan gaya timeless." },
          { id: "puma-2", name: "Puma RS-X", price: 1350000, emoji: "👟", description: "Sepatu chunky dengan running system technology." },
          { id: "puma-3", name: "Puma Future Rider", price: 1050000, emoji: "👟", description: "Sepatu retro running dengan federbein technology." },
          { id: "puma-4", name: "Puma Speedcat", price: 950000, emoji: "👟", description: "Sepatu terinspirasi dari balap mobil." },
          { id: "puma-5", name: "Puma Clyde", price: 900000, emoji: "👟", description: "Sepatu basket yang dinamai dari Walt Clyde Frazier." },
          { id: "puma-6", name: "Puma Smash v2", price: 650000, emoji: "👟", description: "Sepatu kasual dengan siluet minimalis." },
          { id: "puma-7", name: "Puma Ultra Ultimate", price: 1950000, emoji: "⚽", description: "Sepatu bola ringan untuk performa maksimal." },
          { id: "puma-8", name: "Puma Liberate Nitro", price: 1550000, emoji: "👟", description: "Sepatu lari dengan bantalan NitroFoam." },
          { id: "puma-9", name: "Puma Mirage Sport", price: 1100000, emoji: "👟", description: "Sepatu lifestyle dengan tekstur retro." }
        ]
      }
    }
  },
  sport: {
    label: "Sport",
    subcategories: {
      lari: {
        label: "Lari",
        products: [
          { id: "sport-lari-1", name: "Nike ZoomX Vaporfly", price: 2850000, emoji: "🏃", description: "Sepatu lari maraton dengan carbon plate." },
          { id: "sport-lari-2", name: "Adidas Adizero Takumi", price: 2150000, emoji: "🏃", description: "Sepatu lari kecepatan untuk kompetisi." },
          { id: "sport-lari-3", name: "Asics Gel-Kayano 30", price: 2250000, emoji: "🏃", description: "Sepatu lari stability dengan bantalan Gel." },
          { id: "sport-lari-4", name: "Brooks Ghost 15", price: 1750000, emoji: "🏃", description: "Sepatu lari netral dengan DNA Loft v2." },
          { id: "sport-lari-5", name: "Saucony Ride 16", price: 1650000, emoji: "🏃", description: "Sepatu lari serbaguna dengan PWRRUN." },
          { id: "sport-lari-6", name: "Hoka Clifton 9", price: 1850000, emoji: "🏃", description: "Sepatu lari ringan dengan meta-rocker." },
          { id: "sport-lari-7", name: "Mizuno Wave Rider 27", price: 1550000, emoji: "🏃", description: "Sepatu lari dengan teknologi Wave plate." },
          { id: "sport-lari-8", name: "New Balance Fresh Foam More", price: 1950000, emoji: "🏃", description: "Sepatu lari maximalist cushioning." },
          { id: "sport-lari-9", name: "Under Armour Machina 3", price: 1650000, emoji: "🏃", description: "Sepatu lari ringan dengan Flow cushioning." }
        ]
      },
      jalan: {
        label: "Jalan",
        products: [
          { id: "sport-jalan-1", name: "Skechers Go Walk 6", price: 650000, emoji: "🚶", description: "Sepatu jalan dengan Ultra Go cushioning." },
          { id: "sport-jalan-2", name: "New Balance 880", price: 1350000, emoji: "🚶", description: "Sepatu jalan nyaman dengan Fresh Foam." },
          { id: "sport-jalan-3", name: "Asics Gel-Path 13", price: 950000, emoji: "🚶", description: "Sepatu jalan dengan bantalan Gel." },
          { id: "sport-jalan-4", name: "Nike React Miler", price: 1450000, emoji: "🚶", description: "Sepatu jalan responsif dengan React foam." },
          { id: "sport-jalan-5", name: "Adidas Ultraboost Walk", price: 1650000, emoji: "🚶", description: "Sepatu jalan premium dengan Boost." },
          { id: "sport-jalan-6", name: "Reebok Walk Ultra 7", price: 750000, emoji: "🚶", description: "Sepatu jalan dengan DMX cushioning." },
          { id: "sport-jalan-7", name: "Puma Explore Walker", price: 550000, emoji: "🚶", description: "Sepatu jalan ringan dengan SoftFoam." },
          { id: "sport-jalan-8", name: "Under Armour Surge 4", price: 650000, emoji: "🚶", description: "Sepatu jalan dengan EVA sockliner." },
          { id: "sport-jalan-9", name: "Hoka Bondi SR", price: 1950000, emoji: "🚶", description: "Sepatu jalan dengan platform tebal maksimal." }
        ]
      },
      bulutangkis: {
        label: "Bulutangkis",
        products: [
          { id: "sport-bulu-1", name: "Yonex Power Cushion 65Z", price: 1450000, emoji: "🏸", description: "Sepatu badminton dengan power cushion." },
          { id: "sport-bulu-2", name: "Li-Ning Blade Warrior", price: 1250000, emoji: "🏸", description: "Sepatu badminton dengan BOA system." },
          { id: "sport-bulu-3", name: "Victor A970 Ace", price: 1350000, emoji: "🏸", description: "Sepatu badminton dengan EnergyMax 3.0." },
          { id: "sport-bulu-4", name: "Yonex Comfort Z3", price: 1150000, emoji: "🏸", description: "Sepatu badminton dengan bantalan empuk." },
          { id: "sport-bulu-5", name: "Li-Ning Ranger", price: 950000, emoji: "🏸", description: "Sepatu badminton ringan untuk gerakan cepat." },
          { id: "sport-bulu-6", name: "Yonex Aerus Z", price: 1650000, emoji: "🏸", description: "Sepatu badminton super ringan 250g." },
          { id: "sport-bulu-7", name: "Victor P9200", price: 1250000, emoji: "🏸", description: "Sepatu badminton with Nano technology." },
          { id: "sport-bulu-8", name: "Li-Ning Speed Flex", price: 1050000, emoji: "🏸", description: "Sepatu badminton fleksibel dengan BOOM foam." },
          { id: "sport-bulu-9", name: "Yonex Eclipsion Z3", price: 1550000, emoji: "🏸", description: "Sepatu badminton dengan Synchro-Fit." }
        ]
      },
      futsal: {
        label: "Futsal",
        products: [
          { id: "sport-futsal-1", name: "Nike React Gato", price: 1350000, emoji: "⚽", description: "Sepatu futsal dengan Nike React foam." },
          { id: "sport-futsal-2", name: "Adidas Predator Freestyle", price: 1250000, emoji: "⚽", description: "Sepatu futsal untuk kontrol bola presisi." },
          { id: "sport-futsal-3", name: "Puma Future Match", price: 950000, emoji: "⚽", description: "Sepatu futsal dengan FUZIONFIT360." },
          { id: "sport-futsal-4", name: "Mizuno Morelia Sala", price: 1450000, emoji: "⚽", description: "Sepatu futsal kulit asli buatan Jepang." },
          { id: "sport-futsal-5", name: "Kelme Rueda", price: 450000, emoji: "⚽", description: "Sepatu futsal terjangkau dengan kualitas baik." },
          { id: "sport-futsal-6", name: "Specs Accelerator", price: 350000, emoji: "⚽", description: "Sepatu futsal lokal dengan daya tahan tinggi." },
          { id: "sport-futsal-7", name: "Adidas X Crazyfast", price: 1550000, emoji: "⚽", description: "Sepatu futsal ringan untuk kecepatan." },
          { id: "sport-futsal-8", name: "Nike Mercurial Superfly 9", price: 1750000, emoji: "⚽", description: "Sepatu futsal dengan speed cage." },
          { id: "sport-futsal-9", name: "Joma Top Flex", price: 550000, emoji: "⚽", description: "Sepatu futsal fleksibel dengan sol karet." }
        ]
      },
      bola: {
        label: "Bola",
        products: [
          { id: "sport-bola-1", name: "Adidas X Crazyfast Elite", price: 2650000, emoji: "⚽", description: "Sepatu bola untuk kecepatan maksimal." },
          { id: "sport-bola-2", name: "Nike Phantom GX Elite", price: 2550000, emoji: "⚽", description: "Sepatu bola dengan kontrol sempurna." },
          { id: "sport-bola-3", name: "Puma Future Ultimate", price: 2350000, emoji: "⚽", description: "Sepatu bola dengan FUZIONFIT adaptif." },
          { id: "sport-bola-4", name: "Mizuno Morelia Neo III", price: 2450000, emoji: "⚽", description: "Sepatu bola kulit kanguru premium." },
          { id: "sport-bola-5", name: "Adidas Copa Pure", price: 1950000, emoji: "⚽", description: "Sepatu bola dengan sentuhan kulit lembut." },
          { id: "sport-bola-6", name: "Nike Tiempo Elite", price: 2150000, emoji: "⚽", description: "Sepatu bola kulit dengan flyknit." },
          { id: "sport-bola-7", name: "Puma Ultra Match", price: 1250000, emoji: "⚽", description: "Sepatu bola ringan untuk pemain cepat." },
          { id: "sport-bola-8", name: "Adidas Predator Edge Pro", price: 2850000, emoji: "⚽", description: "Sepatu bola dengan striker face technology." },
          { id: "sport-bola-9", name: "New Balance Furon v7", price: 1750000, emoji: "⚽", description: "Sepatu bola ringan dengan fit presisi." }
        ]
      },
      basket: {
        label: "Basket",
        products: [
          { id: "sport-basket-1", name: "Nike LeBron 21", price: 2950000, emoji: "🏀", description: "Sepatu basket dengan Zoom Air unit." },
          { id: "sport-basket-2", name: "Adidas Harden Vol 8", price: 2450000, emoji: "🏀", description: "Sepatu basket dengan Boost midsole." },
          { id: "sport-basket-3", name: "Under Armour Curry 11", price: 2750000, emoji: "🏀", description: "Sepatu basket dengan Flow cushioning." },
          { id: "sport-basket-4", name: "Puma MB.03", price: 2150000, emoji: "🏀", description: "Sepatu basket LaMelo Ball signature." },
          { id: "sport-basket-5", name: "Air Jordan 38", price: 3150000, emoji: "🏀", description: "Sepatu basket Michael Jordan legacy." },
          { id: "sport-basket-6", name: "New Balance Kawhi 4", price: 2350000, emoji: "🏀", description: "Sepatu basket dengan FuelCell cushioning." },
          { id: "sport-basket-7", name: "Nike KD 16", price: 2650000, emoji: "🏀", description: "Sepatu basket Kevin Durant signature." },
          { id: "sport-basket-8", name: "Adidas Dame 8", price: 1750000, emoji: "🏀", description: "Sepatu basket untuk playmaker." },
          { id: "sport-basket-9", name: "Li-Ning Way of Wade 10", price: 3450000, emoji: "🏀", description: "Sepatu basket Dwyane Wade signature." }
        ]
      },
      renang: {
        label: "Renang",
        products: [
          { id: "sport-renang-1", name: "Speedo Biofuse Fin", price: 450000, emoji: "🏊", description: "Sepatu renang dengan Biofuse technology." },
          { id: "sport-renang-2", name: "Arena Powerfin Pro", price: 550000, emoji: "🏊", description: "Sepatu renang untuk latihan intensif." },
          { id: "sport-renang-3", name: "TYR Cutback Fin", price: 380000, emoji: "🏊", description: "Sepatu renang untuk latihan kaki." },
          { id: "sport-renang-4", name: "Speedo Training Fin", price: 420000, emoji: "🏊", description: "Sepatu renang standar untuk latihan." },
          { id: "sport-renang-5", name: "Arena Flex Fin", price: 480000, emoji: "🏊", description: "Sepatu renang fleksibel." },
          { id: "sport-renang-6", name: "FINIS Zoomer Gold", price: 650000, emoji: "🏊", description: "Sepatu renang untuk meningkatkan performa." },
          { id: "sport-renang-7", name: "TYR Sport Fin", price: 350000, emoji: "🏊", description: "Sepatu renang untuk pemula." },
          { id: "sport-renang-8", name: "Speedo Swim Fin", price: 320000, emoji: "🏊", description: "Sepatu renang dasar untuk latihan." },
          { id: "sport-renang-9", name: "Arena Competition Fin", price: 580000, emoji: "🏊", description: "Sepatu renang untuk kompetisi." }
        ]
      },
      tenis: {
        label: "Tenis",
        products: [
          { id: "sport-tenis-1", name: "Nike Court Air Zoom GP", price: 1950000, emoji: "🎾", description: "Sepatu tenis dengan Zoom Air responsif." },
          { id: "sport-tenis-2", name: "Adidas Barricade 13", price: 1850000, emoji: "🎾", description: "Sepatu tenis tahan lama untuk pemain agresif." },
          { id: "sport-tenis-3", name: "Asics Gel-Resolution 9", price: 1750000, emoji: "🎾", description: "Sepatu tenis dengan bantalan Gel." },
          { id: "sport-tenis-4", name: "Yonex Power Cushion Eclipsion", price: 1650000, emoji: "🎾", description: "Sepatu tenis dengan power cushion." },
          { id: "sport-tenis-5", name: "Babolat Jet Mach III", price: 1550000, emoji: "🎾", description: "Sepatu tenis ringan untuk gerakan cepat." },
          { id: "sport-tenis-6", name: "Wilson Rush Pro 4", price: 1450000, emoji: "🎾", description: "Sepatu tenis dengan 3D-FS technology." },
          { id: "sport-tenis-7", name: "New Balance 996v5", price: 1350000, emoji: "🎾", description: "Sepatu tenis dengan Fresh Foam X." },
          { id: "sport-tenis-8", name: "K-Swiss Ultrashot 3", price: 1250000, emoji: "🎾", description: "Sepatu tenis dengan Surgelite midsole." },
          { id: "sport-tenis-9", name: "Diadora Blushield Torneo", price: 1450000, emoji: "🎾", description: "Sepatu tenis dengan Blushield technology." }
        ]
      },
      fitnes: {
        label: "Fitnes",
        products: [
          { id: "sport-fitnes-1", name: "Nike Metcon 9", price: 1850000, emoji: "🏋️", description: "Sepatu gym dengan heel clip stabil." },
          { id: "sport-fitnes-2", name: "Reebok Nano X4", price: 1750000, emoji: "🏋️", description: "Sepatu crossfit serbaguna." },
          { id: "sport-fitnes-3", name: "Under Armour TriBase Reign 5", price: 1550000, emoji: "🏋️", description: "Sepatu gym dengan TriBase outsole." },
          { id: "sport-fitnes-4", name: "Adidas Dropset 3", price: 1650000, emoji: "🏋️", description: "Sepatu gym dengan support lateral." },
          { id: "sport-fitnes-5", name: "Inov-8 F-Lite G 300", price: 1650000, emoji: "🏋️", description: "Sepatu crossfit dengan graphene outsole." },
          { id: "sport-fitnes-6", name: "NoBull Trainer+", price: 2150000, emoji: "🏋️", description: "Sepatu gym premium dengan upper kuat." },
          { id: "sport-fitnes-7", name: "Puma Fuse 3.0", price: 1250000, emoji: "🏋️", description: "Sepatu gym dengan PWRTAPE support." },
          { id: "sport-fitnes-8", name: "Chuck Taylor All Star CX", price: 850000, emoji: "👟", description: "Sepatu gym casual dengan CX foam." },
          { id: "sport-fitnes-9", name: "Ryderwear D-MACK", price: 1450000, emoji: "🏋️", description: "Sepatu gym khusus deadlift dengan sole datar." }
        ]
      }
    }
  },
  pria: {
    label: "Pria",
    subcategories: {
      lari: {
        label: "Lari",
        products: [
          { id: "pria-lari-1", name: "Nike Air Zoom Pegasus 40", price: 1750000, emoji: "🏃", description: "Sepatu lari pria serbaguna dengan Zoom Air." },
          { id: "pria-lari-2", name: "Adidas Supernova Rise", price: 1450000, emoji: "🏃", description: "Sepatu lari pria dengan Dreamstrike+." },
          { id: "pria-lari-3", name: "Asics Gel-Nimbus 26", price: 2050000, emoji: "🏃", description: "Sepatu lari pria dengan PureGEL." },
          { id: "pria-lari-4", name: "Brooks Glycerin 21", price: 1950000, emoji: "🏃", description: "Sepatu lari pria dengan DNA Loft v3." },
          { id: "pria-lari-5", name: "Saucony Triumph 22", price: 1850000, emoji: "🏃", description: "Sepatu lari pria dengan PWRRUN PB." },
          { id: "pria-lari-6", name: "Under Armour Charged Assert 10", price: 750000, emoji: "🏃", description: "Sepatu lari pria terjangkau." },
          { id: "pria-lari-7", name: "New Balance Fresh Foam X 880", price: 1450000, emoji: "🏃", description: "Sepatu lari pria sehari-hari." },
          { id: "pria-lari-8", name: "Puma Velocity Nitro 3", price: 1350000, emoji: "🏃", description: "Sepatu lari pria dengan NitroFoam." },
          { id: "pria-lari-9", name: "Hoka Mach 6", price: 1750000, emoji: "🏃", description: "Sepatu lari pria ringan dengan ProflyX." }
        ]
      },
      jalan: {
        label: "Jalan",
        products: [
          { id: "pria-jalan-1", name: "Skechers Max Cushioning Elite", price: 850000, emoji: "🚶", description: "Sepatu jalan pria dengan bantalan maksimal." },
          { id: "pria-jalan-2", name: "New Balance 990v6 Made", price: 2350000, emoji: "🚶", description: "Sepatu jalan pria buatan AS." },
          { id: "pria-jalan-3", name: "Ecco Street Tray", price: 1450000, emoji: "🚶", description: "Sepatu jalan pria kulit berkualitas." },
          { id: "pria-jalan-4", name: "Clarks Un Rio", price: 1250000, emoji: "🚶", description: "Sepatu jalan pria dengan Cushion Plus." },
          { id: "pria-jalan-5", name: "Nike Revolution 7", price: 850000, emoji: "🚶", description: "Sepatu jalan pria ringan dan nyaman." },
          { id: "pria-jalan-6", name: "Asics Gel-Contend 9", price: 650000, emoji: "🚶", description: "Sepatu jalan pria dengan bantalan Gel." },
          { id: "pria-jalan-7", name: "Reebok Walk Ultra 7", price: 750000, emoji: "🚶", description: "Sepatu jalan pria dengan DMX cushioning." },
          { id: "pria-jalan-8", name: "Puma Softride Enzo", price: 550000, emoji: "🚶", description: "Sepatu jalan pria dengan SoftFoam+" },
          { id: "pria-jalan-9", name: "Adidas Lite Racer 3.0", price: 550000, emoji: "🚶", description: "Sepatu jalan pria ringan untuk aktivitas harian." }
        ]
      },
      "sepak bola": {
        label: "Sepak Bola",
        products: [
          { id: "pria-sepakbola-1", name: "Nike Phantom GX Pro", price: 1850000, emoji: "⚽", description: "Sepatu bola pria dengan kontrol presisi." },
          { id: "pria-sepakbola-2", name: "Adidas Predator 24 Pro", price: 1950000, emoji: "⚽", description: "Sepatu bola pria dengan Strikeskin." },
          { id: "pria-sepakbola-3", name: "Puma Future 7 Pro", price: 1750000, emoji: "⚽", description: "Sepatu bola pria dengan FUZIONFIT360." },
          { id: "pria-sepakbola-4", name: "Mizuno Morelia Neo IV", price: 2250000, emoji: "⚽", description: "Sepatu bola pria kulit kanguru." },
          { id: "pria-sepakbola-5", name: "Adidas Copa Gloro", price: 1350000, emoji: "⚽", description: "Sepatu bola pria dengan sentuhan klasik." },
          { id: "pria-sepakbola-6", name: "Nike Tiempo Legend 10 Pro", price: 1750000, emoji: "⚽", description: "Sepatu bola pria dengan kulit K-leather." },
          { id: "pria-sepakbola-7", name: "Puma Ultra 5 Pro", price: 1650000, emoji: "⚽", description: "Sepatu bola pria super ringan." },
          { id: "pria-sepakbola-8", name: "New Balance 442 Pro", price: 1450000, emoji: "⚽", description: "Sepatu bola pria dengan kangaroo leather." },
          { id: "pria-sepakbola-9", name: "Specs Lightspeed Edge", price: 550000, emoji: "⚽", description: "Sepatu bola pria lokal berkualitas." }
        ]
      },
      basket: {
        label: "Basket",
        products: [
          { id: "pria-basket-1", name: "Nike Giannis Immortality 4", price: 1250000, emoji: "🏀", description: "Sepatu basket pria dengan Air Sole." },
          { id: "pria-basket-2", name: "Adidas Exhibit B", price: 1450000, emoji: "🏀", description: "Sepatu basket pria dengan Bounce midsole." },
          { id: "pria-basket-3", name: "Under Armour Lockdown 7", price: 850000, emoji: "🏀", description: "Sepatu basket pria terjangkau." },
          { id: "pria-basket-4", name: "Puma Fusion Pro", price: 1150000, emoji: "🏀", description: "Sepatu basket pria dengan ProFoam." },
          { id: "pria-basket-5", name: "Air Jordan One Take 5", price: 1550000, emoji: "🏀", description: "Sepatu basket pria Russell Westbrook." },
          { id: "pria-basket-6", name: "Nike Precision 7", price: 950000, emoji: "🏀", description: "Sepatu basket pria untuk pemula." },
          { id: "pria-basket-7", name: "Adidas CourtVision", price: 1050000, emoji: "🏀", description: "Sepatu basket pria lifestyle." },
          { id: "pria-basket-8", name: "Anta KT9", price: 1950000, emoji: "🏀", description: "Sepatu basket pria Klay Thompson." },
          { id: "pria-basket-9", name: "Li-Ning Speed 10", price: 1650000, emoji: "🏀", description: "Sepatu basket pria dengan BOOM foam." }
        ]
      },
      golf: {
        label: "Golf",
        products: [
          { id: "pria-golf-1", name: "Nike Air Zoom Victory Tour 3", price: 2450000, emoji: "⛳", description: "Sepatu golf pria dengan Zoom Air." },
          { id: "pria-golf-2", name: "Adidas Codechaos 25", price: 2150000, emoji: "⛳", description: "Sepatu golf pria tanpa spike." },
          { id: "pria-golf-3", name: "FootJoy Pro SL", price: 2250000, emoji: "⛳", description: "Sepatu golf pria dengan Stratolite." },
          { id: "pria-golf-4", name: "Puma Ignite Elevate", price: 1750000, emoji: "⛳", description: "Sepatu golf pria dengan Ignite foam." },
          { id: "pria-golf-5", name: "Under Armour HOVR Drive", price: 1850000, emoji: "⛳", description: "Sepatu golf pria dengan HOVR cushioning." },
          { id: "pria-golf-6", name: "Ecco Biom C4", price: 2650000, emoji: "⛳", description: "Sepatu golf pria dengan kulit premium." },
          { id: "pria-golf-7", name: "New Balance Striker v3", price: 1550000, emoji: "⛳", description: "Sepatu golf pria dengan Fresh Foam." },
          { id: "pria-golf-8", name: "Skechers Go Golf Tour", price: 1250000, emoji: "⛳", description: "Sepatu golf pria dengan Arch Fit." },
          { id: "pria-golf-9", name: "Callaway Chev Combo", price: 1350000, emoji: "⛳", description: "Sepatu golf pria dengan Opti-Dri." }
        ]
      },
      fitness: {
        label: "Fitness",
        products: [
          { id: "pria-fitness-1", name: "Nike Metcon 9 AMP", price: 1950000, emoji: "🏋️", description: "Sepatu fitness pria untuk angkat beban." },
          { id: "pria-fitness-2", name: "Reebok Nano X4 Adventure", price: 1850000, emoji: "🏋️", description: "Sepatu fitness pria serbaguna." },
          { id: "pria-fitness-3", name: "Under Armour Project Rock 6", price: 2150000, emoji: "🏋️", description: "Sepatu fitness pria Dwayne Johnson." },
          { id: "pria-fitness-4", name: "Adidas Dropset 3 Trainer", price: 1650000, emoji: "🏋️", description: "Sepatu fitness pria dengan support." },
          { id: "pria-fitness-5", name: "Puma Fuse 3.0 Training", price: 1250000, emoji: "🏋️", description: "Sepatu fitness pria untuk gym." },
          { id: "pria-fitness-6", name: "NoBull Canvas Trainer", price: 1850000, emoji: "🏋️", description: "Sepatu fitness pria minimalis." },
          { id: "pria-fitness-7", name: "Ryderwear D-MACK 2", price: 1550000, emoji: "🏋️", description: "Sepatu fitness pria khusus deadlift." },
          { id: "pria-fitness-8", name: "Inov-8 Fastlift 400", price: 1750000, emoji: "🏋️", description: "Sepatu fitness pria untuk angkat beban." },
          { id: "pria-fitness-9", name: "Gymshark Training Shoe", price: 1350000, emoji: "🏋️", description: "Sepatu fitness pria untuk latihan." }
        ]
      },
      sneakers: {
        label: "Sneakers",
        products: [
          { id: "pria-sneakers-1", name: "Nike Air Max Scorpion", price: 2750000, emoji: "👟", description: "Sneakers pria dengan Air unit terbesar." },
          { id: "pria-sneakers-2", name: "Adidas Yeezy 500", price: 2950000, emoji: "👟", description: "Sneakers pria desain Kanye West." },
          { id: "pria-sneakers-3", name: "New Balance 1906R", price: 1550000, emoji: "👟", description: "Sneakers pria dengan gaya Y2K." },
          { id: "pria-sneakers-4", name: "Asics Gel-Kayano 14", price: 1650000, emoji: "👟", description: "Sneakers pria retro dengan Gel." },
          { id: "pria-sneakers-5", name: "Converse Chuck 70", price: 950000, emoji: "👟", description: "Sneakers pria kanvas klasik." },
          { id: "pria-sneakers-6", name: "Vans Knu Skool", price: 850000, emoji: "👟", description: "Sneakers pria chunky 90s." },
          { id: "pria-sneakers-7", name: "Puma Suede XL", price: 950000, emoji: "👟", description: "Sneakers pria dengan siluet besar." },
          { id: "pria-sneakers-8", name: "Reebok Club C 85", price: 750000, emoji: "👟", description: "Sneakers pria vintage timeless." },
          { id: "pria-sneakers-9", name: "Diablo Cloud 9", price: 450000, emoji: "👟", description: "Sneakers pria lokal trendy." }
        ]
      },
      kasual: {
        label: "Kasual",
        products: [
          { id: "pria-kasual-1", name: "Ecco Soft 7", price: 1550000, emoji: "👞", description: "Sepatu kasual pria kulit premium." },
          { id: "pria-kasual-2", name: "Clarks Wallabe", price: 1350000, emoji: "👞", description: "Sepatu kasual pria mocassins." },
          { id: "pria-kasual-3", name: "Florsheim Langdon", price: 1250000, emoji: "👞", description: "Sepatu kasual pria dengan sol karet." },
          { id: "pria-kasual-4", name: "Bata Heritage", price: 350000, emoji: "👞", description: "Sepatu kasual pria lokal klasik." },
          { id: "pria-kasual-5", name: "Lacoste Carnaby", price: 1450000, emoji: "👟", description: "Sepatu kasual pria dengan branding." },
          { id: "pria-kasual-6", name: "Levi's Sneakers", price: 650000, emoji: "👟", description: "Sepatu kasual pria denim style." },
          { id: "pria-kasual-7", name: "Geoff Max", price: 450000, emoji: "👞", description: "Sepatu kasual pria kulit sintetis." },
          { id: "pria-kasual-8", name: "Tomkins Mid Cut", price: 550000, emoji: "👞", description: "Sepatu kasual pria mid-top." },
          { id: "pria-kasual-9", name: "Pierro Casual", price: 250000, emoji: "👞", description: "Sepatu kasual pria terjangkau." }
        ]
      },
      sendal: {
        label: "Sendal",
        products: [
          { id: "pria-sendal-1", name: "Crocs Classic Clog", price: 350000, emoji: "🩴", description: "Sendal pria lightweight dan nyaman." },
          { id: "pria-sendal-2", name: "Adidas Adilette Comfort", price: 450000, emoji: "🩴", description: "Sendal pria dengan Cloudfoam." },
          { id: "pria-sendal-3", name: "Nike Calm Sandal", price: 550000, emoji: "🩴", description: "Sendal pria dengan foam empuk." },
          { id: "pria-sendal-4", name: "Birkenstock Arizona", price: 950000, emoji: "🩴", description: "Sendal pria dengan footbed ergonomis." },
          { id: "pria-sendal-5", name: "Havaianas Top Slim", price: 150000, emoji: "🩴", description: "Sendal pria karet kasual." },
          { id: "pria-sendal-6", name: "Reef Fanning", price: 450000, emoji: "🩴", description: "Sendal pria untuk outdoor." },
          { id: "pria-sendal-7", name: "Skechers Reggae", price: 350000, emoji: "🩴", description: "Sendal pria dengan bantalan empuk." },
          { id: "pria-sendal-8", name: "Puma Leadcat 2.0", price: 350000, emoji: "🩴", description: "Sendal pria dengan IMEVA midsole." },
          { id: "pria-sendal-9", name: "Swallow Sandal", price: 85000, emoji: "🩴", description: "Sendal pria lokal ekonomis." }
        ]
      }
    }
  }
};
