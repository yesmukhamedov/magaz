export const posters = [
    {
        id: 0,
        photo: 'https://nicolewedding.ru/upload/resize_cache/iblock/cec/604_850_2/cec479d1bb9d978705361809edc47360.jpeg',
        value: '',
        text21: 'БЛИСТАЙ И УДИВЛЯЙ!',
        text42: 'ВЕЧЕРНИЕ ПЛАТЬЯ'
    },
    {
        id: 1,
        photo: 'https://nicolewedding.ru/upload/resize_cache/iblock/6e9/604_850_2/6e9f8fba8d538190b00d2c56c8d4c270.jpg',
        value: '',  // путь к категориям на который ссылается постер
        text21: 'Утепляемся красиво!',
        text42: 'ВЕРХНЯЯ ОДЕЖДА'
    },
    {
        id: 2,
        photo: 'https://nicolewedding.ru/upload/resize_cache/iblock/1cb/604_850_2/1cb5c8881422be288b0d5a63c606b7a4.jpg',
        value: '',
        text21: 'ИДЕАЛЬНОЕ СОЧЕТАНИЕ',
        text42: 'ФАТА'
    },
    {
        id: 3,
        photo: 'https://nicolewedding.ru/upload/resize_cache/iblock/30e/604_850_2/30ee3ef9f9c54bf35ea185a81459d5f5.jpg',
        value: '',
        text21: 'БЕЗУКОРИЗНЕННЫЙ ОБРАЗ',
        text42: 'БУДУАРНЫЕ ПЛАТЬЯ'
    },
    {
        id: 4,
        photo: 'https://nicolewedding.ru/upload/resize_cache/iblock/979/604_850_2/9797b68f65bdefded62bc948b66676a1.jpg',
        value: '',
        text21: 'ШАГ ЗА ШАГОМ',
        text42: 'СВАДЕБНАЯ ОБУВЬ'
    },
    {
        id: 5,
        photo: 'https://nicolewedding.ru/upload/resize_cache/iblock/be0/604_850_2/be0c66314c656de039159f1c9be296cd.jpg',
        value: '',
        text21: 'ПАЛИТРА КРАСОТЫ!',
        text42: 'СВАДЕБНЫЕ ПЛАТЬЯ'
    },
    {
        id: 6,
        photo: 'https://nicolewedding.ru/upload/resize_cache/iblock/9c6/604_850_2/9c6a50781d361b3b16ded43446826721.png',
        value: '',
        text21: 'КРАСОТА В ДЕТАЛЯХ!',
        text42: 'УКРАШЕНИЯ'
    },
    {
        id: 7,
        photo: 'https://nicolewedding.ru/upload/resize_cache/iblock/d13/604_850_2/d135fc0c951339e3d5b7070ca2ab4b5c.jpg',
        value: '',
        text21: 'БУДЬ НЕ КАК ВСЕ!',
        text42: 'Костюмы и комбинезоны'
    }
];

