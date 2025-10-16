import PersonaModel from "../models/personal.js"

export const getDataPersonal = async (req, res) => {
  try {
    const personal = await PersonaModel.find()
    res.status(200).json(personal)
  } catch(error) {
    console.error("Error at Get Data Personal", error)
    res.status(500).json({
      message: `Internal Server Error`
    })
  }
}
export const updateDataPersonal = async (req, res) => {
  try {
    const { description, email, phoneNumber } = req?.body
    const updateNote = new PersonaModel({ description, email, phoneNumber })

    await updateNote.save()
    res.send(200).json({
      status: 200,
      message: "Success"
    })
  } catch(error) {
      console.error("Error at Update Data Personal", error)
      res.status(500).json({
        message: `Internal Server Error`
      })
  }
}