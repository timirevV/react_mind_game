import { Box, Grid, Typography } from "@mui/material";
import { styles } from "./style";
import { data } from "../../constants";
import { generateArray } from "../../utils/generateArray";
import { useMemo, useState } from "react";

const MainPage = () => {
  const arr = useMemo(() => generateArray(), []);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    Array(arr.length).fill(false)
  );
  const [flipped, setFlipped] = useState<number[]>([]);
  const [score, setScore] = useState<number>(0);

  const handleClick = (index: number) => {
    if (visibleCards[index] || flipped.length === 2) return;

    const newVisible = [...visibleCards];
    newVisible[index] = true;
    setVisibleCards(newVisible);

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [firstIndex, secondIndex] = newFlipped;
      const firstId = arr[firstIndex];
      const secondId = arr[secondIndex];

      if (firstId === secondId) {
        setScore((prev) => prev + 1);
        setFlipped([]);
      } else {
        setTimeout(() => {
          setVisibleCards((prev) =>
            prev.map((v, i) =>
              i === firstIndex || i === secondIndex ? false : v
            )
          );
          setScore((prev) => prev - 1);
          setFlipped([]);
        }, 300);
      }
    }
  };

  return (
    <Box sx={styles.container}>
      <Typography>Score {score}</Typography>
      <Grid container spacing={1} columns={9} sx={styles.gridContainer}>
        {arr.map((id, index) => {
          const item = data.find((d) => d.id === id);
          if (!item) return null;

          return (
            <Grid
              size={3}
              key={index}
              sx={styles.gridItem}
              onClick={() => handleClick(index)}
            >
              {visibleCards[index] ? (
                <img
                  src={item.image}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              ) : (
                <Box sx={{ height: "100px" }} />
              )}
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default MainPage;
