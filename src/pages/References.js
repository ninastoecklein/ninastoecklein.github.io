export default function References() {
    return (
        <section id="references">
            <div className="reveal">
                <p className="section-label">References</p>
                <h2>Kind words from people I've worked with</h2>
            </div>
            <div className="refs-grid">
                <div className="ref-card reveal">
                    <p>
                        Alex has a rare combination of technical depth and human warmth. They shipped features faster
                        than anyone on our team while always making time to mentor junior devs.
                    </p>
                    <div className="ref-author">
                        <div className="ref-avatar" style={{ background: '#c1694f' }}>SL</div>
                        <div>
                            <div className="ref-name">Sarah Lin</div>
                            <div className="ref-title">Engineering Manager, Acme Corp</div>
                        </div>
                    </div>
                </div>

                <div className="ref-card reveal">
                    <p>
                        Working with Alex felt effortless. They asked the right questions, pushed back when it mattered,
                        and delivered something even better than what we imagined.
                    </p>
                    <div className="ref-author">
                        <div className="ref-avatar" style={{ background: '#7a5c3e' }}>MT</div>
                        <div>
                            <div className="ref-name">Marcus Tanaka</div>
                            <div className="ref-title">Product Lead, Sprout Digital</div>
                        </div>
                    </div>
                </div>

                <div className="ref-card reveal">
                    <p>
                        I've worked with a lot of developers. Alex stands out because they actually care — about the code,
                        about the product, and about the people using it.
                    </p>
                    <div className="ref-author">
                        <div className="ref-avatar" style={{ background: '#8b7355' }}>JP</div>
                        <div>
                            <div className="ref-name">Jamie Park</div>
                            <div className="ref-title">CTO, Folio Labs</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
