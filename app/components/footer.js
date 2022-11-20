function footer(){
    return `
    <footer id="footer"> 
   <div class="footer-newsletter"> 
        <div class="container"> 
           <div class="row"> 
               <div class="col-lg-6"> 
                     <h4>Nuestro boletin</h4> 
                    <p>Si estás interesado en recibir nuestras novedades, no dejes de suscribirte a nuestro boletín. </p> 
                </div> 
                <div class="col-lg-6"> 
                  <form action="" method="post"> 
                     <input type="email" name="email">
                     <input type="submit" value="Suscribete"> 
                  </form> 
                </div> 
              </div> 
            </div> 
          </div> 
        <div class="footer-top"> 
          <div class="container"> 
            <div class="row"> 
              <div class="col-lg-3 col-md-6 footer-links"> 
                <h4>Links Utiles</h4> 
                  <ul> 
                      <li><i class="bx bx-chevron-right"></i> 
                          <a href="#">Inicio</a>
                      </li> 
                      <li><i class="bx bx-chevron-right"></i> 
                        <a href="#">Acerca de nosotros</a></li> 
                      <li><i class="bx bx-chevron-right"></i> 
                        <a href="#">Politicas de privacidad</a></li> 
                  </ul> 
              </div> 
            <div class="col-lg-3 col-md-6 footer-links"> 
              <h4>Nuestros Servicios</h4> 
                <ul> 
                  <li><i class="bx bx-chevron-right"></i> 
                    <a href="#">Capacitaciones</a></li> 
                  <li><i class="bx bx-chevron-right"></i> 
                    <a href="#">Accesoramiento</a></li> 
                </ul> 
            </div> 
            <div class="col-lg-3 col-md-6 footer-contact"> 
              <h4>Contáctanos</h4> 
              <p> República de Italia xxxx <br> Neuquén cap, 8300<br> Provincia de Neuquén <br><br>
                <strong>Teléfono:</strong> +54 9 299 xxx xxx<br> 
                <strong>Email:</strong> smartfest@pepito.com<br> 
              </p> 
            </div> 
            <div class="col-lg-3 col-md-6 footer-info"> 
              <h3>Sobre nosotros</h3> 
              <p>El presente trabajo es parte de la práctica de la materia Laboratorio de Programación, carrera Lic. en Ciencias de la Computación.

              </p> 
            </div> 
          </div> 
        </div> 
      </div> 
      <div class="container"> 
        <div class="copyright"> &copy; Copyright <strong><span>SmartFest</span></strong>. Todos los derechos reservados </div> 
        <div class="credits"> Designed by <a href="#">Luis Garcia y Dante Giuliano 2022</a> </div> 
      </div>
</footer>
    `
}
export {footer}