import axios from "axios";
import React, { useEffect, useState } from "react";
import API_Service from "../utils/API_Servics";
import { dinamicTitle } from "../utils/dinamicTitle";

const Services = () => {
  dinamicTitle("Solidoct | Services");

  const [select, setSelect] = useState("Carpentry");
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nameService, setNameService] = useState("");
  const [categorys, setCategorys] = useState([]);

  const sendEmail = () => {
    const body = {
      number_Phone_Client_Services: phone,
      email_Client_Services: email,
      subject: "Solidoct Peru Contact-Services",
      name_service: nameService,
    };
    axios.post("https://formspree.io/f/xleznzqq", body).then((res) => {
      if (res.data.ok === true) {
        alert("Order quote sent successfully ✔");
        alert(
          "Soon our Solidoct Customer Service Team will be communicating with you"
        );
        window.location.reload(true);
      } else {
        alert("Opss An error has occurred ❌");
        alert("Please try again later!");
        setEmail("");
        setPhone("");
      }
    });
  };

  useEffect(() => {
    API_Service.get("v1/service/services/").then((res) => {
      setData(res.data);
    });

    API_Service.get("v1/service/categories/").then((res) => {
      setCategorys(res.data);
    });
  }, []);

  return (
    <>
      <main className="container-services">
        <img src="../../img/logo.jpg" alt="" width={130} />
        <h1>Solidoct Services</h1>

        <nav className="sidebar-services">
          <article className="container-services-btn ">
            {categorys.map((category, index) => {
              return (
                <section className="buton-container" key={index}>
                  <main
                    className={` ${
                      select === category.name_service && "activate-full"
                    }`}
                  >
                    <button
                      key={index}
                      className="btn-services"
                      onClick={(event) => {
                        setSelect(category.name_service);
                      }}
                    >
                      {category.name_service}
                    </button>
                  </main>
                </section>
              );
            })}
          </article>
        </nav>

        <article className="container-card-services">
          {data.map((service, index) => {
            {
              return (
                service.category === select && (
                  <article
                    className="card-service"
                    key={index + service}
                    data-aos="fade-up"
                  >
                    <picture className="img-service">
                      <img src={service.img} alt="" className="img-service" />
                    </picture>
                    <main className="contend-service">
                      <h3>{service.name}</h3>
                      <hr />
                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        data-bs-whatever="@mdo"
                        onClick={() => {
                          setNameService(service.name);
                        }}
                      >
                        Quote now!
                      </button>
                      <div
                        className="modal fade"
                        id="exampleModal"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id="exampleModalLabel"
                              >
                                {service.name}
                                <span className="badge rounded-pill bg-success">
                                  <i className="bi bi-cart-check-fill"></i>
                                </span>
                              </h5>

                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <form>
                                <div className="mb-3">
                                  <label
                                    htmlFor="recipient-name"
                                    className="col-form-label"
                                  >
                                    Email:
                                  </label>
                                  <input
                                    required
                                    type="email"
                                    className="form-control"
                                    id="recipient-name"
                                    value={email}
                                    onChange={(event) => {
                                      setEmail(event.currentTarget.value);
                                    }}
                                  />
                                </div>
                                <div className="mb-3">
                                  <label
                                    htmlFor="recipient-name"
                                    className="col-form-label"
                                  >
                                    Phone Number:
                                  </label>
                                  <input
                                    required
                                    type="tel"
                                    className="form-control"
                                    id="recipient-name"
                                    value={phone}
                                    onChange={(event) => {
                                      setPhone(event.currentTarget.value);
                                    }}
                                  />
                                </div>
                              </form>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                data-bs-dismiss="modal"
                                className="btn-modal"
                              >
                                Close
                              </button>
                              <button
                                type="button"
                                className="btn-modal"
                                onClick={sendEmail}
                              >
                                Send message
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </main>
                  </article>
                )
              );
            }
          })}
        </article>
      </main>
    </>
  );
};

export default Services;
