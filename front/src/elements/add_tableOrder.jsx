import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authHeader from "../services/auth-header";

export default function AddTableOrder() {
  let navigate = useNavigate();

  const [tableOrder, setTableOrder] = useState({
    time: "",
    numberOfPersons: "",
    username: ""
  });

  const { time, numberOfPersons, username } = tableOrder;

  const onInputChange = (e) => {
    setTableOrder({ ...tableOrder, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/tableOrders", tableOrder, { headers: authHeader() });
    navigate("/tableOrder");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Забронировать столик</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Имя
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Введитеимя"
                name="name"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Time" className="form-label">
                Время
              </label>
              <input
                type={"time"}
                className="form-control"
                placeholder="Ввердите время"
                name="time"
                value={time}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Publisher" className="form-label">
                Количество человек
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Введите количество человек"
                name="numberOfPersons"
                value={numberOfPersons}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Создать
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}