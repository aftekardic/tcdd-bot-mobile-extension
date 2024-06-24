import {Text} from '@rneui/base';
import React, {FC, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import NextPageButton from '../components/buttons/next-page-button';

interface FromToScreenProps {
  navigation: {
    navigate: (screen: string, props: Object) => void;
  };
}
const FromToScreen: FC<FromToScreenProps> = ({navigation}) => {
  const handleButtonPress = (screen: string) => {
    navigation.navigate(screen, {fromCity, toCity});
  };
  const [fromCity, setFromCity] = useState<string | null>(null);
  const [toCity, setToCity] = useState<string | null>(null);

  // fromCity seçildiğinde, toCity seçim listesinden filtrelenmiş hali
  const toCityOptions = cities.filter(city => city !== fromCity);

  // toCity seçildiğinde, fromCity seçim listesinden filtrelenmiş hali
  const fromCityOptions = cities.filter(city => city !== toCity);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Select Departure City</Text>
      <RNPickerSelect
        placeholder={{label: 'Select a city', value: null}}
        items={fromCityOptions.map(city => ({label: city, value: city}))}
        onValueChange={value => setFromCity(value)}
        style={pickerSelectStyles}
        value={fromCity}
      />

      <Text style={styles.headerText}>Select Destination City</Text>
      <RNPickerSelect
        placeholder={{label: 'Select a city', value: null}}
        items={toCityOptions.map(city => ({label: city, value: city}))}
        onValueChange={value => setToCity(value)}
        style={pickerSelectStyles}
        value={toCity}
      />
      <Text style={{textAlign: 'center', padding: 50}}>
        Determine where you will travel from where to where in this area.
      </Text>
      <NextPageButton
        disabled={fromCity === null || toCity === null}
        onPress={() => {
          handleButtonPress('DateScreen');
        }}
      />
    </View>
  );
};

export default FromToScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    marginBottom: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
  },
});

