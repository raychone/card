import "./App.css";
import Card from "./components/Card";
import model1 from "./assets/11.png";
import model2 from "./assets/2.png";
import model3 from "./assets/3.png";

const detalii = [
  {
    subtitle:
      "Sports shoes from the New Balance Lifestyle collection and Lifestyle sports category, product intended for the Female gender and the Adult age group.",
    title: "New Balance Most Beautiful Sports Shoes1",
    id: 1,
    image: model1,
    price: "$499.99",
  },
  {
    subtitle:
      "Sports shoes from the New Balance Lifestyle collection and Lifestyle sports category, product intended for the Female gender and the Adult age group.",
    title: "New Balance Most Beautiful Sports Shoes2",
    id: 2,
    image: model2,
    price: "$375.99",
  },
  {
    subtitle:
      "Sports shoes from the New Balance Lifestyle collection and Lifestyle sports category, product intended for the Female gender and the Adult age group.",
    title: "New Balance Most Beautiful Sports Shoes3",
    id: 3,
    image: model3,
    price: "$425.99",
  },
];

function App() {
  return (
    <div className="w-full bg-slate-300 h-screen flex flex-wrap justify-around items-center gap-5">
      {detalii.map((item, index) => {
        return (
          <Card
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            index={index}
            price={item.price}
          />
        );
      })}
    </div>
  );
}

export default App;
