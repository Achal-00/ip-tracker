import bgm from "@/public/pattern-bg-mobile.png";
import bgd from "@/public/pattern-bg-desktop.png";
const ImageContainer = () => {
  const width = screen.width;

  if (width < 1200) {
    return (
      <div
        className="image-container"
        style={{
          backgroundImage: `url(${bgm.src})`,
        }}
      ></div>
    );
  } else {
    return (
      <div
        className="image-container"
        style={{
          backgroundImage: `url(${bgd.src})`,
        }}
      ></div>
    );
  }
};

export default ImageContainer;
