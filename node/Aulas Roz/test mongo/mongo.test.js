const { MongoClient } = require('mongodb');
const User = require('../../models/User');

jest.spyOn(MongoClient, 'connect');

const getDbMock = (result) => ({
  db: () => ({
    collection: () => ({
      insertOne: jest.fn().mockResolvedValue({ ops: [result] }),
      find: () => ({
        toArray: jest.fn().mockResolvedValue([result]),
      }),
    }),
  }),
});

const nickname = 'Nick';
const result = { _id: 'qdwqdqw', nickname };

// connectionMock.db = () => connectionMock;
// connectionMock.collection = () => connectionMock;
// connectionMock.find = () => connectionMock;
// connectionMock.insertOne = jest.fn().mockResolvedValue({ ops: [result] });
// connectionMock.toArray = jest.fn().mockResolvedValue(result);

// mockResolvedValue  // retorna promise
// mockReturnValue  // retorna o valor em si

describe('Model User', () => {
  test('findAll', async () => {
    // Arange
    const bdMock = getDbMock(result);
    MongoClient.connect.mockResolvedValueOnce(bdMock);

    // console.log(bdMock.db().collection().insertOne());
    // console.log(bdMock.db().collection().find().toArray());

    // Act
    const expectResult = await User.getAll();

    // Assert
    expect(expectResult).toStrictEqual([result]);
  });

  test('insert', async () => {
    // Arange
    const bdMock = getDbMock(result);
    MongoClient.connect.mockResolvedValueOnce(bdMock);

    // Act
    const expectResult = await User.add({ nickname });

    // Assert
    expect(expectResult).toStrictEqual({ ops: [result] });
  });
});
