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


type ValueType2 = string | any[];

const getLength = (value: ValueType2): number => {
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
    getDetails() : string {
     return `'Name: ${this.name}, Age: ${this.age}'`;
     }

}


