import { z } from "zod";

export declare const intBrand: unique symbol;
type IntBrand = typeof intBrand;
export const zInt = z.number().int().brand<IntBrand>();
type Int = z.infer<typeof zInt>;

export const succ = (x: Int) => x + 1;
