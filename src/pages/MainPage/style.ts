import { createStyleMap } from "../../utils/createStyleMap";

export const styles = createStyleMap(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },

  gridContainer: {
    width: "400px",
    height: "400px",
    padding: "16px",
    backgroundColor: "#7a7575",
  },

  gridItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: "8px",
    cursor: "pointer",
    aspectRatio: "1 / 1",
  },
}));
