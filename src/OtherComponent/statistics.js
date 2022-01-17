import Grid from "@mui/material/Grid";

const statistics = [
  {
    id: "1",
    value1: "EARNINGS (MONTHLY)",
    value2: "$40,000",
    value3: "",
    valu4: "icon",
  },
  {
    id: "2",
    value1: "EARNINGS (ANNUAL)",
    value2: "$215,000",
    value3: "",
    valu4: "icon",
  },
  {
    id: "3",
    value1: "TASKS",
    value2: "50%",
    value3: "",
    valu4: "icon",
  },
  {
    id: "4",
    value1: "PENDING REQUESTS",
    value2: "18",
    value3: "",
    valu4: "icon",
  },
];
export function Dashboard1() {
  const styles = {
    borderLeftStyle: "2px solid red",
    borderRadius: "5px",
    marginLeft: "180px",
    backgroundColor: "yellow"
  };
  return (
    <div style={styles}>
      <div style={styles}>
        <Grid xs={12} md={6} lg={3}>
          Welcome to dashboard
        </Grid>
        <Grid xs={12} md={6} lg={3}>
          Welcome to dashboard
        </Grid>
        <Grid xs={12} md={6} lg={3}>
          Welcome to dashboard
        </Grid>
        <Grid xs={12} md={6} lg={3}>
          Welcome to dashboard
        </Grid>
      </div>
    </div>
  );
}
