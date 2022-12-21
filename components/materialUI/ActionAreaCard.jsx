import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Image from 'next/image';
import imgPrevDefault from "../../public/asustado.jpg"
import Link from 'next/link';


export default function ActionAreaCard({ 
  cardName = 'Title',
  cardHref = '/matrices',
  infoData = 'Informacion de ejemplo y Caracteristicas',
  imgComponent = imgPrevDefault 
  }) {
  return (
    <div>
      <Card sx={{ maxWidth: 345, mt: 2 }}>
        <CardActionArea>
          <Link href={`/tools${cardHref}`}>
            <div className='imageContain'>
              <Image
                className='imageCard'
                src={imgComponent}
                alt='forest'
                width={345}
              ></Image>
            </div>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {cardName}
              </Typography>
              <Typography variant="p" color="text.secondary">
                {infoData}
              </Typography>
            </CardContent>
          </Link>
        </CardActionArea>
      </Card>
      <style jsx>{`
        .imageContain{
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100px;
          overflow: hidden;
        }
        .imageCard
      `}</style>
    </div>
  );
}