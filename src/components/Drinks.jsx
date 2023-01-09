const Drinks = ({ nameData }) => {

  return (
    <div className="all_card">
      <div className="main_card">
        <section className="image_card">
          <img src={nameData.strDrinkThumb} alt="" />
        </section>
        <article className="content_card">
          <h2>Name: <span>{nameData.strDrink}</span></h2>
          <h3>{nameData.strCategory}</h3>
          <p>{nameData.strInstructions}</p>
        </article>
      </div>
    </div>
  )
}

export default Drinks
