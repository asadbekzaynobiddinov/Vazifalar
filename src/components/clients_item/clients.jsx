import "./clients.css";
import clients from "../../assets/clients.svg";
// eslint-disable-next-line react/prop-types
export const ClientsItems = ({ name, text }) => {
    return (
        <div className="clients__item">
            <img
                className="clients__img"
                src={clients}
                alt="image of user"
            />
            <h3 className="clients__sub_title">{name}</h3>
            <p className="clients__text">{text}</p>
        </div>
    );
};
