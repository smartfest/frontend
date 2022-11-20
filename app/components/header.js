function header(){
    return `
    <div class="columns">
    <div class="column_logo padd_left">
        <a href="http://google.com.ar/">
            <img width="189" height="87" src="../assets/logo.png" alt="" class="img_logo" >								
        </a>
    </div>
    <div class="column_menu justify-content-end padd_right">   
        
        <nav class="navbar navbar-expand-lg navbar-light bg-body">
            <div class="container-fluid">
              
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                  </li>
                  
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Categorías
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a class="dropdown-item" href="#">Casamiento</a></li>
                      <li><a class="dropdown-item" href="#">15 años</a></li>
                      <li><hr class="dropdown-divider"></li>
                      <li><a class="dropdown-item" href="#">Electrónica</a></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="../app/pages/login.html">Iniciar Sesión</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Mi Panel</a>
                  </li>
                </ul>
                <form class="d-flex">
                  <input class="form-control me-2" type="search" placeholder="...buscar fiesta" aria-label="Buscar">
                  <button class="btn btn-outline-secondary " type="submit">Buscar</button>
                </form>
              </div>
            </div>
          </nav>            
   </div>       
 </div>
    
    `
}