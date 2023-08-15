jest.mock("");

const mockedGenerateToken = jest.mocked(generateToken);

describe("", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("test", async () => {
    expect(1).toBe(1);
  });
});
