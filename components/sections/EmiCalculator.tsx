"use client";

import { useId, useMemo, useState } from "react";

import { labels } from "@/content/copy";
import { formatPrice } from "@/lib/format";

function monthlyEmi(principal: number, annualRate: number, years: number) {
  const r = annualRate / 12 / 100;
  const n = years * 12;
  if (r === 0) return principal / n;
  const factor = Math.pow(1 + r, n);
  return (principal * r * factor) / (factor - 1);
}

const rangeClass =
  "mt-4 h-11 w-full accent-brass";
const legendClass =
  "flex flex-wrap items-baseline justify-between gap-2 text-xs tracking-label text-muted-foreground uppercase";

export function EmiCalculator({ defaultPrice }: { defaultPrice: number }) {
  const id = useId();
  const [loan, setLoan] = useState(Math.round(defaultPrice * 0.8));
  const [rate, setRate] = useState(8.5);
  const [years, setYears] = useState(20);

  const { emi, totalPayable, totalInterest } = useMemo(() => {
    const emiValue = monthlyEmi(loan, rate, years);
    const payable = emiValue * years * 12;
    return {
      emi: emiValue,
      totalPayable: payable,
      totalInterest: payable - loan,
    };
  }, [loan, rate, years]);

  const inr = new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  });

  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
      <div>
        <div>
          <div className={legendClass}>
            <label htmlFor={`${id}-loan`}>{labels.emiLoan}</label>
            <span className="text-foreground">{formatPrice(loan)}</span>
          </div>
          <input
            id={`${id}-loan`}
            type="range"
            min={500_000}
            max={Math.max(30_000_000, defaultPrice)}
            step={100_000}
            value={loan}
            onChange={(event) => setLoan(Number(event.target.value))}
            className={rangeClass}
          />
        </div>

        <div className="mt-8">
          <div className={legendClass}>
            <label htmlFor={`${id}-rate`}>{labels.emiRate}</label>
            <span className="text-foreground">{rate.toFixed(2)}%</span>
          </div>
          <input
            id={`${id}-rate`}
            type="range"
            min={6}
            max={12}
            step={0.05}
            value={rate}
            onChange={(event) => setRate(Number(event.target.value))}
            className={rangeClass}
          />
        </div>

        <div className="mt-8">
          <div className={legendClass}>
            <label htmlFor={`${id}-years`}>{labels.emiTenure}</label>
            <span className="text-foreground">
              {years} {labels.emiYears}
            </span>
          </div>
          <input
            id={`${id}-years`}
            type="range"
            min={5}
            max={30}
            step={1}
            value={years}
            onChange={(event) => setYears(Number(event.target.value))}
            className={rangeClass}
          />
        </div>
      </div>

      <dl className="self-start border-t border-border">
        <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-border py-6">
          <dt className="text-xs tracking-label text-muted-foreground uppercase">
            {labels.emiMonthly}
          </dt>
          <dd aria-live="polite" className="font-display text-3xl">
            ₹{inr.format(Math.round(emi))}
          </dd>
        </div>
        <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-border py-5">
          <dt className="text-xs tracking-label text-muted-foreground uppercase">
            {labels.emiPrincipal}
          </dt>
          <dd>₹{inr.format(loan)}</dd>
        </div>
        <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-border py-5">
          <dt className="text-xs tracking-label text-muted-foreground uppercase">
            {labels.emiInterest}
          </dt>
          <dd>₹{inr.format(Math.round(totalInterest))}</dd>
        </div>
        <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-border py-5">
          <dt className="text-xs tracking-label text-muted-foreground uppercase">
            {labels.emiPayable}
          </dt>
          <dd>₹{inr.format(Math.round(totalPayable))}</dd>
        </div>
      </dl>
    </div>
  );
}
