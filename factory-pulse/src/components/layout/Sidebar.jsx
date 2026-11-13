import { NavLink, Link } from "react-router-dom";
import {
  LayoutDashboard,
  Cpu,
  PlusCircle,
  ArrowUpRight,
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="sidebar">
      <Link to="/" className="sidebar-brand">
        <span className="brand-symbol">F.</span>
        <span>
          FACTORY
          <strong>PULSE</strong>
        </span>
      </Link>

      <div className="sidebar-section-label">WORKSPACE / 01</div>

      <nav className="sidebar-nav">
        <NavLink to="/" end className="side-link">
          <span className="side-number">01</span>
          <LayoutDashboard className="side-icon" size={18} />
          <span>Overview</span>
          <ArrowUpRight className="side-arrow" size={14} />
        </NavLink>

        <NavLink to="/machines" className="side-link">
          <span className="side-number">02</span>
          <Cpu className="side-icon" size={18} />
          <span>Machines</span>
          <ArrowUpRight className="side-arrow" size={14} />
        </NavLink>

        <NavLink to="/machines/new" className="side-link">
          <span className="side-number">03</span>
          <PlusCircle className="side-icon" size={18} />
          <span>Register</span>
          <ArrowUpRight className="side-arrow" size={14} />
        </NavLink>
      </nav>

      <div className="sidebar-bottom">
        <div className="sidebar-status">
          <span className="status-light" />
          <div>
            <strong>LOCAL SYSTEM</strong>
            <small>OPERATIONAL</small>
          </div>
        </div>

        <div className="sidebar-identity">
          <span className="identity-mark">FP</span>
          <div>
            <strong>FACTORYPULSE</strong>
            <small>INDUSTRIAL UNIT / 01</small>
          </div>
        </div>

        <span className="sidebar-version">BUILD 1.0.0 / 2026</span>
      </div>
    </aside>
  );
}

export default Sidebar;