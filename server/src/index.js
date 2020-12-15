const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config/config')
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.listen(process.env.PORT || config.port,
    () => console.log(`Server start on port ${config.port} ...`))

app.get('/items', (req, res) => {
    res.send(
        [{
            "id": 1,
            "imageUrl": "https://xd-design.ru/upload/resize_cache_imm/iblock/f2b/600_480_1/f2b8f17cf0e24e67a262359b95b50752.jpg",
            "description": "Рюкзак XD Design Bobby Hero XL",
            "price": 9990,
            "link": "https://xd-design.ru/p/xd-design-bobby-hero-xl/",
            "isReserved": true
        }, {
            "id": 2,
            "imageUrl": "https://cdn1.ozone.ru/s3/multimedia-a/wc1200/6007601014.jpg",
            "description": "Внешний аккумулятор Xiaomi Redmi Power Bank (PB100LZM), белый, 10000 mAh",
            "price": 719,
            "link": "https://www.ozon.ru/context/detail/id/164922509/",
            "isReserved": false
        }, {
            "id": 3,
            "imageUrl": "https://cdn1.ozone.ru/multimedia/wc1200/1025343064.jpg",
            "description": "CLR via C#. Программирование на платформе Microsoft .NET Framework 4.5 на языке C# | Рихтер Джеффри",
            "price": 1466,
            "link": "https://www.ozon.ru/context/detail/id/147815949/",
            "isReserved": false
        }, {
            "id": 4,
            "imageUrl": "https://cdn1.ozone.ru/multimedia/wc1200/1020973362.jpg",
            "description": "Совершенный код. Мастер-класс | Макконнелл Стив",
            "price": 1092,
            "link": "https://www.ozon.ru/context/detail/id/142768363/",
            "isReserved": false
        }, {
            "id": 5,
            "imageUrl": "https://cdn1.ozone.ru/s3/multimedia-a/wc1200/6019381654.jpg",
            "description": "Эмоциональный интеллект. Почему он может значить больше, чем IQ | Гоулман Дэниел",
            "price": 669,
            "link": "https://www.ozon.ru/context/detail/id/20000606/",
            "isReserved": false
        }, {
            "id": 6,
            "imageUrl": "https://cdn1.ozone.ru/multimedia/wc1200/1037901676.jpg",
            "description": "Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих | Бхаргава Адитья",
            "price": 632,
            "link": "https://www.ozon.ru/context/detail/id/139296295/",
            "isReserved": false
        }, {
            "id": 7,
            "imageUrl": "https://cdn1.ozone.ru/multimedia/wc1200/1026352524.jpg",
            "description": "Триммер для бороды и усов Philips OneBlade QP2520/20 с 3 насадками-гребнями",
            "price": 2472,
            "link": "https://www.ozon.ru/context/detail/id/139163836/",
            "isReserved": false
        }, {
            "id": 8,
            "imageUrl": "https://cdn1.ozone.ru/s3/multimedia-x/wc1200/6024935721.jpg",
            "description": "Препарат для суставов и связок Animal Flex 30порций",
            "price": 2520,
            "link": "https://www.ozon.ru/context/detail/id/197385997/",
            "isReserved": false
        }, {
            "id": 9,
            "imageUrl": "https://cdn1.ozone.ru/s3/multimedia-0/wc1200/6015248052.jpg",
            "description": "HD Webcam Built-in Dual Mics 1080P Smart Web Camera USB Camera for Desktop Laptops PC Game Cam",
            "price": 1490,
            "link": "https://www.ozon.ru/context/detail/id/207687474/",
            "isReserved": true
        }, {
            "id": 10,
            "imageUrl": "https://cdn1.ozone.ru/s3/multimedia-6/wc1200/6018284370.jpg",
            "description": "Кольцевая светодиодная лампа 26 см с Bluetooth пультом, регулируемым штативом 210 см, держателем для телефона для профессиональной съемки",
            "price": 1924,
            "link": "https://www.ozon.ru/context/detail/id/179033595/",
            "isReserved": true
        }, {
            "id": 11,
            "imageUrl": "",
            "description": "Бабосики",
            "price": "as you wish",
            "link": "",
            "isReserved": false
        }]
    )
})

app.get('/', (req, res) => {
    res.send(
        ['Index get method']
    )
})