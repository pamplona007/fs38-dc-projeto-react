import DollarIcon from "../../../assets/img/icons/big-dollar-sign.png";
import HightlightsCard from "./hightlights-card/highlight-card";
import "./Home.css";

function Home() {
  const totalSale = 3456;
  const total = 56578;
  const average = 56578 / totalSale;

  const hightlights = [
    {
      title: "Total de vendas",
      icon: DollarIcon,
      value: totalSale,
    },
    {
      title: "Valor total",
      icon: DollarIcon,
      value: total,
    },
    {
      title: "Ticket médio",
      icon: DollarIcon,
      value: average.toFixed(2),
    },
    {
      title: "Total de clientes",
      icon: DollarIcon,
      value: 456,
    },
  ];

  return (
    <>
      <div className="hightlights gap-3 d-flex justify-content-between">
        {hightlights.map((hl, index) => (
          <HightlightsCard
            title={hl.title}
            icon={hl.icon}
            value={hl.value}
            key={index}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
