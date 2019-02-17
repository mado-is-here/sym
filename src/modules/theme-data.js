class Mood {
  constructor(name, bgColor, ...rest) {
    this.name = name;
    this.bgColor = bgColor;
    this.colors = [...rest];
  }
}

const moodsObj = [
  {
    name: "Emotions",
    moods: ["happiness", "love", "sadness"]
  },
  {
    name: "Holidays",
    moods: ["christmas", "halloween"]
  },
  {
    name: "Seasons",
    moods: [
      "spring",
      new Mood(
        "summer",
        [],
        [66, 197, 244], //sky blue
        [255, 215, 142], //sand
        [33, 175, 35], //green
        [235, 255, 61] //yellow
      ),
      new Mood(
        "autumn",
        [],
        [150, 135, 127], //gray
        [244, 215, 66], //yellow
        [244, 66, 66], //red
        [122, 66, 44] //brown
      ),
      "winter"
    ]
  },
  {
    name: "Vibes",
    moods: ["city", "gamer", "sunset", "rainbow"]
  }
];

module.exports = {
  moodsObj
};
