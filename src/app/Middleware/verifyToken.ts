import { Response, Request } from "express";
import jwt from "jsonwebtoken";

const verifyToken = (req: Request, res: Response, next: () => void) => {
  let authHeader = req.headers.authorization;

  if (!authHeader) {
    req.body.user = null;
    next();
  } else {
    let token = authHeader.split(" ")[1];

    jwt.verify(
      token,
      process.env.JWT_TOKEN_SECRET || "",
      function (err, decode: any) {
        if (err) {
          return res.sendStatus(403);
        }
        req.body.user = decode;
        next();
      }
    );
  }
};
export default verifyToken;
