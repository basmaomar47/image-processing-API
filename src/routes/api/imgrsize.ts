import express from 'express';
import path from 'path';
import { pathExists } from 'fs-extra';
import resize from '.././api/resize';

const imgrsiz = express.Router();

imgrsiz.get('/', (req: express.Request, res: express.Response) => {
  const h = req.query.height as string;
  const w = req.query.width as string;
  const imgName = req.query.Iname as string;

  const assetImg = path.resolve('./') + `/assets/${imgName}.jpg`;
  const newImg = path.resolve('./') + `/resized/${imgName}_${h}_${w}.png`;

  (async function fun() {
    try {
      if (!isFinite(parseInt(w)) || !isFinite(parseInt(h))) {
        return res.status(400).send('the width or the height is not a number');
      }
      const widthh = parseInt(w),
        heightt = parseInt(h);

      if (await pathExists(newImg)) {
        return res.status(200).sendFile(newImg);
      } else {
        await resize(assetImg, heightt, widthh, newImg);

        return res.status(200).sendFile(newImg);
      }
    } catch {
      return res.status(404).send('image doesnt exist');
    }
  })();
});
export default imgrsiz;
