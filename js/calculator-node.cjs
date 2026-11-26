"use strict";
const HOURS={hours:1,days:24,weeks:168},MINUTES={minutes:1,hours:60,days:480};
function calculateTax({postponements,delay,delayUnit,remaining,remainingUnit}) {
 const n=Number(postponements),d=Number(delay),w=Number(remaining);
 if(![n,d,w].every(Number.isFinite)||n<0||d<=0||w<=0) throw new RangeError("Invalid values");
 if(!HOURS[delayUnit]||!MINUTES[remainingUnit]) throw new RangeError("Invalid time unit");
 return {lostHours:n*d*HOURS[delayUnit],remainingMinutes:w*MINUTES[remainingUnit]};
}
function formatDuration(h){if(h<1)return Math.max(1,Math.round(h*60))+" min";if(h<24)return +h.toFixed(1)+" hours";const days=h/24;if(days<14)return +days.toFixed(1)+" days";const weeks=days/7;if(weeks<8)return +weeks.toFixed(1)+" weeks";const months=days/30.4375;if(months<24)return +months.toFixed(1)+" months";return +(days/365.25).toFixed(1)+" years"}
function formatWork(m){if(m<60)return Math.round(m)+" min";const h=m/60;return h<8?+h.toFixed(1)+" hours":+(h/8).toFixed(1)+" workdays"}
module.exports={calculateTax,formatDuration,formatWork};