import {buildNPKFertilizer, normalizeFertilizer} from "./fertilizer";


test("Build NPK Fertilizer", () => {
  const res = buildNPKFertilizer(
    "Valagro 3:11:38",
    {
      N: 3, P: 11, K: 38, Ca: 0, Mg: 4,
    })
  expect(res).toEqual({
    "composition": [
      {
        "formula": "N",
        "percent": 3
      },
      {
        "formula": "P2O5",
        "percent": 11
      },
      {
        "formula": "K2O",
        "percent": 38
      },
      {
        "formula": "MgO",
        "percent": 4
      }
    ],
    "id": "Valagro 3:11:38"
  })

})

describe("normalizeFertilizer", () => {
  test("convert FertilizerInfo to element Fertilizer", () => {
    const res = normalizeFertilizer(buildNPKFertilizer(
      "Valagro 3:11:38",
      {
        N: 3, P: 11, K: 38, Ca: 0, Mg: 4,
      }))
    expect(res).toEqual({
        elements: {
          "Ca": 0,
          "K": 31.54,
          "Mg": 2.4,
          "N": 3,
          "P": 4.84,
        },
        "id": "Valagro 3:11:38",
      }
    )
  })


  test('Fertilizer formula to raw NPK', () => {
    const result = normalizeFertilizer({
      id: "Нитрат калия",
      composition: [
        {formula: "KNO3"}
      ]
    }, true)
    expect(result).toMatchObject({
      elements: {
        K: 39,
        N: 14
      }
    })
  })

  test('Fertilizer complex formula to raw NPK', () => {
    const result = normalizeFertilizer({
      id: "Нитрат калия",
      composition: [
        {formula: "KNO3", percent: 35},
        {formula: "KNO3", percent: 100 - 35}
      ]
    }, true)
    expect(result).toMatchObject({
      elements: {
        K: 39,
        N: 14
      }
    })
  })


  test('Fertilizer formula to oxide NPK', () => {
    const result = normalizeFertilizer({
      id: "Нитрат калия",
      composition: [
        {formula: "KNO3"}
      ]
    }, false)
    expect(result).toMatchObject({
      elements: {
        K: 47,
        N: 14
      }
    })
  })
})
