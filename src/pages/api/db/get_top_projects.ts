import conection from '../../../conection/conection'

export default async function GET(req, res) {
  try {
    const query = `select * from projects limit 3`
    const result = await conection.query(query, [])
    res.status(200).json(result.rows)
  } catch (error) {
    console.log(error)
  }
}
