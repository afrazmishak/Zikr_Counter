import "./App.css";

///WelcomeBanner

function MenuBar() {
  return (
    <>
      <ul className="HomeMenuBar">
        <li className="HomeMenuBarListItems">
          <a
            href="#WelcomeBannerContainer"
            className="HomeMenuBarListItemsARef"
          >
            Home
          </a>
        </li>
        <li className="HomeMenuBarListItems">
          <a href="#AboutIslam" className="HomeMenuBarListItemsARef">
            Essence of Islam
          </a>
        </li>
        <li className="HomeMenuBarListItems">
          <a href="#" className="HomeMenuBarListItemsARef">
            Home
          </a>
        </li>
        <li className="HomeMenuBarListItems">
          <a href="#" className="HomeMenuBarListItemsARef">
            Home
          </a>
        </li>
        <li className="HomeMenuBarListItems">
          <a href="#" className="HomeMenuBarListItemsARef">
            Home
          </a>
        </li>
      </ul>
    </>
  );
}

function AboutIslam() {
  const TheEssenceInformation = {
    heading: "The Essence of Islam",
    paragraphs: [
      "Islam is a complete way of life that guides a person in every moment, helping them live with peace, purpose, and clarity. It teaches that true peace comes from worshipping one God, Allah, and following the guidance He sent through His final messenger, Prophet Muhammad ﷺ. Islam is simple, pure, and practical. It answers the deepest questions of life and gives the heart a sense of direction and calmness.",
      "Islam is not just a belief, it is a way of living. It shows in the everyday actions of a person. Islam appears in speaking kindly, treating others with respect, staying honest even when it is difficult, controlling anger, forgiving people, helping those who are struggling, and remaining grateful for every blessing. It is more than prayer and fasting; it is the daily effort to build a clean heart and a strong character that reflects goodness.",
      "Islam also offers clear guidance for every stage of life. When people feel lost, confused, or unsure about the right path, Islam provides answers that bring comfort and stability. It teaches why we are created, what our purpose is, how we should live, and what happens after death. The Qur’an and the teachings of the Prophet ﷺ give a person direction in their morals, decisions, relationships, and daily behaviour, making life easier to navigate with confidence and wisdom.",
    ],
  };

  const IslamContextInformation = {
    paragraphs: [
      "At the heart of Islam is mercy. Allah’s mercy is seen in every aspect of life, in the love of parents, the beauty of nature, the ease inside hardship, and the kindness we show to one another. Islam encourages mercy in every action: mercy in speech, mercy inforgiveness, mercy towards the poor, mercy towards animals, and mercy even in the way a person prays and interacts with the world. The Prophet ﷺ taught that Allah shows mercy to those who are merciful to others.",
      "Islam is a message for all people, everywhere. It does not belong to any specific nationality, race, or language. Its teachings are universal and accessible to anyone who is searching for truth, peace, and a meaningful life. Islam welcomes questions, invites learning, and encourages people to seek understanding with an open heart. Anyone, from any background, can explore Islam and experience its beauty.",
      "In simple words, Islam is peace, guidance, mercy, and purpose. It connects a person with their Creator and fills the heart with clarity and direction. Through Islam, life becomes more meaningful, actions become more conscious, and the heart becomes more calm. It is not just a religion, it is a beautiful path that leads the soul toward truth and inner peace.",
    ],
  };

  return (
    <>
      <section className="AboutIslam" id="AboutIslam">
        <div className="AboutIslamContainer">
          <div className="LeftSideAboutIslamContainer">
            <img
              src="./src/assets/images/WhatIsIslam.jpg"
              alt="About Islam Image"
              className="AboutIslamContainerImages"
            />
          </div>

          <div className="RightSideAboutIslamContainer">
            <h1 className="Heading1">{TheEssenceInformation.heading}</h1>
            {TheEssenceInformation.paragraphs.map((p, index) => (
              <p key={index} className="Paragraph">
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="IsalmContext">
          {IslamContextInformation.paragraphs.map((p, index) => (
            <p key={index} className="Paragraph">
              {p}
            </p>
          ))}
        </div>
      </section>
    </>
  );
}

function MyTable() {
  const Understanding = [
    {
      heading: "The Oneness of Allah (Tawheed)",
      paragraphOne:
        "Islam begins with a very simple and beautiful message: there is only one God Allah. He created everything, knows everything, and takes care of everyone. He has no partners, no children, and no weaknesses. He doesn’t get tired, hungry, or forget anything.",
      paragraphTwo:
        "Allah is perfect in His knowledge, wisdom, mercy, and power. Believing in one God gives a person peace because they know exactly who to turn to when they are scared, sad, lost, or thankful. Tawheed teaches us that we worship only Allah, pray only to Him, and rely only on Him, because He is the only One who truly controls everything.",
    },
    {
      heading: "The Qur’an",
      paragraphOne:
        "The Qur’an is the holy book of Islam. Muslims believe it is the exact word of Allah, revealed to Prophet Muhammad ﷺ over 23 years. It is a book full of guidance, wisdom, and light. The Qur’an teaches us how to live a good life, how to treat people with kindness, how to stay patient during problems, and how to be grateful for blessings.",
      paragraphTwo:
        "It also tells stories of earlier prophets like Adam, Noah, Moses, and Jesus (peace be upon them). The Qur’an has been preserved perfectly from the day it was revealed letter by letter, and millions of Muslims memorise it completely. It is not just a book to read; it is a book to understand, reflect on, and live by.",
    },
    {
      heading: "Prophet Muhammad ﷺ",
      paragraphOne:
        "Prophet Muhammad ﷺ is the final messenger of Allah. He was sent to guide all people to the truth. His life is a complete example of how to live with honesty, kindness, patience, and mercy. He never lied, hurt anyone, or took revenge out of anger. Even those who hated him said he was trustworthy.",
      paragraphTwo:
        "He taught people to worship Allah alone, to help the poor, to forgive others, and to be good family members. His character was so gentle and loving that even his enemies were moved by his kindness. Muslims follow his teachings and lifestyle because he showed us how to live in the best way.",
    },
    {
      heading: "The Five Pillars of Islam",
      points: [
        "First, the Shahadah is the declaration that there is only one God and Muhammad ﷺ is His messenger.",
        "Second, Muslims pray five times a day to stay connected with Allah.",
        "Third, they give Zakat, a small part of their money to help those in need.",
        "Fourth, they fast in Ramadan to learn patience, self-control, and gratitude.",
        "Fifth, those who are able make the journey of Hajj to Makkah at least once in their life.",
      ],
    },
    {
      heading: "The Six Pillars of Faith",
      paragraphOne:
        "Faith in Islam is built upon six essential beliefs that give a Muslim a strong heart, a peaceful mind, and complete trust in Allah in every situation, whether it is easy or difficult.",
      points: [
        "Muslims believe in Allah, the Creator",
        "In angels, who are His obedient servants",
        "In holy books such as the Qur’an",
        "In prophets who were sent to guide humanity",
        "In the Day of Judgment, when everyone will be rewarded or questioned for their actions",
        "In Divine Decree (Qadr), meaning that Allah knows everything that happens and nothing is outside His control.",
      ],
    },
  ];

  return (
    <table
      border="1"
      style={{ width: "80%", margin: "20px auto", textAlign: "center" }}
      className="UnderstandingTable"
    >
      <thead>
        <tr>
          <th style={{ width: "25%" }} className="TableHead">
            The Foundations of Islam
          </th>
          <th className="TableHead">Description</th>
        </tr>
      </thead>

      <tbody>
        {Understanding.map((item, index) => (
          <tr key={index}>
            <td className="TableTopic">
              <b>{item.heading}</b>
            </td>
            <td className="TableParagraph">
              <p>{item.paragraphOne}</p>

              {item.paragraphTwo && <p>{item.paragraphTwo}</p>}

              {item.points && (
                <ul className="TableUnListed">
                  {item.points.map((point, i) => {
                    if (item.heading === "The Five Pillars of Islam") {
                      const firstWord = point.split(" ")[0];
                      const restOfTheSentence = point.substring(
                        firstWord.length
                      );

                      return (
                        <li key={i}>
                          <b> {firstWord} </b> {restOfTheSentence}
                        </li>
                      );
                    }

                    return <li key={i}>{point}</li>;
                  })}
                </ul>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function ImageGrid() {
  const images = [
    "./src/assets/imageset/image1.jpg",
    "./src/assets/imageset/image2.jpg",
    "./src/assets/imageset/image3.jpg",
    "./src/assets/imageset/image4.jpg",
    "./src/assets/imageset/image5.jpg",
    "./src/assets/imageset/image1.jpg",
    "./src/assets/imageset/image2.jpg",
    "./src/assets/imageset/image3.jpg",
    "./src/assets/imageset/image4.jpg",
    "./src/assets/imageset/image5.jpg",
    "./src/assets/imageset/image1.jpg",
    "./src/assets/imageset/image2.jpg",
    "./src/assets/imageset/image3.jpg",
    "./src/assets/imageset/image4.jpg",
    "./src/assets/imageset/image5.jpg"
  ];

  const columns = [[], [], [], []];
  images.forEach((img, index) => {
    columns[index % 4].push(img);
  });

  return (
    <div className="container">
      {columns.map((col, index) => (
        <div className="column" key={index}>
          {col.map((src, i) => (
            <img key={i} src={src} alt="" />
          ))}
        </div>
      ))}
    </div>
  );
}

function Astagfirullah() {
  return (
    <button className="button-counter">
      <p className="line-one-arabic">أستغفر الله</p>
      <span className="line-one-english">"I ask God for forgiveness"</span>
    </button>
  );
}

function Count() {
  return <p>Count</p>;
}

function App() {
  return (
    <>
      <WelcomeBanner />
      <MenuBar />
      <AboutIslam />
      <ImageGrid />

    </>
  );
}

export default App;
