import { createStyleMap } from "../../utils/createStyleMap";

export const styles = createStyleMap(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    gap: "16px",
  },

  gridContainer: {
    width: "400px",
    height: "400px",
    padding: "16px",
    backgroundColor: "#7a7575",
    borderRadius: "16px",
  },

  gridContainerMobile: {
    width: "250px",
    height: "250px",
    padding: "8px",
  },

  scoreContainer: {
    fontSize: "20px",
  },

  gridItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    cursor: "pointer",
    aspectRatio: "1 / 1",
    borderRadius: "16px",
  },

  frontBox: {
    height: "100%",
    borderRadius: "16px",
    width: "100%",
    backgroundColor: "#f0f0f0",
    border: "2px solid #ddd",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#c9c7c7ff",
      borderColor: "#999",
      boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    },
  },

  flipContainer: {
    width: "100%",
    height: "100%",
    perspective: "1000px",
  },

  flipper: {
    width: "100%",
    height: "100%",
    transition: "transform 0.6s",
    transformStyle: "preserve-3d",
    position: "relative",
  },

  flipped: {
    transform: "rotateY(180deg)",
  },

  front: {
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    position: "absolute",
    top: 0,
    left: 0,
  },

  back: {
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    position: "absolute",
    top: 0,
    left: 0,
    transform: "rotateY(180deg)",
  },
}));
