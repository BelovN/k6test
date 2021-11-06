import {defaultHeaders} from "./config";
import http from "k6/http";


// Получение текущей корзины
function getBasket() {
    return http.get(
        "https://api.frfrstaging.ru/v3/6faa1960-0f60-44c2-8e31-9918f2179c64/ufa/basket/",
        {
            headers: defaultHeaders,
        }
    )
}

// Получение текущего промокода
function getCurrentPromocode() {
    return http.get(
        "https://ufa.frfrstaging.ru/api/marketing/promocode_current/",
        {
            headers: defaultHeaders,
        }
    )
}

// Добавление продукта
function postAddProducts() {
    return http.post(
        "https://api.frfrstaging.ru/v3/6faa1960-0f60-44c2-8e31-9918f2179c64/ufa/basket/add_product",
        "{product_id: 10}",
        {
            headers: defaultHeaders,
        }
    )
}
