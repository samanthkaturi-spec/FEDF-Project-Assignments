import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";

import StudentDetails from "./StudentDetails";

function StudentDashboard() {
  const [students, setStudents] = useState([
    "Lahari",
    "Vishal",
    "Rama",
    "Malli karjun",
    "Rithika",
  ]);

  const [name, setName] = useState("");

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    document.title = `Students: ${students.length}`;
  }, [students]);

  const addStudent = () => {
    if (name.trim()) {
      setStudents([...students, name]);
      setName("");
    }
  };

  const deleteStudent = useCallback((index) => {
    setStudents((prevStudents) =>
      prevStudents.filter((_, i) => i !== index)
    );
  }, []);

  const totalStudents = useMemo(() => {
    return students.length;
  }, [students]);

  const totalCharacters = useMemo(() => {
    return students.reduce(
      (total, student) => total + student.length,
      0
    );
  }, [students]);

  return (
    <div>
      <h2>Student Dashboard</h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="Enter Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={addStudent}>
        Add Student
      </button>

      <button
        onClick={() => inputRef.current.focus()}
      >
        Focus Input
      </button>

      <p>Total Students: {totalStudents}</p>

      <p>
        Total Characters in Names: {totalCharacters}
      </p>

      <StudentDetails
        students={students}
        deleteStudent={deleteStudent}
      />
    </div>
  );
}

export default StudentDashboard;