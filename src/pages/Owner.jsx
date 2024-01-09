import Navbar from "./Navbar";
const Owner = () => {
  return (
    <div>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <h1 style={{ marginTop: "20px" }}>Fon-GroupB-02</h1>
        <div>
          <img
            style={{ width: "200px", height: "200px", margin: "30px" }}
            alt="flower"
            src="https://static7.depositphotos.com/1038500/691/i/450/depositphotos_6917128-stock-photo-field-of-camomile.jpg"
          ></img>
          <div>
            <h4 style={{ marginBottom: "20px" }}> Short Biography:</h4>
            <h5 style={{ padding: "0px 200px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Owner;
