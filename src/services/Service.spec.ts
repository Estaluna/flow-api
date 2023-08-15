// jest.mock("");

// const mockedFct = jest.fn();
// const context = new class({} as pg.Client, "", "");
//   Object.defineProperty(context, "privateProp", {
//     get: mockedFct,
//   });

// const mockedGenerateToken = jest.mocked(anyfunction);

// jest.mock(
//   "..",
//   jest.fn().mockImplementation(() => {
//     return {
//       update: jest.fn(),
//       create: jest.fn(),
//     };
//   })
// );

describe("service", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("test", async () => {
    expect(1).toBe(1);
  });
});
