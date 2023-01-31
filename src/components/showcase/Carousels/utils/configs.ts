import rileyRiver from "src/images/VideoCarousel/riley-river.jpg";
import fcrnrwSky from "src/images/VideoCarousel/fcrnrw-sky.jpg";
import owyheeSunset from "src/images/VideoCarousel/owyhee-sunset.jpg";
import magnoliaVp from "src/images/VideoCarousel/magnolia-vp.jpg";
import shintoVp from "src/images/VideoCarousel/shinto-vp.jpg";
import bessVp from "src/images/VideoCarousel/bess-vp.jpg";
import tydeVp from "src/images/VideoCarousel/tyde-vp.jpg";
import magnoliaT from "src/images/VideoCarousel/magnolia-t.jpg";
import shintoT from "src/images/VideoCarousel/shinto-t.jpg";
import bessT from "src/images/VideoCarousel/bess-t.jpg";
import tydeT from "src/images/VideoCarousel/tyde-t.jpg";

export const buttonConfig = [
  { index: 0, label: "←" },
  { index: 1, label: "→" },
];

export const sliderConfig = [
  {
    index: 0,
    backgroundImageUrl: fcrnrwSky,
    muxVideoId: "h4OjEFZO79SjXusvTHd3ppY5AV6hhgByO5XWMK5gjRA",
    videoTitle: "Frank Church River of No Return Wilderness August 2022",
  },
  {
    index: 1,
    backgroundImageUrl: rileyRiver,
    muxVideoId: "Cixsv9r71cJaQGTv02fcJtD00m4S02UcbhJpAblRA1e02EU",
    videoTitle: "A Day on the River",
  },
  {
    index: 2,
    backgroundImageUrl: owyheeSunset,
    muxVideoId: "6TVNvJHqTtFjGmjyvlCmrDhiBbdWUojLgHVoHiQKil4",
    videoTitle: "Finding the Speed Goat",
  },
];

export const previewCarouselConfig = [
  {
    index: 0,
    internalId: "3tkwe58YfXVl13iB5jR5vB",
    attribution: "Magnolia B.",
    title: "VP Operations",
    quote: "You only live once, but if you do it right, once is enough.",
    thumbnailImageUrl: magnoliaT,
    backgroundImageUrl: magnoliaVp,
    muxVideoId: "79SERkdtyLoIhAg3b3IcAuTYEqR2tqDbkNItHoXvh78",
  },
  {
    index: 1,
    internalId: "4YGkn2zPU5MkeVJUHTqLdl",
    attribution: "Shinto V.",
    title: "Alpine Guide",
    quote: "Whether you think you can or you think you can't, you're right.",
    thumbnailImageUrl: shintoT,
    backgroundImageUrl: shintoVp,
    muxVideoId: "ajVABFnMsMBIdrwmL2E9QNOCm6AeFRI6vW02O58nfxAg",
  },
  {
    index: 2,
    internalId: "dGp061wL4x619dBomqsjB",
    attribution: "Bess W.",
    title: "Travel Author",
    quote: "Those who dare to fail miserably can achieve greatly.",
    thumbnailImageUrl: bessT,
    backgroundImageUrl: bessVp,
    muxVideoId: "Qaii01a0141dpGC7touUEVVIp5neWPX301rNPsGNudcD8s",
  },
  {
    index: 3,
    internalId: "4iUBAwP2fqkP75TyRJmIxS",
    attribution: "Tyde F.",
    title: "Bitcoin Journalist",
    quote: "Strive not to be a success, but rather to be of value.",
    thumbnailImageUrl: tydeT,
    backgroundImageUrl: tydeVp,
    muxVideoId: "73xDfjmvAdr7302e4A7Ebz4gfZhjb00q02ENJGDcTSb9fc",
  },
];
