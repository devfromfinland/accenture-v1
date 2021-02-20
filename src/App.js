import React from 'react'
import PlacesList from './components/PlaceList'

// TODO: add state

function App() {
  return <PlacesList places={places} />
}

const places = [
  {
    id: '653',
    name: {
      fi: 'A. Tillander',
      en: 'A. Tillander',
      sv: 'A. Tillander',
      zh: null,
    },
    source_type: {
      id: 2,
      name: 'Matko',
    },
    info_url: 'http://www.alexandertillander.fi',
    modified_at: '2019-08-21T14:51:58.000Z',
    location: {
      lat: 60.168922424316406,
      lon: 24.94364356994629,
      address: {
        street_address: 'Aleksanterinkatu 17',
        postal_code: '00100',
        locality: 'Helsinki',
      },
    },
    description: {
      intro: null,
      body: 'Jalokiviseppä ja ateljee, myös koruaiheisia näyttelyitä.',
      images: [
        {
          url:
            'https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-10/14657520_1627162420917017_2082522418259513419_n.jpg?h=1555b8b2&itok=cv8nhamq',
          copyright_holder: 'A. Tillander',
          license_type: {
            id: 1,
            name: 'All rights reserved.',
          },
        },
      ],
    },
    tags: [
      {
        id: 'matko1:9',
        name: 'SHOPPING',
      },
      {
        id: 'matko2:72',
        name: 'Jewellery',
      },
    ],
    opening_hours: {
      hours: [
        {
          weekday_id: 1,
          opens: '10:00:00',
          closes: '18:00:00',
          open24h: false,
        },
        {
          weekday_id: 2,
          opens: '10:00:00',
          closes: '18:00:00',
          open24h: false,
        },
        {
          weekday_id: 3,
          opens: '10:00:00',
          closes: '18:00:00',
          open24h: false,
        },
        {
          weekday_id: 4,
          opens: '10:00:00',
          closes: '18:00:00',
          open24h: false,
        },
        {
          weekday_id: 5,
          opens: '10:00:00',
          closes: '18:00:00',
          open24h: false,
        },
        {
          weekday_id: 6,
          opens: '10:00:00',
          closes: '17:00:00',
          open24h: false,
        },
        {
          weekday_id: 7,
          opens: null,
          closes: null,
          open24h: false,
        },
      ],
      openinghours_exception: '',
    },
  },
  {
    id: '3027',
    name: {
      fi: 'A.H. Records',
      en: 'A.H. Records',
      sv: 'A.H. Records',
      zh: null,
    },
    source_type: {
      id: 2,
      name: 'Matko',
    },
    info_url: 'http://ahrecords.fi',
    modified_at: '2019-06-26T09:56:22.000Z',
    location: {
      lat: 60.161014556884766,
      lon: 24.94142723083496,
      address: {
        street_address: 'Fredrikinkatu 12',
        postal_code: '00120',
        locality: 'Helsinki',
      },
    },
    description: {
      intro: null,
      body: 'Pieni käytettyihin vinyyleihin erikoistunut kivijalkakauppa.',
      images: [
        {
          url:
            'https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-10/12645064_458627557665379_3453464369390787997_n.jpg?h=dec22bcf&itok=_uZQok6l',
          copyright_holder: 'A.H. Records',
          license_type: {
            id: 1,
            name: 'All rights reserved.',
          },
        },
      ],
    },
    tags: [
      {
        id: 'matko1:9',
        name: 'SHOPPING',
      },
      {
        id: 'matko2:104',
        name: 'RecordStore',
      },
    ],
    opening_hours: {
      hours: [
        {
          weekday_id: 1,
          opens: null,
          closes: null,
          open24h: false,
        },
        {
          weekday_id: 2,
          opens: null,
          closes: null,
          open24h: false,
        },
        {
          weekday_id: 3,
          opens: '12:00:00',
          closes: '18:00:00',
          open24h: false,
        },
        {
          weekday_id: 4,
          opens: '12:00:00',
          closes: '18:00:00',
          open24h: false,
        },
        {
          weekday_id: 5,
          opens: '12:00:00',
          closes: '18:00:00',
          open24h: false,
        },
        {
          weekday_id: 6,
          opens: '11:00:00',
          closes: '15:00:00',
          open24h: false,
        },
        {
          weekday_id: 7,
          opens: null,
          closes: null,
          open24h: false,
        },
      ],
      openinghours_exception: '',
    },
  },
  {
    id: '2257',
    name: {
      fi: 'Aallonkoti Apartment Hotel',
      en: 'Aallonkoti Apartment Hotel',
      sv: 'Aallonkoti Apartment Hotel',
      zh: null,
    },
    source_type: {
      id: 2,
      name: 'Matko',
    },
    info_url: 'http://www.aallonkoti.fi',
    modified_at: '2020-03-26T10:51:39.000Z',
    location: {
      lat: 60.176273345947266,
      lon: 24.9382381439209,
      address: {
        street_address: 'Alvar Aallon katu 3 B',
        postal_code: '00100',
        locality: 'Helsinki',
      },
    },
    description: {
      intro: null,
      body:
        'Kauniisti viimeistelty huoneistohotelli Aallonkoti tarjoaa ensiluokkaisia ja kodinomaisia majoitusratkaisuja ainutlaatuisella paikalla Helsingin keskustassa, upeissa näkymissä. Kaikki 18 asuntoa Aallonkodin uudessa rakennuksessa tarjoavat vierailijalle täydellisen tukikohdan niin työtehtävien suorittamiseen kuin vapaa-ajan viettoonkin. Huoneistojen koot vaihtelevat kompakteista yksiöistä kahden makuuhuoneen kattohuoneistoihin. Huoneistot ovat korkeatasoisesti kalustettuja ja kodin tarpeiden mukaan varusteltuja. Jokaisessa huoneistoissa on oma keittiö, puistomaisemat suurelta kalustetulta terasseilta, langaton internetyhteys ja laadukkaat kodinkoneet.',
      images: [],
    },
    tags: [
      {
        id: 'matko1:1',
        name: 'ACCOMMODATION',
      },
      {
        id: 'matko1:2',
        name: 'MEETING PLACES',
      },
      {
        id: 'matko2:12',
        name: 'Apartment',
      },
      {
        id: 'matko2:a-:AliPay',
        name: 'AliPay',
      },
    ],
    opening_hours: {
      hours: [
        {
          weekday_id: 1,
          opens: null,
          closes: null,
          open24h: false,
        },
        {
          weekday_id: 2,
          opens: null,
          closes: null,
          open24h: false,
        },
        {
          weekday_id: 3,
          opens: null,
          closes: null,
          open24h: false,
        },
        {
          weekday_id: 4,
          opens: null,
          closes: null,
          open24h: false,
        },
        {
          weekday_id: 5,
          opens: null,
          closes: null,
          open24h: false,
        },
        {
          weekday_id: 6,
          opens: null,
          closes: null,
          open24h: false,
        },
        {
          weekday_id: 7,
          opens: null,
          closes: null,
          open24h: false,
        },
      ],
      openinghours_exception: '',
    },
  },
  {
    id: '3424',
    name: {
      fi: 'Aalto-yliopisto, Kauppakorkeakoulu',
      en: 'Aalto University School of Business',
      sv: 'Aalto-universitetet, Handelshögskolan',
      zh: null,
    },
    source_type: {
      id: 2,
      name: 'Matko',
    },
    info_url: 'https://www.aalto.fi/fi/kauppakorkeakoulu',
    modified_at: '2019-03-05T13:59:21.000Z',
    location: {
      lat: 60.185977935791016,
      lon: 24.822364807128906,
      address: {
        street_address: 'Ekonominaukio 1',
        postal_code: '02150',
        locality: 'Espoo',
      },
    },
    description: {
      intro: null,
      body:
        'Aalto-yliopiston Kauppakorkeakoulu kouluttaa yhteiskunnallisia vaikuttajia ja tekee kansainvälisesti korkeatasoista tutkimusta yli sadan vuoden kokemuksella. Aalto-yliopiston kauppakorkeakoulu on Suomen johtava kauppakorkeakoulu ja yksi Euroopan kärkikauppakorkeakouluista.',
      images: [],
    },
    tags: [
      {
        id: 'matko1:226',
        name: 'WORK & STUDY',
      },
      {
        id: 'matko2:282',
        name: 'Academy',
      },
    ],
    opening_hours: {
      hours: [
        {
          weekday_id: 1,
          opens: null,
          closes: null,
          open24h: false,
        },
        {
          weekday_id: 2,
          opens: null,
          closes: null,
          open24h: false,
        },
        {
          weekday_id: 3,
          opens: null,
          closes: null,
          open24h: false,
        },
        {
          weekday_id: 4,
          opens: null,
          closes: null,
          open24h: false,
        },
        {
          weekday_id: 5,
          opens: null,
          closes: null,
          open24h: false,
        },
        {
          weekday_id: 6,
          opens: null,
          closes: null,
          open24h: false,
        },
        {
          weekday_id: 7,
          opens: null,
          closes: null,
          open24h: false,
        },
      ],
      openinghours_exception: '',
    },
  },
  {
    id: '3281',
    name: {
      fi: 'Aalto-yliopisto, Taiteiden ja suunnittelun korkeakoulu',
      en: 'Aalto University, School of Arts, Design and Architecture',
      sv: 'Aalto-universitetet, Högskolan för konst, design och arkitektur',
      zh: null,
    },
    source_type: {
      id: 2,
      name: 'Matko',
    },
    info_url: 'https://www.aalto.fi/fi/taiteiden-ja-suunnittelun-korkeakoulu',
    modified_at: '2019-03-05T14:07:54.000Z',
    location: {
      lat: 60.18522262573242,
      lon: 24.825517654418945,
      address: {
        street_address: 'Otaniementie 14',
        postal_code: '02150',
        locality: 'Espoo',
      },
    },
    description: {
      intro: null,
      body:
        'Taiteiden ja suunnittelun korkeakoulu on Pohjoismaiden johtava korkeakoulu muotoilun, muodin, pelien, median, arkkitehtuurin, elokuvan, taidekasvatuksen ja taiteen alalla. Taiteiden ja suunnittelun korkeakoulu on osa Aalto-yliopistoa, joka on teknisten tieteiden, kauppatieteiden ja taiteiden alan monialainen tiede- ja taideyhteisö.',
      images: [],
    },
    tags: [
      {
        id: 'matko1:226',
        name: 'WORK & STUDY',
      },
      {
        id: 'matko2:282',
        name: 'Academy',
      },
    ],
    opening_hours: {
      hours: [
        {
          weekday_id: 1,
          opens: null,
          closes: null,
          open24h: false,
        },
        {
          weekday_id: 2,
          opens: null,
          closes: null,
          open24h: false,
        },
        {
          weekday_id: 3,
          opens: null,
          closes: null,
          open24h: false,
        },
        {
          weekday_id: 4,
          opens: null,
          closes: null,
          open24h: false,
        },
        {
          weekday_id: 5,
          opens: null,
          closes: null,
          open24h: false,
        },
        {
          weekday_id: 6,
          opens: null,
          closes: null,
          open24h: false,
        },
        {
          weekday_id: 7,
          opens: null,
          closes: null,
          open24h: false,
        },
      ],
      openinghours_exception: '',
    },
  },
  {
    id: '1227',
    name: {
      fi: 'Aarikka',
      en: 'Aarikka-shop',
      sv: 'Aarikka-shop',
      zh: '阿里卡商店',
    },
    source_type: {
      id: 2,
      name: 'Matko',
    },
    info_url: 'https://www.aarikka.fi/',
    modified_at: '2019-08-21T15:00:03.000Z',
    location: {
      lat: 60.167911529541016,
      lon: 24.94797706604004,
      address: {
        street_address: 'Pohjoisesplanadi 27',
        postal_code: '00100',
        locality: 'Helsinki',
      },
    },
    description: {
      intro: null,
      body:
        'Aarikka Oy on vuonna 1954 perustettu suomalainen perheyritys, jonka muotoilu tunnetaan skandinaavisen selkeistä linjoista, pyöreästä muodosta ja puusta. Aarikka valmistaa koruja ja sisustustuotteita pääsääntöisesti puusta sekä muista luonnonmateriaaleista. Jokainen niistä on oma ainutlaatuinen yksilönsä, joka on valmistettu käsityönä Suomessa. ',
      images: [
        {
          url:
            'https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-07/Candle_holders_.jpg?h=bb495836&itok=di4VAgFy',
          copyright_holder: 'Aarikka',
          license_type: {
            id: 1,
            name: 'All rights reserved.',
          },
        },
        {
          url:
            'https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-07/Helmi_tableware_L.jpg?h=0446e769&itok=RY2HkM3d',
          copyright_holder: 'Aarikka',
          license_type: {
            id: 1,
            name: 'All rights reserved.',
          },
        },
        {
          url:
            'https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-07/Pakkasen_poytakoristeet_table_decorations.jpg?h=fd049a31&itok=0vlA6xYU',
          copyright_holder: 'Aarikka',
          license_type: {
            id: 1,
            name: 'All rights reserved.',
          },
        },
      ],
    },
    tags: [
      {
        id: 'matko2:42',
        name: 'Finnish',
      },
      {
        id: 'matko2:a-:Curated',
        name: 'Curated',
      },
      {
        id: 'matko2:67',
        name: 'InteriorDesign',
      },
      {
        id: 'matko2:a-:AliPay',
        name: 'AliPay',
      },
      {
        id: 'matko1:9',
        name: 'SHOPPING',
      },
      {
        id: 'matko2:23',
        name: 'Design',
      },
      {
        id: 'matko2:71',
        name: 'Souvenirs',
      },
      {
        id: 'matko2:72',
        name: 'Jewellery',
      },
    ],
    opening_hours: {
      hours: [
        {
          weekday_id: 1,
          opens: '10:00:00',
          closes: '19:00:00',
          open24h: false,
        },
        {
          weekday_id: 2,
          opens: '10:00:00',
          closes: '19:00:00',
          open24h: false,
        },
        {
          weekday_id: 3,
          opens: '10:00:00',
          closes: '19:00:00',
          open24h: false,
        },
        {
          weekday_id: 4,
          opens: '10:00:00',
          closes: '19:00:00',
          open24h: false,
        },
        {
          weekday_id: 5,
          opens: '10:00:00',
          closes: '19:00:00',
          open24h: false,
        },
        {
          weekday_id: 6,
          opens: '10:00:00',
          closes: '17:00:00',
          open24h: false,
        },
        {
          weekday_id: 7,
          opens: '12:00:00',
          closes: '17:00:00',
          open24h: false,
        },
      ],
      openinghours_exception: '',
    },
  },
  {
    id: '4029',
    name: {
      fi: 'Aarrepuisto',
      en: 'Aarrepuisto - Treasure Park',
      sv: 'Klenodparken',
      zh: null,
    },
    source_type: {
      id: 2,
      name: 'Matko',
    },
    info_url: 'https://vihreatsylit.fi/aarrepuisto/',
    modified_at: '2021-02-09T09:54:52.000Z',
    location: {
      lat: 60.23859786987305,
      lon: 25.10468292236328,
      address: {
        street_address: 'Aarteenetsijäntie',
        postal_code: '00940',
        locality: 'Helsinki',
      },
    },
    description: {
      intro: null,
      body:
        'Aarrepuisto sijaitsee Vesalassa. Vuonna 1993 kunnostettu puisto sijaitsee Aarteenetsijäntien ja Aarteenetsijänkujan välissä ja pitkiltä reunoiltaan se rajoittuu 1980-luvun kerrostaloihin. Laaksomaisen puiston pohjukassa mutkitteleva Mellunkylänpuro on puiston erityispiirre. Purossa on myös viehättävä pieni koski, joka solinallaan levittää puistoon miellyttävää veden ääntä. Puistoon on istutettu 113 eri kasvilajia,ja yhteensä tuhannet kasvit, kukkasipulit mukaan lukien, ilahduttavat puistossa kulkijoita keväästä syksyyn väriloistollaan.',
      images: [
        {
          url:
            'https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2020-11/myhelsinki_aarteenetsijanpuisto_0406_20200915.jpg?h=c3635fa2&itok=Rx8aVHKv',
          copyright_holder: 'Helsinki Marketing / Sasa Tkalcan',
          license_type: {
            id: 2,
            name: 'MyHelsinki license type A',
          },
        },
        {
          url:
            'https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2020-11/myhelsinki_aarteenetsijanpuisto_0440_20200915.jpg?h=515b7b60&itok=NCRTgqJ8',
          copyright_holder: 'Helsinki Marketing / Sasa Tkalcan',
          license_type: {
            id: 2,
            name: 'MyHelsinki license type A',
          },
        },
      ],
    },
    tags: [
      {
        id: 'matko1:4',
        name: 'SIGHTS & ATTRACTIONS',
      },
      {
        id: 'matko2:20',
        name: 'Park',
      },
    ],
    opening_hours: {
      hours: [
        {
          weekday_id: 1,
          opens: null,
          closes: null,
          open24h: false,
        },
        {
          weekday_id: 2,
          opens: null,
          closes: null,
          open24h: false,
        },
        {
          weekday_id: 3,
          opens: null,
          closes: null,
          open24h: false,
        },
        {
          weekday_id: 4,
          opens: null,
          closes: null,
          open24h: false,
        },
        {
          weekday_id: 5,
          opens: null,
          closes: null,
          open24h: false,
        },
        {
          weekday_id: 6,
          opens: null,
          closes: null,
          open24h: false,
        },
        {
          weekday_id: 7,
          opens: null,
          closes: null,
          open24h: false,
        },
      ],
      openinghours_exception: '',
    },
  },
  {
    id: '3048',
    name: {
      fi: 'Addis Ethiopian Kitchen',
      en: 'Addis Ethiopian Kitchen',
      sv: 'Addis Ethiopian Kitchen',
      zh: null,
    },
    source_type: {
      id: 2,
      name: 'Matko',
    },
    info_url: 'https://www.addiskitchen.fi/',
    modified_at: '2020-08-20T10:18:05.000Z',
    location: {
      lat: 60.1943244934082,
      lon: 24.95623016357422,
      address: {
        street_address: 'Sturenkatu 28',
        postal_code: '00510',
        locality: 'Helsinki',
      },
    },
    description: {
      intro: null,
      body:
        'Ravintola Addis tarjoilee etiopialaisia makuja Vallilassa. Tarjolla niin liha- kuin vegaaniannoksia.',
      images: [
        {
          url:
            'https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-11/18582201_1304054686382343_5281764182844447292_n.jpg?h=af5d0fd7&itok=8uXrL4iG',
          copyright_holder: 'Addis Ethiopian Kitchen',
          license_type: {
            id: 1,
            name: 'All rights reserved.',
          },
        },
      ],
    },
    tags: [
      {
        id: 'matko1:10',
        name: 'RESTAURANTS & CAFES',
      },
      {
        id: 'matko2:117',
        name: 'Vegetarian',
      },
      {
        id: 'matko2:229',
        name: 'Restaurant',
      },
      {
        id: 'matko2:234',
        name: 'Vegan',
      },
    ],
    opening_hours: {
      hours: [
        {
          weekday_id: 1,
          opens: '11:00:00',
          closes: '20:30:00',
          open24h: false,
        },
        {
          weekday_id: 2,
          opens: '11:00:00',
          closes: '20:30:00',
          open24h: false,
        },
        {
          weekday_id: 3,
          opens: '11:00:00',
          closes: '20:30:00',
          open24h: false,
        },
        {
          weekday_id: 4,
          opens: '11:00:00',
          closes: '20:30:00',
          open24h: false,
        },
        {
          weekday_id: 5,
          opens: '11:00:00',
          closes: '20:30:00',
          open24h: false,
        },
        {
          weekday_id: 6,
          opens: '12:00:00',
          closes: '20:30:00',
          open24h: false,
        },
        {
          weekday_id: 7,
          opens: '12:00:00',
          closes: '20:30:00',
          open24h: false,
        },
      ],
      openinghours_exception: '',
    },
  },
  {
    id: '4030',
    name: {
      fi: 'Adlerfelt',
      en: 'Adlerfelt',
      sv: null,
      zh: null,
    },
    source_type: {
      id: 2,
      name: 'Matko',
    },
    info_url: 'https://adlerfelt.fi/',
    modified_at: '2020-12-07T11:22:42.000Z',
    location: {
      lat: 60.144596099853516,
      lon: 24.98642921447754,
      address: {
        street_address: 'Suomenlinna B 1',
        postal_code: '00190',
        locality: 'Helsinki',
      },
    },
    description: {
      intro: null,
      body:
        'Ihanan iloinen ja hyväntuulinen Adlerfelt sijaitsee upeassa 250 vuotta vanhassa rakennuksessa maailman kauneimmassa maailmanperintökohteessa, Suomenlinnassa. Adlerfeltissa voi nautiskella lasillisen tai herkutella pitkään. Tärkeintä on se fiilis, jolloin kaikki tuntuu olevan hyvin ja vaan hymyilyttää. Juuri sellaisten fiilisten kautta jää mieleen niitä hetkiä, joihin haluaa palata aina uudestaan ja uudestaan. Adlerfelt on happy place, jonne kaikki ovat sydämellisesti tervetulleita ikään, sukupuoleen tai alkuperään katsomatta. Adlerfeltin ruokaideologiaa ohjaava periaate on raaka-aineiden vastuulliset valinnat. Koko maailman kulinaarinen skene on pelikenttänä ja herkkuja valmistetaan kauteen, tunnelmaan ja hetkeen sopivina ruoan alkuperä kuitenkin aina tuntien. Hauskinta on se, että joka visiitillä voi olla jotain erilaista ja uutta maukasta syötävää ja näin ollen päivän annokset selviävätkin vasta paikan päällä Adlerfeltissa. Kun toimintaa ei sidota tiettyyn ruokalistaan, minimoidaan ruokahävikki. Virkistävien erilaisen juomien ansiosta ruokailusta saadaan vieläkin kauniimpi ja hauskempi hetki. Se fiilis, kun ruoka ja juoma täydentävät upeasti toinen toisiaan, on jättänyt monille tietystä paikasta ja ajasta ihanan muistijäljen. Juuri niitä iloisia happy place-hetkiä! ',
      images: [
        {
          url:
            'https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2020-06/adlerfelt_traverssi_adlerfelt_c_adlerfelt_tanja_aromaki_location_only.jpg?h=e2e45255&itok=YSrj11kO',
          copyright_holder: 'Adlerfelt / Tanja Aromäki',
          license_type: {
            id: 2,
            name: 'MyHelsinki license type A',
          },
        },
      ],
    },
    tags: [
      {
        id: 'matko1:10',
        name: 'RESTAURANTS & CAFES',
      },
      {
        id: 'matko2:191',
        name: 'IslandRestaurant',
      },
      {
        id: 'matko2:229',
        name: 'Restaurant',
      },
    ],
    opening_hours: {
      hours: [
        {
          weekday_id: 1,
          opens: '10:30:00',
          closes: '16:00:00',
          open24h: false,
        },
        {
          weekday_id: 2,
          opens: '10:30:00',
          closes: '16:00:00',
          open24h: false,
        },
        {
          weekday_id: 3,
          opens: '10:30:00',
          closes: '16:00:00',
          open24h: false,
        },
        {
          weekday_id: 4,
          opens: '10:30:00',
          closes: '16:00:00',
          open24h: false,
        },
        {
          weekday_id: 5,
          opens: '10:30:00',
          closes: '18:00:00',
          open24h: false,
        },
        {
          weekday_id: 6,
          opens: '12:00:00',
          closes: '18:00:00',
          open24h: false,
        },
        {
          weekday_id: 7,
          opens: '12:00:00',
          closes: '18:00:00',
          open24h: false,
        },
      ],
      openinghours_exception:
        'Suljettu 23.-25.12.2020 Ajalla 26.12.2020 - 6.1.2021 avoinna joka päivä klo 12-18. ',
    },
  },
  {
    id: '1098',
    name: {
      fi: 'AEL Hotelli',
      en: 'AEL Hotel',
      sv: 'AEL Hotelli',
      zh: null,
    },
    source_type: {
      id: 2,
      name: 'Matko',
    },
    info_url: 'https://www.taitotalo.fi/ael-hotelli',
    modified_at: '2020-03-26T12:01:50.000Z',
    location: {
      lat: 60.249324798583984,
      lon: 24.854223251342773,
      address: {
        street_address: 'Jälsitie 5',
        postal_code: '00410',
        locality: 'Helsinki',
      },
    },
    description: {
      intro: null,
      body:
        'AEL-Hotellissa majoittuu rauhallisessa ympäristössä. AEL-Hotelli sijaitsee Taitotalon koulutustilojen välittömässä läheisyydessä Malminkartanossa, noin 10 kilometrin päässä Helsingin keskustasta. AEL Hotellissa on yhteensä 135 vuodepaikkaa. Yhden ja kahden hengen huoneiden varustukseen kuuluu suihku, hiustenkuivaaja, tv ja minijääkaappi. Soluhuoneisto on edullisempi majoitusvaihtoehto ryhmälle. AEL Hotellin huoneet ovat allergiaystävällisiä.',
      images: [],
    },
    tags: [
      {
        id: 'matko1:1',
        name: 'ACCOMMODATION',
      },
      {
        id: 'matko2:241',
        name: 'Hotel',
      },
    ],
    opening_hours: {
      hours: [
        {
          weekday_id: 1,
          opens: null,
          closes: null,
          open24h: false,
        },
        {
          weekday_id: 2,
          opens: null,
          closes: null,
          open24h: false,
        },
        {
          weekday_id: 3,
          opens: null,
          closes: null,
          open24h: false,
        },
        {
          weekday_id: 4,
          opens: null,
          closes: null,
          open24h: false,
        },
        {
          weekday_id: 5,
          opens: null,
          closes: null,
          open24h: false,
        },
        {
          weekday_id: 6,
          opens: null,
          closes: null,
          open24h: false,
        },
        {
          weekday_id: 7,
          opens: null,
          closes: null,
          open24h: false,
        },
      ],
      openinghours_exception: '',
    },
  },
  {
    id: '1096',
    name: {
      fi: 'Agroksenmäen holvikellari',
      en: 'Agros Vault',
      sv: 'Agrosbackens Källarvalv',
      zh: null,
    },
    source_type: {
      id: 2,
      name: 'Matko',
    },
    info_url: 'http://intercom.fi/juhlatila/',
    modified_at: '2020-04-20T06:35:01.000Z',
    location: {
      lat: 60.19257354736328,
      lon: 24.97538948059082,
      address: {
        street_address: 'Vanha talvitie 14',
        postal_code: '00580',
        locality: 'Helsinki',
      },
    },
    description: {
      intro: null,
      body:
        'Agroksenmäen holvikellari on 150 vuotta vanha rakennus, joka on aikoinaan toiminut oluttehtaan varastona ja tynnyrintekijän verstaana. Tämä lajissaan ainutlaatuinen, viisi metriä korkea luonnongraniitista holvattu halli on puoliksi maan alla. Holvikellari luo tunnelmalliset puitteet erilaisille yritys-, teema- ja perhejuhlille. Tila soveltuu hyvin myös näyttely- ja minimessukäyttöön. Holvikellarilla on tammikuussa 2010 otettu käyttöön noin 80m2 lisätilaa, joka mahdollistaa monenlaisten koulutus-, kokous- ja seminaaritilaisuuksien järjestämisen.',
      images: null,
    },
    tags: [
      {
        id: 'matko1:2',
        name: 'MEETING PLACES',
      },
      {
        id: 'matko1:3',
        name: 'BANQUET VENUES',
      },
      {
        id: 'matko2:15',
        name: 'Banquet',
      },
      {
        id: 'matko2:111',
        name: 'FreeCatering',
      },
    ],
    opening_hours: {
      hours: [
        {
          weekday_id: 1,
          opens: null,
          closes: null,
          open24h: false,
        },
        {
          weekday_id: 2,
          opens: null,
          closes: null,
          open24h: false,
        },
        {
          weekday_id: 3,
          opens: null,
          closes: null,
          open24h: false,
        },
        {
          weekday_id: 4,
          opens: null,
          closes: null,
          open24h: false,
        },
        {
          weekday_id: 5,
          opens: null,
          closes: null,
          open24h: false,
        },
        {
          weekday_id: 6,
          opens: null,
          closes: null,
          open24h: false,
        },
        {
          weekday_id: 7,
          opens: null,
          closes: null,
          open24h: false,
        },
      ],
      openinghours_exception: '',
    },
  },
]

export default App
