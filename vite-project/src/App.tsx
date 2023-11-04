import "./App.css";

import { useState, useRef } from "react";
import { Camera } from "react-camera-pro";

const Component = () => {
  const camera = useRef<never>(null);
  const [image, setImage] = useState<string | undefined>(undefined);

  return (
    <div>
      <Camera ref={camera} />
      <button
        onClick={() => {
          if (camera.current) {
            setImage(camera.current.takePhoto());
          }
        }}
      >
        Take photo
      </button>
      {image && <img src={image} alt="Taken photo" />}
    </div>
  );
};

export default Component;
