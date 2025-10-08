import {
  Box,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { styles } from "./style";
import { useEffect } from "react";
import {
  useAddScoreMutation,
  useGetLeaderboardQuery,
} from "../../services/api";

const ResultsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentScore = location.state?.score || 0;

  const playerName = localStorage.getItem("playerName") || "Anonymous";

  const { data: leaderboard } = useGetLeaderboardQuery();
  const [addScore] = useAddScoreMutation();

  useEffect(() => {
    addScore({ name: playerName, score: currentScore });
  }, [playerName, currentScore, addScore]);

  return (
    <Box sx={styles.container}>
      <Typography variant="h4">Game Over</Typography>
      <Typography variant="h6">Your score: {currentScore}</Typography>

      <TableContainer component={Paper} sx={styles.tableContainer}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={styles.tableHeader}>Player</TableCell>
              <TableCell sx={styles.tableHeader}>Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leaderboard?.map((entry, index) => (
              <TableRow key={index}>
                <TableCell>{entry.name}</TableCell>
                <TableCell>{entry.score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={styles.buttonContainer}>
        <Button variant="contained" onClick={() => navigate("/main")}>
          Play Again
        </Button>
        <Button variant="outlined" onClick={() => navigate("/")}>
          Main Menu
        </Button>
      </Box>
    </Box>
  );
};

export default ResultsPage;
