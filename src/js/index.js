    // Data Anime (Anime Populer, Tamat, Semua, dan Jadwal Tayang)
    const animeData = {
        populer: [
            {
                nama: "One Piece",
                gambar: "/public/img/One Piece.jpg",
                genre: "Drama, Fantasy",
                link: "anime-link-2.html",
                status: "Ongoing"
            },
            {
                nama: "Hazurewaku no Joutai Ijou Skill de Saikyou ni Natta Ore ga Subete wo Juurin suru made",
                gambar: "/public/img/hazurewaku.jpg",
                genre: "Action, Adventure",
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Ore wa Subete wo Parry suru: Gyaku Kanchigai no Sekai Saikyou wa Boukensha ni Naritai",
                gambar: "/public/img/parryaveriting.jpg",
                genre: "Action, Adventure",
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Tensei shitara Slime Datta Ken Season 3",
                gambar: "/public/img/tenseishitarais3.jpg",
                genre: "Action, Adventure",
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Shinmai Ossan Boukensha, Saikyou Party ni Shinu hodo Kitaerarete Muteki ni Naru.",
                gambar: "/public/img/shinmai.jpg",
                genre: "Action, Adventure",
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Tsue to Tsurugi no Wistoria",
                gambar: "/public/img/tsue.jpg",
                genre: "Action, Adventure",
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Tokidoki Bosotto Russia-go de Dereru Tonari no Alya-san",
                gambar: "/public/img/tokidoki.jpg",
                genre: "Action, Adventure",
                link: "/takidoki/h.html",
                status: "Ongoing"
            },
            {
                nama: "Naruto: Shippuden",
                gambar: "/public/img/narutoshipuden.jpg",
                genre: "Action, Adventure",
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "SPY X FAMILY",
                gambar: "/public/img/spyxfamily.jpg",
                genre: "Action, Adventure",
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Boku no Hero Academia Season 7",
                gambar: "/public/img/bokunoheros7.jpg",
                genre: "Action, Adventure",
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Maougun Saikyou no Majutsushi wa Ningen datta",
                gambar: "/public/img/maougun.jpg",
                genre: "Action, Adventure",
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Fairy Tail: 100 Years Quest",
                gambar: "/public/img/fairytail100quest.jpg",
                genre: "Action, Adventure",
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Jujutsu Kaisen",
                gambar: "/public/img/jujutsu.jpg",
                genre: "Action, Adventure",
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Kimetsu no Yaiba: Hashira Geiko-hen",
                gambar: "/public/img/kimetsuyaibahashiratraining.jpg",
                genre: "Action, Adventure",
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "[OSHI NO KO Season 2]",
                gambar: "/public/img/oshinokos2.jpg",
                genre: "Action, Adventure",
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Isekai Yururi Kikou: Kosodateshinagara Boukensha Shimasu",
                gambar: "/public/img/isekaiyururi.jpg",
                genre: "Action, Adventure",
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Boruto: Naruto Next Generations",
                gambar: "/public/img/boruto.jpg",
                genre: "Action, Adventure",
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Naruto",
                gambar: "/public/img/naruto.jpg",
                genre: "Action, Adventure",
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Mob kara Hajimaru Tansaku Eiyuutan",
                gambar: "/public/img/mobkara.jpg",
                genre: "Action, Adventure",
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "One Punch Man Specials",
                gambar: "/public/img/onepuch.jpg",
                genre: "Action, Adventure",
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Black Clover",
                gambar: "/public/img/black clover.jpg",
                genre: "Action, Adventure",
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Tsuki ga Michibiku Isekai Douchuu",
                gambar: "/public/img/tsukiga.jpg",
                genre: "Action, Adventure",
                link: "anime-link-1.html",
                status: "Ongoing"
            },
        ],
        tamat: [
            {
                nama: "The Fable",
                gambar: "/public/img/the fable.jpg",
                genre: "Comedy, Suspense",
                link: "anime-link-1.html",
                status: "completed"
            },
            {
                nama: "Shinmai Ossan Boukensha, Saikyou Party ni Shinu hodo Kitaerarete Muteki ni Naru.",
                gambar: "/public/img/shinmai.jpg",
                genre: "Action, Adventure",
                link: "anime-link-1.html",
                status: "completed"
            },
            {
                nama: "Madougushi Dahliya wa Utsumukanai",
                gambar: "/public/img/madougushi.jpg",
                genre: "Fantasy, Slice of Life, Isekai, Reincarnation",
                link: "/madogushi/h.html",
                status: "Completed"
            },
            {
                nama: "Wind Breaker",
                gambar: "/public/img/wind breker.jpg",
                genre: "Action, Fantasy",
                link: "",
                status: "Completed"
            },
            {
                nama: "Kimetsu no Yaiba: Hashira Geiko-hen",
                gambar: "/public/img/kimetsuyaibahashiratraining.jpg",
                genre: " Action, Supernatural, Historical",
                link: "",
                status: "Completed"
            },
            {
                nama: "Tensei shitara Slime Datta Ken Season 3",
                gambar: "/public/img/tenseishitarais3.jpg",
                genre: "Action, Fantasy",
                link: "",
                status: "Completed"
            },
        ],
        semua: [
            {
                nama: "Naruto",
                gambar: "/public/img/naruto.jpg",
                genre: ["Action", "Adventure", "Fantasy"],
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Naruto Shipuden",
                gambar: "/public/img/narutoshipuden.jpg",
                genre: ["Action", "Adventure", "Fantasy"],
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "One Piece",
                gambar: "/public/img/One Piece.jpg",
                genre: ["Action", "Adventure", "Fantasy"],
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Dragon Ball",
                gambar: "/public/img/dargonball.jpg",
                genre: ["Action", "Adventure", "Fantasy","Comedy"],
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "One Puch Man",
                gambar: "/public/img/onepuch.jpg",
                genre: [ "Action", "Comedy"],
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Attack on Titan",
                gambar: "/public/img/aot.jpg",
                genre: [ "Action", "Award Winning", "Drama", "Suspense","Shounen"],
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Domestic No Kanojo",
                gambar: "/public/img/domestic.jpg",
                genre: [],
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Tokyo Revengers",
                gambar: "/public/img/tokyo.jpg",
                genre: ["Action","Drama","Shounen"],
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Tokyo Ghoul",
                gambar: "/public/img/tokyou ghoul.jpg",
                genre: [ "Action", "Fantasy", "Horror", "Suspense"],
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Kaijuu 8-Gou",
                gambar: "/public/img/kaijuu 8-gou.jpg",
                genre: [ "Action", "Sci-Fi","Military","Shounen"],
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Jujutsu Kaisen",
                gambar: "/public/img/jujutsu.jpg",
                genre: [ "Action", "Award Winning", "Supernatural","Shounen"],
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Jujutsu Kaisen Season 2",
                gambar: "/public/img/jujutsus2.jpg",
                genre: ["Action", "Award Winning", "Supernatural","Shounen"],
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Kusuriya No Hitorigoto",
                gambar: "/public/img/kusuriya no hitorigoto.jpg",
                genre: ["Drama", "Mystery","Historical", "Medical"],
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Fate/stay night: Unlimited Blade Works",
                gambar: "/public/img/Fates1.jpg",
                genre: ["Action", "Fantasy"],
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Fate/stay night: Unlimited Blade Works S2",
                gambar: "/public/img/fate.jpg",
                genre: ["Action", "Fantasy"],
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Wind Breaker",
                gambar: "/public/img/wind breker.jpg",
                genre: ["Action","School"],
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Pokemon XY",
                gambar: "/public/img/pokemonxy.jpg",
                genre: [ "Action", "Adventure", "Comedy", "Fantasy"],
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Sekai Saikou no Ansatsusha, Isekai Kizoku ni Tensei suru",
                gambar: "/public/img/sekai saiko.jpg",
                genre: ["Action", "Drama", "Fantasy", "Mystery", "Romance", "Isekai", "Reincarnation"],
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Tensei Kenja no Isekai Life: Dai-2 no Shokugyou wo Ete, Sekai Saikyou ni Narimashita",
                gambar: "/public/img/tenseikenja.jpg",
                genre: ["Action", "Adventure", "Fantasy","Isekai"],
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Rougo ni Sonaete Isekai de 8-manmai no Kinka wo Tamemasu",
                gambar: "/public/img/rougo.jpg",
                genre: ["Fantasy","Isekai"],
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Knights & Magic",
                gambar: "/public/img/kng.jpg",
                genre: [ "Action", "Fantasy","Isekai", "Mecha", "Reincarnation", "School"],
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Darling in the FranXX",
                gambar: "/public/img/darlink.jpg",
                genre: [ "Action", "Drama", "Romance", "Sci-Fi","Mecha"],
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Tokidoki Bosotto Russia-go de Dereru Tonari no Alya-san",
                gambar: "/public/img/tokidoki.jpg",
                genre: [ "Comedy", "Romance","School"],
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Tsue to Tsurugi no Wistoria",
                gambar: "/public/img/tsue.jpg",
                genre: [ "Action", "Adventure", "Fantasy","School"],
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Nige Jouzu no Wakagimi",
                gambar: "/public/img/nige.jpg",
                genre: [ "Adventure", "Comedy","Historical", "Samurai","Shounen"],
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Mushoku Tensei: Isekai Ittara Honki Dasu",
                gambar: "/public/img/mushoku.jpg",
                genre: ["Adventure", "Drama", "Fantasy", "Ecchi","Isekai", "Reincarnation"],
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Kage no Jitsuryokusha ni Naritakute",
                gambar: "/public/img/kageno.jpg",
                genre: [ "Action", "Comedy", "Fantasy", "Isekai", "Reincarnation"],
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Kekkon Yubiwa Monogatari",
                gambar: "/public/img/kekkon.jpg",
                genre: ["Action", "Fantasy", "Romance", "Ecchi", "Harem", "Isekai"],
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Boruto: Naruto Next Generations",
                gambar: "/public/img/boruto.jpg",
                genre: [" Action", "Adventure", "Fantasy", "Shounen"],
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Kimetsu no Yaiba",
                gambar: "/public/img/kimetsu.jpg",
                genre: ["Action", "Award Winning", "Supernatural","Historical"],
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "JoJo no Kimyou na Bouken",
                gambar: "/public/img/jojo.jpg",
                genre: ["Action", "Adventure", "Supernatural",  "Historical", "Vampire"],
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Gate: Jieitai Kanochi nite, Kaku Tatakaeri",
                gambar: "/public/img/gate.jpg",
                genre: [" Action", "Adventure", "Fantasy", "Isekai", "Military"],
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Gate: Jieitai Kanochi nite, Kaku Tatakaeri Part 2",
                gambar: "/public/img/gatep2.jpg",
                genre: [" Action", "Adventure", "Fantasy", "Isekai", "Military"],
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Tate no Yuusha no Nariagari",
                gambar: "/public/img/tate.jpg",
                genre: [" Action", "Adventure", "Drama", "Fantas", "Isekai"],
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Tate no Yuusha no Nariagari S2",
                gambar: "/public/img/tates2.jpg",
                genre: [" Action", "Adventure", "Drama", "Fantas", "Isekai"],
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Tensei Kizoku, Kantei Skill de Nariagaru 2nd Season",
                gambar: "/public/img/kizoku.jpg",
                genre: ["Adventure", "Fantasy", "Isekai", "Reincarnation"],
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Youjo Senki",
                gambar: "/public/img/youjo.jpg",
                genre: [ "Action", "Fantasy","Isekai", "Military", "Reincarnation", "Urban"," Fantasy"],
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Isekai Maou to Shoukan Shoujo no Dorei Majutsu",
                gambar: "/public/img/isekaimaou.jpg",
                genre: [ "Action", "Comedy", "Fantasy", "Romance", "Ecchi","Harem", "Isekai"],
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Arifureta Shokugyou de Sekai Saikyou",
                gambar: "/public/img/arifureta.jpg",
                genre: [ "Action", "Adventure", "Fantasy", "Isekai"],
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Shinchou Yuusha: Kono Yuusha ga Ore Tueee Kuse ni Shinchou Sugiru",
                gambar: "/public/img/shinchou.jpg",
                genre: [ "Action", "Adventure", "Comedy", "Fantasy","Isekai", "Parody"],
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Kenja no Mago",
                gambar: "/public/img/kenja.jpg",
                genre: ["Action", "Comedy", "Fantasy", "Romance", "Isekai", "Reincarnation"],
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Isekai wa Smartphone to Tomo ni.",
                gambar: "/public/img/smartphone.jpg",
                genre: ["Adventure", "Comedy", "Fantasy", "Romance",  "Harem", "Isekai"],
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama: "Death March kara Hajimaru Isekai Kyousoukyoku.",
                gambar: "/public/img/deathmarch.jpg",
                genre: [ "Adventure", "Comedy", "Fantasy", "Romance", "Harem" , "Isekai"],
                link: "anime-link-1.html",
                status: "Ongoing"
            },
            {
                nama:"Otome Game no Hametsu Flag shika Nai Akuyaku Reijou ni Tensei shiteshimatta",
                gambar:"/public/img/otome.jpg",
                genre:[ "Comedy", "Fantasy", "Romance","Isekai","Harem", "School", "Villainess"],
                link:"",
                status:""
            },
            {
                nama:"Tsuki ga Michibiku Isekai DouchuuTsuki ga Michibiku Isekai Douchuu",
                gambar:"/public/img/tsukiga.jpg",
                genre:[ "Action", "Adventure", "Comedy", "Fantasy","Isekai"],
                link:"",
                status:""
            },
            {
                nama:"Tsuki ga Michibiku Isekai Douchuu Season 2",
                gambar:"/public/img/tsukigas2.jpg",
                genre:["Action", "Adventure", "Comedy", "Fantasy","Isekai"],
                link:"",
                status:""
            },
            {
                nama:"Kumo desu ga, Nani ka?",
                gambar:"/public/img/kumudesu.jpg",
                genre:[ "Action", "Adventure", "Comedy", "Fantasy", "Mystery",  "Isekai", "Reincarnation"],
                link:"",
                status:""
            },
            {
                nama:"Genjitsu Shugi Yuusha no Oukoku Saikenki",
                gambar:"/public/img/genjitsu.jpg",
                genre:[ "Action", "Fantasy", "Romance","Harem", "Isekai", "Military"],
                link:"",
                status:""
            },
            {
                nama:"Genjitsu Shugi Yuusha no Oukoku Saikenki Part2",
                gambar:"/public/img/genjitsup2.jpg",
                genre:["Action", "Fantasy", "Romance","Harem", "Isekai", "Military"],
                link:"",
                status:""
            },
            {
                nama:"Slime Taoshite 300-nen, Shiranai Uchi ni Level Max ni Nattemashita",
                gambar:"/public/img/slimetaoshite.jpg",
                genre:[ "Comedy", "Fantasy", "CGDCT", "Isekai", "Reincarnation"],
                link:"",
                status:""
            },
            {
                nama:"Sentouin, Hakenshimasu!",
                gambar:"/public/img/sentouin.jpg",
                genre:["Action", "Comedy", "Fantasy", "Sci-Fi","Isekai"],
                link:"",
                status:""
            },
            {
                nama:"Tensei Kizoku no Isekai Boukenroku: Jichou wo Shiranai Kamigami no Shito",
                gambar:"/public/img/Tensei Kizoku.jpg",
                genre:[ "Action", "Fantasy", "Romance", "Harem", "Isekai", "Reincarnation"],
                link:"",
                status:""
            },
            {
                nama:"Tensei Kizoku, Kantei Skill de Nariagaru",
                gambar:"/public/img/Kizoku.jpg",
                genre:["Adventure", "Fantasy", "Isekai", "Reincarnation"],
                link:"",
                status:""
            },
            {
                nama:"kuyaku Reijou Level 99: Watashi wa Ura-Boss desu ga Maou dewa Arimasen",
                gambar:"/public/img/akuyaku.jpg",
                genre:["Adventure", "Fantasy", "Isekai", "Reincarnation"],
                link:"",
                status:""
            },
            {
                nama:"Tensei shitara Slime Datta Ken",
                gambar:"/public/img/tenseishitarai.jpg",
                genre:["Action", "Adventure", "Comedy", "Fantasy", "Isekai", "Reincarnation","Shounen"],
                link:"",
                status:""
            },
            {
                nama:"Tensei shitara Slime Datta Ken Season 2",
                gambar:"/public/img/tenseishitarais2.jpg",
                genre:["Action", "Adventure", "Comedy", "Fantasy", "Isekai", "Reincarnation","Shounen"],
                link:"",
                status:""
            },
            {
                nama:"Tensei shitara Slime Datta Ken Season 2 Part 2",
                gambar:"/public/img/tenseishitarais2p2.jpg",
                genre:["Action", "Adventure", "Comedy", "Fantasy", "Isekai", "Reincarnation","Shounen"],
                link:"",
                status:""
            },
            {
                nama:"Tensei shitara Slime Datta Ken Season 3",
                gambar:"/public/img/tenseishitarais3.jpg",
                genre:["Action", "Adventure", "Comedy", "Fantasy", "Isekai", "Reincarnation","Shounen"],
                link:"",
                status:""
            },
            {
                nama:"Chiyu Mahou no Machigatta Tsukaikata",
                gambar:"/public/img/cihiyu.jpg",
                genre:[ "Action", "Adventure", "Fantasy","Isekai"],
                link:"",
                status:""
            },
            {
                nama:"Okashi na Tensei",
                gambar:"/public/img/okashi.jpg",
                genre:[ "Isekai", "Reincarnation", "Fantasy"],
                link:"",
                status:""
            },
            
            {
                nama:"Seija Musou: Salaryman, Isekai de Ikinokoru Tame ni Ayumu Michi",
                gambar:"/public/img/seija.jpg",
                genre:[ "Adventure", "Comedy", "Fantasy", "Isekai", "Reincarnation"],
                link:"",
                status:""
            },
            {
                nama:"Kami-tachi ni Hirowareta Otoko",
                gambar:"/public/img/kamis1.jpg",
                genre:[ "Fantasy", "Slice of Life", "Isekai", "Iyashikei", "Reincarnation"],
                link:"",
                status:""
            },
            {
                nama:"Kami-tachi ni Hirowareta Otoko Season 2",
                gambar:"/public/img/kamis2.jpg",
                genre:["Fantasy", "Slice of Life", "Isekai", "Iyashikei", "Reincarnation"],
                link:"",
                status:""
            },
            {
                nama:"Solo Leveling",
                gambar:"/public/img/sololeveling.jpg",
                genre:["Action", "Adventure", "Fantasy"],
                link:"",
                status:""
            },
            {
                nama:"Isekai de Mofumofu Nadenade suru Tame ni Ganbattemasu.",
                gambar:"/public/img/mofumofu.jpg",
                genre:[ "Adventure", "Fantasy","Isekai", "Reincarnation"],
                link:"",
                status:""
            },
            {
                nama:"Isekai Yakkyoku",
                gambar:"/public/img/yakyoku.jpg",
                genre:[ "Fantasy", "Isekai", "Medical", "Reincarnation"],
                link:"",
                status:""
            },
            {
                nama:"Uchi no Kaisha no Chiisai Senpai no Hanashi",
                gambar:"/public/img/uchino.jpg",
                genre:["Comedy", "Romance"],
                link:"",
                status:""
            },
            {
                nama:"Isekai de Cheat Skill wo Te ni Shita Ore wa, Genjitsu Sekai wo mo Musou Suru: Level Up wa Jinsei wo Kaeta",
                gambar:"/public/img/shita.jpg",
                genre:[ "Action", "Adventure", "Fantasy", "Isekai", "School"],
                link:"",
                status:""
            },
            {
                nama:"Overlord",
                gambar:"/public/img/overlords1.jpg",
                genre:[ "Action", "Adventure", "Fantasy","Isekai"],
                link:"",
                status:""
            },
            {
                nama:"Overlord II",
                gambar:"/public/img/overlords2.jpg",
                genre:["Action", "Adventure", "Fantasy","Isekai"],
                link:"",
                status:""
            },
            {
                nama:"Overlord III",
                gambar:"/public/img/overlords3.jpg",
                genre:["Action", "Adventure", "Fantasy","Isekai"],
                link:"",
                status:""
            },
            {
                nama:"Overlord IV",
                gambar:"/public/img/overlords4.jpg",
                genre:["Action", "Adventure", "Fantasy","Isekai"],
                link:"",
                status:""
            },
            {
                nama:"Seijo no Maryoku wa Bannou desu",
                gambar:"/public/img/seijos1.jpg",
                genre:["Fantasy", "Romance","Isekai","Medical"],
                link:"",
                status:""
            },
            {
                nama:"Seijo no Maryoku wa Bannou desu Season II",
                gambar:"/public/img/seijos2.jpg",
                genre:[ "Fantasy", "Romance","Isekai","Medical"],
                link:"",
                status:""
            },
            {
                nama:"Madougushi Dahliya wa Utsumukanai",
                gambar:"/public/img/madougushi.jpg",
                genre:[ "Fantasy", "Slice of Life", "Isekai", "Reincarnation"],
                link:"",
                status:""
            },
            {
                nama:"Higeki no Genkyou to Naru Saikyou Gedou Last Boss Joou wa Tami no Tame ni Tsukushimasu.",
                gambar:"/public/img/lastame.jpg",
                genre:[ "Fantasy", "Isekai", "Villainess"],
                link:"",
                status:""
            },  
            
        ],
        jadwalTayang: {
            monday: [
                
                { nama: "Goukon ni Ittara Onna ga Inakatta Hanashi", gambar: "/public/gambar/goukon.jpg", link: "anime-c.html", jamTayang: "1:00 PM" },
                { nama:"Kami wa Game ni Ueteiru", gambar:"/public/gambar/kamiwagame.jpg", link:"kamiwagame.html", jamTayang:"02:00"},
                { nama:"Love Live! Superstar!! 3rd Season", gambar:"/public/gambar/loveliivesupserstars3.jpg", link:"lovelives3.html", jamTayang:"03:00"},
                { nama: "Nageki no Bourei", gambar: "/public/gambar/nageki.jpg", link: "nageki.html", jamTayang: "04:00 PM" },
                { nama:"Shy Season 2",gambar:"/public/gambar/shys2.jpg", link:"shys2.html", jamTayang:"05:00"},
                { nama: "Tensei Kizoku", gambar: "/public/gambar/tenseikizokus2.jpg", link: "tenseikizoku.html", jamTayang: "06:00 AM" },
                { nama:"The iDOLM@STER Shiny Colors Season 2", gambar:"/public/gambar/theidolmasters2.jpg", link:"theidolmasters3.html", jamTayang:"07:00"},
                { nama:"Tsuma, Shougakusei ni Naru", gambar:"/public/gambar/tsuma.jpg", link:"tsuma.html", jamTayang:"08:00"}
            ],
            tuesday: [
                { nama: "Rekishi ni Nokoru Akujo ni Naru zo", gambar: "/public/gambar/rekishi.jpg", link: "rekishi.html", jamTayang: "01:00 AM" },
                { nama: "Saikyou no Shienshoku Wajutsushi de Aru Ore wa Sekai Saikyou Clan wo Shitagaeru", gambar: "/public/gambar/wajutshusi.jpg", link: "anime-d.html", jamTayang: "2:00 PM" }
            ],
            wednesday: [
                { nama: "Amagami-san Chi no Enmusubi", gambar: "/public/gambar/amagami-san.jpg", link: "anime-e.html", jamTayang: "9:00 AM" },
                { nama: "Kimi to Boku no Saigo no Senjou, Aruiwa Sekai ga Hajimaru Seisen Season II", gambar: "/public/gambar/kimisens2.jpg", link: "anime-e.html", jamTayang: "10:00 AM" },
                { nama: "e:Zero kara Hajimeru Isekai Seikatsu 3rd Season", gambar: "/public/gambar/rezeros3.jpg", link: "anime-e.html", jamTayang: "11:00 AM" },
                { nama: "Tasuuketsu", gambar: "/public/gambar/tasuuketsu.jpg", link: "anime-e.html", jamTayang: "12:00 AM" },
            ],
            thursday: [
                { nama: "Acro Trip", gambar: "/public/gambar/arcotrip.jpg", link: "anime-f.html", jamTayang: "8:30 AM" },
                { nama: "Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka V: Houjou no Megami-hen", gambar: "/public/gambar/dungeon nideais5.jpg", link: "anime-f.html", jamTayang: "9:30 AM" },
                { nama: "Delico's Nursery", gambar: "/public/gambar/delico's.jpg", link: "anime-f.html", jamTayang: "10:30 AM" },
                { nama:"Isekai Suicide Squad", gambar: "/public/gambar/suicide.jpg", link: "anime-f.html", jamTayang: "11:30 AM" },
                { nama: "Kinoko Inu", gambar: "/public/gambar/kinoku.jpg", link: "anime-f.html", jamTayang: "14:30 AM" },
                { nama: "NegaPosi Angler", gambar: "/public/gambar/negaiposi.jpg", link: "anime-f.html", jamTayang: "12:30 AM" },
                { nama: "Sengoku Youko: Senma Konton-hen", gambar: "/public/gambar/sengokus2.jpg", link: "anime-f.html", jamTayang: "13:30 AM" },
                { nama: "Shin Tennis no Oujisama: U-17 World Cup Semifinal", gambar: "/public/gambar/shintenis.jpg", link: "anime-f.html", jamTayang: "15:30 AM" },
                { nama: "yarinaoshi reijou wa ryuutei heika wo kouryakuchuu", gambar: "/public/gambar/yarinaishi.jpg"}
            ],
            friday: [
                { nama: '2.5-jigen no Ririsa', gambar: '/public/gambar/ririsa.jpg', link: 'naruto.html', jamTayang: '4:00 PM' },
                { nama: "Ao No Hako", gambar: "/public/gambar/ao no hako.jpg", link: "anime-g.html", jamTayang: "5:00 PM" },
                { nama: "Dandadan", gambar: "/public/gambar/dandadan.jpg", link: "anime-g.html", jamTayang: "5:00 PM" },
                { nama: "Hitoribocchi no Isekai Kouryaku", gambar: "/public/gambar/hitoribochi.jpg", link: "anime-g.html", jamTayang: "5:00 PM" },
                { nama: "Kekkon suru tte, Hontou desu ka", gambar: "/public/gambar/kekkonsuru.jpg", link: "anime-g.html", jamTayang: "5:00 PM" },
                { nama: "Mecha-ude (TV)", gambar: "/public/gambar/mechaude.jpg", link: "anime-g.html", jamTayang: "5:00 PM" },
                { nama: "Rurouni Kenshin: Meiji Kenkaku Romantan - Kyoto Douran", gambar: "/public/gambar/kyoto.jpg", link: "anime-g.html", jamTayang: "5:00 PM" },
                { nama: "Sayounara Ryuusei, Konnichiwa Jinsei", gambar: "/public/gambar/sayounara.jpg", link: "anime-g.html", jamTayang: "5:00 PM" },
                { nama: "Senpai wa Otokonoko", gambar: "/public/gambar/senpai wa otokonoko.jpg", link: "anime-g.html", jamTayang: "5:00 PM" },
                { nama: "Trillion Game", gambar: "/public/gambar/trillion game.jpg", link: "anime-g.html", jamTayang: "5:00 PM" },
            ],
            saturday: [
                { nama: "One Piece", gambar: "/public/gambar/onelp.jpg", link: "onepiece.html", jamTayang: "12:00 PM" },
                { nama: "Naruto", gambar: "/public/gambar/naruto.jpg", link: "anime-naruto.html", jamTayang: "2:00 PM" }
            ],
            sunday: [
                { nama: "Ao no Exorcist: Yuki no Hate-hen", gambar: "/public/gambar/ao no.jpg", link: "anime-a.html", jamTayang: "10:00 AM" },
                { nama: 'Bleach: Sennen Kessen-hen - Soukoku-tan', gambar:"/public/gambar/shokutan.jpg",link:"shokutan.html", jamTayang:"08.00"},
                { nama: "[Oshi No Ko]", gambar: "/public/gambar/oshinokos2.jpg", link: "oshinoko.html", jamTayang: "23:00 PM" },
                { nama:"Blue Lock vs. U-20 Japan", gambar:"/public/gambar/blue locks2.jpg",link:"bluelocks2.html", jamTayang:"12.00"},
                { nama:"Chi.: Chikyuu no Undou ni Tsuite", gambar:"/public/gambar/tsuite.jpg", link:"tsuite.html", jamTayang:"13.00"},
                { nama:"Fairy Tail: 100-nen Quest", gambar:"/public/gambar/fairytail100.jpg", link:"fairyyail.html", jamTayang:"14.00"},
                { nama:"Kimi wa Meido-sama.", gambar:"/public/gambar/kimiwa.jpg",link:"kimiwa.html", jamTayang:"15.00"},
                { nama:"Make Heroine ga Oosugiru!", gambar:"/public/gambar/make heroin.jpg", link:"makeheroin.html", jamTayang:"16.00"}
            ]
        }
    };


    let currentIndex = 0; // To track the current index of the displayed anime items
