import style from "./ItemPage.module.scss";
import Block from "../Component/Block copy/BlockItem";
import Header from "../Component/Header/Header";
import vacancies from "../arr";
import { useParams } from "react-router-dom";
function ItemPage() {
  const {id} = useParams();
  const arr = vacancies.filter((el)=>el.id==id);
  const obj = arr[0];
  return (
    <>
      <Header />
      <div className={style.main}>
        <Block
          title={obj.title}
          salary={obj.salary}
          schedule={obj.schedule}
          location={obj.location}
        ></Block>
      </div>
      <div className={style.info}>
        <div className={style.resp}>
          <h1>Обязанности:</h1>
          {obj.responsibilities.map((el)=><li>{el}</li>)}
        </div>
        <div className={style.req}>
          <h1>Требования:</h1>
          {obj.requirements.map((el)=><li>{el}</li>)}
        </div>
        <div className={style.situation}>
          <h1>Условия:</h1>
         {obj.conditions.map((el)=><li>{el}</li>)}
        </div>
      </div>
    </>
  );
}
export default ItemPage;
