import { Activity } from "lucide-react";

function Header() {
  const date = new Date().toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="topbar">
      <div className="topbar-location">
        <Activity className="location-cross" size={20} />
        <div>
          <strong>SAFI INDUSTRIAL SITE</strong>
          <small>OPERATIONS CONTROL CENTER</small>
        </div>
      </div>

      <div className="topbar-meta">
        <span className="topbar-live">
          <i /> SYSTEM ONLINE
        </span>
        <span className="topbar-date">{date}</span>
      </div>
    </header>
  );
}

export default Header;