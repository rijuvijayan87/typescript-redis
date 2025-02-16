export const getKeyName = (...args: string[]) => {
  return `tsredis-${args.join(":")}`;
};
