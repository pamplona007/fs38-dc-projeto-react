function HightlightsCard({ title, icon, value }) {
  return (
    <div className="card w-100">
      <div className="card-body d-flex">
        <img className="icon-dollar" src={icon} alt="" />
        <div className="info">
          <p className="fw-light">{title}</p>
          <p className="fs-2">{value}</p>
        </div>
      </div>
    </div>
  );
}

export default HightlightsCard;
