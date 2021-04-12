export default function handler(req, res) {

  res.status(200).json({ message: 'Hello ' + (req.query ? req.query.name : '') });
}