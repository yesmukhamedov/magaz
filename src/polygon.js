
// $.get("https://ipinfo.io", function (response) {
//     $("#ip").html("IP: " + response.ip);
//     $("#address").html("Location: " + response.city + ", " + response.region);
//     $("#details").html(JSON.stringify(response, null, 4));
//     console.log(response);
// }, "jsonp");

fetch("https://ipinfo.io/jsonp")
    .then(response => response.json())
    .then(data => console.log('ppp',JSON.stringify(data)));

fetch('https://ipinfo.io/json')
    .then(response => response.json())
    .then(data => console.log('ttt',JSON.stringify(data)));
//     , function (response) {
//     $("#ip").html("IP: " + response.ip);
//     $("#address").html("Location: " + response.city + ", " + response.region);
//     $("#details").html(JSON.stringify(response, null, 4));
//     console.log(response);
// }, "jsonp");

// useEffect(
//     ()=>fetch('http://localhost:3000/db.json')
//         .then(resp => resp.json())
//         .then(json => setState({
//             ...state,
//             data: json.data,
//             posters: json.posters,
//             slidePosters: json.slidePosters,
//
//             title: json.aboutUs.title,
//             slides: json.aboutUs.salon,
//             aboutUs: json.aboutUs.aboutUs
//         })), [])

navigator.geolocation.getCurrentPosition(
    // Функция обратного вызова при успешном извлечении локации
    function(position) {
        //В объекте position изложена подробная информация о позиции устройства:
        console.log(position)
        // position = {
        //     coords: {
        //         latitude - Широта.
        //         longitude - Долгота.
        //         altitude - Высота в метрах над уровнем моря.
        //         accuracy - Погрешность в метрах.
        //         altitudeAccuracy - Погрешность высоты над уровнем моря в метрах.
        //         heading - Направление устройства по отношению к северу.
        //         speed - Скорость в метрах в секунду.
        //     }
        //     timestamp - Время извлечения информации.
        // }
    },
    // Функция обратного вызова при неуспешном извлечении локации
    function(error){
        //При неудаче, будет доступен объект error:
        console.log(error)
        // error = {
        //     code - Тип ошибки
        //         1 - PERMISSION_DENIED
        //         2 - POSITION_UNAVAILABLE
        //         3 - TIMEOUT
        //     message - Детальная информация.
        //     }
    }
);

fetch("https://ipinfo.io/json?token=$TOKEN").then(
    (response) => response.json()
).then(
    (jsonResponse) => console.log('jsonResponse', jsonResponse)
)

const [ geo, setGeo ] = useState({})
navigator.geolocation.getCurrentPosition(
    function(position) {
        setGeo({lat: position.coords.latitude, lon: position.coords.longitude})
    },
    function(error){
        console.log(error)
    }
);