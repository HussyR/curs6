import { useParams } from "react-router-dom";

function Message(props) {

  const params = useParams()
  const userID = params.id

    return (
        <li class="d-flex justify-content-between mb-4" >
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" alt="avatar"
                class="rounded-circle d-flex align-self-start me-3 shadow-1-strong" width="60"/>
              <div class="card mask-custom">
                <div class="card-header d-flex justify-content-between p-3" style={{backgroundColor: "lightblue"}}>
                  <p class="fw-bold mb-0">{userID}</p>
                </div>
                <div class="card-body" style={{backgroundColor: "lightblue"}}>
                  <p class="mb-0">{props.text}</p>
                </div>
              </div>
            </li>
    );
}

export default Message;