      CREATE TABLE IF NOT EXISTS homes (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description1 TEXT,
        src1 VARCHAR(500) NOT NULL,
        src2 VARCHAR(500) NOT NULL,
        src3 VARCHAR(500) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

          CREATE TABLE IF NOT EXISTS balance (
      <!-- id SERIAL PRIMARY KEY, -->
      titleBalance VARCHAR(255) NOT NULL,
      descriptionBalance1 TEXT NOT NULL,
      descriptionBalance2 TEXT NOT NULL,
      descriptionBalance3 TEXT NOT NULL,
      descriptionBalance4 TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

            CREATE TABLE IF NOT EXISTS crucifixion (
        id SERIAL PRIMARY KEY,
        titleCrucifixion VARCHAR(255) NOT NULL,
        descriptionCrucifixion1 TEXT NOT NULL,
        descriptionCrucifixion2 TEXT NOT NULL,
        descriptionCrucifixion3 TEXT NOT NULL,
        descriptionCrucifixion4 TEXT NOT NULL,
        descriptionCrucifixion5 TEXT NOT NULL,
        descriptionCrucifixion6 TEXT NOT NULL,
        descriptionCrucifixion7 TEXT NOT NULL,
        descriptionCrucifixion8 TEXT NOT NULL,
        descriptionCrucifixion9 TEXT NOT NULL,
        descriptionCrucifixion10 TEXT NOT NULL,
        descriptionCrucifixion11 TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

        CREATE TABLE IF NOT EXISTS erosion (
      id SERIAL PRIMARY KEY,
      descriptionErosion TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

            CREATE TABLE IF NOT EXISTS feasts (
        id SERIAL PRIMARY KEY,
        titleFeasts VARCHAR(255) NOT NULL,
      titleFeasts2 VARCHAR(255) NOT NULL,
      fieldFeasts2 VARCHAR(255) NOT NULL,
      titleFeasts3 VARCHAR(255) NOT NULL,
      fieldFeasts3 VARCHAR(255) NOT NULL,
      titleFeasts4 VARCHAR(255) NOT NULL,
      fieldFeasts4 VARCHAR(255) NOT NULL,
      descriptionFeasts4 TEXT NOT NULL,
      videoFeasts4 VARCHAR(255) NOT NULL,
      titleFeasts5 VARCHAR(255) NOT NULL,
      fieldFeasts5 VARCHAR(255) NOT NULL,
      descriptionFeasts5 TEXT NOT NULL,
      videoFeasts5 VARCHAR(255) NOT NULL,
      titleFeasts6 VARCHAR(255) NOT NULL,
      fieldFeasts6a VARCHAR(255) NOT NULL,
      fieldFeasts6b VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

        CREATE TABLE IF NOT EXISTS nation (
      id SERIAL PRIMARY KEY,
      titleNation VARCHAR(255) NOT NULL,
      descriptionNation TEXT NOT NULL,
      descriptionNation2 TEXT NOT NULL,
      descriptionNation3 TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

            CREATE TABLE IF NOT EXISTS operation (
        id SERIAL PRIMARY KEY,
        descriptionOperation1 TEXT NOT NULL,
        descriptionOperation2 TEXT NOT NULL,
        descriptionOperation3 TEXT NOT NULL,
        descriptionOperation4 TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );


                CREATE TABLE IF NOT EXISTS sabbath (
          id SERIAL PRIMARY KEY,
          titleSabbath VARCHAR(255) NOT NULL,
          descriptionSabbath1 TEXT NOT NULL,
          descriptionSabbath2 TEXT NOT NULL,
          descriptionSabbath3 TEXT NOT NULL,
          descriptionSabbath4 TEXT NOT NULL,
          descriptionSabbath5 TEXT NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );


      CREATE TABLE IF NOT EXISTS tetragrama (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    description2 TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );




          CREATE TABLE IF NOT EXISTS universe (
          id SERIAL PRIMARY KEY,
            descriptionUniverse1 TEXT NOT NULL,
            descriptionUniverse2 TEXT NOT NULL,
            descriptionUniverse3 TEXT NOT NULL,
            descriptionUniverse4 TEXT NOT NULL,
            videoLinkUniverse TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );



            CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description1 TEXT,
        description2 TEXT,
        phone VARCHAR(50),
        email VARCHAR(100),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );


            CREATE TABLE IF NOT EXISTS cultural_attire (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description1 TEXT,
        description2 TEXT,
        description3 TEXT,
        description4 TEXT,
        description5 TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );



            CREATE TABLE IF NOT EXISTS followers (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description1 TEXT,
        description2 TEXT,
        description3 TEXT,
        description4 TEXT,
        description5 TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );




            CREATE TABLE IF NOT EXISTS home_page (
        id SERIAL PRIMARY KEY,
        video_section_title VARCHAR(255),
        video_section_content TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );




              CREATE TABLE IF NOT EXISTS home_page_videos (
        id SERIAL PRIMARY KEY,
        home_page_id INTEGER REFERENCES home_page(id) ON DELETE CASCADE,
        src VARCHAR(500) NOT NULL,
        poster VARCHAR(500),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );




            CREATE TABLE IF NOT EXISTS yahweh (
        id SERIAL PRIMARY KEY,
        title1 VARCHAR(255),
        title2 VARCHAR(255),
        description1 TEXT,
        description2 TEXT,
        description3 TEXT,
        description4 TEXT,
        description5 TEXT,
        description6 TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );


            CREATE TABLE IF NOT EXISTS yahweh_ben (
        id SERIAL PRIMARY KEY,
        title1 VARCHAR(255),
        title2 VARCHAR(255),
        description1 TEXT,
        description2 TEXT,
        description3 TEXT,
        description4 TEXT,
        description5 TEXT,
        description6 TEXT,
        description7 TEXT,
        description8 TEXT,
        description9 TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );


      CREATE TABLE users (

id SERIAL PRIMARY KEY,
email VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL,
first_name VARCHAR(100),
last_name VARCHAR(100),
phone VARCHAR(20),
address TEXT,
role INTEGER NOT NULL DEFAULT 0, -- 0 = client, 1 = admin
is_active BOOLEAN NOT NULL DEFAULT TRUE,
created_at TIMESTAMP NOT NULL DEFAULT NOW(),
updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE reset_tokens (
id SERIAL PRIMARY KEY,
user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
token VARCHAR(255) NOT NULL,
expires_at TIMESTAMP NOT NULL,
created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

            CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);
      CREATE INDEX IF NOT EXISTS idx_home_page_videos_home_page_id ON home_page_videos(home_page_id);










bonjour bro j'aimerais que tu m'aide bro en fait le truc voila j'ai exporter ma base de donnee PostgreSQL mais le probleme dans le fichier SQL il n'a pas pu creer le requete pour creer tout le tables et j'aimerais que tu ajout dans le fichier SQL pourqu'il creer automatiquement lorsque executer 