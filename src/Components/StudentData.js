import { useState } from "react";
import StudentList from "./StudentList";

const StudentData = () => {
  const [student, setStudent] = useState({
    Name: "",
    email: "",
    age: "",
  });

  const [list, setList] = useState([]);

  const handleChange = (e, key) => {
    setStudent({ ...student, [key]: e.target.value });
  };

  const Submit = () => {
    if (student.id) {
      let listing = list;
      listing.splice(
        list.findIndex((obj) => obj.id === student.id),
        1,
        student
      );

      setList([...listing]);
    } else {
      const data = { ...student, id: list.length + 1 };
      setList([...list, data]);
    }
    setStudent({
      Name: "",
      email: "",
      age: "",
    });

    // setDisable("submitted")
  };

  const editData = (data) => {
    setStudent(data);
  };

  const deletData = (student) => {
    let listing = list;
    listing.splice(
      list.findIndex((obj) => obj.id === student.id),
      1
    );

    setList([...listing]);
  };
  return (
    <>
      <div className="main_div">
        <div className="main_left">
          <div className="Input_fild">
            <h1>Student Form</h1>
            <div className="row">
              <label>Name :</label>

              <input
                type="text"
                value={student.Name}
                name="Name"
                onChange={(e) => handleChange(e, "Name")}
              />
            </div>
            <div className="row">
              <label>Email :</label>

              <input
                type="email"
                value={student.email}
                name="email"
                onChange={(e) => handleChange(e, "email")}
              />
            </div>
            <div className="row">
              <label>Age :</label>

              <input
                type="text"
                value={student.age}
                name="age"
                onChange={(e) => handleChange(e, "age")}
              />
              <br />
            </div>

            <button
              className="submit-btn"
              // disabled={!student.Name || !student.email || !student.age}
              onClick={() => Submit()}
            >
              Submit
            </button>
          </div>
        </div>
        {list.length > 0 ? (
          <div className="main_right">
            <StudentList
              ListData={list}
              editData={editData}
              deletData={deletData}
            />
          </div>
        ) : (
          <h3 style={{ textAlign: "center" }}>No Student Data Listed</h3>
        )}
      </div>
    </>
  );
};
export default StudentData;