const itemsPerPage = 22; // Number of items to display per page
const semua = 25;

// Function to render anime items into a specified container
function renderAnime(containerId, data, showRating = false) {
    const container = document.getElementById(containerId);

    // Loop through the anime data and create elements
    data.slice(currentIndex, currentIndex + semua).forEach((anime, index) => {
        const animeElement = document.createElement('div');
        animeElement.classList.add('anime-item');

        // Create inner HTML for the anime item
        animeElement.innerHTML = `
            <a href="${anime.link}" class="anime-link">
                <img src="${anime.gambar}" alt="${anime.nama}" class="anime-image">
                <div class="anime-info">
                    <h4>${anime.nama}</h4>
                </div>
                ${showRating ? `<div class="anime-rating">${index + 1}</div>` : ''}
            </a>
        `;

        container.appendChild(animeElement); // Append the new anime item to the container
    });

    // Show or hide the "Next" button
    const nextButton = document.getElementById('next-button');
    const moreSection = document.querySelector(`.anime-more`);

    if (currentIndex + semua < data.length) {
        nextButton.classList.remove('hidden'); // Tampilkan tombol selanjutnya
        moreSection.classList.add('hidden'); // Sembunyikan "Klik untuk lebih banyak" dan "Lihat Semua"
    } else {
        nextButton.classList.add('hidden'); // Sembunyikan tombol selanjutnya
        moreSection.classList.remove('hidden'); // Tampilkan "Klik untuk lebih banyak" dan "Lihat Semua"
    }
}

