import Card from "./Card.jsx";
import React, { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

let wordsJson = [
  {
    id: "1",
    english: "carrot",
    transcription: "[ ˈkærət ]",
    russian: "морковь",
    tags: "овощи",
    tags_json: '["u043eu0432u043eu0449u0438"]',
    isEdit: true,
  },
  {
    id: "2",
    english: "butterfly",
    transcription: "[ ˈbʌtəflaɪ ]",
    russian: "бабочка",
    tags: "насекомые",
    tags_json: '["u043du0430u0441u0435u043au043eu043cu044bu0435"]',
  },
  {
    id: "3",
    english: "street",
    transcription: "[ stri:t ]",
    russian: "улица",
    tags: "овощи",
    tags_json: '["u043eu0432u043eu0449u0438"]',
  },
  {
    id: "4",
    english: "car",
    transcription: "[ kɑ: ]",
    russian: "автомобиль",
    tags: "",
    tags_json: '[""]',
  },
  {
    id: "5",
    english: "arm",
    transcription: "[ ɑ:m ]",
    russian: "рука",
    tags: "",
    tags_json: '[""]',
  },
  {
    id: "6",
    english: "air",
    transcription: "[  eər ]",
    russian: "воздух",
    tags: "",
    tags_json: '[""]',
  },
  {
    id: "7",
    english: "fox",
    transcription: "[ fɒks ]",
    russian: "лиса",
    tags: "",
    tags_json: '[""]',
  },
  {
    id: "8",
    english: "rabbit",
    transcription: "[ ˈræbɪt ]",
    russian: "кролик",
    tags: "",
    tags_json: '[""]',
  },
  {
    id: "9",
    english: "owl",
    transcription: "[ aʊl ]",
    russian: "сова",
    tags: "птицы",
    tags_json: '["u043fu0442u0438u0446u044b"]',
  },
  {
    id: "10",
    english: "mouse",
    transcription: "[ maʊs]",
    russian: "мышь",
    tags: "животные",
    tags_json: '["u0436u0438u0432u043eu0442u043du044bu0435"]',
  },
  {
    id: "11",
    english: "tea",
    transcription: "[ tiː ]",
    russian: "чай",
    tags: "напитки",
    tags_json: '["u043du0430u043fu0438u0442u043au0438"]',
  },
  {
    id: "12",
    english: "goose",
    transcription: "[ ɡuːs ]",
    russian: "гусь",
    tags: "птицы",
    tags_json: '["u043fu0442u0438u0446u044b"]',
  },
  {
    id: "13",
    english: "flower",
    transcription: "[ ˈflaʊər ]",
    russian: "цветок",
    tags: "растения",
    tags_json: '["u0440u0430u0441u0442u0435u043du0438u044f"]',
  },
  {
    id: "14",
    english: "bird",
    transcription: "[ be:d ]",
    russian: "птица",
    tags: "птиц",
    tags_json: '["u043fu0442u0438u0446"]',
  },
  {
    id: "15",
    english: "cat",
    transcription: "[ kæt ]",
    russian: "кот",
    tags: "",
    tags_json: "[]",
  },
];

function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== wordsJson.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === wordsJson.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(wordsJson.length);
    }
  };

  const elements = wordsJson.map((word) => {
    const { id, ...wordProps } = word;

    return <Card key={id} id={id} {...wordProps} />;
  });

  return (
    <div className="game-container">
      <button className="game-button" onClick={prevSlide}><LeftOutlined /></button>
      <div>{elements[slideIndex-1]}</div>
      <button className="game-button" onClick={nextSlide}><RightOutlined /></button>
    </div>
  );
}

export default Slider;
