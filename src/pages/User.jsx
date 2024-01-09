const User = ({ employees }) => {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Lastname</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => {
            return (
              <tr>
                <td>{emp.name}</td>
                <td>{emp.lastname}</td>
                <td>{emp.position}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default User;