// Function to load the next set of anime items
function loadMoreAnime() {
    currentIndex += semua; // Increment the index
    if (currentIndex < animeData.semua.length) {
        renderAnime('anime-semua', animeData.semua); // Render next items
    }
}

// Render anime populer dengan peringkat
renderAnime('anime-populer', animeData.populer, true);

// Render anime tamat tanpa peringkat
renderAnime('anime-tamat', animeData.tamat, false);

// Render semua anime tanpa scroll buttons
renderAnime('anime-semua', animeData.semua);

// Add event listener to the "Next" button
document.getElementById('next-button').addEventListener('click', loadMoreAnime);

// Scroll event function for anime-populer and anime-tamat only
function addScrollEvents(containerId) {
    const container = document.getElementById(containerId);
    const leftButton = container.parentElement.querySelector('.scroll-button.left');
    const rightButton = container.parentElement.querySelector('.scroll-button.right');

    // Check if the buttons exist
    if (!leftButton || !rightButton) {
        console.error(`Scroll buttons not found for container: ${containerId}`);
        return; // Exit the function if buttons are not found
    }

    // Function to update button visibility
    function updateButtonVisibility() {
        // Hide left button if at the start
        if (container.scrollLeft === 0) {
            leftButton.classList.add('hidden');
        } else {
            leftButton.classList.remove('hidden');
        }

        // Hide right button if at the end
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
            rightButton.classList.add('hidden');
        } else {
            rightButton.classList.remove('hidden');
        }
    }

    // Add scroll event listener
    container.addEventListener('scroll', updateButtonVisibility);
    updateButtonVisibility(); // Update button visibility on initialization

    // Scroll functions when buttons are clicked
    leftButton.addEventListener('click', () => {
        container.scrollBy({ left: -200, behavior: 'smooth' });
    });

    rightButton.addEventListener('click', () => {
        container.scrollBy({ left: 200, behavior: 'smooth' });
    });
}

