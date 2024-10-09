import { z } from "zod";

export declare const spanBrand: unique symbol;
type SpanBrand = typeof spanBrand;
export const zSpan = z
  .object({
    min: z.number().finite(),
    max: z.number().finite(),
  })
  .readonly()
  .refine((x) => x.min < x.max, "min < max")
  .brand<SpanBrand>();
type Span = z.infer<typeof zSpan>;

export const range = (span: Span) => span.max - span.min;
