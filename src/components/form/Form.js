import "./styles.css";

const Form = () => {

  return (
    <div style={{ height: "110vh" }}>
      <form >
        <div>
          <p>name here</p>
          <label>
            <strong>Username:</strong>{" "}
          </label>
          <br />
          <input
            type="text"
            placeholder="name"
          />
        </div>
        <div>
          <p>email here</p>
          <label>
            <strong>E-mail:</strong>{" "}
          </label>
          <br />
          <input
            type="email"
            placeholder="email"
          />
        </div>
        <div>
          <p>password here</p>
          <label>
            <strong>Password: </strong>
          </label>
          <br />
          <input
            type="password"
            placeholder="pass"
          />
        </div>
        <div style={{ margin: "10px auto" }}>
          <p>country here</p>
          <label>
            <strong>Country: </strong>
          </label>
          <select
            style={{ marginTop: "10px", width: "100px", padding: "10px" }}
          >
            <option value="">Country</option>
            <option value="Turkey">Turkey</option>
            <option value="Germany">Germany</option>
            <option value="Netherland">Netherland</option>
            <option value="France">France</option>
          </select>
        </div>
        <button className="btn__click" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default Form;
