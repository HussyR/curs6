function FoodCard(props) {
    return (
        <div class="food_card">
                <div class="image_container">
                    <img src={props.url}/>
                </div>
                <div class="text_container">
                    <div class="title">{props.title}</div>
                <div class="description">{props.description}</div>
                </div>
                <div class="lower_container">
                    <div class="price_container">
                        <div class="price">{props.price}₽</div>
                    </div>
                    <div class="buy_container">
                        <div class="buy">Выбрать</div>
                    </div>
                </div>
            </div>
    );
}

export default FoodCard;