// Add scroll events for each anime container that has scroll buttons
addScrollEvents('anime-populer');
addScrollEvents('anime-tamat');
    function addGenreScrollEvents() {
        const genreWrapper = document.querySelector('.genre-list-wrapper');
        const genreList = document.querySelector('.genre-list');
        const leftButton = document.querySelector('.scroll-left');
        const rightButton = document.querySelector('.scroll-right');

        function updateButtonVisibility() {
            // Sembunyikan tombol kiri jika sudah di awal
            if (genreWrapper.scrollLeft === 0) {
                leftButton.classList.add('hidden'); // Sembunyikan tombol kiri
            } else {
                leftButton.classList.remove('hidden'); // Tampilkan tombol kiri
            }

            // Sembunyikan tombol kanan jika sudah di akhir
            if (genreWrapper.scrollLeft + genreWrapper.clientWidth >= genreList.scrollWidth) {
                rightButton.classList.add('hidden'); // Sembunyikan tombol kanan
            } else {
                rightButton.classList.remove('hidden'); // Tampilkan tombol kanan
            }
        }

        // Tambahkan event listener untuk scroll
        genreWrapper.addEventListener('scroll', updateButtonVisibility);
        // Perbarui tombol visibility pada saat inisialisasi
        updateButtonVisibility();

        // Fungsi scroll ketika tombol diklik
        leftButton.addEventListener('click', () => {
            genreWrapper.scrollBy({ left: -200, behavior: 'smooth' }); // Scroll ke kiri
        });

        rightButton.addEventListener('click', () => {
            genreWrapper.scrollBy({ left: 200, behavior: 'smooth' }); // Scroll ke kanan
        });
    }

    // Panggil fungsi untuk menambahkan event scroll
    addGenreScrollEvents();


    // Function to render anime for each day's schedule
    function renderAnimeForSchedule(listId, animeList) {
        const container = document.getElementById(listId);
        container.innerHTML = ''; // Clear container before inserting new data

        animeList.forEach(anime => {
            const animeElement = document.createElement('div');
            animeElement.classList.add('anime-item');

            animeElement.innerHTML = `
                <a href="${anime.link}" class="anime-link">
                    <img src="${anime.gambar}" alt="${anime.nama}" class="anime-image">
                    <div class="anime-info">
                        <h4>${anime.nama}</h4>
                        <p class="anime-schedule-time">${anime.jamTayang}</p>
                    </div>
                </a>
            `;

            container.appendChild(animeElement);
        });
    }


    // Fungsi untuk mengubah nama hari dari bahasa Indonesia ke bahasa Inggris
    function convertDayToEnglish(dayIndonesian) {
        const dayMap = {
            'minggu': 'sunday',
            'senin': 'monday',
            'selasa': 'tuesday',
            'rabu': 'wednesday',
            'kamis': 'thursday',
            'jumat': 'friday',
            'sabtu': 'saturday'
        };
        return dayMap[dayIndonesian.toLowerCase()];
    }

    // Fungsi untuk menampilkan jadwal anime untuk hari yang dipilih
    function showAnimeForDay(day) {
        // Sembunyikan semua kontainer
        const allContainers = document.querySelectorAll('.anime-day-content');
        allContainers.forEach(container => {
            container.classList.add('hidden'); // Sembunyikan semua kontainer
        });

        const animeContainer = document.getElementById(day);
        animeContainer.innerHTML = ''; // Kosongkan kontainer sebelum mengisi data baru

        const animeList = animeData.jadwalTayang[day];
        if (animeList && animeList.length > 0) {
            renderAnimeForSchedule(day, animeList); // Panggil fungsi render untuk hari yang dipilih
            animeContainer.classList.remove('hidden'); // Tampilkan kontainer yang dipilih
        } else {
            animeContainer.innerHTML = '<p>Tidak ada anime untuk hari ini.</p>'; // Jika tidak ada anime, tampilkan pesan
        }
    }

    // Tentukan hari ini dalam bahasa Indonesia
    let todayIndonesian = new Date().toLocaleString('id-ID', { weekday: 'long' }).toLowerCase();

    // Konversi hari Indonesia ke format bahasa Inggris
    let todayEnglish = convertDayToEnglish(todayIndonesian);

    // Tampilkan anime untuk hari ini (dalam format bahasa Inggris)
    showAnimeForDay(todayEnglish);

    // Function to get the date of a specific day of the week
    function getDateOfSpecificDay(dayIndex) {
        const today = new Date();
        const currentDay = today.getDay(); // Sunday = 0, Monday = 1, etc.
        const distance = (dayIndex + 7 - currentDay) % 7; // Distance from today to the specific day
        const specificDate = new Date(today);
        specificDate.setDate(today.getDate() + distance);
        return specificDate.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    }

    // Set the date for each day
    document.getElementById('date-monday').innerText = getDateOfSpecificDay(1); // Monday
    document.getElementById('date-tuesday').innerText = getDateOfSpecificDay(2); // Tuesday
    document.getElementById('date-wednesday').innerText = getDateOfSpecificDay(3); // Wednesday
    document.getElementById('date-thursday').innerText = getDateOfSpecificDay(4); // Thursday
    document.getElementById('date-friday').innerText = getDateOfSpecificDay(5); // Friday
    document.getElementById('date-saturday').innerText = getDateOfSpecificDay(6); // Saturday
    document.getElementById('date-sunday').innerText = getDateOfSpecificDay(0); // Sunday

    // Function to show anime for the selected day
    function showAnimeForDay(day) {
        // Hide all anime containers
        const allContainers = document.querySelectorAll('.anime-day-content');
        allContainers.forEach(container => {
            container.classList.add('hidden'); // Hide all containers
        });

        const animeContainer = document.getElementById(day);
        animeContainer.innerHTML = ''; // Clear the container before inserting new data

        const animeList = animeData.jadwalTayang[day];
        if (animeList && animeList.length > 0) {
            renderAnimeForSchedule(day, animeList); // Call render function for the selected day
            animeContainer.classList.remove('hidden'); // Show the selected container
        } else {
            animeContainer.innerHTML = '<p>Tidak ada anime untuk hari ini.</p>'; // If no anime, display message
        }
    }

    // Event listener untuk setiap tombol hari dalam jadwal
    const dayButtons = document.querySelectorAll('.day');
    dayButtons.forEach(button => {
        button.addEventListener('click', function() {
            const day = this.getAttribute('data-day');
            dayButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            showAnimeForDay(day);
        });
    });


    showAnimeForDay(todayEnglish);


    // Setel tombol hari yang aktif berdasarkan hari ini
    dayButtons.forEach(button => {
        if (button.getAttribute('data-day') === todayEnglish) {
            button.classList.add('active'); // Tambahkan kelas 'active' untuk tombol hari ini
        }
    });

    let currentSlide = 0; // Current slide index
    const slides = document.querySelectorAll('.slide-item'); // Get all slides
    const totalSlides = slides.length; // Total number of slides
    const carouselContainer = document.querySelector('.carousel-container');

    // Function to show the current slide
    function showSlide(index) {
        // Calculate the new transform value to slide
        carouselContainer.style.transform = `translateX(-${index * 100}%)`;
        updateIndicators(index); // Update indicators
    }

    // Function to update active indicator
    function updateIndicators(index) {
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index); // Toggle active class
        });
    }

    // Function to go to the next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides; // Increment and loop back
        showSlide(currentSlide);
    }

    // Function to go to the previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Decrement and loop back
        showSlide(currentSlide);
    }

    // Set interval for auto sliding every 5 seconds
    setInterval(nextSlide, 5000);

    // Event listeners for indicators
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index; // Set current slide to the clicked indicator
            showSlide(currentSlide);
        });
    });

    // Optional: Add navigation buttons if needed
    document.querySelector('.btn-next').addEventListener('click', nextSlide);
    document.querySelector('.btn-prev').addEventListener('click', prevSlide);

    document.addEventListener("DOMContentLoaded", function() {
        const animeContainer = document.getElementById("anime-semua");
        const animeItems = document.querySelectorAll(".anime-item");
    
        // Function to add visible class to each anime item
        function showAnimeItems() {
            animeItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add("visible"); // Add class to trigger animation
                }, index * 100); // Stagger the animation for each item
            });
        }
    
        // Call the function to show anime items
        showAnimeItems();
    });

    