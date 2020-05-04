export const isArray = (value) => {
  if(value.constructor){
    return value.constructor.name === 'Array';
  }
  return false;
}