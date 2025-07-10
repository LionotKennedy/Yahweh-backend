const pool = require("../config/db");

const seedData = async () => {
  try {
    console.log("🌱 Starting database seeding...");

    // Seed contacts
    const contactData = {
      title: "Contact us",
      description1:
        "P.E.E.S.S. Foundation, 1777 NE Loop 410, Suite 600, San Antonio, TX 78217",
      description2:
        "P.E.E.S.S. Foundation, P.O. Box 884, Seguin, TX 78156-0884",
      phone: "1-800-967-7337 (210) 678-3061",
      email: "yahweh@yahwehbenyahweh.com",
    };

    await pool.query(
      `
      INSERT INTO contacts (title, description1, description2, phone, email)
      VALUES ($1, $2, $3, $4, $5)
      ON CONFLICT DO NOTHING
    `,
      [
        contactData.title,
        contactData.description1,
        contactData.description2,
        contactData.phone,
        contactData.email,
      ]
    );

    // Seed cultural_attire
    const culturalAttireData = {
      title: "Nos Vêtements Traditionnels Sacrés",
      description1:
        "יהוה בן יהוה dia nandidy ny fomba tokony hitafianay sy ny antony manosika anizany.'Izay mandresy dia hakan-damba fotsy, ary tsy hofanako ny anarany ao amin'ny Bokin'ny Fiaina, fa hanaiko ny anarany eo anatrehan'ny Raiko, יהוה, sy eo anatrehan'ny anjely Neny' (Apokalipsy 3:5). Tenin'izany dia tena zava-dehibe ho an'ny famonjena sy ny fiainana mandrakizay. Raha mitovy fitafiana amin'ny hafa isika ka tsy maharesy ny fomba jentilisa, dia hofafana ny anarantsika ao amin'ny...'Ny Bokin'ny Fiaina.'Mba ho voavonjy amin'ny faharavana dia tsy maintsy miverina amin'ny kolontsain'i יהוה isika.",
      description2:
        "Inona no zava-dehibe momba ny akanjon'ny fotsy masina anao?",
      description3:
        "Voalohany, izany dia kolontsain'Andriamanitra, יהוה, sy ny Zanak'Andriamanitra, יהוה בן יהוה. Ny Daniely 7:9 dia mamaritra an'i יהוה, Ilay Antitra andro, nitafy akanjo fotsy tahaka ny lane, ary milaza hoe: 'Nahita aho mandra-pisy ny seza fiandrianana natao, ary Ilay Antitra andro nipetraka, izay nitafy akanjo fotsy tahaka ny lane, ary ny volony tahaka ny volonondry madio:…' Ny Apokalipsy 1:13-14 kosa dia mampiseho ny Zanak'i יהוה nitafy akanjo nisy hatramin'ny tongony, ary milaza amin'ny ampahany: '… olona mitovy amin'ny Zanak'olona, nitafy akanjo lava nisy hatramin'ny tongony, fehin'ny fehikibo volamena. Ny lohany sy ny volony dia fotsy tahaka ny volonondry, fotsy tahaka ny lane; ary ny masony tahaka ny lelafo afo';",
      description4:
        "Raha tsy fantatra amin'ny fomba hitafian'Andriamanitra ny olona iray, dia tsy hahafantatra Azy izy rehefa avy. Noho izany, mety tsy hihaino ny antsoiny izy ka very ny fitahian'ny lanitra.",
      description5:
        "Ny fotsy dia mariky ny fahadiovana sy ny fitambarana. Ny fitafiana akanjo fotsy dia maneho fa misy dingana fanadiovana mitranga—fanesorana ny fahotana sy fiverenana amin'ny lalàn'ny fanekena. 'Na dia mena toy ny menamaso aza ny fahotanareo, dia ho fotsy toy ny lane izy' (Isaia 1:18). Ao amin'ny Fanjakan'i יהוה, ny fitafiana akanjo fotsy dia mandrakizaya, ara-batana sy ara-panahy (Mpitoriteny 9:8). Izany dia manambara ny fidiran'ny vanim-potoana vaovao, fenitra ara-pitondrantena vaovao, fanjakana tsara; ny Governemanta Teôkratikan'i יהוה.",
    };

    await pool.query(
      `
      INSERT INTO cultural_attire (title, description1, description2, description3, description4, description5)
      VALUES ($1, $2, $3, $4, $5, $6)
      ON CONFLICT DO NOTHING
    `,
      [
        culturalAttireData.title,
        culturalAttireData.description1,
        culturalAttireData.description2,
        culturalAttireData.description3,
        culturalAttireData.description4,
        culturalAttireData.description5,
      ]
    );

    // Seed followers
    const followersData = {
      title: "La Communauté des Fidèles",
      description1:
        "Ny mpanaraka an'i יהוה בן יהוה dia anisan'ny vondrona manokana sy voafidy. Nosafidin'i יהוה izy ireo ho voavonjy sy hahazo fiainana mandrakizay. Amin'izao fotoana izao dia iray amin'ny fanokanana azy ireo eo amin'ny toerana fanapahana izay tokony ho azy.",
      description2:
        "Ny mpanaraka an'i יהוה בן יהוה dia mahazo famonjena, fitiavana, ary fiarovana avy amin'i יהוה בן יהוה, Andriamanitry ny mpanaraka Azy sy ny Zanany, יהוה בן יהוה (Ohabolana 18:10).",
      description3:
        "Ny mpanaraka an'i יהוה בן יהוה dia olombelona izay mampiasa sy mampihetsika ny heriny ara-tsaina hanao eritreritra ary hanova ireo eritreritra ireo ho atao voalamina, izay mahatonga vokatra hita maso. Tsy miadana sy tsy mitandrina izy ireo. Maro no afaka mijoro ho vavolombelona fa ny mpanaraka an'i יהוה בן יהוה dia mpianatra, manam-pahaizana, ary mpianatra ny fitsipika ara-Baiboly. Izy ireo dia mpikambana, namana, mpiara-dia, ary mpanohana an'i יהוה sy ny lalàny. Izy ireo no mahafeno ny fepetra takina amin'ny olombelona amin'ny alalan'ny fanatanterahany ny fanapahan-kevitra ara-drariny sy ara-tsaina.",
      description4:
        "Ny mpanaraka marina an'i יהוה בן יהוה dia mifikitra amin'ny hafatr'Andriamanitra momba ny famonjena, izay manehy finoana tsara ho an'ny olona tsara fanahy rehetra, tsy misy hosoka, fitaka, na famadihana; ka mahatonga izay rehetra mino sy manara-dalàna ny fitondrantena ho ara-dalàna, ara-drariny, mahitsy, miharihary, mahitsy fo, tsara fitondrana, mahitsy toetra, ara-pitondrantena, ary manana fitsipika. Rehefa misy ireo toetra manokana ireo ao amin'ny toetran'ny olona iray, dia lasa tahaka ny soratra masina na dika mitovy amin'ny maha-Andriamanitra izy, ary maneho ny endr'an'i יהוה sy ny Zanany, יהוה בן יהוה.",
      description5:
        "Raha fintinina, ny mpanaraka an'i יהוה בן יהוה dia manezo fitiavana mafana sy firaiketam-po amin'ny olona na vondrona rehetra manaraka fitsipika ara-moraly. Manana fangoraham-po sy firahalahiana izy ireo, izay tokony ho an'ny olon-drehetra. Marina tokoa fa manana fiahiana lalina ny soa iraisany. Izy ireo no maha-olona feno fangoraham-po ao amin'ny fiarahamonina: ireo mpandray anjara mavitrika sy mahalala fomba amin'ny fanorenana ny...",
    };

    await pool.query(
      `
      INSERT INTO followers (title, description1, description2, description3, description4, description5)
      VALUES ($1, $2, $3, $4, $5, $6)
      ON CONFLICT DO NOTHING
    `,
      [
        followersData.title,
        followersData.description1,
        followersData.description2,
        followersData.description3,
        followersData.description4,
        followersData.description5,
      ]
    );

    // Seed home_page
    const homePageData = {
      video_section_title: "AFAKA MAMANTATRA NY ZANAKA VE IANAO?",
      video_section_content:
        "Ho fantatrao Ve Izy? Iza no Anarany, raha tohizinao? Hijery tahaky ny aho Izy rehefa miverina amin'ny Fiverenany Fanindroany mba haka antsika ho any Aminy? Valiny ireo fanontaniana ireo sy maro hafa koa no hita ao amin'ity sety DVD misy kapila roa mahery ity, antsoina hoe, \"I Yahweh Ben Yahweh no Andriamanitra Marina sy ny Fiainana Mandrakizay.\" Mipetraha tsara ka jereo ity sombin-dahatsary fohy ity, ary baovao izao mba hahazoanao ny hafatra feno famonjena avy Aminy.",
    };

    const homePageResult = await pool.query(
      `
      INSERT INTO home_page (video_section_title, video_section_content)
      VALUES ($1, $2)
      RETURNING id
    `,
      [homePageData.video_section_title, homePageData.video_section_content]
    );

    const homePageId = homePageResult.rows[0].id;

    // Seed home_page_videos
    const videos = [
      {
        src: "https://ms.yahwehbenyahweh.com/video/720/2025_FeastThemeVideo_New.mp4",
        poster: "page-banner_.jpg",
      },
      {
        src: "https://ms.yahwehbenyahweh.com/video/720/Good_News_Commercial.mp4",
        poster: "Good_News_of_Yahweh.jpg",
      },
      {
        src: "https://ms.yahwehbenyahweh.com/video/720/Home_Page_Promo.mp4",
        poster: "Eternal_Life.jpg",
      },
    ];

    for (const video of videos) {
      await pool.query(
        `
        INSERT INTO home_page_videos (home_page_id, src, poster)
        VALUES ($1, $2, $3)
        ON CONFLICT DO NOTHING
      `,
        [homePageId, video.src, video.poster]
      );
    }

    // Seed yahweh
    const yahwehData = {
      title1: "Le Nom Sacré du Créateur",
      title2: "YAHWEH",
      description1:
        "Ny hery mandrisika ny izao rehetra izao dia tsy hery mistery, fa olona tena izy mitondra ny anarana hoe יהוה. Ny fitsidihana ny tobin'ny habakabaka iraisam-pirenena, sy ny fandinihana ara-tsiansa, anisan'izany ny sary nalaina avy any amin'ny planeta hafa, dia manaporofo fa ny habakabaka mahagaga sy goavana dia voarindra tsara. Tsy misy dikany ny manao fehin-kevitra fa izao tontolo goavana izao dia voarindra tsara nefa tsy misy hery iray mifehy. Ny lojika dia milaza fa tsy misy hery tsy manan-tsaina afaka hamorona izao karazana fiainana isan-karazany izao, na hanome ny fahendrena sy hery tsy manam-petra hita eny amin'ny izao tontolo izao.",
      description2:
        "Fa izao no lazain'i יהוה, Ilay nahary ny lanitra; יהוה formed the no namorona ny tany sy nanao izy, Nisy nanorenany izy, ary tsy ho an-tsinony no naha-nahary Azy (Isaia 45:18).",
      description3:
        "Misy fitsipika vaovao izay efa voaporofo tamin'ny alalan'ny arkeolojia manerantany. Ny mpahay arkeolojia dia miara-milaza tsy misy fisalasalana, fa ao ambadiky ny habakabaka goavana sy ny izao tontolo izao, misy fototra iray: ny finoana Andriamanitra tokana, ILAY ANDRIAMANITRA TOKANA, izay ny anarany hatramin'izao dia noforanina, nosaronina, nafenina, ary natahotra. Io anarana io, יהוה, dia atao hoe 'Ny Tsiambaratelo Lehibe Indrindra Etỳ An-Tany'.",
      description4:
        "Ao amin'ny Ohabolana 30:4 dia misy fanontaniana maromaro momba ny Mpahary ny Lanitra, fa ny roa tonga lafatra indrindra dia: Iza no anarany, ary Iza no anaran'ny Zanany, raha hahay ny hilaza?",
      description5:
        "I Mosesy, talohan'ny fianjeran'i Egipta, dia nahafantatra fa zava-dehibe ny miantso an'Andriamanitra amin'ny anarany manokana (Eksodosy 3:13), ary io toe-javatra io mbola misy hatramin'izao. Talohan'ny fianjeran'i Babylona, ilay tanàna lehibe... יהוה בּן יהוה, tIlay Zanak'iיהוה, dia nahatakatra ny maha-zava-dehibe ny fiantsoana Azy amin'ny anarany manokana; fa tsy misy anarana hafa eo ambanin'ny lanitra omena ny olombelona, izay ahafahana voavonjy (Jaona 5:43; 1 Timoty 2:5-6; Asa 4:12).",
      description6:
        "Amin'ny fototry ny zavatra rehetra, tsy azo atao ny hiditra amin'ny fifandraisana amin'i יהוה raha tsy manaiky an'i יהוה בּן יהוה, Ilay Zanany Tiana (Jaona 10:9, 30; Jaona 14:6; Jaona 17:11). Noho izany, ny fahafantarana an'i יהוה dia mitovy amin'ny fahitana ny zava-misy amin'ny fahatokiana azo antoka sy ny famonjena. Ny fanambarana ny anarany sy ny anaran'ny Zanany no fanalahidy hahatakarana ny finoana ara-Baiboly.",
    };

    await pool.query(
      `
      INSERT INTO yahweh (title1, title2, description1, description2, description3, description4, description5, description6)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      ON CONFLICT DO NOTHING
    `,
      [
        yahwehData.title1,
        yahwehData.title2,
        yahwehData.description1,
        yahwehData.description2,
        yahwehData.description3,
        yahwehData.description4,
        yahwehData.description5,
        yahwehData.description6,
      ]
    );

    const yahwehbenData = {
      title1: "Le Fils du Très-Haut",
      title2: "YAHWEH BEN YAHWEH",
      description1:
        "יהוה no Andriamanitry ny andriamanitra. יהוה no Andriamanitry ny fanekena amin'i Israely. Izy no Andriamanitr'i Abrahama, Isaka, ary Jakoba. יהוה בן יהוה no Zanak'יהוה.",
      description2:
        "יהוה בן יהוה no Tompon’ny Efiombonana Any an-Danitra, Mpamorona ny Izao Tontolo Izao, ary Ilay Mpanjaka Masina sy Irery. Izy eto mba hamahatra ny voafonja sy hampitsangana mahitsy eo amin’ny kianja ny marina izay voafehy. Fa, indro! Misy lehibe noho i Solomona eto!",
      description3:
        "Tamin’ny 1979, יהוה בן יהוה dia tonga tany Miami ka lasa Mpitarika Ara-Panahy sy Mpanorina ny Firenen’i יהוה. Na dia nanao voady fahantrana aza Izy, tamin’ny fito taona Izy nitarika ny Firenena hanangona fanjakana sarobidy 250 tapitrisa dolara. Eo ambany fitarihany, ny Firenen’i יהוה dia nitombo hatramin’ny nahatratra mpianatra, mpanaraka, ary mpanohana mihoatra ny tanàna 1,300 any Etazonia sy firenena 16 any ivelany.",
      description4:
        "Ny asany dia hanangona aloha ny ondry very ao amin’ny tranon’i Israely, ary avy eo ny olona manana fitondrantena eto an-tany. יהוה בּן יהוה dia eto mba hametraka ny fandriampahalemana sy ny sitrapo tsara ho an’ny rehetra tia an’Andriamanitra. Izy eto mba hanorina ny governemanta teôkratikan’i יהוה amin’ny alalan’ny fanatanterahana ny lalàna, ny fitsipika, ny fitsarana, ary ny didin’i יהוה.",
      description5:
        "יהוה בּן יהוה dia manova ny fiainan’ny olona tsirairay, ary manome ny tany ireo lakile hahombiazana amin’ny fiaina: Ara-Politika Ara-Toekarena Ara-Panabeazana Ara-Piarahamonina Ary Ara-Panahy.",
      description6:
        "יהוה בּן יהוה mampianatra ny mpianany sy ny mpanaraka azy hanao fiantrana sy hatsaram-panahy, hiaro ny fahadiovam-pitondrantena, hanaja ny fifamatorana ara-pianakaviana sy namana, hanaraka ny fitsipika sy hankahala ny lalàn'i יהוה, hanampy ny lempona, hitari-dalana sy hanokatra ny mason'ny jamba, hanasitrana ny sofina'ny marenina, hampitsangana ny voahosotra sy voatendry, hialoka ny mpitondratena sy ny kamboty, hikarakara ny alitara ni יהוה, hanohana ny governemantan'i יהוה, hampianatra fitondrantena, hampahery ny fianarana, hankafy ny olona manam-pitondrantena, hatahotra an'i יהוה, hiangavy ny fahasoavany, hiasa ho an'ny fifaliana, ary hiomana.",
      description7:
        "Ny alatsinainy, 7 Mey 2007 tamin’ny 7:55 hariva, ny Mpanorina sy Mpanavotra antsika, יהוה בּן יהוה, dia nahavitra ny dia voalohany nataony teto an-tany ary niakatra hijoro eo anilan’ny Rainy, יהוה, any an-danitra.",
      description8:
        "Izany no anton’ny Fitiavan’ny Raiko, יהוה tamiko (יהוה בּן יהוה), satria natolotro ny Aiko mba hahazoako azy indray. Tsy misy olona maka izany Ahy, fa Izaho no manolotra azy irery. Manana fahefana hanolotra ny Ahy aho, ary manana fahefana hahazo azy indray. Io didy io no nalovako tamin’ny Raiko, יהוה (Jaona 10:17-18). Tsy misy fitiavana lehibe noho izany: ny manolotra ny ainy ho an’ny namany (Jaona 15:13). Ny asa ataoko amin’ny anaran’ny Raiko no mijoro ho vavolombelona momba Ahy (Jaona 10:25).",
      description9:
        "Ary nalefa tamiko ny fahefana, ny voninahitra, ary ny Fanjakan’ny Andriamanitra, mba hanompoan’ny firenena sy ny vahoaka rehetra, na inona na inona ny fiteniny: Ny fahefaniko dia fahefana mandrakizay, tsy hiova, ary ny Fanjakako dia tsy ho ringana (Daniely 7:14). Ary ny Fanjakako sy ny fahefaniko, ary ny hanjakan’ny Fanjakako eran’ny tany rehetra, dia homena ny olon’ny olo-masin’ny Avo Indrindra, izay manana Fanjakan’ny mandrakizay, ary ny fahefana rehetra dia hanompo sy hankatò Ahy (Daniely 7:27). Ho an’i יהוה בּן יהוה ny voninahitra sy ny fahefana mandrakizay. Amena (1 Petera 5:11).",
    };

    await pool.query(
      `
      INSERT INTO yahweh_ben (title1, title2, description1, description2, description3, description4, description5, description6, description7, description8, description9)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
      ON CONFLICT DO NOTHING
    `,
      [
        yahwehbenData.title1,
        yahwehbenData.title2,
        yahwehbenData.description1,
        yahwehbenData.description2,
        yahwehbenData.description3,
        yahwehbenData.description4,
        yahwehbenData.description5,
        yahwehbenData.description6,
        yahwehbenData.description7,
        yahwehbenData.description8,
        yahwehbenData.description9,
      ]
    );
    console.log("✅ All data seeded successfully!");
  } catch (error) {
    console.error("❌ Error seeding data:", error);
  } finally {
    await pool.end();
  }
};

