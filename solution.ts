type ValueType = string | number | boolean;

const formatValue = (value: ValueType): ValueType => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  }
  throw new Error("Value must be string, number, or boolean");
};


type LengthType<T> = string | Array<T>;

const getLength = <T>(value: LengthType<T>): number => {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
  throw new Error("Value must be string or array");
};



class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

type Item = {
  title: string;
  rating: number;
};

const filterByRating = (items: Item[]): Item[] => {
  return items.filter((item) => {
    if (item.rating < 0 || item.rating > 5) {
      throw new Error("Rating must be between 0 and 5");
    } else {
      return item.rating >= 4;
    }
  });
};


type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (users: User[]): User[] => {
  return users.filter((user: User) => user.isActive === true);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${
      book.publishedYear
    }, Available: ${book.isAvailable ? "Yes" : "No"}`
  );
};


const getUniqueValues = <T>(array1: T[], array2: T[]): T[] => {
  const result: T[] = [];

  for (let i = 0; i < array1.length; i++) {
    const value = array1[i];

    let exists = false;

    for (let j = 0; j < result.length; j++) {
      if (result[j] === value) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      result[result.length] = value;
    }
  }

  for (let i = 0; i < array2.length; i++) {
    const value = array2[i];

    let exists = false;

    for (let j = 0; j < result.length; j++) {
      if (result[j] === value) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      result[result.length] = value;
    }
  }

  return result;
};

interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

const calculateTotalPrice = (products: Product[]): number => {
  if (products.length === 0) {
    return 0;
  } else {
    return products.reduce((total, product) => {
      let price = product.price * product.quantity;

      if (product.discount) {
        if (product.discount < 0 || product.discount > 100) {
          throw new Error("Discount must be between 0 and 100");
        }
        price = price - (price * product.discount) / 100;
      }

      return total + price;
    }, 0);
  }
};



