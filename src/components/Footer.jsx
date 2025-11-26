function Footer() {
  return (
    <section className="footer">
      <div className="footer-content">
        <div className="footer-title">My CourseList Project</div>
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} My CourseList Project. All rights reserved.
        </div>
      </div>
    </section>
  );
}

export default Footer;
