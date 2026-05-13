export default function Contact() {
    return (
        <section id="contact">
            <div className="reveal">
                <p className="section-label">Contact</p>
                <h2>Let's build something together</h2>
                <p className="sub">
                    I'm always open to interesting projects, collaborations, or just a good conversation about code.
                </p>
            </div>
            <div className="contact-box reveal">
                <div className="contact-links">
                    <a className="contact-link" href="mailto:alex@example.com">
                        <span className="icon">✉️</span>alex@example.com
                    </a>
                    <a className="contact-link" href="https://github.com/" target="_blank" rel="noreferrer">
                        <span className="icon">🐙</span>github.com/alexrivera
                    </a>
                    <a className="contact-link" href="https://linkedin.com/" target="_blank" rel="noreferrer">
                        <span className="icon">💼</span>linkedin.com/in/alexrivera
                    </a>
                    <a className="contact-link" href="https://twitter.com/" target="_blank" rel="noreferrer">
                        <span className="icon">🐦</span>@alexrivera_dev
                    </a>
                </div>
                <a href="mailto:alex@example.com" className="btn btn-primary contact-btn-full">
                    Send me a message
                </a>
            </div>
        </section>
    );
}
