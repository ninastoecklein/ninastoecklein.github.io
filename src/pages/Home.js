import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <section id="hero">
            <div className="hero-bg" />
            <div className="hero-ring" />
            <div className="hero-content">
                <p className="hero-eyebrow">👋 Hello, I'm</p>
                <h1>
                    Alex Rivera,
                    <br />
                    <em>Software Developer</em>
                </h1>
                <p className="hero-sub">
                    I build thoughtful, human-centred software — from elegant APIs to interfaces people genuinely enjoy
                    using.
                </p>
                <div className="hero-cta">
                    <Link to="/projects" className="btn btn-primary">
                        See my work
                    </Link>
                    <Link to="/contact" className="btn btn-outline">
                        Get in touch
                    </Link>
                </div>
            </div>
        </section>
    );
}
