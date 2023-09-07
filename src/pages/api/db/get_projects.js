import conection from '@/db/conection'

export default async function GET(req, res) {
  try {
    const query = 
    `select pro.*, p_img.data, p_img.alt from projects pro
    inner join projects_images p_img on p_img.id = pro.img_id`
    const result = await conection.query(query, [])
    res.status(200).json(result.rows)
  } catch (error) {
    console.log(error)
  }
}
