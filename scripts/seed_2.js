const pool = require("../config/db");

const seedData = {
  balance: {
    titleBalance: "Balance de la Justice Divine",
    descriptionBalance1:
      "La Balance de la Justice représente l'équilibre parfait entre la miséricorde et la justice dans les voies de Yahweh. Chaque action a ses conséquences, et chaque âme sera pesée selon ses œuvres.",
    descriptionBalance2:
      "Dans cette balance divine, nous trouvons l'assurance que l'injustice ne prévaudra pas éternellement. Yahweh voit tout et juge avec une parfaite équité.",
    descriptionBalance3:
      "Notre responsabilité est de vivre de manière à ce que nos actions pèsent favorablement dans cette balance, en pratiquant la justice, la miséricorde et l'humilité.",
    descriptionBalance4:
      "La balance nous enseigne que nous devons chercher l'équilibre dans tous les aspects de notre vie : spirituel et matériel, individuel et communautaire, justice et compassion.",
  },
  crucifixion: {
    titleCrucifixion: "La Crucifixion : Sacrifice Ultime de l'Amour Divin",
    descriptionCrucifixion1:
      "La crucifixion représente le sacrifice suprême de l'amour divin pour l'humanité. C'est l'acte de rédemption qui ouvre la voie du salut pour tous ceux qui croient.",
    descriptionCrucifixion2:
      "Sur la croix, nous voyons la manifestation parfaite de la justice et de la miséricorde divines. Le sacrifice innocent pour les coupables révèle la profondeur de l'amour de Yahweh.",
    descriptionCrucifixion3:
      "La souffrance endurée sur la croix nous enseigne que l'amour véritable implique parfois le sacrifice de soi pour le bien d'autrui.",
    descriptionCrucifixion4:
      "La crucifixion brise les chaînes du péché et de la mort, offrant à l'humanité une nouvelle alliance avec le Créateur.",
    descriptionCrucifixion5:
      "Dans cet acte d'amour ultime, nous trouvons l'espoir de la résurrection et de la vie éternelle avec Yahweh.",
    descriptionCrucifixion6:
      "La croix devient le symbole de notre foi et le rappel constant du prix payé pour notre liberté spirituelle.",
    descriptionCrucifixion7:
      "Méditer sur la crucifixion nous inspire à vivre une vie de gratitude et de service envers Yahweh et notre prochain.",
    descriptionCrucifixion8:
      "Le sacrifice de la croix nous appelle à porter notre propre croix quotidiennement, en suivant l'exemple d'amour et de dévotion.",
    descriptionCrucifixion9:
      "La crucifixion révèle que la vraie victoire vient parfois à travers la défaite apparente, et que la mort peut mener à la vie.",
    descriptionCrucifixion10:
      "Cet événement central de notre foi nous unit dans une communion spirituelle avec tous ceux qui ont accepté ce sacrifice d'amour.",
    descriptionCrucifixion11:
      "La crucifixion nous enseigne que l'amour de Yahweh n'a pas de limites et qu'aucun sacrifice n'est trop grand pour sauver Ses enfants.",
  },
  erosion: {
    descriptionErosion:
      "L'érosion de la Constitution représente un défi majeur pour notre société moderne. Nous observons avec préoccupation comment les principes fondamentaux de justice, de liberté et d'égalité sont progressivement affaiblis par des intérêts particuliers et des agendas politiques.",
  },
  feasts: {
    titleFeasts: "Les Fêtes Sacrées de Yahweh",
    titleFeasts2: "Pâque - La Libération Divine",
    fieldFeasts2:
      "La Pâque commémore la libération du peuple de Dieu de l'esclavage. Cette fête nous rappelle que Yahweh est notre libérateur et notre sauveur dans toutes les circonstances de la vie.",
    titleFeasts3: "Pentecôte - L'Effusion de l'Esprit",
    fieldFeasts3:
      "La Pentecôte célèbre le don de l'Esprit Saint et marque le début de la mission spirituelle. C'est un temps de renouvellement et de consécration à la volonté divine.",
    titleFeasts4: "Fête des Tabernacles - Demeure avec Yahweh",
    fieldFeasts4:
      "Cette fête nous enseigne que Yahweh désire habiter parmi Son peuple. Elle symbolise notre pèlerinage spirituel et notre dépendance totale envers le Créateur.",
    descriptionFeasts4:
      "Durant cette période sacrée, nous nous souvenons que notre vraie demeure est spirituelle et que nous sommes des pèlerins sur cette terre, cherchant la cité céleste.",
    videoFeasts4: "https://www.youtube.com/watch?v=example-tabernacles-video",
    titleFeasts5: "Jour des Expiations - Purification de l'Âme",
    fieldFeasts5:
      "Le Jour des Expiations est le moment le plus solennel de l'année, consacré au repentir, au jeûne et à la purification spirituelle de toute la communauté.",
    descriptionFeasts5:
      "Cette journée sacrée nous offre l'opportunité de nous réconcilier avec Yahweh et de renouveler notre engagement envers une vie de sainteté et de justice.",
    videoFeasts5: "https://www.youtube.com/watch?v=example-atonement-video",
    titleFeasts6: "Sabbats et Nouvelles Lunes - Cycles Sacrés",
    fieldFeasts6a:
      "Les Sabbats hebdomadaires nous offrent un temps de repos spirituel et de communion avec Yahweh. C'est un jour consacré à la prière, à l'étude et à la réflexion.",
    fieldFeasts6b:
      "Les Nouvelles Lunes marquent le début de chaque mois sacré et nous rappellent les cycles divins qui gouvernent le temps et les saisons spirituelles.",
  },
  nation: {
    titleNation: "La Nation de Yahweh : Un Peuple Élu",
    descriptionNation:
      "La Nation de Yahweh représente le rassemblement des fidèles qui ont choisi de suivre les enseignements authentiques de Yahweh Ben Yahweh. Nous formons une communauté unie par la foi et la dévotion.",
    descriptionNation2:
      "Notre nation spirituelle transcende les frontières géographiques et ethniques. Nous sommes liés par notre engagement commun envers la vérité divine et la justice sociale.",
    descriptionNation3:
      "En tant que membres de cette nation sacrée, nous nous efforçons de vivre selon les principes divins, en pratiquant l'amour, la compassion et la righteousness dans tous les aspects de notre vie quotidienne.",
  },
  operation: {
    descriptionOperation1:
      "L'Opération Guerre des Mots représente notre engagement dans le combat spirituel contre la désinformation et les fausses doctrines qui envahissent notre société.",
    descriptionOperation2:
      "Nous utilisons la puissance de la Parole divine pour contrer les mensonges et révéler la vérité à ceux qui cherchent sincèrement la lumière spirituelle.",
    descriptionOperation3:
      "Cette opération implique l'éducation, la prédication et le témoignage personnel pour partager les enseignements authentiques de Yahweh avec le monde.",
    descriptionOperation4:
      "Notre arme principale est l'amour et la vérité, utilisés avec sagesse et discernement pour toucher les cœurs et transformer les vies par la grâce divine.",
  },
  sabbath: {
    titleSabbath: "Le Sabbat : Jour Sacré de Repos et de Communion",
    descriptionSabbath1:
      "Le Sabbat est un don divin, un jour consacré au repos spirituel et à la communion avec Yahweh. C'est un temps béni pour renouveler notre âme et notre esprit.",
    descriptionSabbath2:
      "Observé du coucher du soleil du vendredi au coucher du soleil du samedi, le Sabbat nous rappelle que nous sommes créés pour plus que le travail et les préoccupations matérielles.",
    descriptionSabbath3:
      "Durant le Sabbat, nous nous abstenons du travail séculier pour nous concentrer sur la prière, l'étude des Écritures et la communion fraternelle.",
    descriptionSabbath4:
      "Ce jour sacré nous enseigne l'importance de l'équilibre entre l'activité et le repos, entre le matériel et le spirituel dans notre vie quotidienne.",
    descriptionSabbath5:
      "Le Sabbat est un avant-goût du repos éternel promis aux fidèles, un rappel de la paix parfaite qui nous attend dans le royaume de Yahweh.",
  },
  tetragrama: {
    title: "Le Tétragramme Sacré",
    description:
      "Le Tétragramme YHWH représente le nom sacré de Dieu, révélé à Moïse au mont Sinaï. Ce nom divin est la source de toute création et de toute spiritualité véritable.",
    description2:
      "Dans notre communauté, nous honorons ce nom sacré à travers nos prières, nos études et notre mode de vie. Le Tétragramme nous guide vers la compréhension profonde de la volonté divine.",
  },
  universe: {
    descriptionUniverse1:
      "L'Univers de Yahweh révèle la magnificence de la création divine. Chaque étoile, chaque planète, chaque forme de vie témoigne de la sagesse infinie du Créateur.",
    descriptionUniverse2:
      "Dans cet univers sacré, nous découvrons notre place et notre purpose. Nous ne sommes pas des accidents cosmiques, mais des êtres créés avec intention et amour divin.",
    descriptionUniverse3:
      "La contemplation de l'univers nous enseigne l'humilité et nous inspire à chercher la connexion spirituelle avec notre Créateur. Chaque lever de soleil est un rappel de Sa grâce.",
    descriptionUniverse4:
      "À travers l'étude de l'univers de Yahweh, nous apprenons les lois spirituelles qui gouvernent notre existence et nous guidons vers l'illumination divine.",
    videoLinkUniverse: "https://www.youtube.com/watch?v=example-universe-video",
  },
};

