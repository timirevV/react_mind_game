import { Box, Button, Typography, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styles } from "./style";

const StartPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);

    const trimmed = value.trim();
    if (trimmed.length < 2) {
      setError("Name must be at least 2 characters");
    } else if (trimmed.length > 32) {
      setError("Name must be at most 32 characters");
    } else {
      setError("");
    }
  };

  const startGame = () => {
    const trimmedName = name.trim();
    if (!trimmedName || error) return;

    localStorage.setItem("playerName", trimmedName);

    navigate("/main");
  };

  return (
    <Box sx={styles.container}>
      <Typography variant="h3">
        IT Quest
      </Typography>
      <Typography sx={styles.textContainer}>Enter your name:</Typography>
      <TextField
        value={name}
        onChange={handleChange}
        error={!!error}
        helperText={error || " "}
        placeholder="Your nickname"
      />
      <Button
        variant="contained"
        onClick={startGame}
        disabled={!!error || !name.trim()}
      >
        Start Game
      </Button>
    </Box>
  );
};

export default StartPage;
