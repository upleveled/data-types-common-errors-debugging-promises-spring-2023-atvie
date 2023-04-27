// Don't try to understand this
// IT IS NOT IMPORTANT!!!!
export default function fakeFetch(url) {
  const time = Math.floor(Math.random() * 1800 + 200);

  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          url,
          html: `<html><h1>${url}</h1></html>`,
          time: `${time} ms`,
        }),
      time,
    );
  });
}
