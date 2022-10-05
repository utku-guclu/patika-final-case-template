import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

function Modal({ description, header, image }) {
  const { userEmail, setUserEmail, isChecked, setIsChecked, setDisplay } =
    useContext(UserContext);
  const navigate = useNavigate();
  const handleEmail = (event) => {
    setUserEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userEmail && isChecked) {
      setDisplay(false);
      navigate("thankyou");
    }
  };

  return (
    <>
      <div className="close-modal-btn-container">
        <button
          onClick={() => setDisplay(false)}
          className="modal-close-btn"
          id="modal-close-btn"
        >
          X
        </button>
      </div>
      <div className="modal-inner" id="modal-inner">
        <img src={require(`../images/${image}`)} alt={image} />
        <h2>{header}</h2>
        <p className="modal-text" id="modal-text">
          {description}
        </p>
        <form onSubmit={handleSubmit} target="_blank" id="consent-form">
          <label htmlFor="email"></label>
          <input
            onChange={handleEmail}
            id="email"
            name="email"
            type="email"
            value={userEmail}
            placeholder="Email address"
            required
          />
          <button className="modal-btn" type="submit">
            Subscribe
          </button>
          <div className="signup">
            <label htmlFor="modal-checkbox">
              By signing up, you agree to Privacy Policy and Terms of Use.
            </label>
            <input
              onClick={() => setIsChecked((prev) => !prev)}
              id="modal-checkbox"
              type="checkbox"
              name="checkbox"
              value={isChecked}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Modal;
