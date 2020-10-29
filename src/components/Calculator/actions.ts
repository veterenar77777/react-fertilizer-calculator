import * as ActionNames from "./constants";
import {CalculateResult} from "@/calculator";
import {CalculatorFormValues, Recipe} from "@/components/Calculator/types";
import {FertilizerInfo} from "@/calculator/types";

export const storeCalculateForm = (form: CalculatorFormValues) => ({
  type: ActionNames.STORE_CALCULATE_FORM,
  form,
} as const)

export const calculateStart = () => ({
  type: ActionNames.CALCULATE_START,
} as const)

export const calculateSuccess = (result: CalculateResult) => ({
  type: ActionNames.CALCULATE_SUCCESS,
  result
} as const)

export const calculateError = () => ({
  type: ActionNames.CALCULATE_ERROR,
} as const)

export const fertilizerPush = (payload: FertilizerInfo) => ({
  type: ActionNames.FERTILIZERS_PUSH,
  payload
})

export const fertilizerRemove = (payload: FertilizerInfo) => ({
  type: ActionNames.FERTILIZERS_REMOVE,
  payload
})

export const fertilizerSet = (payload: FertilizerInfo[]) => ({
  type: ActionNames.FERTILIZERS_SET,
  payload,
})

export const fertilizerReset = () => ({
  type: ActionNames.FERTILIZERS_RESET,
})


export const recipePush = (payload: Recipe) => ({
  type: ActionNames.RECIPE_PUSH,
  payload
})

export const recipeRemove = (payload: Recipe) => ({
  type: ActionNames.RECIPE_REMOVE,
  payload
})

export const recipeReset = () => ({
  type: ActionNames.RECIPE_RESET,
})


