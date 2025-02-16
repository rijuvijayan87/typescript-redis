export const getKeyName = (...args: string[]) => {
  return `tsredis:${args.join(":")}`;
};

export const restaurantKeyById = (id: string) => getKeyName("restaurant", id);
