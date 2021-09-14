export const filter = (minDate, maxDate) => ({
    // bodyRegex: '(.*)Priorbank(.*)',
    // bodyRegex: '(.*)MYASNA(.*)',
    ...(minDate ? { minDate } : {}),
    ...(maxDate ? { maxDate } : {}),
    address: 'Priorbank',
    box: 'inbox',
});

export const convertValuesForDisplayAndSort = values =>
  values.length
    ? values
        .map(value => [value[0].replace(/[.]$/, ''), Math.round(value[1])])
        .sort((a, b) => b[1] - a[1])
    : [];
  
export const convertLocationNames = name => {
    if (name && name.toUpperCase().includes('VEST')) {
       return 'VESTA'
   }
    if (name && name.toUpperCase().includes('AZS')) {
       return 'BENZIN'
   }
    if (name && name.toUpperCase().includes('EVROOPT')) {
       return 'EVROOPT'
   }
    if (name && name.toUpperCase().includes('MATERIK')) {
       return 'MATERIK'
   }
    if (name && name.toUpperCase().includes('KORONA')) {
       return 'KORONA'
   }
    if (name && name.toUpperCase().includes('VITALUR')) {
       return 'VITALUR'
   }
    if (name && (name.toUpperCase().includes('MEGAHEND') || name.toUpperCase().includes('MEGAKHEND'))) {
       return 'HUGO BOSS'
   }
    if (name && name.toUpperCase().includes('ONLAJN-GIP')) {
       return '21VEK'
   }
    if (name && name.toUpperCase().includes('APTEKA')) {
       return 'APTEKA'
   }
    if (name && name.toUpperCase().includes('GREEN')) {
       return 'GREEN'
   }
    if (name && name.toUpperCase().includes('SHOP N ')) {
       return 'VITEBSK_PRODUKTY'
   }
    if (name && name.toUpperCase().includes('GIPPO')) {
       return 'GIPPO'
   }
    if (name && name.toUpperCase().includes('ZOO')) {
       return 'ZOO'
   }
    return name
}
  