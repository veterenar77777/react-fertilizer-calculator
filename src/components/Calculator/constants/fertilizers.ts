import {buildNPKFertilizer} from "@/calculator/fertilizer";
import {FertilizerInfo} from "@/calculator/types";


export const defaultFertilizers: FertilizerInfo[] = [
  buildNPKFertilizer(
    "Valagro 3:11:38",
    {
      NO3: 3, P: 11, K: 38, Ca: 0, Mg: 4,
    }),
  buildNPKFertilizer("Кальциевая селитра",
    {
      NO3: 16, Ca: 24,
    }),
  buildNPKFertilizer("Сульфат магния", {Mg: 16, S: 16}),
  buildNPKFertilizer("Сульфат калия", {K: 50, S: 18}),
  buildNPKFertilizer("Нитрат калия", {NO3: 14, K: 46}),
  buildNPKFertilizer("Монофосфат калия", {P: 50, K: 33}),
  // {id: "Сульфат калия", composition: [{formula: "K2SO4", percent: 98}]},
  // {id: "Сульфат магния", composition: [{formula: "MgSO4", percent: 98}]},
  {id: "Нитрат аммония", composition: [{formula: "NH4NO3", percent: 98}]},
]