export const slidePosters = {
    billboard: [
        {
            id: 0,
            name: 'Sale',
            text: 'sale sale sale',
            value: {
                text: 'buter',
                link: ''
            }, // путь страницу акции на который ссылается
            photo: 'https://nicolewedding.ru/upload/iblock/704/704db76e449d1814cd3090d5915907ed.jpg'
        },
        {
            id: 1,
            name: 'New collection',
            text: 'sale sale sale',
            value: false,
            photo: 'https://nicolewedding.ru/upload/iblock/704/704db76e449d1814cd3090d5915907ed.jpg'
        },
        {
            id: 2,
            name: 'Bestsellers',
            text: 'sale sale sale',
            value: {
                text: '',
                link: ''
            },
            photo: 'https://nicolewedding.ru/upload/iblock/704/704db76e449d1814cd3090d5915907ed.jpg'
        }
    ],
    salon: [
        {
            id: 0,
            name: 'Sale',
            photo: 'https://nicolewedding.ru/upload/resize_cache/iblock/e31/720_548_2/e316d7ae5001a873d227c7ba397e77e8.jpg'
        },
        {
            id: 1,
            name: 'New collection',
            photo: 'https://nicolewedding.ru/upload/resize_cache/iblock/9e3/720_548_2/9e33ff2ca415b699a21269db28d976e1.jpg'
        },
        {
            id: 2,
            name: 'Bestsellers',
            photo: 'https://nicolewedding.ru/upload/resize_cache/iblock/b9c/720_548_2/b9c97078f25f74a470905b76c098e7b7.jpg'
        },
        {
            id: 3,
            name: 'Bestsellers',
            photo: 'https://nicolewedding.ru/upload/resize_cache/iblock/07a/720_548_2/07aeff22845354ea8a86cbd9c14da66a.jpg'
        },
        {
            id: 4,
            name: 'Bestsellers',
            photo: 'https://nicolewedding.ru/upload/resize_cache/iblock/7d3/720_548_2/7d3477649123dfe95bde285027985637.jpg'
        },
        {
            id: 5,
            name: 'Bestsellers',
            photo: 'https://nicolewedding.ru/upload/resize_cache/iblock/75e/720_548_2/75e826ca5f4319f35bfd40027d6b010f.jpg'
        },
        {
            id: 6,
            name: 'Bestsellers',
            photo: 'https://nicolewedding.ru/upload/resize_cache/iblock/c9e/720_548_2/c9e94a0ca76c5b6c9427b4ed54b49370.jpg'
        }
    ],
};

export const categories = [
    {
        id: 0,
        name: 'Свадебные платья',
        text: 'Свадебные платья',
        value: '0'
    },
    {
        id: 1,
        name: 'Sale',
        text: 'Sale',
        value: '1'
    },
    {
        id: 2,
        name: 'Вечерние платья',
        text: 'Вечерние платья',
        value: '2'
    },
    {
        id: 3,
        name: 'Обувь',
        text: 'Обувь',
        value: '3'
    },
    {
        id: 4,
        name: 'Фата',
        text: 'Фата',
        value: '4'
    },
    {
        id: 5,
        name: 'Будуар',
        text: 'Будуар',
        value: '5'
    },
    {
        id: 6,
        name: 'Аксессуары',
        text: 'Аксессуары',
        value: '6'
    },
];

