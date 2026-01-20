import chefClaudeLogo from "../images/chef-claude-icon.svg";

export default function Header() {
  return (
    <header className="header">
      <img src={chefClaudeLogo} className="logoImage" />
      <h1 className="logoText">Chef Claude</h1>
    </header>
  );
}
