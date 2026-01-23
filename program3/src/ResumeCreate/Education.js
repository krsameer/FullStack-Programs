import React from "react";

// Education Table Component
class EdTable extends React.Component {
  render() {
    const education = [
      {
        id: 1,
        name: "Usha Martin World School",
        place: "Patna",
        stddeg: "10th",
        grade: "A+",
      },
      {
        id: 2,
        name: "RV College of Engineering",
        place: "Bengaluru",
        stddeg: "Post Graduate",
        grade: "10.0",
      },
    ];

    const edudetails = education.map((educ) => (
      <EdRow
        key={educ.id}
        id={educ.id}
        name={educ.name}
        place={educ.place}
        stddeg={educ.stddeg}
        grade={educ.grade}
      />
    ));

    return (
      <table className="edu-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Institute</th>
            <th>Place</th>
            <th>Education</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>{edudetails}</tbody>
      </table>
    );
  }
}

// Education Row Component
class EdRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.name}</td>
        <td>{this.props.place}</td>
        <td>{this.props.stddeg}</td>
        <td>{this.props.grade}</td>
      </tr>
    );
  }
}

// Main Education Component
class Education extends React.Component {
  render() {
    return (
      <div>
        <h2>Educational Details</h2>
        <EdTable />
      </div>
    );
  }
}

export default Education;
