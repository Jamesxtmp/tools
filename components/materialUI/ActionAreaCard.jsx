import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Image from 'next/image';
import imgPrevDefault from "../../public/asustado.jpg"


export default function ActionAreaCard({ 
  cardName = 'Title',
  infoData = 'Informacion de ejemplo y Caracteristicas',
  imgComponent = imgPrevDefault 
  }) {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <div className='imageContain'>
            <Image
              className='imageCard'
              src={imgComponent}
              alt='forest'
              width={350}
            ></Image>
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {cardName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {infoData}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <style jsx>{`
        .imageContain{
          display: flex;
          align-items: center;
          justify-content: center;
          height: 140px;
          overflow: hidden;
        }
        .imageCard
      `}</style>
    </div>
  );
}