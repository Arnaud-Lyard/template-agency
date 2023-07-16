import { Request, Response } from "express";
import { sendMail } from "../sendMail";

const mailController = {
  mail: async (req: Request, res: Response) => {
    const { name, email, phone, subject, message, contact_number } = req.body;
    if (
      !name ||
      !email ||
      !phone ||
      !subject ||
      !message
    ) {
      return res.status(422).send("All fields are required !");
    }
    if(contact_number.length > 0){
      return res.status(500).send('Error server')
    }
    const data = { name, email, phone, subject, message };
    try {
      sendMail(data);
      return res.status(200).json("success");
    } catch (error) {
      console.error(error);
    }
  },
};

export default mailController;
