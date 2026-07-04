import { Recipe } from '../models/recipe.model';

export const DEFAULT_RECIPES: Recipe[] = [

  {
  id: 1,
  title: 'Margherita Pizza',
  category: 'Pizza',
  image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591',
  ingredients: [
    'Pizza Hamuru',
    'Domates Sosu',
    'Mozzarella',
    'Fesleğen'
  ],
  instructions: [
    'Hamuru aç.',
    'Domates sosunu sür.',
    'Mozzarellayı ekle.',
    'Fırında pişir.',
    'Fesleğen ile servis et.'
  ],
  duration: 30,
  servings: 2,
  difficulty: 'Kolay',
  tip: 'Fesleğeni piştikten sonra ekle.',
  favorite: false,
  createdAt: new Date().toISOString()
},
{
  id: 2,
  title: 'Pepperoni Pizza',
  category: 'Pizza',
  image: 'https://images.unsplash.com/photo-1548365328-9f547fb0953c',
  ingredients: [
    'Pizza Hamuru',
    'Domates Sosu',
    'Mozzarella',
    'Pepperoni'
  ],
  instructions: [
    'Hamuru hazırla.',
    'Sosu sür.',
    'Pepperonileri diz.',
    'Peyniri ekle.',
    'Fırında pişir.'
  ],
  duration: 35,
  servings: 2,
  difficulty: 'Kolay',
  tip: 'Yüksek sıcaklıkta pişir.',
  favorite: false,
  createdAt: new Date().toISOString()
},
{
  id: 3,
  title: 'Sucuklu Pizza',
  category: 'Pizza',
  image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591',
  ingredients: [
    'Pizza Hamuru',
    'Sucuk',
    'Kaşar Peyniri',
    'Domates Sosu'
  ],
  instructions: [
    'Hamuru aç.',
    'Sosu sür.',
    'Sucukları diz.',
    'Kaşarı ekle.',
    'Fırında pişir.'
  ],
  duration: 30,
  servings: 2,
  difficulty: 'Kolay',
  tip: 'Sucuğu ince dilimle.',
  favorite: false,
  createdAt: new Date().toISOString()
},
{
  id: 4,
  title: 'Karışık Pizza',
  category: 'Pizza',
  image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591',
  ingredients: [
    'Pizza Hamuru',
    'Sucuk',
    'Mantar',
    'Biber',
    'Mozzarella'
  ],
  instructions: [
    'Hamuru aç.',
    'Sosu sür.',
    'Malzemeleri yerleştir.',
    'Peyniri ekle.',
    'Fırında pişir.'
  ],
  duration: 35,
  servings: 3,
  difficulty: 'Orta',
  tip: 'Malzemeleri fazla doldurma.',
  favorite: false,
  createdAt: new Date().toISOString()
},
{
  id: 5,
  title: 'Cheeseburger',
  category: 'Burger',
  image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
  ingredients: [
    'Burger Ekmeği',
    'Dana Köfte',
    'Cheddar',
    'Marul',
    'Turşu'
  ],
  instructions: [
    'Köfteyi pişir.',
    'Ekmeği kızart.',
    'Peyniri erit.',
    'Malzemeleri birleştir.'
  ],
  duration: 25,
  servings: 1,
  difficulty: 'Kolay',
  tip: 'Eti fazla bastırma.',
  favorite: false,
  createdAt: new Date().toISOString()
},
{
  id: 6,
  title: 'Chicken Burger',
  category: 'Burger',
  image: 'https://images.unsplash.com/photo-1550547660-d9450f859349',
  ingredients: [
    'Burger Ekmeği',
    'Tavuk Göğsü',
    'Marul',
    'Mayonez'
  ],
  instructions: [
    'Tavuğu marine et.',
    'Kızart.',
    'Ekmeği ısıt.',
    'Servis et.'
  ],
  duration: 25,
  servings: 1,
  difficulty: 'Kolay',
  tip: 'Çıtır kaplama kullan.',
  favorite: false,
  createdAt: new Date().toISOString()
},
{
  id: 7,
  title: 'Double Burger',
  category: 'Burger',
  image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
  ingredients: [
    'Burger Ekmeği',
    '2 Dana Köfte',
    '2 Dilim Cheddar',
    'Turşu'
  ],
  instructions: [
    'İki köfteyi pişir.',
    'Peyniri erit.',
    'Ekmeğe diz.',
    'Servis et.'
  ],
  duration: 30,
  servings: 1,
  difficulty: 'Orta',
  tip: 'Çift cheddar daha lezzetlidir.',
  favorite: false,
  createdAt: new Date().toISOString()
},
{
  id: 8,
  title: 'BBQ Burger',
  category: 'Burger',
  image: 'https://images.unsplash.com/photo-1550317138-10000687a72b',
  ingredients: [
    'Burger Ekmeği',
    'Dana Köfte',
    'BBQ Sos',
    'Soğan'
  ],
  instructions: [
    'Köfteyi pişir.',
    'BBQ sosunu sür.',
    'Soğanı ekle.',
    'Servis et.'
  ],
  duration: 25,
  servings: 1,
  difficulty: 'Kolay',
  tip: 'Karamelize soğan kullan.',
  favorite: false,
  createdAt: new Date().toISOString()
},
{
  id: 9,
  title: 'Spaghetti Bolognese',
  category: 'Makarna',
  image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9',
  ingredients: [
    'Spagetti',
    'Kıyma',
    'Domates Sosu',
    'Soğan'
  ],
  instructions: [
    'Makarnayı haşla.',
    'Kıymayı kavur.',
    'Sosu ekle.',
    'Karıştır.'
  ],
  duration: 35,
  servings: 3,
  difficulty: 'Kolay',
  tip: 'Parmesan ekle.',
  favorite: false,
  createdAt: new Date().toISOString()
},
{
  id: 10,
  title: 'Fettuccine Alfredo',
  category: 'Makarna',
  image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a',
  ingredients: [
    'Fettuccine',
    'Krema',
    'Parmesan',
    'Tereyağı'
  ],
  instructions: [
    'Makarnayı haşla.',
    'Sosu hazırla.',
    'Karıştır.',
    'Servis et.'
  ],
  duration: 30,
  servings: 2,
  difficulty: 'Kolay',
  tip: 'Sosu kaynatma.',
  favorite: false,
  createdAt: new Date().toISOString()
},
{
  id: 11,
  title: 'Penne Arrabbiata',
  category: 'Makarna',
  image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb',
  ingredients: [
    'Penne',
    'Domates Sosu',
    'Sarımsak',
    'Pul Biber'
  ],
  instructions: [
    'Makarnayı haşla.',
    'Sosu hazırla.',
    'Karıştır.',
    'Servis et.'
  ],
  duration: 25,
  servings: 2,
  difficulty: 'Kolay',
  tip: 'Acı seviyesini ayarla.',
  favorite: false,
  createdAt: new Date().toISOString()
},
{
  id: 12,
  title: 'Kremalı Mantarlı Makarna',
  category: 'Makarna',
  image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601',
  ingredients: [
    'Makarna',
    'Mantar',
    'Krema',
    'Parmesan'
  ],
  instructions: [
    'Makarnayı haşla.',
    'Mantarı sotele.',
    'Kremayı ekle.',
    'Karıştır.'
  ],
  duration: 30,
  servings: 2,
  difficulty: 'Kolay',
  tip: 'Taze mantar kullan.',
  favorite: false,
  createdAt: new Date().toISOString()
},
{
  id: 13,
  title: 'Fırında Tavuk',
  category: 'Tavuk',
  image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791',
  ingredients: [
    'Tavuk Baget',
    'Patates',
    'Zeytinyağı',
    'Baharat'
  ],
  instructions: [
    'Tavuğu marine et.',
    'Patatesleri doğra.',
    'Fırında pişir.'
  ],
  duration: 60,
  servings: 4,
  difficulty: 'Kolay',
  tip: 'Marine için en az 2 saat beklet.',
  favorite: false,
  createdAt: new Date().toISOString()
},
{
  id: 14,
  title: 'Tavuk Sote',
  category: 'Tavuk',
  image: 'https://images.unsplash.com/photo-1604908176997-4318c4d54d31',
  ingredients: [
    'Tavuk Göğsü',
    'Biber',
    'Soğan',
    'Domates'
  ],
  instructions: [
    'Tavuğu sotele.',
    'Sebzeleri ekle.',
    'Baharatlandır.',
    'Servis et.'
  ],
  duration: 30,
  servings: 3,
  difficulty: 'Kolay',
  tip: 'Yüksek ateşte pişir.',
  favorite: false,
  createdAt: new Date().toISOString()
},
{
  id: 15,
  title: 'Köri Soslu Tavuk',
  category: 'Tavuk',
  image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398',
  ingredients: [
    'Tavuk Göğsü',
    'Krema',
    'Köri',
    'Soğan'
  ],
  instructions: [
    'Tavuğu pişir.',
    'Soğanı kavur.',
    'Krema ve köriyi ekle.',
    'Karıştır.'
  ],
  duration: 35,
  servings: 3,
  difficulty: 'Orta',
  tip: 'Pilav ile servis et.',
  favorite: false,
  createdAt: new Date().toISOString()
},{
  id: 16,
  title: 'Çıtır Tavuk',
  category: 'Tavuk',
  image: 'https://images.unsplash.com/photo-1562967916-eb82221dfb92',
  ingredients: [
    'Tavuk Göğsü',
    'Galeta Unu',
    'Yumurta',
    'Un'
  ],
  instructions: [
    'Tavuğu dilimle.',
    'Una, yumurtaya ve galeta ununa bulayın.',
    'Kızgın yağda kızartın.',
    'Sıcak servis edin.'
  ],
  duration: 30,
  servings: 3,
  difficulty: 'Kolay',
  tip: 'Daha çıtır olması için iki kez paneleyebilirsin.',
  favorite: false,
  createdAt: new Date().toISOString()
},
{
  id: 17,
  title: 'Izgara Köfte',
  category: 'Et Yemekleri',
  image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd',
  ingredients: [
    'Dana Kıyma',
    'Soğan',
    'Galeta Unu',
    'Baharat'
  ],
  instructions: [
    'Köfte harcını yoğurun.',
    'Şekil verin.',
    'Izgarada pişirin.',
    'Sıcak servis edin.'
  ],
  duration: 35,
  servings: 4,
  difficulty: 'Kolay',
  tip: 'Harcı en az 30 dakika dinlendirin.',
  favorite: false,
  createdAt: new Date().toISOString()
},
{
  id: 18,
  title: 'Dana Kavurma',
  category: 'Et Yemekleri',
  image: 'https://images.unsplash.com/photo-1544025162-d76694265947',
  ingredients: [
    'Dana Eti',
    'Soğan',
    'Tereyağı',
    'Baharat'
  ],
  instructions: [
    'Eti mühürleyin.',
    'Soğanı ekleyin.',
    'Kısık ateşte pişirin.'
  ],
  duration: 70,
  servings: 4,
  difficulty: 'Orta',
  tip: 'Eti kendi suyunda pişirmeye çalış.',
  favorite: false,
  createdAt: new Date().toISOString()
},
{
  id: 19,
  title: 'Et Sote',
  category: 'Et Yemekleri',
  image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e',
  ingredients: [
    'Dana Eti',
    'Biber',
    'Domates',
    'Soğan'
  ],
  instructions: [
    'Eti sotele.',
    'Sebzeleri ekle.',
    'Baharatlandır.',
    'Servis et.'
  ],
  duration: 45,
  servings: 4,
  difficulty: 'Orta',
  tip: 'Eti yüksek ateşte mühürle.',
  favorite: false,
  createdAt: new Date().toISOString()
},
{
  id: 20,
  title: 'Tas Kebabı',
  category: 'Et Yemekleri',
  image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143',
  ingredients: [
    'Dana Eti',
    'Patates',
    'Havuç',
    'Domates Salçası'
  ],
  instructions: [
    'Eti kavur.',
    'Sebzeleri ekle.',
    'Su ilave edip pişir.'
  ],
  duration: 90,
  servings: 5,
  difficulty: 'Orta',
  tip: 'Bir gece dinlenirse daha lezzetli olur.',
  favorite: false,
  createdAt: new Date().toISOString()
},
{
  id: 21,
  title: 'Mercimek Çorbası',
  category: 'Çorba',
  image: 'https://images.unsplash.com/photo-1547592180-85f173990554',
  ingredients: [
    'Kırmızı Mercimek',
    'Soğan',
    'Havuç',
    'Patates'
  ],
  instructions: [
    'Sebzeleri kavur.',
    'Mercimeği ekle.',
    'Haşla.',
    'Blenderdan geçir.'
  ],
  duration: 40,
  servings: 4,
  difficulty: 'Kolay',
  tip: 'Limonla servis et.',
  favorite: false,
  createdAt: new Date().toISOString()
},
{
  id: 22,
  title: 'Ezogelin Çorbası',
  category: 'Çorba',
  image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd',
  ingredients: [
    'Mercimek',
    'Bulgur',
    'Pirinç',
    'Salça'
  ],
  instructions: [
    'Salçayı kavur.',
    'Bakliyatları ekle.',
    'Su ilave et.',
    'Pişir.'
  ],
  duration: 45,
  servings: 4,
  difficulty: 'Orta',
  tip: 'Kuru nane eklemeyi unutma.',
  favorite: false,
  createdAt: new Date().toISOString()
},
{
  id: 23,
  title: 'Domates Çorbası',
  category: 'Çorba',
  image: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a',
  ingredients: [
    'Domates',
    'Un',
    'Tereyağı',
    'Süt'
  ],
  instructions: [
    'Domatesleri pişir.',
    'Unu kavur.',
    'Süt ekle.',
    'Karıştır.'
  ],
  duration: 30,
  servings: 4,
  difficulty: 'Kolay',
  tip: 'Kaşar peyniriyle servis et.',
  favorite: false,
  createdAt: new Date().toISOString()
},
{
  id: 24,
  title: 'Caesar Salata',
  category: 'Salata',
  image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1',
  ingredients: [
    'Marul',
    'Tavuk',
    'Parmesan',
    'Kruton'
  ],
  instructions: [
    'Marulu doğra.',
    'Tavuğu pişir.',
    'Malzemeleri karıştır.',
    'Sosu ekle.'
  ],
  duration: 20,
  servings: 2,
  difficulty: 'Kolay',
  tip: 'Sosu en son ekle.',
  favorite: false,
  createdAt: new Date().toISOString()
},
{
  id: 25,
  title: 'Akdeniz Salatası',
  category: 'Salata',
  image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
  ingredients: [
    'Domates',
    'Salatalık',
    'Beyaz Peynir',
    'Zeytin'
  ],
  instructions: [
    'Sebzeleri doğra.',
    'Peyniri ekle.',
    'Zeytinyağı gezdir.'
  ],
  duration: 15,
  servings: 2,
  difficulty: 'Kolay',
  tip: 'Taze kekik kullan.',
  favorite: false,
  createdAt: new Date().toISOString()
},
{
  id: 26,
  title: 'Mevsim Salatası',
  category: 'Salata',
  image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
  ingredients: [
    'Marul',
    'Domates',
    'Salatalık',
    'Havuç'
  ],
  instructions: [
    'Sebzeleri doğra.',
    'Karıştır.',
    'Sos ekleyerek servis et.'
  ],
  duration: 10,
  servings: 2,
  difficulty: 'Kolay',
  tip: 'Limon suyu kullan.',
  favorite: false,
  createdAt: new Date().toISOString()
},
{
  id: 27,
  title: 'Ton Balıklı Sandviç',
  category: 'Sandviç',
  image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af',
  ingredients: [
    'Tam Buğday Ekmeği',
    'Ton Balığı',
    'Marul',
    'Mayonez'
  ],
  instructions: [
    'Ekmeği kızart.',
    'Malzemeleri yerleştir.',
    'Servis et.'
  ],
  duration: 10,
  servings: 1,
  difficulty: 'Kolay',
  tip: 'Limon suyu ekleyebilirsin.',
  favorite: false,
  createdAt: new Date().toISOString()
},
{
  id: 28,
  title: 'Kulüp Sandviç',
  category: 'Sandviç',
  image: 'https://images.unsplash.com/photo-1528736235302-52922df5c122',
  ingredients: [
    'Toast Ekmeği',
    'Tavuk',
    'Marul',
    'Domates'
  ],
  instructions: [
    'Ekmeği kızart.',
    'Tavuğu pişir.',
    'Kat kat diz.',
    'Üçe bölerek servis et.'
  ],
  duration: 20,
  servings: 2,
  difficulty: 'Kolay',
  tip: 'Kürdan kullanarak sabitle.',
  favorite: false,
  createdAt: new Date().toISOString()
},
{
  id: 29,
  title: 'Tavuklu Sandviç',
  category: 'Sandviç',
  image: 'https://images.unsplash.com/photo-1553909489-cd47e0907980',
  ingredients: [
    'Baget Ekmek',
    'Izgara Tavuk',
    'Marul',
    'Domates'
  ],
  instructions: [
    'Ekmeği ortadan kes.',
    'Malzemeleri yerleştir.',
    'Servis et.'
  ],
  duration: 15,
  servings: 1,
  difficulty: 'Kolay',
  tip: 'Hardal sosu yakışır.',
  favorite: false,
  createdAt: new Date().toISOString()
},
{
  id: 30,
  title: 'Hot Dog',
  category: 'Fast Food',
  image: 'https://images.unsplash.com/photo-1612392062798-7d8b5a3b8d7e',
  ingredients: [
    'Hot Dog Ekmeği',
    'Sosis',
    'Ketçap',
    'Hardal'
  ],
  instructions: [
    'Sosisi haşla veya ızgarada pişir.',
    'Ekmeği ısıt.',
    'Sosları ekleyerek servis et.'
  ],
  duration: 15,
  servings: 1,
  difficulty: 'Kolay',
  tip: 'Karamelize soğan ekleyebilirsin.',
  favorite: false,
  createdAt: new Date().toISOString()
},{
  id: 31,
  title: 'Patates Kızartması',
  category: 'Fast Food',
  image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f',
  ingredients: [
    'Patates',
    'Sıvı Yağ',
    'Tuz'
  ],
  instructions: [
    'Patatesleri doğra.',
    'Soğuk suda beklet.',
    'Kızgın yağda kızart.',
    'Tuzlayıp servis et.'
  ],
  duration: 20,
  servings: 2,
  difficulty: 'Kolay',
  tip: 'Çıtır olması için iki kez kızart.',
  favorite: false,
  createdAt: new Date().toISOString()
},
{
  id: 32,
  title: 'Chicken Nugget',
  category: 'Fast Food',
  image: 'https://images.unsplash.com/photo-1562967916-eb82221dfb92',
  ingredients: [
    'Tavuk Göğsü',
    'Galeta Unu',
    'Yumurta',
    'Un'
  ],
  instructions: [
    'Tavuğu küçük parçalara ayır.',
    'Pane harcına bulayın.',
    'Kızgın yağda kızartın.',
    'Sıcak servis edin.'
  ],
  duration: 30,
  servings: 3,
  difficulty: 'Kolay',
  tip: 'Barbekü sos ile servis edebilirsin.',
  favorite: false,
  createdAt: new Date().toISOString()
},
{
  id: 33,
  title: 'Tereyağlı Pirinç Pilavı',
  category: 'Pilav',
  image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19',
  ingredients: [
    'Pirinç',
    'Tereyağı',
    'Su',
    'Tuz'
  ],
  instructions: [
    'Pirinci yıka.',
    'Tereyağında kavur.',
    'Suyu ekle.',
    'Demlenmeye bırak.'
  ],
  duration: 30,
  servings: 4,
  difficulty: 'Kolay',
  tip: '15 dakika dinlendir.',
  favorite: false,
  createdAt: new Date().toISOString()
},
{
  id: 34,
  title: 'Bulgur Pilavı',
  category: 'Pilav',
  image: 'https://images.unsplash.com/photo-1604908177522-4327c61b99d8',
  ingredients: [
    'Pilavlık Bulgur',
    'Domates Salçası',
    'Soğan',
    'Su'
  ],
  instructions: [
    'Soğanı kavur.',
    'Salçayı ekle.',
    'Bulguru kavur.',
    'Suyu ekleyip pişir.'
  ],
  duration: 30,
  servings: 4,
  difficulty: 'Kolay',
  tip: 'Et yemeklerinin yanına çok yakışır.',
  favorite: false,
  createdAt: new Date().toISOString()
},
{
  id: 35,
  title: 'Sebzeli Pilav',
  category: 'Pilav',
  image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19',
  ingredients: [
    'Pirinç',
    'Bezelye',
    'Havuç',
    'Mısır'
  ],
  instructions: [
    'Sebzeleri sotele.',
    'Pirinci kavur.',
    'Suyu ekleyip pişir.',
    'Demlendir.'
  ],
  duration: 35,
  servings: 4,
  difficulty: 'Kolay',
  tip: 'Taze bezelye kullan.',
  favorite: false,
  createdAt: new Date().toISOString()
},
{
  id: 36,
  title: 'Poğaça',
  category: 'Hamur İşleri',
  image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec',
  ingredients: [
    'Un',
    'Maya',
    'Süt',
    'Peynir'
  ],
  instructions: [
    'Hamuru yoğur.',
    'İç harcı koy.',
    'Şekil ver.',
    'Fırında pişir.'
  ],
  duration: 90,
  servings: 8,
  difficulty: 'Orta',
  tip: 'Hamuru güzel mayalandır.',
  favorite: false,
  createdAt: new Date().toISOString()
},
{
  id: 37,
  title: 'Su Böreği',
  category: 'Hamur İşleri',
  image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548',
  ingredients: [
    'Yufka',
    'Beyaz Peynir',
    'Maydanoz',
    'Tereyağı'
  ],
  instructions: [
    'Yufkaları haşla.',
    'Kat kat diz.',
    'İç harcı ekle.',
    'Fırında pişir.'
  ],
  duration: 75,
  servings: 6,
  difficulty: 'Zor',
  tip: 'Bol tereyağı kullan.',
  favorite: false,
  createdAt: new Date().toISOString()
},
{
  id: 38,
  title: 'Lahmacun',
  category: 'Hamur İşleri',
  image: 'https://images.unsplash.com/photo-1628294896516-6d5cb5824c22',
  ingredients: [
    'Hamur',
    'Kıyma',
    'Domates',
    'Maydanoz'
  ],
  instructions: [
    'Hamuru aç.',
    'Harcı sür.',
    'Yüksek sıcaklıkta pişir.'
  ],
  duration: 40,
  servings: 4,
  difficulty: 'Orta',
  tip: 'Limon ve maydanoz ile servis et.',
  favorite: false,
  createdAt: new Date().toISOString()
},
{
  id: 39,
  title: 'Menemen',
  category: 'Kahvaltı',
  image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8',
  ingredients: [
    'Yumurta',
    'Domates',
    'Biber',
    'Tereyağı'
  ],
  instructions: [
    'Biberi kavur.',
    'Domatesi ekle.',
    'Yumurtayı kır.',
    'Karıştırarak pişir.'
  ],
  duration: 15,
  servings: 2,
  difficulty: 'Kolay',
  tip: 'Kaşar ekleyebilirsin.',
  favorite: false,
  createdAt: new Date().toISOString()
},
{
  id: 40,
  title: 'Peynirli Omlet',
  category: 'Kahvaltı',
  image: 'https://images.unsplash.com/photo-1510693206972-df098062cb71',
  ingredients: [
    'Yumurta',
    'Kaşar Peyniri',
    'Tereyağı',
    'Tuz'
  ],
  instructions: [
    'Yumurtayı çırp.',
    'Tavaya dök.',
    'Peyniri ekle.',
    'Katlayarak servis et.'
  ],
  duration: 10,
  servings: 1,
  difficulty: 'Kolay',
  tip: 'Kısık ateşte pişir.',
  favorite: false,
  createdAt: new Date().toISOString()
},
{
  id: 41,
  title: 'Pancake',
  category: 'Kahvaltı',
  image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93',
  ingredients: [
    'Un',
    'Süt',
    'Yumurta',
    'Kabartma Tozu'
  ],
  instructions: [
    'Hamuru hazırla.',
    'Tavaya dök.',
    'İki tarafını pişir.',
    'Bal ile servis et.'
  ],
  duration: 20,
  servings: 3,
  difficulty: 'Kolay',
  tip: 'Tavayı yağlama.',
  favorite: false,
  createdAt: new Date().toISOString()
},
{
  id: 42,
  title: 'Avokadolu Tost',
  category: 'Kahvaltı',
  image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8',
  ingredients: [
    'Tam Buğday Ekmeği',
    'Avokado',
    'Limon',
    'Karabiber'
  ],
  instructions: [
    'Ekmeği kızart.',
    'Avokadoyu ez.',
    'Ekmeğe sür.',
    'Baharat ekle.'
  ],
  duration: 10,
  servings: 1,
  difficulty: 'Kolay',
  tip: 'Üzerine haşlanmış yumurta ekleyebilirsin.',
  favorite: false,
  createdAt: new Date().toISOString()
},
{
  id: 43,
  title: 'Falafel',
  category: 'Vejetaryen',
  image: 'https://images.unsplash.com/photo-1547592180-85f173990554',
  ingredients: [
    'Nohut',
    'Maydanoz',
    'Sarımsak',
    'Kimyon'
  ],
  instructions: [
    'Nohutları rondodan geçir.',
    'Baharatları ekle.',
    'Top şekli ver.',
    'Kızart.'
  ],
  duration: 40,
  servings: 4,
  difficulty: 'Orta',
  tip: 'Yoğurt sos ile servis et.',
  favorite: false,
  createdAt: new Date().toISOString()
},
{
  id: 44,
  title: 'Sebze Güveç',
  category: 'Vejetaryen',
  image: 'https://images.unsplash.com/photo-1547592180-85f173990554',
  ingredients: [
    'Patlıcan',
    'Kabak',
    'Biber',
    'Domates'
  ],
  instructions: [
    'Sebzeleri doğra.',
    'Güvece yerleştir.',
    'Fırında pişir.'
  ],
  duration: 50,
  servings: 4,
  difficulty: 'Kolay',
  tip: 'Zeytinyağı gezdir.',
  favorite: false,
  createdAt: new Date().toISOString()
},
{
  id: 45,
  title: 'Nohut Salatası',
  category: 'Vejetaryen',
  image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
  ingredients: [
    'Haşlanmış Nohut',
    'Domates',
    'Salatalık',
    'Maydanoz'
  ],
  instructions: [
    'Malzemeleri doğra.',
    'Karıştır.',
    'Zeytinyağı ve limon ekle.',
    'Servis et.'
  ],
  duration: 15,
  servings: 3,
  difficulty: 'Kolay',
  tip: 'Nar ekşisi ekleyebilirsin.',
  favorite: false,
  createdAt: new Date().toISOString()
}

];