<template>
   <v-sheet
      :max-width="1200"
      class="mx-auto transition-swing"
      rounded
      shaped
      elevation="12"
      height="auto">
      <v-container>
         <v-divider></v-divider>
         <v-row class="text-center">
            <v-sheet
               :max-width="1200"
               class="mx-auto transition-swing"
               rounded
               shaped
               height="auto"
               width="700">
               <br>
               <v-img
                  :src="require('../assets/bday.png')"
                  class="my-3"
                  contain
                  height="200"
                  />
               <br>
               <p class="subheading font-weight-regular">
                  {{inviteMessage}}
               </p>
               <p class="subheading font-weight-regular">{{inviteDateTime}}</p>
               <p><a href="https://go.2gis.com/6y0aq" target="_blank">{{inviteLocation}}</a></p>
               <p>По всем вопросам обращаться к Тимуру (Telegram - <a href="https://t.me/wgnbl" target="_blank">@wgnbl</a>)</p>
               <p>Если у вас есть желание и возможность подарить подарок, вы можете выбрать его из списка ниже.</p>
            </v-sheet>
         </v-row>

         <br>

         <ul v-for="item in items" :key="item.id">
            <v-card
               class="mx-auto"
               max-width="700"
               outlined
               >
               <v-list-item three-line>
                  <v-list-item-content>
                     <v-list-item-title class="headline mb-1">
                        {{item.description}}
                     </v-list-item-title>
                     <v-list-item-subtitle>{{item.description}}</v-list-item-subtitle>
                     <v-list-item-subtitle>{{item.price}} р.</v-list-item-subtitle>
                     <v-list-item-subtitle><a target="_blank" :href=item.link>Ссылка</a></v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-avatar
                     tile
                     size="120"
                     >
                     <v-img
                        :src="item.imageUrl"
                        class="my-3"
                        contain
                        @click=openUrl(item.imageUrl)
                        />
                  </v-list-item-avatar>
               </v-list-item>
               <v-card-actions>
                   <div class="text-center">
    <v-dialog
    width="500"
    >
    <template v-slot:activator="{ on, attrs }">
        <v-btn
            :color=getButtonColor(item.isReserved)
            dark
            v-bind="attrs"
            v-on="on"
            >
            {{ item.isReserved ? 'Занято' : 'Зарезервировать' }}
        </v-btn>
    </template>
    <v-card>
        <v-card-title class="headline">
            Информация о резервировании
        </v-card-title>
        <v-card-subtitle>
          <br>
          {{item.description}}
        </v-card-subtitle>
        <v-card-text>
            Если вы хотите Зарезервировать подарок, напишите менеджеру мероприятию (Telegram - <a href="https://t.me/wgnbl" target="_blank">@wgnbl</a>)
        </v-card-text>
    </v-card>
    </v-dialog>
</div>
               </v-card-actions>
            </v-card>
            <br>
         </ul> 
      </v-container>
   </v-sheet>
</template>

<script>

  export default {
    name: 'Bday',
    data: () => ({
      inviteMessage: 'Вы приглашены на день рождения',
      inviteDateTime: '19 Декабря 2020, в 21:00',
      inviteLocation: 'Санкт-Петербург, Северный проспект д.8 к.1, подъезд 4, кв. 129',
      items: null
    }),
    methods: {
      getButtonColor(isReserved) {
        return isReserved === true ? "secondary" : "primary"
      },
      openUrl(url) {
        window.open(url, '_blank');
      }
    },
    beforeMount() {
      this.items = [{
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
            "imageUrl": "https://odollarah.ru//wp-content/uploads/2014/05/dollar100.jpg",
            "description": "Бабосики",
            "price": "as you wish",
            "link": "",
            "isReserved": false
        }]
    }
  }
</script>
