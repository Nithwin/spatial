import React from "react";
import Image from "next/image";
import IFrameLoader from "./IFrameLoader";

const DynamicHero = ({ videos, selectedUrl, onVideoSelect }) => {
  const selectedVideo = videos.find((video) => video.url === selectedUrl);

  // Filter out the selected video from the list
  const remainingVideos = videos.filter((video) => video.url !== selectedUrl);

  return (
    <section className="min-h-screen bg-black text-white p-4 lg:px-8 pt-28 flex flex-col lg:flex-row gap-8 max-w-[110rem] mx-auto">
      {/* --- LEFT COLUMN --- */}
      <div className="w-full flex flex-col gap-4 lg:w-9/12">
        {/* Iframe Container */}
        <div className="w-full max-w-[420px] mx-auto lg:max-w-none aspect-[9/16] lg:aspect-video rounded-2xl overflow-hidden border border-gray-800">
          <IFrameLoader
            src={selectedUrl}
            title={selectedVideo?.title || "Embedded Content"}
          />
        </div>

        {/* Title Section */}
        <div className="flex flex-col items-center justify-center sticky top-[10vh]">
          <div className="w-full bg-black z-10 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl lg:text-3xl font-bold">
                {selectedVideo?.title}
              </h1>
            </div>
            <p className="text-gray-400 mt-1">
              {selectedVideo?.views || "8.6K views"} •{" "}
              {selectedVideo?.loves || "241 loves"}
            </p>
          </div>

          {/* --- NEWLY ADDED CONTENT SECTION --- */}
          <div className="w-full bg-[#181818] rounded-2xl flex flex-col gap-8 mt-4">
            <div className="lg:w-8/12">
              <p className="text-gray-300">
                {selectedVideo?.description ||
                  "Jack Honey Art, Beats + Lyrics is proud to present The Verse, a virtual experience celebrating the continuous ascension of hip hop and urban art. We invite you to explore the space and discover some of today's visionary artists who keep pushing the culture forward through innovation and authenticity."}
              </p>
            </div>

            {/* Release Date & Tags (Right Part) */}
            <div className="lg:w-9/12">
              <div>
                <h3 className="text-gray-400 font-semibold">Release Date</h3>
                <p>{selectedVideo?.releaseDate || "13 September 2023"}</p>
              </div>
              <div className="mt-4">
                <h3 className="text-gray-400 font-semibold">Tags</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {(
                    selectedVideo?.tags || [
                      "the-verse",
                      "art-beats-lyrics",
                      "space-elevator",
                      "phony-ppl",
                      "art-gallery",
                      "jack-daniels-honey",
                      "hip-hop",
                    ]
                  ).map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-700/60 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-4/12 rounded-2xl flex flex-col gap-5 overflow-x-hidden">
        {remainingVideos.map((item, index) => (
          <div
            key={index}
            className="aspect-video w-full bg-gray-500/40 rounded-xl overflow-hidden relative cursor-pointer"
            onClick={() => onVideoSelect(item.url)}
          >
            <Image
              src={item.image}
              alt={`Thumbnail ${index + 1}`}
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
            <div className="absolute left-0 right-0 bottom-0 h-[5rem] bg-gradient-to-t from-black/90 from-5 to-95% to-transparent"></div>
            <p className="absolute bottom-2 left-4 text-white font-semibold text-xl">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DynamicHero;