async function seedDatabase() {
  try {
    console.log("🌱 Seeding database with initial data...");

    // Seed balance
    await pool.query(
      `
      INSERT INTO balance (titleBalance, descriptionBalance1, descriptionBalance2, descriptionBalance3, descriptionBalance4)
      VALUES ($1, $2, $3, $4, $5)
      ON CONFLICT DO NOTHING
    `,
      [
        seedData.balance.titleBalance,
        seedData.balance.descriptionBalance1,
        seedData.balance.descriptionBalance2,
        seedData.balance.descriptionBalance3,
        seedData.balance.descriptionBalance4,
      ]
    );

    // Seed crucifixion
    await pool.query(
      `
      INSERT INTO crucifixion (titleCrucifixion, descriptionCrucifixion1,descriptionCrucifixion2,
      descriptionCrucifixion3,
      descriptionCrucifixion4,
      descriptionCrucifixion5,descriptionCrucifixion6,descriptionCrucifixion7,
      descriptionCrucifixion8,descriptionCrucifixion9,descriptionCrucifixion10,
      descriptionCrucifixion11

      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
      ON CONFLICT DO NOTHING
    `,
      [
        seedData.crucifixion.titleCrucifixion,
        seedData.crucifixion.descriptionCrucifixion1,
        seedData.crucifixion.descriptionCrucifixion2,
        seedData.crucifixion.descriptionCrucifixion3,
        seedData.crucifixion.descriptionCrucifixion4,
        seedData.crucifixion.descriptionCrucifixion5,
        seedData.crucifixion.descriptionCrucifixion6,
        seedData.crucifixion.descriptionCrucifixion7,
        seedData.crucifixion.descriptionCrucifixion8,
        seedData.crucifixion.descriptionCrucifixion9,
        seedData.crucifixion.descriptionCrucifixion10,
        seedData.crucifixion.descriptionCrucifixion11,
        // JSON.stringify(seedData.crucifixion.descriptions),
      ]
    );

    // Seed erosion
    await pool.query(
      `
      INSERT INTO erosion (descriptionErosion)
      VALUES ($1)
      ON CONFLICT DO NOTHING
    `,
      [seedData.erosion.descriptionErosion]
    );

    // Seed feasts
    await pool.query(
      `
      INSERT INTO feasts (
      titleFeasts, 
      titleFeasts2,
      fieldFeasts2, 
      titleFeasts3,
      fieldFeasts3,
      titleFeasts4,
      fieldFeasts4,
      descriptionFeasts4,
      videoFeasts4,
      titleFeasts5,
      fieldFeasts5,
      descriptionFeasts5,
      videoFeasts5,
      titleFeasts6,
      fieldFeasts6a,
      fieldFeasts6b
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
      ON CONFLICT DO NOTHING
    `,
      [
        seedData.feasts.titleFeasts,
        seedData.feasts.titleFeasts2,
        seedData.feasts.fieldFeasts2,
        seedData.feasts.titleFeasts3,
        seedData.feasts.fieldFeasts3,
        seedData.feasts.titleFeasts4,
        seedData.feasts.fieldFeasts4,
        seedData.feasts.descriptionFeasts4,
        seedData.feasts.videoFeasts4,
        seedData.feasts.titleFeasts5,
        seedData.feasts.fieldFeasts5,
        seedData.feasts.descriptionFeasts5,
        seedData.feasts.videoFeasts5,
        seedData.feasts.titleFeasts6,
        seedData.feasts.fieldFeasts6a,
        seedData.feasts.fieldFeasts6b,
        // JSON.stringify(seedData.feasts.content)
      ]
    );

    // Seed nation
    await pool.query(
      `
      INSERT INTO nation (titleNation, descriptionNation, descriptionNation2, descriptionNation3)
      VALUES ($1, $2, $3, $4)
      ON CONFLICT DO NOTHING
    `,
      [
        seedData.nation.titleNation,
        seedData.nation.descriptionNation,
        seedData.nation.descriptionNation2,
        seedData.nation.descriptionNation3,
      ]
    );

    // Seed operation
    await pool.query(
      `
      INSERT INTO operation (descriptionOperation1, descriptionOperation2, descriptionOperation3, descriptionOperation4)
      VALUES ($1, $2, $3, $4)
      ON CONFLICT DO NOTHING
    `,
      [
        seedData.operation.descriptionOperation1,
        seedData.operation.descriptionOperation2,
        seedData.operation.descriptionOperation3,
        seedData.operation.descriptionOperation4,
      ]
    );

    // Seed sabbath
    await pool.query(
      `
      INSERT INTO sabbath (titleSabbath, descriptionSabbath1, descriptionSabbath2, descriptionSabbath3
      , descriptionSabbath4, descriptionSabbath5)
      VALUES ($1, $2, $3, $4, $5, $6)
      ON CONFLICT DO NOTHING
    `,
      [
        seedData.sabbath.titleSabbath,
        seedData.sabbath.descriptionSabbath1,
        seedData.sabbath.descriptionSabbath2,
        seedData.sabbath.descriptionSabbath3,
        seedData.sabbath.descriptionSabbath4,
        seedData.sabbath.descriptionSabbath5,
      ]
    );

    // Seed tetragrama
    await pool.query(
      `
      INSERT INTO tetragrama (title, description, description2)
      VALUES ($1, $2, $3)
      ON CONFLICT DO NOTHING
    `,
      [
        seedData.tetragrama.title,
        seedData.tetragrama.description,
        seedData.tetragrama.description2,
      ]
    );

        // Seed universe
    await pool.query(
      `
      INSERT INTO universe (descriptionUniverse1, descriptionUniverse2, descriptionUniverse3, descriptionUniverse4, videoLinkUniverse)
      VALUES ($1, $2, $3, $4, $5)
      ON CONFLICT DO NOTHING
    `,
      [
        seedData.universe.descriptionUniverse1,
        seedData.universe.descriptionUniverse2,
        seedData.universe.descriptionUniverse3,
        seedData.universe.descriptionUniverse4,
        seedData.universe.videoLinkUniverse,
      ]
    );

    console.log("✅ Database seeded successfully!");
  } catch (error) {
    console.error("❌ Seeding failed:", error);
  } finally {
    process.exit();
  }
}

seedDatabase();
