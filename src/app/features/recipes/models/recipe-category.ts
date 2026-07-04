export const RECIPE_CATEGORIES = [
  'Pizza',
  'Burger',
  'Makarna',
  'Tavuk',
  'Et Yemekleri',
  'Çorba',
  'Salata',
  'Sandviç',
  'Fast Food',
  'Pilav',
  'Hamur İşleri',
  'Kahvaltı',
  'Vejetaryen',
  'Tatlı',
  'Atıştırmalık',
  'İçecekler',
  'Izgara',
  'Deniz Ürünleri',
  'Diğer'
] as const;

export type RecipeCategory =
  typeof RECIPE_CATEGORIES[number];