export const products = [
    {
        id: 0,
        name: 'СТИЛЬНОЕ СВАДЕБНОЕ ПЛАТЬЕ С ЭФФЕКТОМ МЕРЦАНИЯ',
        vendorCode: 'FL 612',
        category: [0],
        price: {
            current: 28500,
            old: 0
        },
        sale: false,
        novelty: true,
        tags: [0, 3, 5, 9],
        photos: [
            {
                name: '',
                photo: 'https://nicolewedding.ru/upload/resize_cache/iblock/fb1/922_1124_2/fb1da644915de6aedb8973512f047238.JPG'
            },
            {
                name: '',
                photo: 'https://nicolewedding.ru/upload/resize_cache/iblock/3a9/922_1124_2/3a976927892846e9faffd158a52e62a0.JPG'
            },
            {
                name: '',
                photo: 'https://nicolewedding.ru/upload/resize_cache/iblock/eb1/922_1124_2/eb134c15563aa1c98eeb575415af36d5.JPG'
            },
        ],
        colors: [0]
    },
    {
        id: 1,
        name: 'АТЛАСНОЕ СВАДЕБНОЕ ПЛАТЬЕ МИДИ',
        vendorCode: '90-203 миди',
        category: [0],
        price: {
            current: 26250,
            old: 0
        },
        sale: false,
        novelty: false,
        tags: [0, 2, 3, 4],
        photos: [
            {
                name: '',
                photo: 'https://nicolewedding.ru/upload/resize_cache/iblock/3a7/922_1124_2/3a70d1c99415028b976921786135dd1d.JPG'
            },
            {
                name: '',
                photo: 'https://nicolewedding.ru/upload/resize_cache/iblock/7cc/922_1124_2/7cc36d2ef70e470b9366a8a71f50e90a.JPG'
            }
        ],
        colors: [0, 2, 3, 5]
    },
    {
        id: 2,
        name: 'ЛАКОНИЧНОЕ СВАДЕБНОЕ ПЛАТЬЕ С ОБЪЕМНЫМИ ПЛЕЧИКАМИ',
        vendorCode: 'U 90-201',
        category: [0],
        price: {
            current: 30000,
            old: 0
        },
        sale: true,
        novelty: false,
        tags: [0, 2, 6],
        photos: [
            {
                name: '',
                photo: 'https://nicolewedding.ru/upload/resize_cache/iblock/89a/922_1124_2/89a56b9a02dae41a43fe8edcb5564d94.JPG'
            },
            {
                name: '',
                photo: 'https://nicolewedding.ru/upload/resize_cache/iblock/a19/922_1124_2/a193e7949b83783b31d7f35078bba3dc.JPG'
            },
            {
                name: '',
                photo: 'https://nicolewedding.ru/upload/resize_cache/iblock/ea5/922_1124_2/ea5499fe8733f3c352acdab2dbf05187.JPG'
            },
            {
                name: '',
                photo: 'https://nicolewedding.ru/upload/resize_cache/iblock/fcd/922_1124_2/fcd3ffc2101287ae987d2840ccf8752d.JPG'
            }
        ],
        colors: [0, 1, 3]
    },
    {
        id: 3,
        name: 'СВАДЕБНОЕ ПЛАТЬЕ МИДИ С КВАДРАТНЫМ ВЫРЕЗОМ',
        vendorCode: 'U 90-200',
        category: [0],
        price: {
            current: 28200,
            old: 0
        },
        sale: false,
        novelty: false,
        tags: [],
        photos: [
            {
                name: '',
                photo: 'https://nicolewedding.ru/upload/resize_cache/iblock/4a6/922_1124_2/4a61ae22fc5cc26645fd3e14a61d828d.JPG'
            },
            {
                name: '',
                photo: 'https://nicolewedding.ru/upload/resize_cache/iblock/238/922_1124_2/23828d465da7e4d14eeba58d4cf493bc.JPG'
            }
        ],
        colors: [0]
    },
    {
        id: 4,
        name: 'СВАДЕБНОЕ ПЛАТЬЕ РЫБКА С ОБЪЕМНЫМИ ПЛЕЧИКАМИ',
        vendorCode: 'NGR 9221',
        category: [],
        price: {
            current: 39000,
            old: 0
        },
        sale: false,
        novelty: false,
        tags: [1, 3],
        photos: [
            {
                name: '',
                photo: 'https://nicolewedding.ru/upload/resize_cache/iblock/021/922_1124_2/02116549b1fd385aaa0d06260e0eb95c.JPG'
            },
            {
                name: '',
                photo: 'https://nicolewedding.ru/upload/resize_cache/iblock/87b/922_1124_2/87b19d2080bc68c38c7423c9783b0b14.jpeg'
            },
            {
                name: '',
                photo: 'https://nicolewedding.ru/upload/resize_cache/iblock/710/922_1124_2/710e228dc0d51822dda271301011c9ba.jpg'
            },
        ],
        colors: [0]
    }
    
];

export const data = {
    name: {
        text: 'NICOLE',
        value: ''
    },
    whatsApp: {
        text: '',
        value: ''
    },
    number:  {
        text: '+7 499 490 47 25',
        value: ''
    },
    address: {
        text: 'м. Шаболовская, Москва, Ленинский проспект, 13',
        value: ''
    },
    instagram: {
        text: '',
        value: ''
    },
    aboutSalonTitle: 'СВАДЕБНЫЙ САЛОН NICOLE В МОСКВЕ',
    aboutSalonText: [
        'Свадебный салон Nicole предлагает своим невестам свадебные платья от лучших брендов Испании, России, Италии и США!',
        'В магазине для Вас работают ведущие стилисты-консультанты, которые подберут для Вас платье Вашей мечты, а так же все необходимые аксессуары! У нас 8 светлых больших примерочных, удаленных друг от друга, чтобы Ваш выбор был еще более комфортным!',
        'Нас легко найти. Наш свадебный салон находится в центре Москвы, в 5 минутах ходьбы от Шаболовская.',
        'Для бронирования примерочной с личным стилистом, в удобное для Вас время, рекомендуем записаться онлайн или по телефону.',
        'Ждём Вас в нашем салоне!'
    ]
};