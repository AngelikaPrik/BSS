import { ButtonBase } from "@mui/material";
import { styled } from "@mui/material/styles";

const Btn = styled(ButtonBase)(({ theme }) => ({
  borderRadius: "1rem",
  fontWeight: 400,
  textTransform: "uppercase",
  whiteSpace: "nowrap",
  padding: "1.2rem 0",
  fontSize: "2rem",
  lineHeight: 1,
  fontFamily: theme.typography.fontFamily,
}));

export default function SButton({ className, children }: IProps) {
  const styles = () => {
    if (className == "cardBtn") {
      return {
        background: "#fff",
        color: "#000",
        border: "1px solid #000",
        "@media (min-width: 1200px)": {},
      };
    }
    if (className == "formBtn") {
      return {
        background: "#A397A1",
        color: "#fff",
      };
    }
    if (className == "loginBtn") {
      return {
        background: "#fff",
        color: "#000",
      };
    }
  };
  return <Btn sx={styles()}>{children}</Btn>;
}

interface IProps {
  className: "cardBtn" | "loginBtn" | "formBtn";
  children: string;
}
