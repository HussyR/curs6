import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import authHeader from "../services/auth-header";

export default function Home() {
  const [tableOrders, setTableOrders] = useState([]);

  const API_URL = 'http://localhost:8080/api/tableOrders';

  useEffect(() => {
    loadTableOrders();
  }, []);

  const loadTableOrders = async () => {
    
        const result = await axios.get(API_URL, { headers: authHeader() });
        setTableOrders(result.data);
    
  };

  const deleteTableOrder = async (id) => {
    await axios.delete(`http://localhost:8080/api/tableOrder/${id}`, { headers: authHeader() });
    loadTableOrders();
  };

  return (
    <div className="container">
      <div className="py-4">
        <hr/>

        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Время</th>
              <th scope="col">Количество чел-ек</th>
            </tr>
          </thead>
          <tbody>
            {tableOrders.map((tableOrder) => (
              <tr>
                <td>{tableOrder.username}</td>
                <td>{tableOrder.time}</td>
                <td>{tableOrder.numberOfPersons}</td>
                <td>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteTableOrder(tableOrder.id)}
                  >
                    Удалить
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}