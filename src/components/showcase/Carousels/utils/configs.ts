import rileyRiver from "src/images/Slider/riley-river.jpg";
import fcrnrwSky from "src/images/Slider/fcrnrw-sky.jpg";
import owyheeSunset from "src/images/Slider/owyhee-sunset.jpg";

import whaleSharkT from "src/images/PreviewCarousel/whale-shark-t.jpg";
import whaleSharkVp from "src/images/PreviewCarousel/whale-shark-vp.jpg";
import norwayT from "src/images/PreviewCarousel/norway-t.jpg";
import norwayVp from "src/images/PreviewCarousel/norway-vp.jpg";
import alpineLakeT from "src/images/PreviewCarousel/alpine-lake-t.jpg";
import alpineLakeVp from "src/images/PreviewCarousel/alpine-lake-vp.jpg";
import fallRoadT from "src/images/PreviewCarousel/fall-road-t.jpg";
import fallRoadVp from "src/images/PreviewCarousel/fall-road-vp.jpg";

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
    thumbnailImageUrl: norwayT,
    backgroundImageUrl: norwayVp,
    muxVideoId: "79SERkdtyLoIhAg3b3IcAuTYEqR2tqDbkNItHoXvh78",
    videoTitle: "Coastal Norway",
  },
  {
    index: 1,
    thumbnailImageUrl: whaleSharkT,
    backgroundImageUrl: whaleSharkVp,
    muxVideoId: "ajVABFnMsMBIdrwmL2E9QNOCm6AeFRI6vW02O58nfxAg",
    videoTitle: "Whale shark",
  },
  {
    index: 2,
    thumbnailImageUrl: fallRoadT,
    backgroundImageUrl: fallRoadVp,
    muxVideoId: "Qaii01a0141dpGC7touUEVVIp5neWPX301rNPsGNudcD8s",
    videoTitle: "Fall trees",
  },
  {
    index: 3,
    thumbnailImageUrl: alpineLakeT,
    backgroundImageUrl: alpineLakeVp,
    muxVideoId: "73xDfjmvAdr7302e4A7Ebz4gfZhjb00q02ENJGDcTSb9fc",
    videoTitle: "Nature across the globe",
  },
];
