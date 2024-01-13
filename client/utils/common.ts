export const formatPrice = (val: number) =>
    val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
