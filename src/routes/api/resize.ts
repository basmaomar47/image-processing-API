import sharp from 'sharp';

const resize = async (
  assetImg: string,
  heightt: number | null,
  widthh: number | null,
  newImg: string
) => {
  if (assetImg == null || heightt == null || widthh == null) {
    return 'parameter is missing';
  }
  await sharp(assetImg)
    .png()
    .resize({ height: heightt, width: widthh })
    .toFile(newImg);
};
export default resize;
