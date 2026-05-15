export default function Skills() {
    return (
        <section id="skills">
            <div className="reveal">
                <h2>My toolkit</h2>
            </div>
            <div className="skills-grid reveal">
                <div className="skill-group">
                    <h4>Frontend</h4>
                    <div className="skill-item"><span className="skill-dot" />React / Next.js</div>
                    <div className="skill-item"><span className="skill-dot" />TypeScript</div>
                    <div className="skill-item"><span className="skill-dot" />CSS / Tailwind</div>
                    <div className="skill-item"><span className="skill-dot" />Figma</div>
                </div>
                <div className="skill-group">
                    <h4>Backend</h4>
                    <div className="skill-item"><span className="skill-dot" />Node.js / Express</div>
                    <div className="skill-item"><span className="skill-dot" />Python / Django</div>
                    <div className="skill-item"><span className="skill-dot" />Go</div>
                    <div className="skill-item"><span className="skill-dot" />Ruby on Rails</div>
                </div>
                <div className="skill-group">
                    <h4>Data & Infra</h4>
                    <div className="skill-item"><span className="skill-dot" />PostgreSQL / Redis</div>
                    <div className="skill-item"><span className="skill-dot" />Docker / Kubernetes</div>
                    <div className="skill-item"><span className="skill-dot" />AWS / GCP</div>
                    <div className="skill-item"><span className="skill-dot" />Kafka</div>
                </div>
                <div className="skill-group">
                    <h4>Practices</h4>
                    <div className="skill-item"><span className="skill-dot" />Agile / Scrum</div>
                    <div className="skill-item"><span className="skill-dot" />Test-Driven Dev</div>
                    <div className="skill-item"><span className="skill-dot" />CI/CD Pipelines</div>
                    <div className="skill-item"><span className="skill-dot" />Code Review</div>
                </div>
            </div>
        </section>
    );
}
