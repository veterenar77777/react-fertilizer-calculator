import {calculateMassParts, parseMolecule, parseNitrates} from "./chem";
import {AtomNameType} from "./constants";

describe("parseMolecule", () => {
  test('H2O', () => {
    const result = parseMolecule("H2O")
    expect(result).toEqual({H: 2, O: 1})
  })
  test('Ca(NO3)2', () => {
    const result = parseMolecule("Ca(NO3)2")
    expect(result).toEqual({Ca: 1, N: 2, O: 6})
  })
  test('Ca(NO3)2 * 4H2O', () => {
    const result = parseMolecule("Ca(NO3)2 * 4H2O")
    expect(result).toEqual({Ca: 1, N: 2, O: 10, H: 8})
  })
  test('K2SO4*MgSO4', () => {
    const result = parseMolecule("K2SO4*MgSO4")
    expect(result).toEqual({K: 2, Mg: 1, O: 8, S: 2})
  })
})

describe("calculateMassParts", () => {
  test('CaO', () => {
    const result = calculateMassParts({Ca: 1, O: 1,})
    expect(result).toEqual({Ca: 0.71, O: 0.29})
  })
  test('Ca(NO3)2 * 4H2O', () => {
    const result = calculateMassParts({Ca: 1, N: 2, O: 10, H: 8})
    expect(result).toEqual({Ca: 0.17, N: 0.12, O: 0.68, H: 0.03})
  })
  test('Check mass parts', () => {
    const formulas = {
      P2O5: [0.44, 'P'],
      K2O: [0.83, 'K'],
      CaO: [0.71, 'Ca'],
      MgO: [0.60, 'Mg'],
      SO3: [0.4, 'S'],
      SO4: [0.33, 'S'],
      NO3: [0.23, 'N'],
    }
    for (let [f, [mass, atom]] of Object.entries(formulas)) {
      const result = calculateMassParts(parseMolecule(f))
      expect(result[atom as AtomNameType]).toEqual(mass)

    }
  })
  // test('(NH4)2SO4 + (NH4)2HPO4 + K2SO4', ()=> {
  //   const result = calculateMassParts(parseMolecule('(NH4)2SO4 + (NH4)2HPO4 + K2SO4'))
  //   expect(result).toEqual({Ca: 0.17, N: 0.119, O: 0.678, H: 0.034})
  // })
})

describe("Parse nitrates", () => {
  test("NH4NO3", () => {
    const res = parseNitrates('NH4NO3')
    expect(res).toEqual({NH4: 1, NO3: 1})
  })
  test("Ca(NO3)2 * 4H2O",() => {
    const res = parseNitrates('Ca(NO3)2 * 4H2O')
    expect(res).toEqual({NH4: 0, NO3: 2})
  })
  test("(NH4)2SO4 + (NH4)2HPO4 + K2SO4",() => {
    const res = parseNitrates('(NH4)2SO4 + (NH4)2HPO4 + K2SO4')
    expect(res).toEqual({NH4: 4, NO3: 0})
  })
})
