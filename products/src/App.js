import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SideBar from "./components/SideBar/SideBar";
import Card from "./components/Card/Card";
import CardTitle from "./components/Card/CardTitle";  
import { Data } from "./components/Card/Data";
import { useState } from "react"; 


function App() {
  
  const [category, setCategory] = useState([]);
  return (
    <div className="App">
      <Header />
      <NavBar />
      <SideBar /> 
      <CardTitle />
      {Data.map(({ photo, title,rating,review,d1,d2,d3,d4,d5,d6,price,offer}) => (
          <Card photo={photo} title={title} rating={rating} review={review} d1={d1} d2={d2} d3={d3} d4={d4} d5={d5} d6={d6} price={price} offer={offer} />
        ))}
      <Footer />
    </div>
  );
}

export default App;
