export default function NotFound() {
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
                        <h2 className="text-center mb-4 fs-1 fw-bold">PAGE NOT FOUND</h2>
                        <div className="legal-text" style={{ lineHeight: '1.7' }}>
                            <p>Sorry it seems like your page doesn't exist try somethings else</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}