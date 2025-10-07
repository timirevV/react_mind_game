// src/pages/ResultsPage/style.ts
export const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    padding: 3,
    backgroundColor: "#f5f5f5",
  },
  tableContainer: {
    maxWidth: 500,
    marginBottom: 3,
    borderRadius: 2,
    boxShadow: 3,
  },
  tableHeader: {
    fontWeight: "bold",
    backgroundColor: "#1976d2",
    color: "white",
    fontSize: "1.1rem",
  },
  tableCell: {
    fontSize: "1rem",
    padding: "12px 16px",
  },
  tableRowEven: {
    backgroundColor: "#f8f8f8",
  },
  tableRowOdd: {
    backgroundColor: "white",
  },
  buttonContainer: {
    display: "flex",
    gap: 2,
    marginTop: 3,
  },
  button: {
    minWidth: 120,
  },
} as const;