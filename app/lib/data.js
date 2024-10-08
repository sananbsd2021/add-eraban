import {
  Product,
  User,
  Saraban,
  Booksend,
  Bookaccept,
  Booksetbid,
  Palad,
  Bet,
} from "./models";
import { connectToDB } from "./utils";

export const fetchBets = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 10;

  try {
    connectToDB();
    const count = await Bet.find({ drawNumber: { $regex: regex } }).count();
    const draws = await Bet.find({ drawNumber: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, draws };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products!");
  }
};

export const fetchBet = async (id) => {
  try {
    connectToDB();
    const product = await Bet.findById(id);
    return product;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch product!");
  }
};

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 10;

  try {
    connectToDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

export const fetchUser = async (id) => {
  console.log(id);
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const fetchProducts = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 10;

  try {
    connectToDB();
    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, products };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products!");
  }
};

export const fetchProduct = async (id) => {
  try {
    connectToDB();
    const product = await Product.findById(id);
    return product;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch product!");
  }
};

// DUMMY DATA

export const cards = [
  {
    id: 1,
    title: "Total Users",
    number: 10.928,
    change: 12,
  },
  {
    id: 2,
    title: "Stock",
    number: 8.236,
    change: -2,
  },
  {
    id: 3,
    title: "Revenue",
    number: 6.642,
    change: 18,
  },
];

// Fetch Saraban
export const fetchSarabans = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 5;

  try {
    connectToDB();
    const count = await Saraban.find({ title: { $regex: regex } }).count();
    const sarabans = await Saraban.find().sort({"title": -1})
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, sarabans };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch sarabans!");
  }
};

export const fetchSaraban = async (id) => {
  try {
    connectToDB();
    const saraban = await Saraban.findById(id);
    return saraban;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Saraban!");
  }
};

// Fetch Booksend
export const fetchBooksends = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 5;

  try {
    connectToDB();
    const count = await Booksend.find({ desc: { $regex: regex } }).count();
    const booksends = await Booksend.find().sort({"title": -1})
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, booksends };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch booksends!");
  }
};

export const fetchBooksend = async (id) => {
  try {
    connectToDB();
    const booksend = await Booksend.findById(id);
    return booksend;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch booksend!");
  }
};

// Fetch Bookaccept
export const fetchBookaccepts = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 5;

  try {
    connectToDB();
    const count = await Bookaccept.find({ title: { $regex: regex } }).count();
    const bookaccepts = await Bookaccept.find().sort({"title": -1})
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, bookaccepts };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch bookaccept!");
  }
};

export const fetchBookaccept = async (id) => {
  try {
    connectToDB();
    const bookaccept = await Bookaccept.findById(id);
    return bookaccept;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch bookaccept!");
  }
};


// Fetch Booksetbid
export const fetchBooksetbids = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 5;

  try {
    connectToDB();
    const count = await Booksetbid.find({ desc: { $regex: regex } }).count();
    const booksetbids = await Booksetbid.find().sort({"title": -1})
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, booksetbids };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch booksetbid!");
  }
};

export const fetchBooksetbid = async (id) => {
  try {
    connectToDB();
    const booksetbid = await Booksetbid.findById(id);
    return booksetbid;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch booksetbid!");
  }
};

// Fetch Palad
export const fetchPalads = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 5;

  try {
    connectToDB();
    const count = await Palad.find({ desc: { $regex: regex } }).count();
    const Palads = await Palad.find().sort({"title": -1})
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, palads };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch palad!");
  }
};

export const fetchPalad = async (id) => {
  try {
    connectToDB();
    const palad = await Palad.findById(id);
    return palad;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch palad!");
  }
};
