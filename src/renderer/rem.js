export default w => {
  const f = w / 10;
  return n => `${n / f}rem`;
};
