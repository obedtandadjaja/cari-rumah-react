const tierLabelMapping = {
  1000: 'k',
  1000000: ' jt',
  1000000000: ' M',
}

function extractTierFromInt(integer) {
  let tier = 1;
  while(integer / 1000 >= 1) {
    tier *= 1000;
    integer /= 1000;
  }

  return [integer, tier]
}

export function convertToPrice(priceInt) {
  const [extractedPriceInt, tier] = extractTierFromInt(priceInt)

  return `Rp. ${extractedPriceInt.toLocaleString('id-ID')}${tierLabelMapping[tier]}`
}

// only one decimal point
export function convertToPriceShort(priceInt) {
  let [extractedPriceInt, tier] = extractTierFromInt(priceInt)
  extractedPriceInt -= extractedPriceInt % 0.1

  return `Rp. ${extractedPriceInt.toLocaleString('id-ID')}${tierLabelMapping[tier]}`
}

// no decimal points
export function convertToPriceSimple(priceInt) {
  let [extractedPriceInt, tier] = extractTierFromInt(priceInt)
  extractedPriceInt -= extractedPriceInt % 1

  return `Rp. ${extractedPriceInt.toLocaleString('id-ID')}${tierLabelMapping[tier]}`
}
