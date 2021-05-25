const script = require('./script');

test("#randomRgbColor", () => {
  // testando quantas vezes a função foi chamada e qual seu retorno
  script.randomRgbColor = jest
    .fn()
    .mockReturnValue('default value')
    .mockReturnValueOnce('first call')
    .mockReturnValueOnce('second call');

  expect(script.randomRgbColor).toHaveBeenCalledTimes(0);

  expect(script.randomRgbColor()).toBe("first call");
  expect(script.randomRgbColor).toHaveBeenCalledTimes(1);

  expect(script.randomRgbColor()).toBe("second call");
  expect(script.randomRgbColor).toHaveBeenCalledTimes(2);

  expect(script.randomRgbColor()).toBe("default value");
  expect(script.randomRgbColor).toHaveBeenCalledTimes(3);
});