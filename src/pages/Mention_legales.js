export default function MentionsLegales() {
    return (
        <div id="screen_background">

            <div className="min-vh-100 d-flex align-items-center justify-content-center position-relative"
                style={{
                    backgroundImage: "url('../assets/img/your-background.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>

                <div className="card bg-dark bg-opacity-75 backdrop-blur-lg border-0 shadow-lg mx-3"
                    style={{ maxWidth: '800px', width: '100%' }}>

                    <div className="card-body p-5 text-light">

                        <h2 className="text-center mb-4 fs-1 fw-bold">Mentions légales</h2>

                        <div className="legal-text" style={{ lineHeight: '1.7' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas semper dui eget leo mollestie tempor.
                            Nullam ultrices, lacus aliquam dictum malesuada, massa enim maximus mi, vitae finibus nunc orci sed nunc.
                            Ut placerat viverra tincidunt. In vitae consectetur tortor. Nullam dapibus eu sapien et ornare.
                            Duis ullamcorper mauris eget dui vestibulum, quis tristique odio mattis. Integer luctus, arcu sed
                            cursus bibendum, urna libero ullamcorper ante, ut malesuada nunc odio ut magna. Mauris porta vehicula
                            molestie. Ut porta libero diam, quis finibus risus laoreet eget.
                        </div>

                        <div className="text-center mt-5">
                            <h3 className="fw-bold text-white-50">Page en construction</h3>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}