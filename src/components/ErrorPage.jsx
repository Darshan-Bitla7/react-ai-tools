import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
export default function ErrorPage() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>OOPS! Such a page does not exist</h1>
      <Button variant="contained">
        <Link to="/">Go back to Home</Link>
      </Button>
    </>
  );
}
