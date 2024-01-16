import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { footerContainer, iconColor, iconSize } from "../../Styles/Home/footer";
export default function Footer() {
  

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
    <div style={footerContainer}>
      {contacts.map(({ link, icon }, index) => (
        <a
          key={index}
          href={link}
          style={iconColor}
          target="_blank"
          rel="noopener noreferrer"
          title="Developer"
        >
          {icon}
        </a>
      ))}
    </div>
  );
}

;
