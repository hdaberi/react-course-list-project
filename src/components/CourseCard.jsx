function CourseCard(props){
    console.log(props);
    
    return (
        <div className="course-item">
                <div className="course-item__img">
                    <img src={props.course.imageUrl} alt={props.course.title} />
                </div>
                <div className="course-item__detail">
                    <div className="course-item__body">
                        <div>
                            <h2 className="title">{props.course.title}</h2>
                            <p className="desc">{props.course.description}</p>
                        </div>
                        <span className="rate">{props.course.rate}</span>
                    </div>
                    <div className="course-item__footer">
                        <div className="tags">
                            {props.course.tags.map((tag)=><span key={tag} className="badge badge--secondary">{tag}</span>)}
                        </div>
                        <div className="caption">
                            <div className="date">
                                {new Date(props.course.start).toLocaleDateString('en-US', {
                                    month: 'short',
                                    year: 'numeric',
                                    day: 'numeric',
                                })}
                            </div>
                            <span className="badge badge--primary">{props.course.status}</span>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default CourseCard;