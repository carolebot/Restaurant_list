// require db config setting
const db = require('../../config/mongoose')
const Restaurant = require('../../models/restaurant')

db.once('open', () => {
  Restaurant.create(
    {
      "name": "Sababa 沙巴巴中東美食",
      "name_en": "Sababa Pita Bar",
      "category": "中東料理",
      "image": "https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5635/01.jpg",
      "location": "and delete ",
      "phone": "02 2363 8009",
      "google_map": "https://goo.gl/maps/BJdmLuVdDbw",
      "rating": 4.1,
      "description": "沙巴巴批塔是台灣第一家純手工批塔專賣店,只選用最新鮮的頂級原料,以及道地的中東家傳配方。"
    },
    {
      "name": "梅子鰻蒲燒專賣店",
      "name_en": "Umeko Japanese Unagi House",
      "category": "日本料理",
      "image": "https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5628/02.jpg",
      "location": "台北市中山區林森北路 107 巷 8 號",
      "phone": " 02 2521 2813",
      "google_map": "https://goo.gl/maps/cUJEmFSRKyH2",
      "rating": 4.3,
      "description": "鰻魚、鰻魚飯、真空鰻魚"
    },
    {
      "name": "ZIGA ZIGA",
      "name_en": "Ziga Zaga",
      "category": "義式餐廳",
      "image": "https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5629/03.jpg",
      "location": "台北市信義區松壽路 2 號",
      "phone": "02 2720 1230",
      "google_map": "https://goo.gl/maps/bnZKC2YjYZp",
      "rating": 4.2,
      "description": "以頂級食材與料理技法完美呈現各類經典義式料理，獅頭造型烤爐現作pizza與開放式廚房現作龍蝦茄汁雞蛋銀絲麵是不可錯過的必嚐推薦！夜間國際級樂團的熱力演出，感受活力四射的現場魅力。"
    },
    {
      "name": "Fika Fika Cafe",
      "name_en": "Fika Fika Cafe",
      "category": "咖啡",
      "image": "https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5633/07.jpg",
      "location": "台北市中山區伊通街 33 號",
      "phone": "02 2507 0633",
      "google_map": "https://goo.gl/maps/Y1iyiSK7EeR2",
      "rating": 4.3,
      "description": "我們在乎每一位顧客、賣出去的每一滴咖啡、每一粒咖啡豆。而今，「Fika Fika Cafe Online Store」更期望把如此美好的體驗，分享給喜歡我們的每一位顧客，希望您無論在世界的哪一個角落，都能與我們一起享受「Fika Fika」的美好時光。"
    },
    {
      "name": "Gusto Pizza",
      "name_en": "Gusto Pizza",
      "category": "義式餐廳",
      "image": "https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5631/05.jpg",
      "location": "北市中正區連雲街 74 號",
      "phone": "02 2358 7001",
      "google_map": "https://goo.gl/maps/rqzbVyrR9Gp",
      "rating": 4.7,
      "description": "我們的披薩師傅從倫敦帶來別於一般口味的經典義大利披薩，而且披薩麵團至少發酵24小時。同時我們也窯烤麵包及甜點，但披薩才是GUSTO最強項。我們製做的每一份餐點，都充滿飽飽的口味及香氣。除此之外，遵循純手工及傳統方式製作是我們的堅持。"
    },
    {
      "name": "WXYZ Bar",
      "name_en": "WXYZ Bar",
      "category": "酒吧",
      "image": "https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5632/06.jpg",
      "location": "台北市中山區雙城街",
      "phone": "02 7743 9999",
      "google_map": "https://goo.gl/maps/rFLNu87ruBM2",
      "rating": 4.3,
      "description": "紅酒吧，現代創意料理，開胃小館。提供純素選擇，提供無麩質選擇，提供素食選擇。"
    },
    {
      "name": "五十嵐",
      "name_en": "50Lan Drink",
      "category": "飲料店",
      "image": "https://cdn.walkerland.com.tw/images/upload/subject/2021/01/dd678d9f08d76c4330bdc6c923026aafd3c58fdf.jpg",
      "location": "台北市士林區文林路191號",
      "phone": "02 2881 5922",
      "google_map": "https://goo.gl/maps/uaUJ7TCGozTgHwkZA",
      "rating": 5.0,
      "description": "台北最棒的50嵐!!"
    },
    {
      "name": "可不可熟成紅茶",
      "name_en": "Kebuke",
      "category": "飲料店",
      "image": "https://im.marieclaire.com.tw/m800c533h100b0/assets/mc/202106/60C03E8D1CA021623211661.jpeg",
      "location": " 台北市大安區和平東路二段307號",
      "phone": "02-2709-8989",
      "google_map": "https://goo.gl/maps/LNnD83XSWdR5n1C86",
      "rating": 4.8,
      "description": "創立於2008年的初夏來自於台中市向上市場旁多年來堅持做對的事情透過一杯好茶傳遞溫暖的人情味。吃完飯後好適合喝一杯可不可解膩啊！"
    })
    .then(() => {
      console.log('done.')
      process.exit()
    })
})

