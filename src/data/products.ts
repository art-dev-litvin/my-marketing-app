import { ProductList } from "@app/types/product";
import { ProductStatus, UnitEnum } from "@app/types/productFields";

export const products: ProductList = [
  {
    id: 1,
    imageSrc: "https://picsum.photos/200/300?random=1",
    name: "Organic Almond Milk",
    description: "Unsweetened plant-based milk made from organic almonds.",
    ingredients: ["Water", "Organic Almonds", "Sea Salt"],
    price: 45.99,
    discountPrice: 40.99,
    status: ProductStatus.InStock,
    unitType: UnitEnum.Unit,
    category: "Beverages",
  },
  {
    id: 2,
    imageSrc: "https://picsum.photos/200/300?random=2",
    name: "Whole Wheat Bread",
    description: "Freshly baked whole grain bread with no preservatives.",
    ingredients: ["Whole Wheat Flour", "Water", "Yeast", "Salt"],
    price: 25.5,
    discountPrice: 23.5,
    status: ProductStatus.OutOfStack,
    unitType: UnitEnum.Unit,
    category: "Bakery",
  },
  {
    id: 3,
    imageSrc: "https://picsum.photos/200/300?random=3",
    name: "Cherry Tomatoes",
    description: "Fresh and juicy cherry tomatoes grown locally.",
    price: 30.0,
    status: ProductStatus.InStock,
    unitType: UnitEnum.HundredGrams,
    category: "Vegetables",
  },
  {
    id: 4,
    imageSrc: "https://picsum.photos/200/300?random=4",
    name: "Greek Yogurt (Natural, 400g)",
    description: "Thick and creamy natural Greek yogurt.",
    ingredients: ["Pasteurized Milk", "Live Cultures"],
    price: 50.0,
    discountPrice: 45.0,
    status: ProductStatus.InStock,
    unitType: UnitEnum.Unit,
    category: "Dairy",
  },
  {
    id: 5,
    imageSrc: "https://picsum.photos/200/300?random=5",
    name: "Extra Virgin Olive Oil (500ml)",
    description: "Cold-pressed olive oil for salads and cooking.",
    price: 120.0,
    status: ProductStatus.InStock,
    unitType: UnitEnum.Unit,
    category: "Oils",
  },
  {
    id: 6,
    imageSrc: "https://picsum.photos/200/300?random=6",
    name: "Dark Chocolate 70% (100g)",
    description: "Rich and intense dark chocolate with 70% cocoa.",
    ingredients: ["Cocoa Mass", "Cocoa Butter", "Sugar"],
    price: 75.0,
    status: ProductStatus.OutOfStack,
    unitType: UnitEnum.Unit,
    category: "Confectionery",
  },
  {
    id: 7,
    imageSrc: "https://picsum.photos/200/300?random=7",
    name: "Instant Oatmeal",
    description: "Quick-cooking whole grain oats for breakfast.",
    ingredients: ["Rolled Oats"],
    price: 35.0,
    status: ProductStatus.InStock,
    unitType: UnitEnum.HundredGrams,
    category: "Grains",
  },
  {
    id: 8,
    imageSrc: "https://picsum.photos/200/300?random=8",
    name: "Boneless Chicken Breast",
    description: "Fresh, hormone-free chicken breast.",
    price: 180.0,
    status: ProductStatus.OutOfStack,
    unitType: UnitEnum.HundredGrams,
    category: "Meat",
  },
  {
    id: 9,
    imageSrc: "https://picsum.photos/200/300?random=9",
    name: "Orange Juice (1L)",
    description: "Freshly squeezed orange juice with no added sugar.",
    price: 85.0,
    discountPrice: 80.0,
    status: ProductStatus.InStock,
    unitType: UnitEnum.Unit,
    category: "Beverages",
  },
  {
    id: 10,
    imageSrc: "https://picsum.photos/200/300?random=10",
    name: "Cauliflower",
    description: "Fresh organic cauliflower grown sustainably.",
    price: 40.0,
    status: ProductStatus.InStock,
    unitType: UnitEnum.Unit,
    category: "Vegetables",
  },
  {
    id: 11,
    imageSrc: "https://picsum.photos/200/300?random=11",
    name: "Frozen Mixed Berries",
    description: "A mix of blueberries, raspberries, and blackberries.",
    price: 150.0,
    status: ProductStatus.InStock,
    unitType: UnitEnum.HundredGrams,
    category: "Frozen Foods",
  },
  {
    id: 12,
    imageSrc: "https://picsum.photos/200/300?random=12",
    name: "Honey (Organic, 500g)",
    description: "100% raw organic honey from wildflowers.",
    price: 200.0,
    discountPrice: 190.0,
    status: ProductStatus.InStock,
    unitType: UnitEnum.Unit,
    category: "Sweeteners",
  },
  {
    id: 13,
    imageSrc: "https://picsum.photos/200/300?random=13",
    name: "Brown Rice",
    description: "Nutritious and fiber-rich brown rice.",
    price: 90.0,
    status: ProductStatus.InStock,
    unitType: UnitEnum.HundredGrams,
    category: "Grains",
  },
  {
    id: 14,
    imageSrc: "https://picsum.photos/200/300?random=14",
    name: "Parmesan Cheese",
    description: "Aged Italian Parmesan cheese.",
    price: 250.0,
    status: ProductStatus.OutOfStack,
    unitType: UnitEnum.Unit,
    category: "Dairy",
  },
  {
    id: 15,
    imageSrc: "https://picsum.photos/200/300?random=15",
    name: "Carrots",
    description: "Fresh, crunchy carrots perfect for snacks and salads.",
    price: 25.0,
    status: ProductStatus.InStock,
    unitType: UnitEnum.HundredGrams,
    category: "Vegetables",
  },
  {
    id: 16,
    imageSrc: "https://picsum.photos/200/300?random=16",
    name: "Apple Cider Vinegar",
    description: "Raw, unfiltered apple cider vinegar with the 'Mother'.",
    price: 140.0,
    status: ProductStatus.InStock,
    unitType: UnitEnum.Unit,
    category: "Condiments",
  },
  {
    id: 17,
    imageSrc: "https://picsum.photos/200/300?random=17",
    name: "Canned Tuna",
    description: "Premium canned tuna in olive oil.",
    ingredients: ["Tuna", "Olive Oil", "Salt"],
    price: 110.0,
    status: ProductStatus.InStock,
    unitType: UnitEnum.Unit,
    category: "Seafood",
  },
  {
    id: 18,
    imageSrc: "https://picsum.photos/200/300?random=18",
    name: "Peanut Butter (Crunchy)",
    description: "Natural peanut butter with no added sugar.",
    ingredients: ["Roasted Peanuts"],
    price: 180.0,
    status: ProductStatus.OutOfStack,
    unitType: UnitEnum.Unit,
    category: "Spreads",
  },
  {
    id: 19,
    imageSrc: "https://picsum.photos/200/300?random=19",
    name: "Chia Seeds",
    description: "Rich in omega-3 and fiber, perfect for smoothies.",
    price: 140.0,
    status: ProductStatus.InStock,
    unitType: UnitEnum.HundredGrams,
    category: "Superfoods",
  },
  {
    id: 20,
    imageSrc: "https://picsum.photos/200/300?random=20",
    name: "Sparkling Water",
    description: "Refreshing sparkling water with no additives.",
    price: 45.0,
    status: ProductStatus.InStock,
    unitType: UnitEnum.Unit,
    category: "Beverages",
  },
];