const cities = [
  'Ankara Gar',
  'Eskişehir',
  'İstanbul(Bakırköy)',
  'İstanbul(Bostancı)',
  'İstanbul(Halkalı)',
  'İstanbul(Pendik)',
  'İstanbul(Söğütlüçeşme)',
  'Adana',
  'Adana (Kiremithane)',
  'Adapazarı',
  'Adnanmenderes Havaalanı',
  'Afyon A.Çetinkaya',
  'Ahmetler',
  'Ahmetli',
  'Akgedik',
  'Akhisar',
  'Aksakal',
  'Akçadağ',
  'Akçamağara',
  'Akşehir',
  'Alayunt',
  'Alayunt Müselles',
  'Alaşehir',
  'Alifuatpaşa',
  'Aliköy',
  'Alp',
  'Alpu',
  'Alpullu',
  'Alöve',
  'Amasya',
  'Araplı',
  'Argıthan',
  'Arifiye',
  'Artova',
  'Arıkören',
  'Asmakaya',
  'Atça',
  'Avşar',
  'Aydın',
  'Ayran',
  'Ayrancı',
  'Ayvacık',
  'Aşkale',
  'Bahçe',
  'Bahçeli (Km.755+290 S)',
  'Bahçeşehir',
  'Bahçıvanova',
  'Bakır',
  'Balıkesir',
  'Balıkesir (Gökköy)',
  'Balıköy',
  'Balışıh',
  'Banaz',
  'Bandırma Şehir',
  'Baraklı',
  'Baskil',
  'Batman',
  'Battalgazi',
  'Bağıştaş',
  'Bedirli',
  'Belemedik',
  'Bereket',
  'Beyhan',
  'Beylikköprü',
  'Beylikova',
  'Beyoğlu',
  'Beşiri',
  'Bilecik',
  'Bilecik YHT',
  'Bismil',
  'Biçer',
  'Bor',
  'Bostankaya',
  'Bozkanat',
  'Bozkurt',
  'Bozüyük',
  'Bozüyük YHT',
  'Boğazköprü',
  'Boğazköprü Müselles',
  'Boğazköy',
  'Buharkent',
  'Burdur',
  'Böğecik',
  'Büyükderbent YHT',
  'Büyükçobanlar',
  'Caferli',
  'Ceyhan',
  'Cürek',
  'Dazkırı',
  'Demirdağ',
  'Demiriz',
  'Demirkapı',
  'Demirli',
  'Demiryurt',
  'Demirözü',
  'Denizli',
  'Derince YHT',
  'Değirmenözü',
  'Değirmisaz',
  'Diliskelesi YHT',
  'Dinar',
  'Divriği',
  'Diyarbakır',
  'Doğançay',
  'Doğanşehir',
  'Dumlupınar',
  'Durak',
  'Dursunbey',
  'Döğer',
  'ERYAMAN YHT',
  'Edirne',
  'Ekerek',
  'Ekinova',
  'Elazığ',
  'Elmadağ',
  'Emiralem',
  'Emirler',
  'Erbaş',
  'Ereğli',
  'Ergani',
  'Eriç',
  'Erzincan',
  'Erzurum',
  'Evciler',
  'Eşme',
  'Fevzipaşa',
  'Fırat',
  'Gazellidere',
  'Gaziantep',
  'Gaziemir',
  'Gazlıgöl',
  'Gebze',
  'Genç',
  'Germencik',
  'Germiyan',
  'Gezin',
  'Goncalı',
  'Goncalı Müselles',
  'Gökçedağ',
  'Gökçekısık',
  'Gölbaşı',
  'Gölcük',
  'Gömeç',
  'Göçentaşı',
  'Güllübağ',
  'Gümüş',
  'Gümüşgün',
  'Gündoğan',
  'Güneyköy',
  'Güneş',
  'Güzelbeyli',
  'Güzelyurt',
  'Hacıbayram',
  'Hacıkırı',
  'Hacırahmanlı',
  'Hanlı',
  'Hasankale',
  'Havza',
  'Hekimhan',
  'Hereke YHT',
  'Himmetdede',
  'Horasan',
  'Horozköy',
  'Horozluhan',
  'Horsunlu',
  'Huzurkent',
  'Hüyük',
  'Ildızım',
  'Ilgın',
  'Ilıca',
  'Irmak',
  'Isparta',
  'Ispartakule',
  'Kabakça',
  'Kadılı',
  'Kadınhan',
  'Kaklık',
  'Kalecik',
  'Kalkancık',
  'Kalın',
  'Kandilli',
  'Kangal',
  'Kanlıca',
  'Kapaklı',
  'Kapıdere İstasyonu',
  'Kapıkule',
  'Karaali',
  'Karaali',
  'Karaağaçlı',
  'Karabük',
  'Karaisalıbucağı',
  'Karakuyu',
  'Karaköy',
  'Karalar',
  'Karaman',
  'Karaosman',
  'Karasenir',
  'Karasu',
  'Karaurgan',
  'Karaözü',
  'Kars',
  'Kavak',
  'Kavaklıdere',
  'Kayabaşı',
  'Kayabeyli',
  'Kayaş',
  'Kayseri',
  'Kayseri (İncesu)',
  'Kayışlar',
  'Kaşınhan',
  'Kelebek',
  'Kemah',
  'Kemaliye Çaltı',
  'Kemerhisar',
  'Keykubat',
  'Keçiborlu',
  'Kireç',
  'Km. 30+500',
  'Km. 37+362',
  'Km.102+600',
  'Km.139+500',
  'Km.156 Durak',
  'Km.171+000',
  'Km.176+000',
  'Km.186+000',
  'Km.282+200',
  'Km.286+500',
  'Konaklar',
  'Konya',
  'Konya (Selçuklu YHT)',
  'Kozdere',
  'Kumlu Sayding',
  'Kunduz',
  'Kurbağalı',
  'Kurfallı',
  'Kurt',
  'Kurtalan',
  'Kuyucak',
  'Kuşcenneti',
  'Kuşsarayı',
  'Köprüağzı',
  'Köprüköy',
  'Köprüören',
  'Köşk',
  'Kürk',
  'Kütahya',
  'Kılıçlar',
  'Kırkağaç',
  'Kırıkkale',
  'Kırıkkale YHT',
  'Kızoğlu',
  'Kızılca',
  'Kızılinler',
  'Ladik',
  'Lalahan',
  'Leylek',
  'Lüleburgaz',
  'Maden',
  'Malatya',
  'Mamure',
  'Manisa',
  'Mazlumlar',
  'Menderes',
  'Menemen',
  'Mercan',
  'Meydan',
  'Mezitler',
  'Meşelidüz',
  'Mithatpaşa',
  'Muradiye',
  'Muratlı',
  'Mustafayavuz',
  'Muş',
  'Narlı',
  'Nazilli',
  'Nizip',
  'Niğde',
  'Nohutova',
  'Nurdağ',
  'Nusrat',
  'Ortaklar',
  'Osmancık',
  'Osmaneli',
  'Osmaniye',
  'Oturak',
  'Ovasaray',
  'Oymapınar',
  'Palandöken',
  'Palu',
  'Pamukören',
  'Pancar',
  'Pazarcık',
  'Paşalı',
  'Pehlivanköy',
  'Piribeyler',
  'Polatlı',
  'Polatlı YHT',
  'Porsuk',
  'Pozantı',
  'Pınarbaşı',
  'Pınarlı',
  'Rahova',
  'Sabuncupınar',
  'Salat',
  'Salihli',
  'Sallar',
  'Samsun',
  'Sandal',
  'Sandıklı',
  'Sapanca',
  'Sarayköy',
  'Sarayönü',
  'Saruhanlı',
  'Sarıdemir',
  'Sarıkamış',
  'Sarıkent',
  'Sarımsaklı',
  'Sarıoğlan',
  'Savaştepe',
  'Sağlık',
  'Sekili',
  'Selçuk',
  'Sevindik',
  'Seyitler',
  'Sincan',
  'Sindirler',
  'Sinekli',
  'Sivas',
  'Sivas(Adatepe)',
  'Sivrice',
  'Soma',
  'Soğucak',
  'Subaşı',
  'Sudurağı',
  'Sultandağı',
  'Sultanhisar',
  'Suluova',
  'Susurluk',
  'Suveren',
  'Suçatı',
  'Söke',
  'Söğütlü Durak',
  'Süngütaşı',
  'Sünnetçiler',
  'Sütlaç',
  'Sıcaksu',
  'Tanyeri',
  'Tatvan Gar',
  'Tavşanlı',
  'Tayyakadın',
  'Taşkent',
  'Tecer',
  'Tepeköy',
  'Tokat(Yeşilyurt)',
  'Topaç',
  'Topdağı',
  'Toprakkale',
  'Topulyurdu',
  'Torbalı',
  'Turgutlu',
  'Turhal',
  'Tuzhisar',
  'Tüney',
  'Türkoğlu',
  'Tınaztepe',
  'Ulam',
  'Uluköy',
  'Ulukışla',
  'Uluova',
  'Umurlu',
  'Urganlı',
  'Uyanık',
  'Uzunköprü',
  'Uşak',
  'Velimeşe',
  'Vezirhan',
  'Yahşihan',
  'Yahşiler',
  'Yakapınar',
  'Yarbaşı',
  'Yarımca YHT',
  'Yayla',
  'Yaylıca',
  'Yazlak',
  'Yazıhan',
  'Yağdonduran',
  'Yeni Karasar',
  'Yenice',
  'Yenice D',
  'Yenifakılı',
  'Yenikangal',
  'Yeniköy',
  'Yeniçubuk',
  'Yerköy',
  'Yeşilhisar',
  'Yolçatı',
  'Yozgat YHT',
  'Yunusemre',
  'Yurt',
  'Yıldırımkemal',
  'Yıldızeli',
  'Zile',
  'Çadırkaya',
  'Çakmak',
  'Çalıköy',
  'Çamlık',
  'Çankırı',
  'Çardak',
  'Çatalca',
  'Çavundur',
  'Çavuşcugöl',
  'Çay',
  'Çağlar',
  'Çerikli',
  'Çerkezköy',
  'Çerkeş',
  'Çetinkaya',
  'Çiftehan',
  'Çizözü',
  'Çiğli',
  'Çobanhasan',
  'Çorlu',
  'Çukurbük',
  'Çukurhüseyin',
  'Çumra',
  'Çöltepe',
  'Çöğürler',
  'İhsaniye',
  'İliç',
  'İnay',
  'İncirlik',
  'İncirliova',
  'İsabeyli',
  'İshakçelebi',
  'İsmetpaşa',
  'İzmir (Basmane)',
  'İzmit YHT',
  'Şakirpaşa',
  'Şarkışla',
  'Şefaatli',
  'Şefkat',
  'Şehitlik',
  'Şerbettar',
];