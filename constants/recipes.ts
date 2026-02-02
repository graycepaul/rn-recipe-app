export type Recipe = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  cookTimeMins: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: 'Breakfast' | 'Lunch' | 'Dinner' | 'Dessert' | 'Snack';
  ingredients: string[];
  steps: string[];
};

export const RECIPES: Recipe[] = [
  {
    id: '1',
    title: 'Jollof Rice',
    description: 'Smoky, rich tomato base with perfectly seasoned rice.',
    imageUrl:
      'https://images.unsplash.com/photo-1664993101841-036f189719b6?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    cookTimeMins: 45,
    difficulty: 'Medium',
    category: 'Dinner',
    ingredients: [
      '2 cups long-grain rice',
      '3 tomatoes',
      '1 red bell pepper',
      '1 onion',
      'Vegetable oil',
      'Salt',
      'Spices',
    ],
    steps: [
      'Blend tomatoes, pepper, and onion until smooth.',
      'Heat oil in a pot and fry the blended mixture.',
      'Add spices and simmer until thickened.',
      'Add rice and water, then cook until tender.',
    ],
  },
  {
    id: '2',
    title: 'Avocado Toast',
    description: 'Crisp toast topped with creamy avocado and lemon.',
    imageUrl:
      'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=80',
    cookTimeMins: 10,
    difficulty: 'Easy',
    category: 'Breakfast',
    ingredients: ['2 slices of bread', '1 ripe avocado', 'Salt', 'Black pepper', 'Lemon juice'],
    steps: [
      'Toast the bread until golden.',
      'Mash the avocado with salt and lemon juice.',
      'Spread avocado on toast.',
      'Finish with black pepper.',
    ],
  },
  {
    id: '3',
    title: 'Chicken Stir-Fry',
    description: 'Quick stir-fried chicken with vegetables and sauce.',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1664475934279-2631a25c42ce?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    cookTimeMins: 20,
    difficulty: 'Easy',
    category: 'Lunch',
    ingredients: ['2 chicken breasts', 'Mixed vegetables', 'Soy sauce', 'Garlic', 'Vegetable oil'],
    steps: [
      'Slice chicken into bite-sized pieces.',
      'Heat oil in a pan and cook chicken.',
      'Add vegetables and garlic.',
      'Stir in soy sauce and cook until done.',
    ],
  },
  {
    id: '4',
    title: 'Fluffy Pancakes',
    description: 'Light and fluffy pancakes with maple syrup.',
    imageUrl:
      'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1200&q=80',
    cookTimeMins: 25,
    difficulty: 'Easy',
    category: 'Breakfast',
    ingredients: ['1 cup flour', '1 egg', '1 cup milk', 'Baking powder', 'Sugar', 'Butter'],
    steps: [
      'Mix dry ingredients in a bowl.',
      'Whisk in milk and egg.',
      'Heat a pan and add butter.',
      'Cook pancakes until golden on both sides.',
    ],
  },
  {
    id: '5',
    title: 'Spaghetti Bolognese',
    description: 'Classic Italian pasta with rich meat sauce.',
    imageUrl:
      'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1200&q=80',
    cookTimeMins: 40,
    difficulty: 'Medium',
    category: 'Dinner',
    ingredients: ['Spaghetti', 'Ground beef', 'Tomato sauce', 'Onion', 'Garlic', 'Olive oil'],
    steps: [
      'Boil spaghetti until al dente.',
      'Cook onion and garlic in olive oil.',
      'Add ground beef and brown.',
      'Stir in tomato sauce and simmer.',
    ],
  },
  {
    id: '6',
    title: 'Chocolate Brownies',
    description: 'Fudgy brownies with a rich chocolate flavor.',
    imageUrl:
      'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=80',
    cookTimeMins: 35,
    difficulty: 'Medium',
    category: 'Dessert',
    ingredients: ['Dark chocolate', 'Butter', 'Sugar', 'Eggs', 'Flour'],
    steps: [
      'Melt chocolate and butter together.',
      'Mix in sugar and eggs.',
      'Fold in flour.',
      'Bake until set but fudgy inside.',
    ],
  },
  {
    id: '7',
    title: 'Fruit Yogurt Parfait',
    description: 'Layered yogurt with fresh fruit and granola.',
    imageUrl:
      'https://images.unsplash.com/photo-1505253216365-195c4d3d7f9a?auto=format&fit=crop&w=1200&q=80',
    cookTimeMins: 5,
    difficulty: 'Easy',
    category: 'Snack',
    ingredients: ['Greek yogurt', 'Mixed berries', 'Granola', 'Honey'],
    steps: [
      'Add yogurt to a glass.',
      'Layer fruit and granola.',
      'Repeat layers.',
      'Drizzle with honey.',
    ],
  },
];

export const CATEGORIES: Recipe['category'][] = [
  'Breakfast',
  'Lunch',
  'Dinner',
  'Dessert',
  'Snack',
];
