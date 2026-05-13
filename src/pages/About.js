import { Link } from 'react-router-dom';

export default function About() {
    return (
        <section id="about">
            <div className="reveal">
                <p className="section-label">About Me</p>
                <h2>A developer who cares<br />about craft & people</h2>
            </div>
            <div className="about-grid reveal">
                <div className="about-text">
                    <p>
                        Hi! I'm Alex, a full-stack developer with over 5 years of experience turning complex
                        problems into clean, maintainable code. I grew up tinkering with computers and never quite
                        stopped.
                    </p>
                    <p>
                        I believe great software is less about clever tricks and more about genuine empathy —
                        understanding what people actually need and building something that gets out of their way.
                    </p>
                    <p>
                        When I'm not coding, you'll find me hiking trails around Vancouver, nurturing my sourdough
                        starter, or reading way too many tech blogs over a third cup of coffee.
                    </p>
                    <div style={{ marginTop: '1.8rem' }}>
                        <Link to="/contact" className="btn btn-primary">
                            Say hello →
                        </Link>
                    </div>
                </div>
                <div className="about-card">
                    <div className="avatar-placeholder">AR</div>
                    <h3>Alex Rivera</h3>
                    <div className="role">Full-Stack Software Developer</div>
                    <p className="about-location">📍 Vancouver, BC &nbsp;·&nbsp; Open to remote</p>
                    <div className="about-stats">
                        <div className="stat">
                            <div className="stat-num">5+</div>
                            <div className="stat-label">Years exp.</div>
                        </div>
                        <div className="stat">
                            <div className="stat-num">30+</div>
                            <div className="stat-label">Projects</div>
                        </div>
                        <div className="stat">
                            <div className="stat-num">12</div>
                            <div className="stat-label">Happy clients</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
