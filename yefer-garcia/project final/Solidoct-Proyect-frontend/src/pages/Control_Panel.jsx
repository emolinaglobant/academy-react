import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API_Service from "../utils/API_Servics";

const Control_Panel = () => {
  const [dataServices, setDataServices] = useState([]);
  const [dataEmploys, setDataEmploys] = useState([]);
  const [selectGender, setSelectGender] = useState();
  const [selectCategory, setSelectCategory] = useState(1);
  const [nameService, setNameService] = useState("");
  const [imgService, setImgService] = useState("");
  const [nameEmploy, setNameEmploy] = useState("");
  const [lastNameEmploy, setLastNameEmploy] = useState("");
  const [date_Birth, setDate_Birth] = useState("");
  const [cellEmploy, setCellEmploy] = useState("");
  const [avatarEmploy, setAvatarEmploy] = useState("");
  const [selectPosition, setSelectPosition] = useState();
  const navigate = useNavigate();

  // ! Functions of actions
  const createService = () => {
    const body = {
      name: nameService,
      img: imgService,
    };
    API_Service.post(`service/services/${selectCategory}`, body).then((res) => {
      alert(res.data.message);
      window.location.reload(true);
    });
  };
  const createNewEmploy = () => {
    const body = {
      name: nameEmploy,
      last_name: lastNameEmploy,
      date_birth: date_Birth,
      cell: cellEmploy,
      img: avatarEmploy,
    };
    API_Service.post(
      `employee/employees/${selectGender}/1/${selectPosition}`,
      body
    ).then((res) => {
      alert(res.data.message);
      window.location.reload(true);
    });
  };
  const deleteService = (idService) => {
    API_Service.delete(`service/services/${idService}`).then((res) => {
      alert(res.data.message);
      window.location.reload(true);
    });
  };
  const FireEmployee = (idEmploy) => {
    API_Service.delete(`employee/employees/${idEmploy}`).then((res) => {
      alert(res.data.message);
      window.location.reload(true);
    });
  };
  const closeSeccion = () => {
    alert("Good Bye");
    localStorage.removeItem("token_admin");
    navigate("/#");
    window.location.reload(true);
  };

  // ! Get Data

  useEffect(() => {
    API_Service.get("v1/service/services/").then((res) => {
      setDataServices(res.data);
    });

    API_Service.get("v1/employee/employees").then((res) => {
      setDataEmploys(res.data);
    });
  }, []);

  return (
    <main className="Control-panel">
      <h1>Panel Services</h1>
      <p>
        Add Service
        <i
          className="bi bi-plus-circle-fill"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@mdo"
        ></i>{" "}
      </p>
      <section className="sec-services">
        <table className="table">
          <thead>
            <th scope="row">**</th>
            <td>Category</td>
            <td colSpan="2">Detail Service</td>
            <td>Img Service</td>
          </thead>
          <tbody>
            {dataServices.map((service, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index}</th>
                  <td className="table-active">{service.category}</td>
                  <td colSpan="2">{service.name}</td>
                  <td>
                    <p id="elipsis-text">{service.img}</p>
                  </td>
                  <td>
                    <i
                      className="bi bi-x-circle-fill icon-table"
                      onClick={() => {
                        deleteService(service.id);
                      }}
                    ></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      <h1>Panel Employees</h1>
      <p>
        Add Employ
        <i
          className="bi bi-plus-circle-fill "
          data-bs-toggle="modal"
          data-bs-target="#exampleModal2"
          data-bs-whatever="@mdo"
        ></i>{" "}
      </p>
      <section className="sec-employs">
        <table className="table">
          <thead>
            <td className="table-active">Name Employ</td>
            <td>Gender</td>
            <td>Cell</td>
            <td>Position</td>
            <td>Date_Birth</td>
          </thead>
          <tbody>
            {dataEmploys.map((employ, index) => {
              return (
                <tr key={index + employ}>
                  <td>{employ.name + " " + employ.last_name}</td>
                  <td>{employ.gender}</td>
                  <td>{employ.cell}</td>
                  <td>{employ.position}</td>
                  <td>{employ.date_birth}</td>
                  <td>
                    <i
                      className="bi bi-x-circle-fill icon-table"
                      onClick={() => {
                        FireEmployee(employ.id);
                      }}
                    ></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      <button className="logout" onClick={closeSeccion}>
        Close Seccion <i class="bi bi-door-open-fill"></i>
      </button>

      {/*  Modal One */}
      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add New Service +
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
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={nameService}
                    onChange={(event) =>
                      setNameService(event.currentTarget.value)
                    }
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="message-text"
                    placeholder="Img"
                    value={imgService}
                    onChange={(event) =>
                      setImgService(event.currentTarget.value)
                    }
                  />
                </div>
                <div className="mb-3">
                  <select
                    name="categorys"
                    value={selectCategory}
                    onChange={(event) => {
                      setSelectCategory(event.currentTarget.value);
                    }}
                  >
                    <option value="1">Carpentry</option>
                    <option value="2">Metal Structures</option>
                    <option value="3">Glassware</option>
                    <option value="4">Interior Design</option>
                    <option value="5">General Cleaning</option>
                    <option value="6">Building</option>
                    <option value="7">Furniture</option>
                    <option value="8">Painting</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={createService}
              >
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*  Modal Two */}
      <div
        className="modal fade"
        id="exampleModal2"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add New Employer +
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
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name Employ"
                    value={nameEmploy}
                    onChange={(event) =>
                      setNameEmploy(event.currentTarget.value)
                    }
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name Employ"
                    value={lastNameEmploy}
                    onChange={(event) =>
                      setLastNameEmploy(event.currentTarget.value)
                    }
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="message-text"
                    placeholder="photo Employ"
                    value={avatarEmploy}
                    onChange={(event) =>
                      setAvatarEmploy(event.currentTarget.value)
                    }
                  />
                </div>
                <div className="mb-3">
                  <select
                    name="categorys"
                    value={selectPosition}
                    onChange={(event) => {
                      setSelectPosition(event.currentTarget.value);
                    }}
                  >
                    <option value="1">Interior designer</option>
                    <option value="2">Welder</option>
                    <option value="3">Official Bricklayer</option>
                    <option value="4">Director Manager</option>
                    <option value="5">Admin Services & Employs</option>
                  </select>
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="1900-12-30"
                    value={date_Birth}
                    onChange={(event) =>
                      setDate_Birth(event.currentTarget.value)
                    }
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone"
                    value={cellEmploy}
                    onChange={(event) =>
                      setCellEmploy(event.currentTarget.value)
                    }
                  />
                </div>
                <div className="mb-3">
                  <label>Gender:</label>{" "}
                  <select
                    name="categorys"
                    value={selectGender}
                    onChange={(event) => {
                      setSelectGender(event.currentTarget.value);
                    }}
                  >
                    <option value="1">M</option>
                    <option value="2">F</option>
                    <option value="3">O</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={createNewEmploy}
              >
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Control_Panel;
