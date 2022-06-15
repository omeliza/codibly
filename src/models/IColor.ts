export interface IData {
  id: number,
  name: string,
  year: number,
  color: string,
  pantone_color: string
}

export interface IColor {
  page: number,
  per_page: number,
  total: number,
  total_page: number,
  data: Array<IData>,
  support: {
    url: string,
    text: string
  }
}