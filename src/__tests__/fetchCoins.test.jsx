

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({   coins: [],
        isLoading : false,
        error: null,
        selectedCoin: null,
        filteredCoins: [],
        summary: {
            totalCoins:0,
            totalMarketCap:0
        } }),
  })
);

 

    test('Fetch available coins must return data', () => {
        expect(fetch()).toBeDefined();
      });
   
