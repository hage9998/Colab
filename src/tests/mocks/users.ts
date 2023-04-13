import { faker } from "@faker-js/faker";
import { User } from "../../types/user";

export const fakeUser: User = {
  gender: "male",
  name: {
    title: faker.name.prefix(),
    first: faker.name.firstName(),
    last: faker.name.lastName(),
  },
  location: {
    street: {
      number: Number(faker.address.buildingNumber()),
      name: faker.address.street(),
    },
    city: faker.address.city(),
    state: faker.address.state(),
    country: faker.address.country(),
    postcode: faker.address.zipCode(),
    coordinates: {
      latitude: faker.address.latitude(),
      longitude: faker.address.longitude(),
    },
    timezone: {
      offset: faker.address.timeZone(),
      description: faker.address.timeZone(),
    },
  },
  email: faker.internet.email(),
  login: {
    uuid: faker.datatype.uuid(),
    username: faker.internet.userName(),
    password: faker.internet.password(),
    salt: "fake",
    md5: "fake",
    sha1: "fake",
    sha256: "fake",
  },
  dob: {
    date: faker.date.birthdate().toString(),
    age: Number(faker.random.numeric(2)),
  },
  registered: {
    date: faker.date.past().toString(),
    age: Number(faker.random.numeric(2)),
  },
  phone: faker.phone.imei(),
  cell: faker.phone.imei(),
  id: {
    name: faker.random.word(),
    value: faker.random.numeric(),
  },
  picture: {
    large: "",
    medium: "",
    thumbnail: "",
  },
  nat: faker.address.country(),
};
