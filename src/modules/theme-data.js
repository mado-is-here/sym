class Mood {
  constructor(name, ...rest) {
    this.name = name;
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
        [66, 197, 244],
        [255, 215, 142],
        [33, 175, 35],
        [235, 255, 61]
      ),
      "autumn",
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
