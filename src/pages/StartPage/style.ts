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

  textContainer: {
    fontSize: "20px",
  },
}));