seedData();

// Seed contacts
// const homeData = {
//   title: "AFAKA MAMANTATRA NY ZANAKA VE IANAO?",
// src1: "https://ms.yahwehbenyahweh.com/video/720/2025_FeastThemeVideo_New.mp4",
//     poster1: "page-banner_.jpg",

//     src2: "https://ms.yahwehbenyahweh.com/video/720/Good_News_Commercial.mp4",
//     poster2: "Good_News_of_Yahweh.jpg",

//     src3: "https://ms.yahwehbenyahweh.com/video/720/Home_Page_Promo.mp4",
//     poster3: "Eternal_Life.jpg",
// };

//     const yahwehbenData = {
//   title1: "Le Fils du Très-Haut",
//   title2: "YAHWEH BEN YAHWEH",
//   description1:
//     "יהוה no Andriamanitry ny andriamanitra. יהוה no Andriamanitry ny fanekena amin'i Israely. Izy no Andriamanitr'i Abrahama, Isaka, ary Jakoba. יהוה בן יהוה no Zanak'יהוה.",
//   description2:
//     "יהוה בן יהוה no Tompon’ny Efiombonana Any an-Danitra, Mpamorona ny Izao Tontolo Izao, ary Ilay Mpanjaka Masina sy Irery. Izy eto mba hamahatra ny voafonja sy hampitsangana mahitsy eo amin’ny kianja ny marina izay voafehy. Fa, indro! Misy lehibe noho i Solomona eto!",
//   description3:
//     "Tamin’ny 1979, יהוה בן יהוה dia tonga tany Miami ka lasa Mpitarika Ara-Panahy sy Mpanorina ny Firenen’i יהוה. Na dia nanao voady fahantrana aza Izy, tamin’ny fito taona Izy nitarika ny Firenena hanangona fanjakana sarobidy 250 tapitrisa dolara. Eo ambany fitarihany, ny Firenen’i יהוה dia nitombo hatramin’ny nahatratra mpianatra, mpanaraka, ary mpanohana mihoatra ny tanàna 1,300 any Etazonia sy firenena 16 any ivelany.",
//   description4:
//     "Ny asany dia hanangona aloha ny ondry very ao amin’ny tranon’i Israely, ary avy eo ny olona manana fitondrantena eto an-tany. יהוה בּן יהוה dia eto mba hametraka ny fandriampahalemana sy ny sitrapo tsara ho an’ny rehetra tia an’Andriamanitra. Izy eto mba hanorina ny governemanta teôkratikan’i יהוה amin’ny alalan’ny fanatanterahana ny lalàna, ny fitsipika, ny fitsarana, ary ny didin’i יהוה.",
//   description5:
//     "יהוה בּן יהוה dia manova ny fiainan’ny olona tsirairay, ary manome ny tany ireo lakile hahombiazana amin’ny fiaina: Ara-Politika Ara-Toekarena Ara-Panabeazana Ara-Piarahamonina Ary Ara-Panahy.",
//   description6:
//     "יהוה בּן יהוה mampianatra ny mpianany sy ny mpanaraka azy hanao fiantrana sy hatsaram-panahy, hiaro ny fahadiovam-pitondrantena, hanaja ny fifamatorana ara-pianakaviana sy namana, hanaraka ny fitsipika sy hankahala ny lalàn'i יהוה, hanampy ny lempona, hitari-dalana sy hanokatra ny mason'ny jamba, hanasitrana ny sofina'ny marenina, hampitsangana ny voahosotra sy voatendry, hialoka ny mpitondratena sy ny kamboty, hikarakara ny alitara ni יהוה, hanohana ny governemantan'i יהוה, hampianatra fitondrantena, hampahery ny fianarana, hankafy ny olona manam-pitondrantena, hatahotra an'i יהוה, hiangavy ny fahasoavany, hiasa ho an'ny fifaliana, ary hiomana.",
//   description7:
//     "Ny alatsinainy, 7 Mey 2007 tamin’ny 7:55 hariva, ny Mpanorina sy Mpanavotra antsika, יהוה בּן יהוה, dia nahavitra ny dia voalohany nataony teto an-tany ary niakatra hijoro eo anilan’ny Rainy, יהוה, any an-danitra.",
//   description8:
//     "Izany no anton’ny Fitiavan’ny Raiko, יהוה tamiko (יהוה בּן יהוה), satria natolotro ny Aiko mba hahazoako azy indray. Tsy misy olona maka izany Ahy, fa Izaho no manolotra azy irery. Manana fahefana hanolotra ny Ahy aho, ary manana fahefana hahazo azy indray. Io didy io no nalovako tamin’ny Raiko, יהוה (Jaona 10:17-18). Tsy misy fitiavana lehibe noho izany: ny manolotra ny ainy ho an’ny namany (Jaona 15:13). Ny asa ataoko amin’ny anaran’ny Raiko no mijoro ho vavolombelona momba Ahy (Jaona 10:25).",
//   description9:
//     "Ary nalefa tamiko ny fahefana, ny voninahitra, ary ny Fanjakan’ny Andriamanitra, mba hanompoan’ny firenena sy ny vahoaka rehetra, na inona na inona ny fiteniny: Ny fahefaniko dia fahefana mandrakizay, tsy hiova, ary ny Fanjakako dia tsy ho ringana (Daniely 7:14). Ary ny Fanjakako sy ny fahefaniko, ary ny hanjakan’ny Fanjakako eran’ny tany rehetra, dia homena ny olon’ny olo-masin’ny Avo Indrindra, izay manana Fanjakan’ny mandrakizay, ary ny fahefana rehetra dia hanompo sy hankatò Ahy (Daniely 7:27). Ho an’i יהוה בּן יהוה ny voninahitra sy ny fahefana mandrakizay. Amena (1 Petera 5:11).",
// };

// await pool.query(
//   `
//   INSERT INTO followers (title1, title2, description1, description2, description3, description4, description5, description6, description7, description8, description9)
//   VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
//   ON CONFLICT DO NOTHING
// `,
//   [
//     yahwehbenData.title1,
//     yahwehbenData.title2,
//     yahwehbenData.description1,
//     yahwehbenData.description2,
//     yahwehbenData.description3,
//     yahwehbenData.description4,
//     yahwehbenData.description5,
//     yahwehbenData.description6,
//     yahwehbenData.description7,
//     yahwehbenData.description8,
//     yahwehbenData.description9,
//   ]
// );
