import { useState, useEffect } from "react";
import imageArray from "./data/imageArray";

export default function Gallery() {
  // THIS WILL BE DYNAMIC BASED ON SCREEN SIZE
  const imagesToShow = 7;
  // STATE OF THE IMAGE GALLERY
  const [galleryImages, setgalleryImages] = useState([]);
  const [next, setNext] = useState(imagesToShow);
  
  const loopWithSlice = (start, end) => {
    const slicedArray = imageArray.slice(start, end);
    // SETS IMAGES TO SHOW STATE
    setgalleryImages(slicedArray);
  };

  // SET INITIAL VALUES
  useEffect(() => {
    loopWithSlice(0, imagesToShow);
  }, []);

  // SET START & END FOR SLICE + NEXT STATE
  const handleShowMoreImages = (e) => {
    e.preventDefault();
    if (next > imageArray.length) {
      setNext(0);
      loopWithSlice(0, imagesToShow);
    } else {
      setNext(next + imagesToShow);
      loopWithSlice(next, (next + imagesToShow));
    }
  };

  const title = "Share Title";
	const text = "Share Text";
	const url = "https://google.com";

	// const canonical = document.querySelector("link[rel=canonical]");
	// const url = document.location.href;
	const shareDetails = { url, title, text };

	const handleSharing = async () => {
		console.log("navigator dot share", navigator.share);
		// ONLY WORKS WITH HTTPS
		if (navigator.share) {
			try {
				await navigator
					.share(shareDetails)
					.then(() => console.log("content shared"));
			} catch (error) {
				console.log(`Error: ${error}`);
			}
		} else {
			// fallback code
			// TODO : SHOW MODAL WITH MESSAGE
			console.log("Web share is currently not supported on this browser.");
		}
	};

  return (
    <div className="bg-slate-300 container mx-auto flex flex-col justify-center self-center my-5">
      {galleryImages.map((img) => {
        return (
          <div
            key={img.id}
            className="bg-blue-300 w-24 mx-auto border border-gray-800"
          >
            <img src={img.srcUrl} alt="img"></img>
          </div>
        );
      })}
      <button
        type="button"
        className="bg-yellow-300 h-8 w-24 mx-auto border border-yellow-600"
        onClick={handleShowMoreImages}
      >
        More
      </button>
      <button
        type="button"
        className="bg-yellow-300 h-8 w-24 mx-auto border border-yellow-600"
        onClick={handleSharing}
      >
        Share
      </button>

    </div>
  );
}
