const projects = [
  {
    name: "Nobody's Perfect",
    icon: "♠",
    desc: "A card game with two modes to pick from: Cool Cat & Kitten, and Dad Mode.",
    url: "https://jackrosejr2027.github.io/nobodyspurrfect/",
  },
  {
    name: "Card Arcade",
    icon: "🎩",
    desc: "A card arcade with solitaire-style games, chess, mahjong, jewels and card tricks.",
    url: "https://jackrosejr2027.github.io/gamesog/",
  },
  {
    name: "Where the River Turns",
    icon: "🌊",
    desc: "An adventure game where calm breathing matters as much as combat, plus a meditation sandbox.",
    url: "https://jackrosejr2027.github.io/meditationgame/",
  },
  {
    name: "Fretboard",
    icon: "🎸",
    desc: "An interactive guitar neck diagram explorer.",
    url: "http://jackrosejr2027.github.io/music/",
  },
  {
    name: "locatube",
    icon: "📺",
    desc: "A TV-guide style player for your own local video collection.",
    url: "https://jackrosejr2027.github.io/localtube/",
  },
];

const grid = document.getElementById("grid");

for (const p of projects) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.className = "card";
  a.href = p.url;
  a.target = "_blank";
  a.rel = "noopener";

  const icon = document.createElement("div");
  icon.className = "icon";
  icon.setAttribute("aria-hidden", "true");
  icon.textContent = p.icon;

  const name = document.createElement("h2");
  name.className = "name";
  name.textContent = p.name;

  const desc = document.createElement("p");
  desc.className = "desc";
  desc.textContent = p.desc;

  const open = document.createElement("span");
  open.className = "open";
  open.textContent = "Open →";

  a.append(icon, name, desc, open);
  li.append(a);
  grid.append(li);
}
