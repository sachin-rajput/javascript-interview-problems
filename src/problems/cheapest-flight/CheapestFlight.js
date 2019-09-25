/* eslint-disable no-continue */
/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
const findCheapestPrice = (n, flights, src, dst, K) => {
  let totalPrice = Number.MAX_VALUE;
  const graph = {};

  // Create a graph for each source and its destinations with prices to get there
  flights.forEach((flight) => {
    const [flightSrc, flightDest, flightPrice] = flight;

    if (!graph[flightSrc]) {
      graph[flightSrc] = {};
    }

    graph[flightSrc][flightDest] = flightPrice;
  });

  let sourceCity;
  let destinations;

  let price;
  let updatedPrice;

  let stops;
  let updatedStops;

  // Add the source city destinations to the stack
  const stack = [[graph[src], 0, 0]];
  const visited = {};

  while (stack.length) {
    sourceCity = stack.shift();
    [destinations, price, stops] = sourceCity;

    if (stops > K) continue;

    updatedStops = stops + 1;
    // only if there are destinations for this city,
    // then let's loop over all of them.
    if (destinations) {
      Object.keys(destinations).forEach((city) => {
        updatedPrice = price + destinations[city];
        // eslint-disable-next-line radix
        if (parseInt(city) === parseInt(dst) && updatedPrice < totalPrice) {
          totalPrice = updatedPrice;
        }

        if (visited[city] < updatedPrice) return;

        visited[city] = updatedPrice;
        stack.push([graph[city], updatedPrice, updatedStops]);
      });
    }
  }

  return totalPrice === Number.MAX_VALUE ? -1 : totalPrice;
};

// const edges = [[0, 1, 100], [1, 2, 100], [0, 2, 500]];

// console.log(findCheapestPrice(3, edges, 0, 2, 0));
// console.log(findCheapestPrice(3, edges, 0, 2, 1));

export default findCheapestPrice;
