export default function Login() {
  return (
    <div className="container align-items-center">
      <h1 className="text-center">Login</h1>
      <div className="row justify-content-center mt-5">
        <div className="col-sm-4">
          <div className="card">
            <form className="card-body">
              <div className="input-group input-group-md mb-4">
                <span className="input-group-text" id="inputGroup-sizing-sm">
                  <i class="bi bi-envelope"></i>
                </span>
                <input
                  type="emial"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder="email"
                />
              </div>
              <div className="input-group input-group-md mb-5">
                <span className="input-group-text" id="inputGroup-sizing-sm">
                  <i class="bi bi-pass"></i>
                </span>
                <input
                  type="password"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder="contraseña"
                />
              </div>
              <button type="button" class="btn btn-success mx-auto">
                Inicar sesion
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
