const ReportSection = () => {
  return (
    <div className="wide-container">
      <div className="report-section">
        <div className="report-container">
          <div>
            <p className="report-card__title">Total of tasks</p>
            <p className="report-card__data">20 tasks</p>
          </div>
          <div>
            <p className="report-card__title">Completed tasks</p>
            <p className="report-card__data">1 / 20 tasks</p>
          </div>
          <div>
            <p className="report-card__title">Total of Notes</p>
            <p className="report-card__data">2 notes</p>
          </div>
        </div>
        <div className="report-container-members">
          <a href="#" className="read-more-btn">
            Members
          </a>
          <img src="https://picsum.photos/200/300" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ReportSection;