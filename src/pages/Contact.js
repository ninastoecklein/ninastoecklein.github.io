export default function Contact() {
    return (
        <section id="contact">
            <div className="reveal">
                <h2>Let's build something together</h2>
                <p className="sub">
                    I'm always open to interesting projects, collaborations, or just a good conversation about code.
                </p>
            </div>
            <div className="contact-box reveal">
                <div className="contact-links">
                    <a className="contact-link" href="mailto:nina.stoecklein8@gmail.com">
                        <span className="icon">✉️</span>nina.stoecklein8@gmail.com
                    </a>
                    <a className="contact-link" href="https://github.com/" target="_blank" rel="noreferrer">
                        <span className="icon">🐙</span>github.com/ninastoecklein
                    </a>
                    <a className="contact-link" href="https://linkedin.com/" target="_blank" rel="noreferrer">
                        <span className="icon">💼</span>linkedin.com/in/ninastoecklein
                    </a>
                </div>
                <a href="mailto:nina.stoecklein8@gmail.com" className="btn btn-primary contact-btn-full">
                    Send me a message
                </a>
            </div>
        </section>
    );
}
