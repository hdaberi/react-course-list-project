function CourseCard(){
    return (
        <div className="course-item">
                <div className="course-item__img">
                    <img src='./images/img1.jpg' alt='image-01' />
                </div>
                <div className="course-item__detail">
                    <div className="course-item__body">
                        <div>
                            <h2 className="title">English Lecture</h2>
                            <p className="desc">language lessons with the most popular teachers</p>
                        </div>
                        <span className="rate">4.5</span>
                    </div>
                    <div className="course-item__footer">
                        <div className="tags">
                            <span className="badge badge--secondary">langauges</span>
                        </div>
                        <div className="caption">
                            <div className="date">
                                {new Date().toLocaleDateString('en-US', {
                                    month: 'short',
                                    year: 'numeric',
                                    day: 'numeric',
                                })}
                            </div>
                            <span className="badge badge--primary">Complated</span>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default CourseCard;