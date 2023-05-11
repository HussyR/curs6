import singer from './../assets/singer.webp';
import family from './../assets/family.webp';
import pizza from './../assets/pizza (1).jpeg';
function MiddleContainer() {
    return (
        <div class="news_container">
            <div class="news">
                    <img src={singer}/>
                <div class="text_news">Живое выступление музыкантов в пятницу и субботу по вечерам</div>
            </div>
            <div class="news">
                <img src={family}/>
                <div class="text_news">Скидки для детей с 12:00 до 17:00</div>
            </div>
            <div class="news">
                <img src={pizza}/>
                <div class="text_news">Скидка на первый заказ пиццы до 10%</div>
            </div>
        </div>
    );
}

export default MiddleContainer;

