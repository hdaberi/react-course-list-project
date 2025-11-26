const courseListStatus = ["All", "Active", "Upcoming", "Completed"];

function Header() {
  return (
    <div>
      <h1 className="title">My CourseList Project</h1>
      <div className="course-status">
        <ul>
          {courseListStatus.map((status) => {
            return (
              <li key={status} className={status === "All" ? "active" : ""}>
                {status}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Header;
