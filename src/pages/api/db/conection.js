import conection from '@/db/conection'

export default async function GET(req, res) {
  try {
    const query = `select * from projects pj
    inner join projects_images pm on pm.id = pj.img_id`
    const result = await conection.query(query, [])
    res.status(200).json(result.rows)
  } catch (error) {
    console.log(error)
  }
}
