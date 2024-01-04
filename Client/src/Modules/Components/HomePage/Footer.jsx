import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
export default function Footer() {
  const iconSize = {
    fontSize: "2rem",
  };

  const contacts = [
    {
      link: "https://www.x.com/5hubham_Singh",
      icon: <TwitterIcon sx={iconSize} />,
    },
    {
      link: "https://www.github.com/5hubham5ingh",
      icon: <GitHubIcon sx={iconSize} />,
    },
  ];

  return (
    <div style={footerDiv}>
      {contacts.map(({ link, icon }) => (
        <a
          href={link}
          style={{ color: "black" }}
          target="_blank"
          rel="noopener noreferrer"
          title ="Developer"
        >
          {icon}
        </a>
      ))}
    </div>
  );
}

const footerDiv = {
  position: "absolute",
  bottom: 0,
  right: 0,
  paddingRight: "1rem",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  cursor: "pointer",
  color: "black",
  fontWeight: "bold",
  fontFamily: "'Poppins', sans-serif",
};
