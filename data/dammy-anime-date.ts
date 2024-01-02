export interface AnimeEpisodIterface {
  id: string;
  title: string;
  episode: string;
  imageURL: string;
  state: "On Going" | "Completed";
  rating: number;
}

export const ANIMESDATA: AnimeEpisodIterface[] = [
  {
    id: "an0001",
    imageURL:
      "https://www.manga-news.com/public/images/dvd/Jujutsu-Kaisen-S2_anime.jpg",
    rating: 9.36,
    episode: "23, latest",
    title: "jujutsu kaisen 2nd season",
    state: "Completed",
  },
  {
    id: "an0002",
    imageURL:
      "https://a.storyblok.com/f/178900/480x720/9e9a0b66ce/one-piece-wano-kuni-key-art.jpeg",
    rating: 10.0,
    episode: "1088",
    title: "One piece",
    state: "On Going",
  },
  {
    id: "an0003",
    imageURL:
      "https://otakulevel10.fr/wp-content/uploads/2022/12/Kimetsu-no-Yaiba-Katanakaji-no-Sato-hen.webp",
    rating: 8.12,
    episode: "13",
    title: "kimitsu no yaiba",
    state: "On Going",
  },
  {
    id: "an0009",
    imageURL:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/323c82257b2f6567fabbb7bd55bfa753.jpe",
    rating: 7.92,
    episode: "2",
    title: "atack on titan",
    state: "On Going",
  },
  {
    id: "an0004",
    imageURL:
      "https://fr.web.img3.acsta.net/pictures/20/09/14/10/31/4875617.jpg",
    rating: 9.8,
    episode: "8",
    title: "jujutsu kaisen",
    state: "Completed",
  },
  {
    id: "an0005",
    imageURL:
      "https://m.media-amazon.com/images/M/MV5BZjJlNzE5YzEtYzQwYS00NTBjLTk5YzAtYzUwOWQyM2E3OGI2XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg",
    rating: 4.58,
    episode: "12, latest",
    title: "one punch man",
    state: "Completed",
  },
  {
    id: "an0006",
    imageURL:
      "https://m.media-amazon.com/images/M/MV5BMjZmYjM2NTItMjdlOC00NGU0LTkwMWEtYmFkMjg1ZmE3NGEwXkEyXkFqcGdeQXVyNjkxODE4NzU@._V1_FMjpg_UX1000_.jpg",
    rating: 8.98,
    episode: "12, latest",
    title: "arslan senki",
    state: "Completed",
  },
  {
    id: "an0007",
    imageURL:
      "https://www.nautiljon.com/images/anime/00/28/tokyo_ghoul_3182.webp",
    rating: 7.98,
    episode: "12, latest",
    title: "tokto ghoul",
    state: "Completed",
  },
  {
    id: "an0008",
    imageURL:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/41c3cd1d910578720cdaa307c9e06061.jpe",
    rating: 7.98,
    episode: "13",
    title: "captain tsubasa",
    state: "On Going",
  },
];
