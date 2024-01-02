import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
export default function Footer() {
  return (
    <div style={footerDiv}>
      <a href="https://www.x.com/5hubham_Singh" style={{color: 'black',  fontSize: "2rem",}} target="_blank" rel="noopener noreferrer" >
        <TwitterIcon/>
      </a>
      <a href="https://www.github.com/5hubham5ingh" style={{color: 'black', fontSize: "2rem",}} target="_blank" rel="noopener noreferrer" >
        <GitHubIcon />
      </a>
    </div>
  );
}

const footerDiv = {
  position: "absolute",
  bottom: "1vh",
  right: "1vw",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  cursor: "pointer",
  color: "black",
  fontWeight: "bold",
  fontFamily: "'Poppins', sans-serif",
};
