import { useState } from "react";

const navigation = [
  { id: "dashboard", label: "Dashboard", subtitle: "Insights" },
  { id: "portfolio", label: "Portfolio", subtitle: "Projects" }
];

const metrics = [
  { title: "Monthly Visitors", value: "18.4K", detail: "Up 12% vs last month" },
  { title: "Projects Completed", value: "24", detail: "8 in the last quarter" },
  { title: "Client Satisfaction", value: "97%", detail: "Surveyed: 22 clients" },
  { title: "Average Response", value: "4h 10m", detail: "Across all requests" }
];

const activities = [
  "Synchronized design system with new color palette",
  "Published case study for Summit Retreat project",
  "Reviewed onboarding KPI dashboards",
  "Planned Q3 feature set with product team"
];

const projectList = [
  {
    title: "Aurora Wellness App",
    summary: "A responsive dashboard for health coaches to monitor client progress and share multimedia check-ins.",
    type: "Product Design",
    status: "Live",
    tags: ["Figma", "React", "Animation"]
  },
  {
    title: "Cerulean Investment Portal",
    summary: "Interactive 3-page portal presenting portfolio performance, opportunity heatmaps, and collaboration notes.",
    type: "Full Stack",
    status: "In Review",
    tags: ["Next.js", "Charts", "Auth"]
  },
  {
    title: "Voyager Events Site",
    summary: "Story-driven landing page with animated highlights and a lightweight CMS for upcoming gatherings.",
    type: "Frontend",
    status: "Prototype",
    tags: ["React", "GSAP", "Tailwind"]
  }
];

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const isDashboard = currentPage === "dashboard";

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-dot" />
          <div>
            <p className="brand-title">Sunny Studio</p>
            <p className="brand-subtitle">Portfolio Dashboard</p>
          </div>
        </div>
        <nav>
          {navigation.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${currentPage === item.id ? "active" : ""}`}
              onClick={() => setCurrentPage(item.id)}
            >
              <span>
                <strong>{item.label}</strong>
                <small>{item.subtitle}</small>
              </span>
              <span className="nav-chevron">›</span>
            </button>
          ))}
        </nav>
        <div className="cta-card">
          <p>Ready to elevate your next project?</p>
          <button>Book time</button>
        </div>
      </aside>

      <main className="main-content">
        <header className="main-header">
          <div>
            <p className="eyebrow">{isDashboard ? "Live metrics" : "Curated showcase"}</p>
            <h1>{isDashboard ? "Dashboard" : "Portfolio"}</h1>
            <p className="lead">
              {isDashboard
                ? "Track engagement, activity, and client health across every initiative."
                : "Highlight recent collaborations, system upgrades, and design explorations."}
            </p>
          </div>
          <div className="header-card">
            <p>Next check-in</p>
            <strong>Friday, 2 PM</strong>
            <small>Studio sync • Zoom</small>
          </div>
        </header>

        <section className="page-content">
          {isDashboard ? renderDashboard() : renderPortfolio()}
        </section>
      </main>
    </div>
  );
}

function renderDashboard() {
  return (
    <>
      <div className="metric-grid">
        {metrics.map((metric) => (
          <article key={metric.title} className="metric-card">
            <p className="metric-label">{metric.title}</p>
            <h2>{metric.value}</h2>
            <p className="metric-detail">{metric.detail}</p>
          </article>
        ))}
      </div>

      <div className="activity-row">
        <article className="activity-card">
          <header>
            <h3>Recent activity</h3>
            <span>Live</span>
          </header>
          <ul>
            {activities.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </article>
        <article className="timeline-card">
          <h3>Roadmap preview</h3>
          <div className="timeline-item">
            <span className="timeline-dot" />
            <div>
              <p className="timeline-title">Quarterly Analysis Deck</p>
              <p className="timeline-detail">Public release • July 14</p>
            </div>
          </div>
          <div className="timeline-item">
            <span className="timeline-dot" />
            <div>
              <p className="timeline-title">Sustainable product initiative</p>
              <p className="timeline-detail">Planning • Aug 2</p>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

function renderPortfolio() {
  return (
    <>
      <div className="project-grid">
        {projectList.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-label-row">
              <span className="project-type">{project.type}</span>
              <span className="project-status">{project.status}</span>
            </div>
            <h2>{project.title}</h2>
            <p>{project.summary}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="callout-card">
        <h3>Want to see collaboration highlights?</h3>
        <p>Connect for a guided walkthrough or request a downloadable case file for any featured project.</p>
        <button>Request highlights</button>
      </div>
    </>
  );
}

export default App;
