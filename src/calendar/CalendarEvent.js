import "./CalendarEvent.css";

const CalendarEvent = (props) => {
  return (
    <div>
      <article class="card">
        <div class="thumb">
            <img src={props.img} alt="imgsrc" className="img_src_pic"/>
        </div>
        <div class="infos">
          <h2 class="title">
            {props.header}<span class="flag"></span>
          </h2>
          <h3 class="date">{props.date}</h3>
          <p class="txt">
           {props.CalendarEvent}
          </p>
        </div>
      </article>
    </div>
  );
};
export default CalendarEvent;

