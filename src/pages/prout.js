
export default function Home() {
    return (
        <div className="d-flex bg-primary" id="screen_background">


            <div class="container py-5">
                <h2 class="text-center mb-5 text-white">Les artisans du mois</h2>

                <div class="bg-white bg-opacity-10 backdrop-blur p-4 rounded-4">
                    <div class="row g-4">
                        <div class="col-md-4">
                            <div class="card h-100 text-center">
                                <div class="card-body">
                                    <h5>Ernest Carignan<small class="text-muted">FerronnierLe Puy-en-Velay</small></h5>
                                    <div class="my-4">
                                        <i class="bi bi-person-circle"></i>
                                    </div>
                                    <p>5.0 <span class="text-warning">★</span></p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="card h-100 text-center">
                                <div class="card-body">
                                    <h5>Orville Salmons<small class="text-muted">ChauffagisteEvian</small></h5>
                                    <div class="my-4">
                                        <i class="bi bi-person-circle" ></i>
                                    </div>
                                    <p>5.0 <span class="text-warning">★</span></p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="card h-100 text-center">
                                <div class="card-body">
                                    <h5>Chocolaterie Labbé<small class="text-muted">ChocolatierLyon</small></h5>
                                    <div class="my-4">
                                        <i class="bi bi-person-circle" ></i>
                                    </div>
                                    <p>4.9 <span class="text-warning">★</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}