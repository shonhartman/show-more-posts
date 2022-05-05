import { useState, useEffect } from "react";
import images from "./data/imageArray";

const imagesShown = 7;

export default function Gallery() {
  // STATE OF THE IMAGE GALLERY
  const [imagesToShow, setImagesToShow] = useState([]);
  const [next, setNext] = useState(imagesShown);

  const loopWithSlice = (start, end) => {
    const slicedArray = images.slice(start, end);
    // SETS IMAGES TO SHOW STATE
    setImagesToShow(slicedArray);
  };

  // SET INITIAL VALUES
  useEffect(() => {
    loopWithSlice(0, imagesShown);
  }, []);

  const handleShowMoreImages = () => {
    // SET NEXT STATE
    // SET START & END FOR SLICE
    if (next > images.length) {
      setNext(0);
      loopWithSlice(0, imagesShown);
    } else {
      setNext(next + imagesShown);
      loopWithSlice(next, (next + imagesShown));
    }
  };

  return (
    <div className="bg-slate-300 container mx-auto flex flex-col justify-center self-center my-5">
      {imagesToShow.map((img) => {
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
    </div>
  );
}
