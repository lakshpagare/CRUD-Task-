const StudentList = ({ ListData, editData, deletData }) => {
  return (
    <>
      <div className="list_div">
        <div className="table_heading">
          <div>
            <h3>Name</h3>
            <h3>Email</h3>
            <h3>Age</h3>
            <h3>Action</h3>
          </div>

          <div>
            {ListData.map((Student) => {
              return (
                <div className="list_data">
                  <h3>
                    {Student.Name}
                  </h3>
                  <h3>{Student.email}</h3>
                  <h3>{Student.age}</h3>
                  <h3>
                    <button onClick={() => editData(Student)}>Edit </button>
                    <button onClick={() => deletData(Student)}>Delete</button>
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default StudentList;
