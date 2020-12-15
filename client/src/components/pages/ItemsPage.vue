<template>
  <div>
    <h1>{{ inviteMessage }}</h1>
    <h2>{{ inviteDateTime }}</h2>
    <h3>{{ location }}</h3>
    <p>Если у вас есть желание и возможность сделать подарок, вы можете выбрать его из списка</p>
    <span>По всем вопросам обращатсья к менеджеру мероприятия - <a target="_blank" href="https://t.me/wgnbl">@wgnbl</a></span>
    <p></p>
    <li v-for="item in items" :key="item.id">
      {{ item.description }}
    </li>
  </div>
</template>

<script>
import ItemService from '../../services/ItemService'
export default {
  name: 'ItemsPage',
  data () {
    return {
      items: null,
      columnDefs: null,
      rowData: null,
      inviteMessage: 'Вы приглашены на день рождения',
      inviteDateTime: '19 Декабря 2020, в 21:00',
      location: 'Санкт-Петербург, Северный проспект д.8 к.1, кв. 129'
    }
  },
  methods: {
    async getItems () {
      const response = await ItemService.getItems()
      this.items = response.data
    }
  },
  beforeMount () {
    this.columnDefs = [
      {
        headerName: '№',
        field: 'id',
        width: '50px',
        cellStyle: { textAlign: 'left' },
        hide: true
      },
      {
        headerName: 'Вид',
        field: 'imageUrl',
        width: '50px',
        autoHeight: true,
        cellRenderer: function (params) {
          var url = params.value
          return '<img src="' + url + '" style="height: 50px">'
        },
        cellStyle: { textAlign: 'center' }
      },
      {
        headerName: 'Описание с ссылкой',
        field: 'description',
        width: '350px',
        cellRenderer: function (params) {
          var description = params.value
          var url = params.data.link
          return '<a href="' + url + '" target="_blank" rel="noopener">' + description + '</a>'
        },
        cellStyle: {'white-space': 'normal', textAlign: 'left'}
      },
      {
        headerName: 'Цена',
        field: 'price',
        width: '50px',
        cellRenderer: (params) => params.value + ' р.',
        cellStyle: { textAlign: 'left' }
      },
      {
        headerName: 'Зарезервировано',
        field: 'isReserved',
        width: '90px',
        cellStyle: { textAlign: 'left' }
      }
    ]
  },
  mounted () {
    this.getItems()

    this.rowData = this.items
  }
}
</script>
