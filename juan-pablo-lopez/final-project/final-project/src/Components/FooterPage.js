import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export function FooterPage() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted' id='footer'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <section className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </section>
        <section>
          <a href='home' className='me-4 text-reset'>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='home' className='me-4 text-reset'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='home' className='me-4 text-reset'>
            <i className='fab fa-google'></i>
          </a>
          <a href='home' className='me-4 text-reset'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href='home' className='me-4 text-reset'>
            <i className='fab fa-linkedin'></i>
          </a>
          <a href='home' className='me-4 text-reset'>
            <i className='fab fa-github'></i>
          </a>
        </section>
      </section>
      <section className=''>
        <section className='container text-center text-md-start mt-5'>
          <section className='row mt-3'>
            <section className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className='fas fa-gem me-3'></i>PC Components
              </h6>
              <p>
              PC Components - The Best PC Gamers Store in LATAM.
              </p>
            </section>
            <section className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='/categories' className='text-reset'>
                  Graphics Cards
                </a>
              </p>
              <p>
                <a href='/categories' className='text-reset'>
                  Keyboards
                </a>
              </p>
              <p>
                <a href='/categories' className='text-reset'>
                  Computer Cases
                </a>
              </p>
              <p>
                <a href='/categories' className='text-reset'>
                  Monitors
                </a>
              </p>
            </section>
            <section className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>More</h6>
              <p>
                <a href='/categories' className='text-reset'>
                  Motherboards
                </a>
              </p>
              <p>
                <a href='/categories' className='text-reset'>
                  Laptops
                </a>
              </p>
              <p>
                <a href='/categories' className='text-reset'>
                  Storage Units
                </a>
              </p>
              <p>
                <a href='/categories' className='text-reset'>
                  Font Power
                </a>
              </p>
            </section>
            <section className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fas fa-home me-3'></i>Ibagué, Tolima - 73003
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i>
                juanpablo.lopez@globant.com
              </p>
              <p>
                <i className='fas fa-phone me-3'></i> + 01 234 567 88
              </p>
              <p>
                <i className='fas fa-print me-3'></i> + 01 234 567 89
              </p>
            </section>
          </section>
        </section>
      </section>
      <section className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href='/cards'>
          React Academy
        </a>
      </section>
    </MDBFooter>
  );
}