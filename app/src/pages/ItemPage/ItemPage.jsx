import style from "./ItemPage.module.scss";
import Block from "../Component/Block copy/BlockItem";
import Header from "../Component/Header/Header";
function ItemPage() {
  const obj = {
    title: "Менеджер-дизайнер",
    salary: "з/п от 70000 rub",
    workDay: "Полный рабочий день",
    place: "Новый Уренгой",
  };
  return (
    <>
      <Header />
      <div className={style.main}>
        <Block
          title={obj.title}
          salary={obj.salary}
          workDay={obj.workDay}
          place={obj.place}
        ></Block>
      </div>
      <div className={style.info}>
        <div className={style.resp}>
          <h1>Обязанности:</h1>
          <li>
            Разработка дизайн-макетов для наружной, интерьерной рекламы,
            полиграфии, сувенирной продукции.
          </li>
          <li>Подготовка и вёрстка макетов в CorelDraw, Adobe photoshop.</li>
          <li>Создание дизайна логотипов и брендбуков</li>
          <li>
            Управленческая функция: обучение, адаптация дизайнеров, их контроль,
            оценка
          </li>
        </div>
        <div className={style.req}>
          <h1>Требования:</h1>
          <li>Собеседование – после успешного прохождения тестового задания</li>
          <li>Рассматриваются кандидаты только с опытом работы</li>
          <li>Обязательно - наличие портфолио</li>
          <li>Умение самостоятельно принимать решения, умение объективно оценивать свою работу, работать в режиме многозадачности и переключаться с одного задания к другому и планировать свой день. Соблюдать сроки.</li>
          <li>Ответственный, исполнительный, целеустремленный, большим плюсом будет опыт управления</li>
        </div>
        <div className={style.situation}>
          <h1>Условия:</h1>
          <li>Оформление по контракту</li>
          <li>Полный социальный пакет</li>
          <li>Премирование по результатам работы</li>
        </div>
      </div>
    </>
  );
}
export default ItemPage;
