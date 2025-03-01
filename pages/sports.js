import ActivityPageTemplate from "@/components/common/ActivityPageTemplate";
import { sports } from "../data/sports.json";

const SportCard = ({ item }) => {
  return (
    <div className="courses__item-two shine__animate-item">
      <div className="courses__item-two-thumb">
        <img src={`/assets/img/courses/course_thumb07.jpg`} alt="img" />
      </div>
      <div className="courses__item-two-content">
        <div
          className="courses__item-tag"
          style={{
            backgroundColor: "#E8F9EF",
            color: "#04BC53",
            width: "fit-content",
          }}
        >
          {item.category}
        </div>
        <h5 className="title">{item.name}</h5>
        <ul className="courses__item-meta list-wrap">
          <li>
            <i className="flaticon-user-1" /> {item.coach}
          </li>

          <li>
            <i className="flaticon-timer" /> {item.timing}
          </li>
          <li>
            <i className="flaticon-user-1" /> Max: {item.maxPlayers}
          </li>
        </ul>
        <div className="courses__item-bottom">
          <div className="course__schedule">
            <span>{item.practice}</span>
          </div>
          <div className="courses__item-rating">
            <span className="venue">{item.venue}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

function Sports() {
  return (
    <ActivityPageTemplate
      data={sports}
      title="Sports"
      CardComponent={SportCard}
      breadcrumbTitle="Sports"
    />
  );
}

export default Sports;
