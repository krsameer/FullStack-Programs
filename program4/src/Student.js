// A student registration portal using Entities like component, state and props in React js

import React from "react";

// Initial student list
const studlist = [
  { slno: 1, name: "Kumar Sameer", usn: "S100", tmarks: 99 },
  { slno: 2, name: "KumaraSwamy", usn: "S101", tmarks: 98.6 },
];

// Displays a single student row (USES PROPS)
class StudentRow extends React.Component {
  render() {
    const studl = this.props.stdli;
    return (
      <tr>
        <td>{studl.slno}</td>
        <td>{studl.name}</td>
        <td>{studl.usn}</td>
        <td>{studl.tmarks}</td>
      </tr>
    );
  }
}

// Displays students table (USES PROPS)
class StudentsTable extends React.Component {
  render() {
    const studrows = this.props.studlist.map((studli) => (
      <StudentRow key={studli.slno} stdli={studli} />
    ));

    return (
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Student Name</th>
            <th>USN</th>
            <th>Total Marks</th>
          </tr>
        </thead>
        <tbody>{studrows}</tbody>
      </table>
    );
  }
}

// Form to add new student (USES PROPS + EVENTS)
class StudentAddSubmit extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.studAdd;

    const studli = {
      name: form.name.value,
      usn: form.usn.value,
      tmarks: form.tmarks.value,
    };

    this.props.CreateStudentAdd(studli);

    form.name.value = "";
    form.usn.value = "";
    form.tmarks.value = "";
  }

  render() {
    return (
      <form name="studAdd" onSubmit={this.handleSubmit}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="text" name="usn" placeholder="USN" required />
        <input type="number" name="tmarks" placeholder="Total Marks" required />
        <button type="submit">Add Student</button>
      </form>
    );
  }
}

// Main Component (USES STATE)
class StudentListTable extends React.Component {
  constructor() {
    super();
    this.state = { newStudList: [] };
    this.CreateStudentAdd = this.CreateStudentAdd.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    setTimeout(() => {
      this.setState({ newStudList: studlist });
    }, 1000);
  }

  CreateStudentAdd(studli) {
    const studlength = this.state.newStudList.length + 1;
    studli.slno = studlength;

    const newstudlist1 = this.state.newStudList.slice();
    newstudlist1.push(studli);

    this.setState({ newStudList: newstudlist1 });
  }

  render() {
    return (
      <React.Fragment>
        <h2>Student Registration Portal</h2>
        <StudentsTable studlist={this.state.newStudList} />
        <hr />
        <StudentAddSubmit CreateStudentAdd={this.CreateStudentAdd} />
      </React.Fragment>
    );
  }
}
export default StudentListTable;