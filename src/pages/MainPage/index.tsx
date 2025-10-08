import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { styles } from "./style";
import { data } from "../../constants";
import { generateArray } from "../../utils/generateArray";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const arr = useMemo(() => generateArray(), []);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    Array(arr.length).fill(false)
  );
  const [flipped, setFlipped] = useState<number[]>([]);
  const [score, setScore] = useState<number>(0);
  const [matchedPairs, setMatchedPairs] = useState<number[]>([]);

  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:515px)");

  useEffect(() => {
    const totalPossiblePairs = Math.floor(arr.length / 2);

    if (matchedPairs.length === totalPossiblePairs) {
      navigate("/results", { state: { score } });
    }
  }, [matchedPairs, arr.length]);

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
        setMatchedPairs((prev) => [...prev, firstId]);
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
      <Typography sx={styles.scoreContainer}>Score: {score}</Typography>
      <Grid container spacing={1} columns={9}   sx={{
    ...styles.gridContainer,
    ...(isMobile && styles.gridContainerMobile),
  }}>
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
              <Box sx={styles.flipContainer}>
                <Box
                  sx={{
                    ...styles.flipper,
                    ...(visibleCards[index] ? styles.flipped : {}),
                  }}
                >
                  <Box sx={styles.front}>
                    <Box sx={styles.frontBox} />
                  </Box>
                  <Box sx={styles.back}>
                    <img
                      src={item.image}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        padding: "8px",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default MainPage;
