import { propTypes } from "react-bootstrap/esm/Image";
import { Link } from "react-router-dom";

function DialogItem(props) {
  let path = "/dialogs/" + props.id;
    return (
        <li class="p-2 border-bottom" style={{backgroundColor: "lightblue"}}>
          <Link class="d-flex justify-content-between link-light" to={path}>
                    <div class="d-flex flex-row">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp" alt="avatar"
                        class="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60"/>
                      <div class="pt-1">
                        <p class="fw-bold mb-0">{props.name}</p>
                        <p class="small text-white"></p>
                      </div>
                    </div>
                    <div class="pt-1">
                      
                      
                    </div>
                    </Link>
            </li>
    );
}

export default DialogItem;